import React from 'react';
import Header from './Header';
import Main from './Main';
import { getInitialData } from '../utils/index';
class MyNoteApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
        }
        //bind handler
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    //search Notes
    onSearchHandler(query) {
        this.setState((prevState) => {
            return { search: query }
        });
        //console.log(query);
    }
    //delete note
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    //set archived note 
    onArchivedHandler(id) {
        const index = this.state.notes.findIndex((note) => note.id === id);
        const selectedNote = this.state.notes.splice(index, 1);
        const statusNote = !selectedNote[0].archived;
        const newNote = {
            ...selectedNote[0],
            archived: statusNote,
        };
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    newNote
                ]
            }
        });
    }

    //create 
    onSubmitHandler(newNote) {
        //console.log("working submit");
        this.setState((prevState) => {
            return {
                notes: [
                    newNote,
                    ...prevState.notes,
                ]
            }
        });

    }


    render() {
        // filter if has state search or return default initialData
        const filteredNotes = !this.state.search ? this.state.notes : this.state.notes.filter(note => note.title.toLowerCase().match(this.state.search));
        return (
            <React.Fragment>
                <Header onSearch={this.onSearchHandler} />
                <Main
                    notes={filteredNotes}
                    onDelete={this.onDeleteHandler}
                    onArchived={this.onArchivedHandler}
                    onSubmitNote={this.onSubmitHandler} />
            </React.Fragment>

        );
    }
}
export default MyNoteApp;
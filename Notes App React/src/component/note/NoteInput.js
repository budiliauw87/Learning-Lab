import React, { useState } from 'react'

const NoteInput = ({ onSubmitNote }) => {
    const [note, setNote] = useState({ title: '', body: '' });
    const [maximumChar, setMaximumChar] = useState(50)

    const textListener = (event) => {
        let { name, value, maxLength } = event.target;
        setNote((prevState) => ({ ...prevState, [name]: value }));

        //set maxChar when title input onchange
        if (name === 'title') {
            const charLength = maxLength - value.length
            console.log(charLength);
            setMaximumChar(Number(charLength));
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newNote = {
            id: +new Date(),
            title: note.title,
            body: note.body,
            createdAt: +new Date(),
            archived: false,
        }
        onSubmitNote(newNote);
        //reset form
        setNote((prevState) => ({ title: '', body: '' }));
        //reset MaxChar
        setMaximumChar(50);
    }

    return (
        <div className="note-input">
            <form onSubmit={handleFormSubmit}>
                <p className="title_limit_char">Sisa karakter: {maximumChar}</p>
                <input type="text"
                    placeholder="Title"
                    name="title"
                    value={note.title}
                    required=""
                    onChange={textListener}
                    maxLength="50" />
                <textarea type="text"
                    placeholder="text note"
                    name="body"
                    required=""
                    value={note.body}
                    onChange={textListener} />
                <button type="submit">Tambah</button>
            </form>
        </div>

    );
}

export default NoteInput;
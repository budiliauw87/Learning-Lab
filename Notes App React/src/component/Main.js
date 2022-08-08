import React from 'react';
import NoteItem from './note/NoteItem';
import NoteInput from './note/NoteInput';
import Footer from './Footer';
const Main = ({ notes, onDelete, onArchived, onSubmitNote }) => {
  let noteList;
  let noteListArchive;

  const notesData = notes.filter(note => note.archived !== true);
  const archivesData = notes.filter(note => note.archived === true);

  if (notesData.length > 0) {
    noteList = <section className="note-list">
      {
        notesData.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchived}
            {...note} />
        ))
      }
    </section>;
  } else {
    noteList = <p className="empty_list_message"> Empty Notes</p>
  }

  if (archivesData.length > 0) {
    noteListArchive = <section className="note-list mb-3">
      {
        archivesData.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchived}
            {...note} />
        ))
      }
    </section>;
  } else {
    noteListArchive = <p className="empty_list_message"> Empty Archives </p>
  }
  return (
    <article>
      <main>
        <h2 className="title_create"><i className="fa fa-pencil"></i> Create New Note</h2>
        <NoteInput onSubmitNote={onSubmitNote} />
        <h2><i className="fa fa-sticky-note"></i> Active Notes</h2>
        {noteList}
        <h2><i className="fa fa-archive"></i> Archive Notes</h2>
        {noteListArchive}
      </main>
      <Footer />
    </article>

  );
}

export default Main;
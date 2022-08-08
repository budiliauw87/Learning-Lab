import React from 'react';
import NoteItemBody from './NoteItemBody';
import NoteItemButton from './NoteItemButton';
const NoteItem = ({ id, title, body, createdAt, onDelete, onArchive, archived }) => {
    const textStatusButton = !archived ? 'Archive' : 'Active';
    return (
        <div className="card-note">
            <NoteItemBody title={title}
                body={body}
                createdAt={createdAt} />
            <NoteItemButton id={id}
                onDelete={onDelete}
                onArchive={onArchive}
                textArchive={textStatusButton} />
        </div>
    );
}

export default NoteItem;
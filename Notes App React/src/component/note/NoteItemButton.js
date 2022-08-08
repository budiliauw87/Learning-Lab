import React from 'react';
const NoteItemButton = ({ id, onDelete, onArchive, textArchive }) => {
    return (
        <div className="card-action">
            <button className="delete-button"
                onClick={() => onDelete(id)}>
                <i className="fa fa-trash"></i> Delete
            </button>
            <button className="archive-button"
                onClick={() => onArchive(id)}>
                <i className="fa fa-archive"></i> 
                {textArchive}
            </button>
        </div>
    );
}

export default NoteItemButton;
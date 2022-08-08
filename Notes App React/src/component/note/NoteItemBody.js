import React from 'react';
import { showFormattedDate } from '../../utils/index';
const NoteItemBody = ({ title, body, createdAt }) => {
    return (
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-date">
                <i className="fa fa-clock-o"></i> {showFormattedDate(createdAt)}
            </p>
            <p className="card-body">{body}</p>
        </div>
    );
}

export default NoteItemBody;
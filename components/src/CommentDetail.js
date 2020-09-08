import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.imgAvatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                    </a>
                <div className="metadeta">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.textContent}</div>
            </div>
        </div>
    );
};

export default CommentDetail;
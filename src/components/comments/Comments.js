import React, { useEffect, useState } from 'react';
import "./_comments.scss";
import Comment from '../comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action';
import { v4 as uuidv4 } from 'uuid';

const Comments = ({ videoId, totalComments }) => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId));
    }, [dispatch, videoId]);

    const comments = useSelector(state => state.commentList.comments);

    const _comments = comments?.map(comment => comment.snippet.topLevelComment.snippet);

    const handleComment = (e) => {
        e.preventDefault();
        if (text.length < 0) return;
        dispatch(addComment(videoId, text));
        //set text to empty for new comment
        setText('');
    }
    return (
        <div className="comments">
            <p>{totalComments} Comments</p>
            <div className="comments__form w-100 my-2">
                <div className="d-flex">
                    <img src="https://imgs.search.brave.com/Zw9av1oesrF4TuTm0hGVhIzATd4kIeUALOcui5OSlAA/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24vY29v/bC1hdmF0YXItaWNv/bnMtNjEucG5n" alt="" className="rounded-circle mx-3" />
                    <form onSubmit={handleComment} className="d-flex flex-grow-1">
                        <input type="text" value={text} onChange={e => setText(e.target.value)} className="flex-grow-1" placeholder="Write a comment..." />
                        <button className="border-0 p-2">
                            Comment
                        </button>
                    </form>
                </div>
                <div className="comments__list">
                    {
                        _comments?.map((comment) => {
                            return <Comment comment={comment} key={uuidv4()} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Comments
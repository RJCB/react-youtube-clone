import React from 'react';
import "./_comments.scss";
import Comment from '../comment/Comment';

const Comments = () => {
    const handleComment = () => {
        console.log("commment");
    }
    return (
        <div className="comments">
            <p>123 comments</p>
            <div className="comments__form w-100 my-2">
                <img src="https://imgs.search.brave.com/Zw9av1oesrF4TuTm0hGVhIzATd4kIeUALOcui5OSlAA/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24vY29v/bC1hdmF0YXItaWNv/bnMtNjEucG5n" alt="" className="rounded-circle mr-3" />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input type="text" className="flex-grow-1" placeholder="Write a comment..." />
                    <button className="border-0 p-2">
                        Comment
                    </button>
                </form>
                <div className="comments__list">
                    {
                        [...Array(15)].map(() => {
                            return <Comment />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Comments
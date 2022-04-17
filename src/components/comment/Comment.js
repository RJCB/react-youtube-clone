import React from 'react';
import moment from "moment";
import "./_comment.scss";

const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img src="https://imgs.search.brave.com/Zw9av1oesrF4TuTm0hGVhIzATd4kIeUALOcui5OSlAA/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24vY29v/bC1hdmF0YXItaWNv/bnMtNjEucG5n" alt="" className="rounded-circle mr-3" />
            <div className="comment__body">
                <p className="mb-1 comment__header">
                    renek • {moment('2022-05-05').fromNow()}
                </p>
                <p className="mb-0">Nice video!</p>
            </div>
        </div>
    )
}

export default Comment
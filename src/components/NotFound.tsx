import React from "react";
import { Link } from "react-router-dom";

const NotFound = (): JSX.Element => {
    return (
        <div className='NotFound'>
            <h2>404 NotFound</h2>
            <Link className='link-note-found' to={'/'}>Вернуться к домашней странице</Link>
        </div>
    )
}

export default NotFound
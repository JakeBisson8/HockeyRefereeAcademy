import React from 'react'

import {
    Link
} from "react-router-dom";

export default function LargeButton(props) {
    const { buttonText, link } = props;
    return (
        <div>
            <Link to={link} className="btn btn-lg btn-danger w-100 py-3 my-2">{buttonText}</Link>
        </div>
    )
}

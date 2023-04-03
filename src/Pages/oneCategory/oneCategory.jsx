import React from 'react'
import { useSelector } from 'react-redux';

function OneCategory() {
    const urlName = useSelector(state => state.urlName);

    return (
        <div>
            hello
        </div>
    )
}

export default OneCategory

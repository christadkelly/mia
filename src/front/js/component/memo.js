import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from "react-router-dom";

export const Memo = (props) => {
    const {store, actions} = useContext(Context);
    const nagivate = useNavigate();
    const memo = props.memo;

    return(
        <div className='memo'>
            <h5>{memo.title}</h5>
            <p>{memo.memo_body}</p>
        </div>
    )
}
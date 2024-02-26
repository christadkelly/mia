import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from "react-router-dom";

export const Memo = (props) => {
    const {store, actions} = useContext(Context);
    const nagivate = useNavigate();
    const memo = props.memo;

    return(
        <div>
            <h6>{memo.title}</h6>
            <p>{memo.memo_body}</p>
        </div>
    )
}
import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from "react-router-dom";

export const Contact = (props) => {
    const {store, actions} = useContext(Context);
    const nagivate = useNavigate();
    const memo = props.memo;

    return(
        <div>hi</div>
    )
}
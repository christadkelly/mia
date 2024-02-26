import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const MemoList = () => {
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.fetchUserMemos()
    }, [])

    return(
        <div>
            hi
        </div>
    )
}
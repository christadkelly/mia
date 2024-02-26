import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Memo } from "../component/memo";

export const MemoList = () => {
    const { store, actions } = useContext(Context);

    useEffect(()=>{
        actions.fetchUserMemos()
    }, [])

    console.log(store.userMemos)

    return(
        <div>
            {store.userMemos && store.userMemos.length > 0 && store.userMemos.map((memo, key) => {
                return <Memo key={key} memo={memo}/>
            })}
        </div>
    )
}
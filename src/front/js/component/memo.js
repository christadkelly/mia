import React, { useState, useContext } from 'react'
import { Context } from '../store/appContext'
import { useNavigate } from "react-router-dom";

export const Memo = (props) => {
    const {store, actions} = useContext(Context);
    const nagivate = useNavigate();
    const memo = props.memo;

    const [editing, setEditing] = useState(false)
    const [selectedMemo, setSelectedMemo] = useState({id: memo.id, title: memo.title, body: memo.memo_body});

    const editMemo = () => {
        setEditing(true);
        console.log(selectedMemo)
    }

    return(
        <div className='memo' 
        // onMouseEnter={}
        // onMouseLeave={}
        >
            <div className='row'>
                <div className='col'>
                    { editing ? 
                    <input 
                        className='form-control'
                        type='text'
                        value={selectedMemo.title}
                        onChange={(e) => setSelectedMemo({...selectedMemo, title: e.target.value})}
                        ></input> : 
                    <h5>{memo.title}</h5>}
                </div>
                <div className='col d-flex justify-content-end'>
                    {editing ? 
                    <button className='btn' onClick={editMemo}>
                        <i className="fa-solid fa-floppy-disk"></i>
                    </button> :
                    <button className='btn' onClick={editMemo}>
                        <i className="fa-solid fa-pencil icon"></i>
                    </button>}
                    
                    {/* <i className="fa-solid fa-trash icon"></i> */}
                </div>
            </div>
            <p>{memo.memo_body}</p>
        </div>
    )
}
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
        console.log(selectedMemo)
        setEditing(true);
    }
    const saveMemo = async() => {
        console.log(selectedMemo)
        actions.editUserMemo(selectedMemo);
        setEditing(false);
    }

    return(
        <div className='memo' 
        // onMouseEnter={}
        // onMouseLeave={}
        >
            <div className='row'>
                <div className='col-7'>
                    { editing ? 
                    <input 
                        className='form-control'
                        type='text'
                        value={selectedMemo.title}
                        onChange={(e) => setSelectedMemo({...selectedMemo, title: e.target.value})}
                        ></input> : 
                    <h5>{memo.title}</h5>}
                </div>
                <div className='col-5 d-flex'>
                    {editing ? 
                    <button className='btn' onClick={saveMemo}>
                        <i className="fa-solid fa-floppy-disk"></i>
                    </button> :
                    <button className='btn' onClick={editMemo}>
                        <i className="fa-solid fa-pencil icon"></i>
                    </button>}
                    <button className='btn' onClick={() => actions.deleteUserMemo(memo.id)}>
                        <i className="fa-solid fa-trash icon"></i>
                    </button>
                </div>
            </div>
            {editing ?
            <textarea
                className="form-control mt-1"
                rows="4"
                type="text"
                placeholder="Add details to your memo"
                value={selectedMemo.body}
                onChange={(e) => setSelectedMemo({...selectedMemo, body: e.target.value})}>
            </textarea> :
            <p>{memo.memo_body}</p>}
        </div>
    )
}
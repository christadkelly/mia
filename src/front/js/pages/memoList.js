import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Memo } from "../component/memo";
import "../../styles/memos.css";

export const MemoList = () => {
    const { store, actions } = useContext(Context);
    const [memoInfo, setMemoInfo] = useState({title: '', body: ''});
    
    useEffect(()=>{
        actions.fetchUserMemos()
    }, [])

    const createMemo = async() => {
        actions.addUserMemo(memoInfo);
        setMemoInfo({title: '', body: ''})
    }
    // const [display, setDisplay] = useState('notdisplayed');
    // const showButton = e => {
    //     e.preventDefault();
    //     setDisplay('displayed')
    // };
    // const hideButton = e => {
    //     e.preventDefault();
    //     setDisplay('notdisplayed')
    // }

    return(
        <div className="container">
            <div className="d-flex flex-wrap justify-content-center">
                <div className="memo">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="New Memo Title"
                        value={memoInfo.title}
                        onChange={(e) => setMemoInfo({...memoInfo, title: e.target.value})}>
                    </input>
                    <textarea
                        className="form-control mt-1"
                        rows="4"
                        type="text"
                        placeholder="Add details to your memo"
                        value={memoInfo.body}
                        onChange={(e) => setMemoInfo({...memoInfo, body: e.target.value})}>
                    </textarea>
                    <div className="d-flex justify-content-center mt-1">
                        <button className="btn" onClick={createMemo}>Create Memo</button>
                    </div>
                </div>
                {store.userMemos && store.userMemos.length > 0 && store.userMemos.map((memo, key) => {
                    return <Memo key={key} memo={memo} />
                })}
            </div>
            <div className="d-flex justify-content-center mt-5">
                <i className="fa-solid fa-trash fa-6x icon"></i>
            </div>
        </div>
    )
}
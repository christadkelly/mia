import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Memo } from "../component/memo";
import "../../styles/memos.css";

export const MemoList = () => {
    const { store, actions } = useContext(Context);
    const [memoInfo, setMemoInfo] = useState({title: '', body: ''});

    const createMemo = async() => {
        console.log(memoInfo)
        actions.addUserMemo(memoInfo);
        setMemoInfo({title: '', body: ''})
    }

    useEffect(()=>{
        actions.fetchUserMemos()
    }, [])

    let newMemo = {title: "Add a new memo", body: undefined}

    console.log(store.userMemos)

    return(
        <div className="container">
            <div className="d-flex flex-wrap justify-content-center">
                {store.userMemos && store.userMemos.length > 0 && store.userMemos.map((memo, key) => {
                    return <Memo key={key} memo={memo}/>
                })}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-5">
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
                <div>
                    <i className="fa-solid fa-trash fa-6x icon"></i>
                </div>
            </div>
        </div>
    )
}
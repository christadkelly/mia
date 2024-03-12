import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Memo } from "../component/memo";
import { NoAccountWarning } from "../component/noAccountWarning";
import "../../styles/memos.css";

export const MemoList = () => {
    const { store, actions } = useContext(Context);
    const [memoInfo, setMemoInfo] = useState({title: '', body: ''});
    const loggedIn = store.loggedIn;
    
    useEffect(()=>{
        actions.fetchUserMemos()
    }, [])

    const createMemo = async() => {
        actions.addUserMemo(memoInfo);
        setMemoInfo({title: '', body: ''})
    }

    return(
        <div className="container-fluid">
            {loggedIn ? <></> : <NoAccountWarning />}
            <div className="d-flex flex-wrap justify-content-center mt-3">
                <div className="memo col-lg-3 col-md-4 col-sm-6 col-12 m-1 p-1">
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
                {store.userMemos && store.userMemos.length > 0 && store.userMemos.map((memo) => {
                    return <Memo key={memo.id} memo={memo} />
                })}
            </div>
            <div className="d-flex justify-content-center mt-5">
                <i className="fa-solid fa-trash fa-6x icon"></i>
            </div>
        </div>
    )
}
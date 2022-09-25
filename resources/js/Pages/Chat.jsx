import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Header from './Header';

import styles from '../../scss/chat.module.scss'

function Chat(props) {

    // ログイン中のアカウントID
    const userId = props.user.id

    const [datas,setData] = useState()
    const [text,setText] = useState()

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/chat")
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.log(error)
            });
    },[]);

    const ClickPost = () => {
        axios
            .post(`http://127.0.0.1:8000/api/chat/store/${userId}`,{
                text: text
            })
            .then((res) => {

            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div>
            <Header 
                info={{ 
                    id: props.user.id,
                    name: props.user.name,
                    email: props.user.email
                }} 
            />
            <div className={styles.PostChat}>
                <form>
                    <input type="text" value={text} onChange={handleChangeText} className={styles.InputText} />
                    <button onClick={ClickPost} className={styles.Button}>＋</button>
                </form>
            </div>
            <div className={styles.chat}>
                { datas?.map((data) => 
                    {
                        return (
                            <div>
                                { data.user_id === userId ? 
                                    <div className={styles.chatListTrue}>
                                        <div className={styles.chatItemTrue}>
                                            { data.text }
                                        </div> 
                                    </div>
                                    : 
                                    <div className={styles.right}>
                                        <div className={styles.chatListFalse}>
                                            <div className={styles.chatItemFalse}>
                                                { data.text }
                                            </div> 
                                        </div>
                                    </div>
                                }
                            </div>
                        )
                    }
                ) }
            </div>
        </div>
    )
}

export default Chat
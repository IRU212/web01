import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import Header from './Header';

function Chat(props) {

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
            .post("http://127.0.0.1:8000/api/chat/store/16",{
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
            <div>
                <form>
                    <input type="text" value={text} onChange={handleChangeText} />
                    <button onClick={ClickPost}>投稿</button>
                </form>
            </div>
            <div>
                { datas?.map((data) => 
                    <div>
                        { data.text }
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Chat
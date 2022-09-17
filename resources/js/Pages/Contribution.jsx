import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Header from './Header'

function Contribution(props) {

    const [title,setTitle] = useState()
    const [text,setText] = useState()
    const [image,setImage] = useState()

    const handleTitle = (e) => {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    const handleText = (e) => {
        console.log(e.target.value)
        setText(e.target.value)
    }

    const handleImage = (e) => {
        console.log(e.target.value)
        setImage(e.target.value)
    }

    const BtnFnc = () => {
        axios
            .post('http://127.0.0.1:8000/api/contribution',{
                title: title,
                text: text,
                image: image,
                user_id: props.user.id
            })
            .then((res) => {
                
            })
            .catch((res) => {
                console.log(res)
            })
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
                <img src={'/image/test01.jpg'} alt="" />
                <form>
                    <input type="text" name='title' placeholder='title' value={title} onChange={handleTitle} />
                    <input type="text" name='text' placeholder='text' value={text} onChange={handleText} />
                    <input type="text" name='image' placeholder='imageURL' value={image} onChange={handleImage} />
                    {/* <input type="file" name='image' value={image} onChange={handleImage} accept="image/*" /> */}
                    <button onClick={BtnFnc}>投稿</button>
                </form>
            </div>
        </div>
    )
}

export default Contribution
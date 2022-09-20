import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Header from './Header'

// import Image from '../../../storage/app/public/image/sample.jpg'

function Contribution(props) {

    const [title,setTitle] = useState()
    const [text,setText] = useState()
    const [image,setImage] = useState()

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleImage = (e) => {
        console.log(e.target.files[0].name)
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    }

    const BtnFnc = () => {
        const formData = new FormData();
        formData.append("image", image);
        axios
            .post('http://127.0.0.1:8000/api/contribution',{
                title: title,
                text: text,
                image: formData,
                user_id: props.user.id
            },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
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
                {/* <img src={Image} alt="" /> */}
                <form>
                    <input type="text" name='title' placeholder='title' value={title} onChange={handleTitle} />
                    <input type="text" name='text' placeholder='text' value={text} onChange={handleText} />
                    {/* <input type="text" name='image' placeholder='imageURL' value={image} onChange={handleImage} /> */}
                    <label htmlFor="image">画像:</label>
                    <input multiple type="file" name='image' onChange={handleImage} accept="image/*" />
                    <button onClick={BtnFnc}>投稿</button>
                </form>
            </div>
        </div>
    )
}

export default Contribution
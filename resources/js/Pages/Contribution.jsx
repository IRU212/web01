import axios from 'axios'
import React, { useRef, useState } from 'react'
import Header from './Header'

import Image from '../../../storage/app/public/image/sample.jpg'

function Contribution(props) {

    const [title,setTitle] = useState()
    const [image,setImage] = useState()
    const [text,setText] = useState()

    const userImg = useRef();

    const handleTitle = (e) => {
      setTitle(e.target.value)
    }

    const handleImage = (e) => {
      setImage(e.target.files[0])
      const imagePreview = e.target.files[0]
      userImg.current.title = imagePreview.name
      const reader = new FileReader()
      reader.onload = (event) => {
        userImg.current.setAttribute('src',event.target.result)
      }
      reader.readAsDataURL(imagePreview)
    }

    const handleText = (e) => {
      setText(e.target.value)
    }

    const handleSubmit = () => {

        const data = new FormData()
        data.append("title",title)
        data.append("image",image)
        data.append("text",text)
        data.append("user_id",props.user.id)

        axios
          .post("http://127.0.0.1:8000/api/contribution",data,{
          headers: {
            'content-type': 'multipart/form-data',
          }
        })
        .then(response => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err)
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
          <form>
            <img src={Image} alt="" />
            <p>ファイル送信</p>
            <input type="text" name='tite' onChange={handleTitle} />
            <input type="text" name='text' onChange={handleText} />
            <input accept="image/*" multiple type="file" name='image' onChange={handleImage} />
            <button onClick={handleSubmit}>送信</button>
          </form>
          <div>
            <img ref={userImg} />
            {/* <input type="file" onChange={onChange} /> */}
          </div>
      </div>
  )
}

export default Contribution
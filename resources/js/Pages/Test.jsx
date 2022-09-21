import axios from 'axios'
import React, { useState } from 'react'

function Test() {

    const [title,setTitle] = useState()
    const [image,setImage] = useState()
    const [text,setText] = useState()

    const handleTitle = (e) => {
      setTitle(e.target.value)
    }

    const handleImage = (e) => {
      setImage(e.target.files[0])
    }

    const handleText = (e) => {
      setText(e.target.value)
    }

    const handleSubmit = () => {

        const data = new FormData()
        data.append("title",title)
        data.append("image",image)
        data.append("text",text)
        data.append("user_id",1)

        axios
          .post("http://127.0.0.1:8000/api/test",data,{
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
          <form>
            <p>ファイル送信</p>
            <input type="text" name='tite' onChange={handleTitle} />
            <input type="text" name='text' onChange={handleText} />
            <input accept="image/*" multiple type="file" name='image' onChange={handleImage} />
            <button onClick={handleSubmit}>送信</button>
          </form>
      </div>
  )
}

export default Test
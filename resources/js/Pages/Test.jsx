import axios from 'axios'
import React, { useState } from 'react'

function Test() {

    const [title,setTitle] = useState()
    const [image,setImage] = useState()

    const handleSubmit = () => {

        const data = new FormData()
        data.append("title",title)
        data.append("image",image)

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
            <input type="text" placeholder="写真のタイトル" name='tite' onChange={event => setTitle(event.target.value)} />
            <input accept="image/*" multiple type="file" name='image' onChange={event => setImage(event.target.files[0])} />
            <button onClick={handleSubmit}>送信</button>
          </form>
      </div>
  )
}

export default Test
import axios from 'axios'
import React, { useRef, useState } from 'react'
import Header from './Header'

import styles from '../../scss/content.module.scss'

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

        window.location.href = 'home'
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
          <div className={styles.contribution}>
            <form className={styles.form}>
              <div className={styles.flex}>
                <div className={styles.labelBack}>
                  <label className={styles.labelImage} htmlFor="avatar-image">
                    <img src={'image/pic.jpg'} ref={userImg} className={styles.Img} alt="" />
                  </label>
                </div>
                <div className={styles.inputText}>
                  <input type="text" name='tite' placeholder='タイトル' onChange={handleTitle} className={styles.title} />
                  <textarea type="text" name='text' placeholder='紹介文' onChange={handleText} className={styles.text} />
                  <input accept="image/*" multiple type="file" name='image' className={styles.file} onChange={handleImage} id='avatar-image'/>
                  <div className={styles.submitWarp}>
                    <div className={styles.submitDetail}>利用規約やガイドラインに違反する作品は削除の対象となります。</div>
                    <button onClick={handleSubmit} className={styles.button}>
                      投稿
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
      </div>
  )
}

export default Contribution
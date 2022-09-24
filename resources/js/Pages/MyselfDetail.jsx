import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'

import styles from '../../scss/myself.module.scss'

function MyselfDetail() {

    const location = useLocation();
    const { id } = location.state
    const { title } = location.state
    const { text } = location.state
    const { image } = location.state

    const [putTitle,setPutTitle] = useState(title)
    const [putText,setPutText] = useState(text)

    const [datas,setData] = useState()

    useEffect(() =>{
        axios
            .get("http://127.0.0.1:8000/api/myself")
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((res) => {
                console.log(res.data)
            })
    },[])

    const updateClick = () => {

        axios
            .post(`http://127.0.0.1:8000/api/myself/${id}/update`,{
                title: putTitle,
                text: putText
            })
            .then((res) => {
                setData(res.data)
                window.location.href = '../myself'
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const hadnleTitleChange = (e) => {
        setPutTitle(e.target.value)
    }

    const hadnleTextChange = (e) => {
        setPutText(e.target.value)
    }

    return (
        <div>
            <div className={styles.myselfDetail}>
                <div className={styles.myselfImg}>
                    <img src={`http://127.0.0.1:8000/${image}`} alt="image" className={styles.Img} />
                </div>
                <div className={styles.introduce}>
                    <div>
                        <input type="text" onChange={hadnleTitleChange} value={ putTitle } className={styles.title}  />
                    </div>
                    <div>
                        <input type="text" onChange={hadnleTextChange} value={ putText } className={styles.text} />
                    </div>
                    <form className={styles.formPutButton}>
                        <button onClick={updateClick}>変更</button>
                    </form>
                    <form>
                        <a href={`../myself/${id}/delete`} className={styles.formDeleteButton}>削除</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MyselfDetail
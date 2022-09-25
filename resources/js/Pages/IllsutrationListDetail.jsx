import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'

import styles from '../../scss/content.module.scss'
import Chat from './Chat';
import IllustrationList from './IllustrationList';

function IllsutrationListDetail() {

    const location = useLocation();
    const { id } = location.state
    const { title } = location.state
    const { text } = location.state
    const { image } = location.state

    const [datas,setData] = useState()

    useEffect(() =>{
        axios
            .get(`http://127.0.0.1:8000/api/home/${id}`)
            .then((res) => {
                setData(res.data.contributions)
                console.log(res.data.contributions)
                console.log(image)
            })
            .catch((res) => {
                console.log(res.data)
            })
    },[])

    return (
        <div>
            <div className={styles.IllsutrationListDetail}>
                <div className={styles.IllsutrationImg}>
                    <img src={`http://127.0.0.1:8000/${image}`} alt="image" className={styles.Img} />
                </div>
                <div className={styles.detail}>
                    <div className={styles.title}>{ title }</div>
                    <div className={styles.text}>{ text }</div>
                </div>
            </div>
            <IllustrationList />
        </div>
    )
}

export default IllsutrationListDetail
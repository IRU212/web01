import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from './Header'

import styles from '../../scss/myself.module.scss'

function MyselfDetail(props) {

    const [datas,setData] = useState()
    const [id,setId] = useState()
    const [title,setTitle] = useState()
    const [text,setText] = useState()
    const [image,setImage] = useState()

    const [dataid,setDataid] = useState()

    console.log(window.location.href);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/myself/2")
            .then((res) =>{
                setData(res.data)
                setId(res.data.myself.id)
                setTitle(res.data.myself.title)
                setText(res.data.myself.text)
                setImage(res.data.myself.image)
                setDataid(res.data.dataid)
                console.log(res.data.myself)
                console.log(res.data.dataid)
            })
            .catch((res) => {
                console.log(res.data)
            })
    },[])

    return (
        <div>
            <Header 
                info={{ 
                    id: props.user.id,
                    name: props.user.name,
                    email: props.user.email
                }} 
            />
            <div className={styles.myselfDetail}>
                <img src={ image } alt="aaa" />
            </div>
        </div>
    )
}

export default MyselfDetail
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'

import styles from '../../scss/myself.module.scss'

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
            <div className={styles.myselfDetail}>
                <div className={styles.myselfImg}>
                    <img src={`http://127.0.0.1:8000/${image}`} alt="" className={styles.Img} />
                </div>
                <div className={styles.introduce}>
                    <div className={styles.title}>
                        { title }
                    </div>
                    <div className={styles.text}>
                        { text }
                    </div>
                </div>
            </div>
            {/* <div className={styles.recommendation}>
                { datas?.map((data,index) =>
                    <Link
                        to={`../home/${data.id}`} 
                        state={{
                            id: `${data.id}`,
                            title: `${data.title}`,
                            text: `${data.text}`,
                            image: `${data.image}`,
                        }}
                    >
                        <div key={index} className={styles.item}>
                            <img src={ data.image } alt="aaa" className={styles.image} />
                        </div>
                    </Link>
                ) }
            </div> */}
        </div>
    )
}

export default IllsutrationListDetail
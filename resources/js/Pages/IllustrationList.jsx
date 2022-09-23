import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from '../../scss/content.module.scss'

function IllustrationList() {

    const [datas,setDatas] = useState()

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/home/")
            .then((res) => {
                console.log(res.data.contributions)
                setDatas(res.data.contributions)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])

    return (
        <div className={styles.IllustrationList}>
                { datas?.map((data) => 
                    <Link
                        to={`../home/${data.id}`}
                        state={{
                            id: `${data.id}`,
                            title: `${data.title}`,
                            text: `${data.text}`,
                            image: `${data.image}`,
                        }}
                        className={styles.itemListCover}
                    >
                        <img src={`http://127.0.0.1:8000/${data.image}`} className={styles.ImgSize} alt="image" />
                    </Link>
                ) }
        </div>
    )
}

export default IllustrationList
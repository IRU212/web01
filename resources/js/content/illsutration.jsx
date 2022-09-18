import IllsutrationListDetail from '@/Pages/IllsutrationListDetail'
import MyselfDetail from '@/Pages/MyselfDetail'
import React, { useEffect, useState } from 'react'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'

import styles from '../../scss/content.module.scss'


function Illsutration() {

    const [heart,setHeart] = useState(false)

    const heartToggle = () => {
        setHeart(!heart)
    }

    const [datas,setData] = useState()

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/home")
            .then((res) => {
                setData(res.data.contributions)
                console.log(res.data.contributions)
            })
            .catch((res) => {
                console.log(res)
            })
    },[])

    function IllsutrationList(){

        return(
            <div className={styles.itemList}>
                { datas?.map((data) =>
                    <Link
                        to={`../home/${data.id}`}
                        state={{
                            id: `${data.id}`,
                            title: `${data.title}`,
                            text: `${data.text}`,
                            image: `${data.image}`,
                        }}
                        className={styles.item}
                    >
                    <img src={ data.image } className={styles.itemImage} alt="image" />
                    <div className={`${ heart ? styles.heart : styles.heartRed }`} onClick={heartToggle}></div>
                    </Link>
                )}
            </div>
        )
    }

    return (
        <div className={styles.Illsutration}>
            <BrowserRouter>
                <Routes>
                    <Route path='home' element={<IllsutrationList />} />
                    <Route path='home/:id' element={<IllsutrationListDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Illsutration
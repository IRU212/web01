import Search from '@/content/Search'
import React, { useEffect, useState } from 'react'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'

import styles from '../../scss/content.module.scss'
import IllsutrationListDetail from './IllsutrationListDetail'

// import Image from '../../../storage/app/public/image/naraka.jpg'

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
            <div>
                {/* <div>
                    <Search />
                </div> */}
                <div className={styles.itemList}>
                    { datas?.map((data,index) =>
                    <div className={styles.item}>
                        <Link
                            to={`../home/${data.id}`}
                            state={{
                                id: `${data.id}`,
                                title: `${data.title}`,
                                text: `${data.text}`,
                                image: `${data.image}`,
                            }}
                            key={index}
                        >
                            <img src={`http://127.0.0.1:8000/${data.image}`} className={styles.itemImage} alt="image" />
                            <div className={`${ heart ? styles.heart : styles.heartRed }`} onClick={heartToggle}></div>
                        </Link>
                    </div>
                    )}
                    { datas?.map((data,index) =>
                    <div className={styles.item}>
                        <Link
                            to={`../home/${data.id}`}
                            state={{
                                id: `${data.id}`,
                                title: `${data.title}`,
                                text: `${data.text}`,
                                image: `${data.image}`,
                            }}
                            key={index}
                        >
                            <img src={`http://127.0.0.1:8000/${data.image}`} className={styles.itemImage} alt="image" />
                            <div className={`${ heart ? styles.heart : styles.heartRed }`} onClick={heartToggle}></div>
                        </Link>
                    </div>
                    )}
                    { datas?.map((data,index) =>
                    <div className={styles.item}>
                        <Link
                            to={`../home/${data.id}`}
                            state={{
                                id: `${data.id}`,
                                title: `${data.title}`,
                                text: `${data.text}`,
                                image: `${data.image}`,
                            }}
                            key={index}
                        >
                            <img src={`http://127.0.0.1:8000/${data.image}`} className={styles.itemImage} alt="image" />
                            <div className={`${ heart ? styles.heart : styles.heartRed }`} onClick={heartToggle}></div>
                        </Link>
                    </div>
                    )}
                    { datas?.map((data,index) =>
                    <div className={styles.item}>
                        <Link
                            to={`../home/${data.id}`}
                            state={{
                                id: `${data.id}`,
                                title: `${data.title}`,
                                text: `${data.text}`,
                                image: `${data.image}`,
                            }}
                            key={index}
                        >
                            <img src={`http://127.0.0.1:8000/${data.image}`} className={styles.itemImage} alt="image" />
                            <div className={`${ heart ? styles.heart : styles.heartRed }`} onClick={heartToggle}></div>
                        </Link>
                    </div>
                    )}
                    { datas?.map((data,index) =>
                    <div className={styles.item}>
                        <Link
                            to={`../home/${data.id}`}
                            state={{
                                id: `${data.id}`,
                                title: `${data.title}`,
                                text: `${data.text}`,
                                image: `${data.image}`,
                            }}
                            key={index}
                        >
                            <img src={`http://127.0.0.1:8000/${data.image}`} className={styles.itemImage} alt="image" />
                            <div className={`${ heart ? styles.heart : styles.heartRed }`} onClick={heartToggle}></div>
                        </Link>
                    </div>
                    )}
                </div>
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
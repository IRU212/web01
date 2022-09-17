import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'

import styles from '../../scss/myself.module.scss'
import { Link,BrowserRouter,Routes,Route } from 'react-router-dom'
import Test from './Test'
import MyselfDetail from './MyselfDetail'

function Myself(props) {

    const [datas,setData] = useState()
    const [urlId,setUrlId] = useState() 

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/myself")
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })
            .catch((res) => {
                console.log(res)
            })
    },[])

    function MyselfIndex(props){
        return(
            <div className={styles.flex}>
                { datas?.map((data,index) =>
                    <div key={index} className={styles.item}>
                        <Link 
                            to={`${data.id}`} 
                            state={{
                                id: `${data.id}`,
                                title: `${data.name}`,
                                text: `${data.text}`,
                                image: `${data.image}`,
                            }}
                        >
                            <div className={styles.imgback}>
                                <img src={ data.image } className={styles.img} alt={ data.title } />
                            </div>
                            <div className={styles.title}>{ data.title }</div>
                        </Link>
                    </div>
                ) }
            </div>
        )
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
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path='myself' element={<MyselfIndex />}  />
                        <Route path='myself/:id' element={<Test />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div> 
    )
}

export default Myself
import IllsutrationListDetail from '@/Pages/IllsutrationListDetail'
import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from '../../scss/content.module.scss'

function Search() {

    const [result,setResult] = useState(true)
    const resultClick = () => {
        setResult(!result)
    }
    const closeClick = (e) => {
        console.log("e.target", e.target);
        console.log("e.currentTarget", e.currentTarget);

        if (e.target.closest('.square')) {
            console.log('内側');
          } else {
            console.log('外側')
          }
      
    }

    const [datas,setData] = useState()
    const [filterDatas,setFiletrData] = useState(datas)

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/home")
            .then((res) => {
                setData(res.data.contributions)
                setFiletrData(res.data.contributions)
                console.log(res.data.contributions)
            })
            .catch((res)=>{
                console.log('エラーが発生しました')
                console.log(res.data)
            })
    },[])

    
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase()
        const result = datas.filter((data) => {
            return new RegExp(value).test(data.title)
        })
        setFiletrData(result)
    }

    return (
        <div className="square" onClick={closeClick} >
            <div  className={styles.search} >
                <input type="text" onChange={handleSearch} onClick={resultClick} className={styles.inputSearch} />
                <div className={`${ result ? styles.resultNone : styles.result }`}>
                    { filterDatas?.map((filterData,index) => 
                            <Link
                            to={`../home/${filterData.id}`}
                            state={{
                                id: `${filterData.id}`,
                                title: `${filterData.title}`,
                                text: `${filterData.text}`,
                                image: `${filterData.image}`,
                            }}
                        >
                            <div key={index} className={styles.resultFont}>
                                { filterData.title }
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search
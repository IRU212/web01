import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function IllustrationList() {

    const [datas,setDatas] = useState()

    useEffect(() => {
        axios
            .post("http://127.0.0.1:8000/api/home/")
            .then((res) => {
                console.log(res.data.contributions)
                setDatas(res.data.contributions)
            })
            .catch((error) => {
                console.log(error)
            })
    },[])

    return (
        <div>
            { datas?.map((data) => 
                <div>
                    <div>{ data.id }</div>
                </div>
            ) }
        </div>
    )
}

export default IllustrationList
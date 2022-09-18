import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Search() {

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
        <div>
            <input type="text" onChange={handleSearch} />
            { filterDatas?.map((filterData,index) => 
                <div key={index}>
                    { filterData.title }
                </div>
            )}
        </div>
    )
}

export default Search
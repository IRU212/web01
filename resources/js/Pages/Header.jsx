import Search from '@/content/Search';
import { Link } from '@inertiajs/inertia-react';
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';

import styles from '../../scss/header.module.scss'

function Header(props) {

    const illustrationURL = "http://127.0.0.1:8000/api/dashboard"

    const [iconMenu,setIconMenu] = useState(false)

    const iconMenuToggle = () => {
        setIconMenu(!iconMenu)
    }

    useEffect(() => {
        axios
            .get(illustrationURL)
            .then((res) => {
                // console.log(res.data)
            })
            .catch((res)=>{
                console.log('エラーが発生しました')
                console.log(res.data)
            })
    },[])

    return (
        <div className={styles.header}>
            <a href="http://127.0.0.1:8000/home" className={styles.home}>home</a>
            <div className={styles.iconback}>
                <img  onClick={iconMenuToggle} className={styles.icon}  src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="" />
                <div className={`${ iconMenu ? styles.iconToggle : styles.iconToggleNone }`}>
                    <div className={styles.toggleHeader}>
                        <div className={styles.toggleHeaderName}>{ props.info.name }</div>
                        <div className={styles.toggleHeaderName}>{ props.info.email }</div>
                        <div className={styles.toggleHeaderName}>
                            <a href="http://127.0.0.1:8000/contribution">
                                投稿
                            </a>
                        </div>
                        <div className={styles.toggleHeaderName}>
                            <a href="http://127.0.0.1:8000/myself">
                                自分の作品
                            </a>
                        </div>
                        <div className={styles.toggleHeaderName}>                
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button">
                                ログアウト
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Header
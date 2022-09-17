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

    console.log(props.info.name)

    useEffect(() => {
        axios
            .get(illustrationURL)
            .then((res) => {
                console.log(res.data)
            })
            .catch((res)=>{
                console.log('エラーが発生しました')
                console.log(res.data)
            })
    },[])

    return (
        <div className={styles.header}>
            <div className={styles.iconback}>
                {/* <Image src={Icon} width={40} height={40} alt="icon" onClick={iconMenuToggle} className={styles.icon} /> */}
                <img  onClick={iconMenuToggle} className={styles.icon}  src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="" />
                <div className={`${ iconMenu ? styles.iconToggle : styles.iconToggleNone }`}>
                    <div className={styles.toggleHeader}>
                        <div className={styles.toggleHeaderName}>{ props.info.name }</div>
                        <div className={styles.toggleHeaderName}>{ props.info.email }</div>
                        <div className={styles.toggleHeaderName}>
                            <a href="contribution">
                                投稿
                            </a>
                        </div>
                        <div className={styles.toggleHeaderName}>
                            <a href="http://127.0.0.1:8000/myself">
                                自分の作品
                            </a>
                        </div>
                        <div className={styles.toggleHeaderName}><a href="">いいね</a></div>
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
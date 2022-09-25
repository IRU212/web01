import React from 'react'

import styles from  '../../scss/home.module.scss'

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.cover}>
                <a href="http://127.0.0.1:8000/illsutration">
                    <div className={styles.mainFont}>
                        イラスト一覧
                    </div>
                    <div className={styles.introduce}>
                        イラスト一覧ページになります。<br />
                        二次創作イラストやオリジナルイラストなどの一覧ページになります！！
                    </div>
                </a>
            </div>
            <div className={styles.cover}>
                <a href="http://127.0.0.1:8000/chat">
                    <div className={styles.mainFont}>
                        チャット
                    </div>
                    <div className={styles.introduce}>
                        アニメやイラストなど好きなことを話しましょう。<br />
                        好きなアニメやイラスト、漫画など好きなことについてしゃべりましょう！！
                    </div>
                </a>
            </div>
            <div className={styles.cover}>
                <a href="http://127.0.0.1:8000/contribution">
                    <div className={styles.mainFont}>
                        投稿
                    </div>
                    <div className={styles.introduce}>
                        イラスト投稿ページになります。<br />
                        二次創作イラストやオリジナルイラストなど作成した作品を投稿しましょう！！
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Home
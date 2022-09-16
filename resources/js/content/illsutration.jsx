import React, { useState } from 'react'

import styles from '../../scss/content.module.scss'

function Illsutration() {

    const [heart,setHeart] = useState(false)

    const heartToggle = () => {
        setHeart(!heart)
    }

  return (
    <div className={styles.Illsutration}>
        <div className={styles.itemList}>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="image" />
                <div className={`${ heart ? styles.heart : styles.heartRed }`} onClick={heartToggle}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://s2.booth.pm/8e17bf87-f1d6-4be1-9947-51d39dd1a420/i/3893529/a9e07901-7da1-41f3-983c-c87adc9dd29d_base_resized.jpg" alt="image" />
                <div class={styles.heartRed}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="image" />
                <div class={styles.heart}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://s2.booth.pm/8e17bf87-f1d6-4be1-9947-51d39dd1a420/i/3893529/a9e07901-7da1-41f3-983c-c87adc9dd29d_base_resized.jpg" alt="image" />
                <div class={styles.heart}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="image" />
                <div class={styles.heart}></div>
            </div>
        </div>
        <div className={styles.itemList}>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="image" />
                <div class={styles.heart}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://s2.booth.pm/8e17bf87-f1d6-4be1-9947-51d39dd1a420/i/3893529/a9e07901-7da1-41f3-983c-c87adc9dd29d_base_resized.jpg" alt="image" />
                <div class={styles.heart}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="image" />
                <div class={styles.heart}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://s2.booth.pm/8e17bf87-f1d6-4be1-9947-51d39dd1a420/i/3893529/a9e07901-7da1-41f3-983c-c87adc9dd29d_base_resized.jpg" alt="image" />
                <div class={styles.heart}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="image" />
                <div class={styles.heart}></div>
            </div>
        </div>
        <div className={styles.itemList}>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="image" />
                <div class={styles.heart}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://s2.booth.pm/8e17bf87-f1d6-4be1-9947-51d39dd1a420/i/3893529/a9e07901-7da1-41f3-983c-c87adc9dd29d_base_resized.jpg" alt="image" />
                <div class={styles.heart}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="image" />
                <div class={styles.heart}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://s2.booth.pm/8e17bf87-f1d6-4be1-9947-51d39dd1a420/i/3893529/a9e07901-7da1-41f3-983c-c87adc9dd29d_base_resized.jpg" alt="image" />
                <div class={styles.heart}></div>
            </div>
            <div className={styles.item}>
                <img className={styles.itemImage} src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="image" />
                <div class={styles.heart}></div>
            </div>
        </div>
    </div>
  )
}

export default Illsutration
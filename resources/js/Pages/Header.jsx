import { useState } from 'react'

import styles from '../../scss/header.module.scss'

function Header() {

    const [iconMenu,setIconMenu] = useState(false)

    const iconMenuToggle = () => {
        setIconMenu(!iconMenu)
    }

    return (
        <div className={styles.header}>
            <div className={styles.iconback}>
                {/* <Image src={Icon} width={40} height={40} alt="icon" onClick={iconMenuToggle} className={styles.icon} /> */}
                <img  onClick={iconMenuToggle} className={styles.icon}  src="https://pbs.twimg.com/media/EsU0QSaVEAEQSsC.png" alt="" />
                <div className={`${ iconMenu ? styles.iconToggle : styles.iconToggleNone }`}>
                    <div>
                        aaa
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
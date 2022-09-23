import React, { useEffect } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

import styles from '../../scss/login.module.scss'

export default function Welcome(props) {

    function LoginNow(){
        window.location.href = 'home'
    }

    return (
        <>
            <div className={styles.Welcome}>
                <div className={styles.cover}>
                    {props.auth.user ? (
                        <Link href={route('dashboard')}>
                            <LoginNow />
                        </Link>
                    ) : (
                        <>
                            <div className={styles.Login}>
                                <Link href={route('login')} className={styles.font}>
                                    LogIn
                                </Link>
                                <Link
                                    href={route('register')} className={styles.font}>
                                    Register
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

import React, { useEffect } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {

    function LoginNow(){
        window.location.href = 'home'
    }

    return (
        <>
            <div>
                <div>
                    {props.auth.user ? (
                        <Link href={route('dashboard')}>
                            <LoginNow />
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')}>
                                Log in
                            </Link>

                            <Link
                                href={route('register')}>
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

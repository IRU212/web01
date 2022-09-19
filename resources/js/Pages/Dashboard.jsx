import Illsutration from '@/content/illsutration';
import React from 'react';
import Header from './Header';

export default function Dashboard(props) {

    return (
        <div>
            <Header 
                info={{ 
                    id: props.user.id,
                    name: props.user.name,
                    email: props.user.email
                }} 
            />
            <Illsutration />
        </div>
    );
}

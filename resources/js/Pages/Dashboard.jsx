import React from 'react';
import Illsutration from './illsutration';
import Header from './Header';
import Chat from './Chat';
import Home from './Home';

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
            <Home />
        </div>
    );
}

import React from 'react';
import './userInfo.css'


const UserInfo = () => {
    return (
        <div className={'user_info_block'}>
            <div className={'user_item'}></div>
            <div className={'user_info'}>
                <h2>Veronika Uppie</h2>
                <p>Zurich CH</p>
            </div>
        </div>
    );
};

export {
    UserInfo
};
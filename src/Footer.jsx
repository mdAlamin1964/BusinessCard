import React from 'react';
import Facebook from './assets/Facebook.png'
import Twitter from './assets/Twitter.png'
import Instagram from './assets/Instagram.png'
import GitHub from './assets/GitHub.png'
export default function Footer() {
    return (
        <div className="footer">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={GitHub} alt="" />
        </div>
    )
}
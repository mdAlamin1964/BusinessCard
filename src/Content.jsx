import React from 'react';
import Email from './assets/email.png';
import Linkedin from './assets/link.png'

export default function Content() {
    return (
        <div className="main--area">
            <div className="main--bnt-area">
                <button className="main--btn main--email">
                    <img src={Email} alt="" />
                    <span>Email</span>
                </button>
                <button className="main--btn main--linkedin">
                    <img src={Linkedin} alt=""/>
                    <span>Linkedin</span>
                </button>
            </div>

            <div className="main--text">
                <div className="main--about">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="main--interest">
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
        </div>
    );
}
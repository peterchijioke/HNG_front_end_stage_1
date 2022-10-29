/* eslint-disable react/jsx-no-comment-textnodes */
import React,{ HTMLProps, useState, } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEllipsis, faShare } from '@fortawesome/free-solid-svg-icons'
import './home.scss'


const Home =(params:HTMLProps<HTMLElement>)=> {

    const [media,setMedia]=useState<boolean>( window.matchMedia("(max-width: 900px)").matches)
let photo = '../../images/profile_img.jpg'
    return<div className="container">
            <div className="profile-section">
               <div className="avatar-share-button">
               {media?<FontAwesomeIcon className="icon-share" icon={faEllipsis}/>:<FontAwesomeIcon className="icon-share" icon={faShare}/>}
               </div>
                <img src={require(`../../images/profile_img.jpg`)} id="profile__img" alt={`profile ${photo}`}/>
                <p id="twitter">Chukwu (Chijioke) Peter</p>
                <p id="slack">Chukwu Chijioke Peter</p>
            </div>
            <div>

            </div>
    </div>
    
}

export default Home
/* eslint-disable react/jsx-no-comment-textnodes */
import React,{ HTMLProps, } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShare } from '@fortawesome/free-solid-svg-icons'
import './home.scss'


const Home =(params:HTMLProps<HTMLElement>)=> {
let photo = '../../images/profile_img.jpg'
    return<div className="container">
            <div className="profile-section">
               <div className="avatar-share-button">
               <FontAwesomeIcon className="icon-share" icon={faShare}/>
               </div>
                <img src={require(`../../images/profile_img.jpg`)} id="profile__img" alt={`profile ${photo}`}/>
                <p className="twitter">Chukwu (Chijioke) Peter</p>
            </div>
    </div>
    
}

export default Home
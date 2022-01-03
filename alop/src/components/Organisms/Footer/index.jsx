import { Link } from "react-router-dom";
import { useState, createContext, useEffect } from 'react';
import './index.scss'
// import {LogoAllIcon} from './../../../assets/images/logo-all.svg'

function Footer(props) {

    const footerNavLists = [
        {
            title:"お問い合わせ",
            path:"/"
        },
        {
            title:"利用規約",
            path:"/"
        },
        {
            title:"プライボリシー",
            path:"/"
        },
        {
            title:"動作環境",
            path:"/"
        },
        {
            title:"当サイトについて",
            path:"/"
        }
    ]
    
    return(
        <footer className="footer">
            <div className="footer__logoWarp">
                <img src={props.isLogo} alt="" />
            </div>
            <nav className="footer__navWarp">
                <ul>
                    { footerNavLists.map(( list,index )=>(<li key={index}><Link to={list.path}>{list.title}</Link></li>))}
                </ul>
            </nav>
            <p className="copyright">copyright&copy; 2020 ALOP.inc</p>
        </footer>
    )
}

export default Footer;

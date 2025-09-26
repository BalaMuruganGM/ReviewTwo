import React from "react";
import { useRef } from "react";
import ReviewCard from "./reviewCard";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {useNavigate} from 'react-router-dom';
import '../index.css';


const Profile = () => {

    const Scroll = useRef();

    const LeftScroll = ()=>{
        Scroll.current.scrollBy({
            left : -300,
            behavior : "smooth"

        })
    }

        const RightScroll = ()=>{
        Scroll.current.scrollBy({
            left : 300,
            behavior : "smooth"

        })
    }

    const navigate = useNavigate();

    const FormFile = ()=>{
        navigate('/form');
    }

    return (
        <div className="profileContainer">
            <div className="Logo">
                <img src="/img/GoogleLogo.png" />
                <h2>Your feedback helps others discover great experiences!</h2>
            </div>

            <div className="arrowBox">
                    <IoIosArrowBack className="arrow" onClick={LeftScroll}/>
                    <IoIosArrowForward className="arrow"  onClick={RightScroll}/>
            </div>
            <div className="reviewContainer" ref={Scroll} >
                <div className="subReview">
                    <ReviewCard
                        img1 = "/img/man3.jpg"
                        name = "G.M.Balamurugan"
                        img2 = "/img/1S.png"
                        
                    />
                     <ReviewCard
                        img1 = "/img/man1.jpg"
                        name = "vinoth kuram"
                        img2 = "/img/2S.png"
                        
                    /> 
                    
                    <ReviewCard
                        img1 = "/img/man2.jpg"
                        name = "Kumarasubramai"
                        img2 = "/img/3S.png"
                        
                    /> <ReviewCard
                        img1 = "/img/man3.jpg"
                        name = "G.M.Nagarajan"
                        img2 = "/img/4S.png"
                        
                    /> <ReviewCard
                        img1 = "/img/GM.png"
                        name = "N.A.Balaji"
                        img2 = "/img/5S.png"
                        
                    />
                     <ReviewCard
                        img1 = "/img/man1.jpg"
                        name = "Veeranamani"
                        img2 = "/img/2S.png"
                        
                    /> 
                     <ReviewCard
                        img1 = "/img/man1.jpg"
                        name = "Kumaran"
                        img2 = "/img/2S.png"
                        
                    /> 
                </div>
            </div>

            <div className="reviewButton">
                <button onClick={FormFile}>Review</button>
            </div>

        </div>
    )
}
export default Profile;
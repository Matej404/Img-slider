import "./style.css";
import React, { useState } from "react";
import { ImgData } from "./ImgData";
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose, AiOutlineArrowDown } from "react-icons/ai";
import { GiGuitar } from "react-icons/gi";


export default function ImgSlider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === ImgData.length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? ImgData.length - 1 : current - 1);
    }

    //popup
    const [popUp, setPopUp] = useState(false);
    const handlePopUp = () => {
        setPopUp(!popUp);
    } 

    return(
        <div className="img-slider">
            <h1>Image Slider</h1>
            <div className="content-container">
                <p>Would you like to see my favourite rock bend?</p>
                <p>Click here</p>
                <AiOutlineArrowDown className="arrow-down" />
                <GiGuitar className="guitar" onClick={handlePopUp} />
            </div>
            {popUp && (
            <div className="img-container">
                <AiOutlineClose className="close-btn" onClick={handlePopUp} />
                <AiOutlineArrowLeft className="prev-btn" onClick={prevSlide} />
                <AiOutlineArrowRight className="next-btn" onClick={nextSlide} />
                {ImgData.map((img, index) => (
                    <div key={index}>
                        {current === index && (
                            <img src={img.image} />
                        )}
                    </div>
                ))}
            </div>)}
        </div>
    )
}
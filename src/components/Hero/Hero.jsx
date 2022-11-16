import React from 'react'
import Header from '../Header/Header'
import './Hero.css';
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from 'framer-motion';
const Hero =() =>{
    const transition ={type: 'spring', duration :3}
    const mobile = window.innerWidth<=768 ? true:false;
    return(
        <div className='hero' id='home'>
            <div className='blur hero-blur'></div>
            <div className='left-h'>
                <Header/>
            <div className='best-ad'>
            <motion.div
                initial={{left: mobile? "165px":'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition,type:'tween'}}
                >
            </motion.div>
            <span>The best fitness club in the town</span>
            </div>
            <div className='hero-text'>
                <div>
                    <span className='stroke-text'>GET </span>
                    <span>FIT</span>
                </div>
                <div>
                    DONT QUIT
                </div>
                <div>
                    <span>
                        Best fitness center in Sri Lanka
                    </span>
                </div>
            </div>
            {/* figures */}
            <div className='figures'>
                <div>
                    <span>3</span>
                    <span>Expert Coachs</span>
                </div>
                <div>
                    <span>+150</span>
                    <span>Members joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>Fitness programs</span>
                </div>
            </div>
            {/* hero-button */}
            <div className='hero-buttons'>
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
             </div>
            </div>
            
            <div className='right-h' >
                <button className='btn'>Join Now</button>
                <motion.div 
                initial={{right:"-1rem"}}
                whileInView={{right:"4rem"}}
                transition={transition}
                className='heart-rate'>
                    <img src={Heart} alt=""/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className='hero-image'/>
                <motion.img
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transition }
                src={hero_image_back} alt="" className='hero-image-back'/>
                <motion.div
                    initial={{right:"37rem"}}
                    whileInView={{right:"28rem"}}
                    transition={transition}
                    className='calories'>
                    <img src={Calories} alt=""/>
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                    </div>
                    
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
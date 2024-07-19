// Author: Benjamin DeZutti
// Web Programming - Summer 2024

import React from 'react';
import "./Logo.css";
import ratemyfit_logo from '../../Images/Logo/ratemyfit_logo.png';
import Typewriter from 'typewriter-effect';

const Logo = () => {
    return (
        <div >

            <div className='font3'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("FitCheck.").pauseFor(2000).start();
                    }}
                />
            </div>

            <div className='font4'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("FitCheck.").pauseFor(2000).start();
                    }}
                />
            </div>
            <div className='font5'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("FitCheck.").pauseFor(2000).start();
                    }}
                />
            </div>
            <div className='logo'>
                <img src={ratemyfit_logo} alt='Rate My Fit Logo' />
            </div>

            <div className='font1'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("FitCheck.").pauseFor(2000).start();
                    }}
                />
            </div>

            <div className='font2'>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("FitCheck.").pauseFor(2000).start();
                    }}
                />
            </div>
        </div>
    );
};

export default Logo;

import React from 'react';
import Button from './Button';
import './Home.css'
export default function HomeSection()
{
    return (
        <div className='home-container'>
            < video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITES </h1>
            <p>What are you waiting for? </p>
            <div className='home-btns'>
            <Button className="btns" btnStyle='btn--outline' btnSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns'btnStyle='btn--primary' btnSize='btn--large'>
                WATCH TRAILER  <i className='fa fa-play-circle' />
            </Button>
            </div>
         
        </div>
    )
}

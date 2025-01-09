import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='IntroContent'>
          <span className='hello'> Hello,</span>
          <span className='introText'> I'm<span className='introName'> Sandeep Choudhary</span><br/>Website Designer</span>
          <p className='introPara'> I am a skilled web developer with experience in creating<br/> visually appealing websites</p>
          <Link><button className='btn'><img src={btnImg} alt=''className='btnImg'/>Hire Me</button></Link>
      </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro;
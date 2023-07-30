import React from "react";
import "./About.css";
import aboutImg from "./../../imgs/1.png";
import aboutImg2 from "./../../imgs/2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
const About = () =>{
    //^^JAVASCRIPT
    const [isVideoPlaying, setVideoPlaying] = useState(false);

    const handlePlayVideo = () => {
        setVideoPlaying(true);
    };

    const handleCloseVideo = () => {
        setVideoPlaying(false);
    };

    return(
        <>
            {/*//! section 1 */}
            <div className="about-1 container">
                <div className="img-about">
                    <img src={aboutImg} alt="About" />
                </div>
                <div className="descr-about">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam perspiciatis impedit eius excepturi magni cumque pariatur nostrum voluptas quae alias voluptates temporibus unde, sint in id iusto fugiat ut.</p>
                    
                </div>
            </div>
            {/*//! section 2 */ }
            <div className="about-2 container">
                <div className="descr-about">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam perspiciatis impedit eius excepturi magni cumque pariatur nostrum voluptas quae alias voluptates temporibus unde, sint in id iusto fugiat ut.</p>
                    <p> <span><FontAwesomeIcon icon={faCheck} /></span> Lorem ipsum dolor sit. </p>
                    <p> <span><FontAwesomeIcon icon={faCheck} /></span> Lorem ipsum dolor sit. </p>
                    <p> <span><FontAwesomeIcon icon={faCheck} /></span> Lorem ipsum dolor sit. </p>
                </div>
                <div className="img-about2">
                    <img src={aboutImg2} alt="About" />
                </div>
            </div>
            {/* //! section 3 */}
            <div className="about-3">
      <div className="content-about container">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime!</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium asperiores culpa consequatur aspernatur at ratione, ad sequi ducimus nihil, illum voluptas, nisi odit minima officiis ipsam quos atque facere placeat?
        </p>
        {isVideoPlaying ? (
          <div className="video-player">
            <button className="close-video" onClick={handleCloseVideo}>
            <FontAwesomeIcon icon={faTimesCircle} />
            </button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/watch?v=UcfUdtHV1d4&ab_channel=SoussFrance"
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="watch" onClick={handlePlayVideo}>
            <span className="play-video" id="play">
              <FontAwesomeIcon icon={faPlay} />
            </span>
            Watch Our Story
          </p>
        )}
      </div>
    </div>
        </>
    );
}
export default About;
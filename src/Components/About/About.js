import React from 'react';
import counseling from '../../images/counseling-session.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <div class="card-body mb-5">

                <h5 class="card-title text-center">mindDoc</h5>
                <h6 class="card-subtitle mb-5 text-muted text-center mb-3">Sharing is Caring</h6>
                <img src={counseling} className="w-50 aboutimg" alt="" srcset="" />
                <p class="card-text">Founded By Isbat in 2015 where the cofounders are Rakib Enam Anik And Sabbir Islam. Main goal of our academy is to provide quiality sessions and contents  which can be beneficial to the people that are suffering from mental health related issues.</p>

            </div>
        </div>
    );
};

export default About;
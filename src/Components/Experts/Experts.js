import React from 'react';
import psy1 from '../../images/psychologists/zim96_400x400.jpg';
import psy2 from '../../images/psychologists/pauldownload.jfif';
import './Experts.css';

const Experts = () => {
    return (
        <div>
            <h1 className="text-center mb-3">Our Experts</h1>
            <div class="row mb-5">
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <img src={psy1} className="psy-img" alt="" srcset="" />
                            <h5 class="card-title">Philip Zimbardo </h5>
                            <p>(1941-present)</p>
                            <p class="card-text">
                                Philip George Zimbardo is an American psychologist and a professor emeritus at Stanford University. He became known for his 1971 Stanford prison experiment.
                            </p>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card d-flex justify-content-center">
                        <div class="card-body ">
                            <img src={psy2} className="psy-img" alt="" srcset="" />
                            <h5 class="card-title">Cédric Villani </h5>
                            <p> (1973-present)</p>
                            <p class="card-text">Paul Ekman is an American psychologist and professor emeritus at the University of California, San Francisco who is a pioneer in the study of emotions and their relation to facial expressions.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experts;
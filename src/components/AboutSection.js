import home1 from '../images/home1.png';

import styled from 'styled-components';

import { Layout, Hide, Description, Image } from '../styles';

const AboutSection = () => {
    return (
        <Layout className="about">
            <Description className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make </h2>
                    </div>
                    <Hide className="hide">
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide className="hide">
                        <h2>true</h2>
                    </Hide>
                </div>
                <p>
                    Contact us for any photography or videography ideas that you
                    have. We have professionals with amazing skills
                </p>
                <button>Contact Us</button>
            </Description>
            <Image className="image">
                <img src={home1} alt="guy with a camera" />
            </Image>
        </Layout>
    );
};

export default AboutSection;

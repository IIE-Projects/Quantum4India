// Assembled About section composed of Vision, Mission and What We Do
import OurMission from './OurMission';
import OurVision from './OurVision';
import WhatWeDo from './WhatWeDo';

const About = () => {
    return (
        <div>
            <OurMission />
            <OurVision />
            <WhatWeDo />
        </div>
    );
}

export default About;
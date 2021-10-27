import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./AboutUs.scss"

const AboutUs = () => {
    return (
        <div>
           <Header id="2" />
           <div className="aboutusdiv">
               <h1>About us</h1>
               <hr />
               <p>
               Jitecsoft is an enterprise level software development company that excels predominantly in the areas of software and internet arena. We bring to our customers the best strategies and development in order to find the most relevant IT solutions. We adopt the latest AND the most updated solutions in the industry.
               </p>
           </div>
           <Footer />
        </div>
    );
}

export default AboutUs;
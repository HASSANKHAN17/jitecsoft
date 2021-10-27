import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Services.scss"

const Services = () => {
    return (
        <div>
            <Header id="2" />
            <div className="servicesdiv">
            <ul>
                <li><h1><span className="greenspan">Web</span> Applications</h1></li>
                <li><h1><span className="greenspan">Mobile</span> Applications</h1></li>
                <li><h1><span className="greenspan">CRM</span> Control and Development</h1></li>
                <li><h1><span className="greenspan">Augmented</span> Reality</h1></li>
                <li><h1><span className="greenspan">Virtual</span> Reality</h1></li>
                <li><h1><span className="greenspan">Mixed</span> Reality</h1></li>
                <li><h1><span className="greenspan">Artificial</span> Intelligence</h1></li>
            </ul>
            </div>
            <Footer />
        </div>
    );
}

export default Services;
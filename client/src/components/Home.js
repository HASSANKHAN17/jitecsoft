import React from 'react'
import "./Home.scss"
import Mobile from './Images/Enterprise  JitecSoft  Icon  Green Mobile.png'
import Web from './Images/Enterprise  JitecSoft  Icon  Green  Web.png'
import EnterPrise from './Images/Enterprise  JitecSoft  Icon  Green.png'
import VR from './Images/pexels-harsch-shivam-2007647.jpg'
import AI from './Images/200826-artificial-intelligence-machine-learning-min.jpg'
import AR from './Images/GettyImages-1150208424-1200x562.jpg'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Video from './Images/Automatic.MP4'
import Aos from 'aos'
import "aos/dist/aos.css"


const Home = ({history}) => {
    const videoRef = React.useRef(null)
    React.useEffect(()=>{
        console.log(videoRef)
        Aos.init({
            duration:1000
        })
    },[])
    return (
        <div>
            <div className="firstsection">
            <video loop autoPlay muted id="video" ref={videoRef}>
  <source src={Video} type="video/mp4" />
  Your browser does not support HTML5 video.
</video>
<Header id="1" />
<h2 >Augmented and Virtual Reality</h2>
<h1 >360° Experiences</h1>
<p >Scale your potential with an integrated virtual environment into the future</p>

<h3 >Quality Beyond Imagination</h3>
<p >LEVERAGE IMMERSIVE TECHNOLOGY TO CREATE A HIGHLY ENGAGING SALES EFFECTIVENESS
    SOLUTION FOR YOUR BUSINESS THAT IS USABLE AT SCALE IN A VARIETY OF CONTEXTS
</p>


            </div>


            <div className="secondsection">

            <h1 data-aos="fade-up">WE <span className="greenspan" >BELIEVE</span> IN <span className="greenspan" >IMMERSE</span> EXPERIENCES</h1>

           
                <div className="row twoparas">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                    <h2 className="greenspan" data-aos="fade-up">IDEATION</h2>
                    <span ><i class="fas fa-lightbulb fa-3x"></i></span>

                    
                    <hr style={{margin:"5% 36%"}} />
                    <p data-aos="fade-up">
                    We start from an idea – a vision of your solution. You can keep this task on us. Our creative gang can work independently for best time efficiency, or alongside with your marketing units for complex brand solutions. Will it be your idea, or something we come up with – we’re ready for new challenges.</p>      
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" >
                        <h2  className="greenspan" data-aos="fade-up">CONSULTING</h2>
                        <i class="far fa-handshake fa-3x"></i>
                        <hr style={{margin:"5% 36%"}} />
                        <p data-aos="fade-up">
                        4 years of unstoppable researches and projects. You can keep this task on us. Our creative gang can work independently for best time efficiency, or alongside with your marketing units for complex brand solutions. Will it be your idea, or something we come up with – we’re ready for new challenges.
                        </p>
                    </div>
                </div>
            </div>

            {/* third div ----------------------------------------------------- */}
            <div className="thirdsection">
            <h1 data-aos="fade-up">CUSTOM <span className="greenspan">SOFTWARE</span> DEVELOPMENT</h1>
            <h2 data-aos="fade-up">ENTERPRISE | WEB | MOBILE APPS</h2>
            <hr />
            <p data-aos="fade-up">
            At JitecSoft, we connect multiple dimensions of software development to give you an old-digital world. We look beyond traditional delivery paradigms and one-size-fits-all applications to translate your idea into a scalable technology solution.
            </p>
            

            <div className="row cards align-items-center" >
                <div  className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 singlecard">
                <img src={EnterPrise} alt="mobileimage" />
                    <h3><span className="greenspanlight" data-aos="fade-up">Enterprise</span> Software Development</h3>
                    <p data-aos="fade-up">
                    Our team helps you design and implement custom enterprise apps that automate versatile organizational and client-centric workflows. We create software solutions from scratch and tune up the running systems to smoothly embed into your IT landscape.
                    </p>
                    <button onClick={()=>history.push("/enterprise")} className="btn-grad">Know More <i class="fas fa-angle-double-right"></i></button>
                </div>

                <div  className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 singlecard ">
                    <div className="col-12">
                <img src={Web} alt="mobileimage" />
                    <h3><span className="greenspanlight" data-aos="fade-up">Web</span> Application Development</h3>
                    <p data-aos="fade-up">
                    We design and program simple websites as well as dynamic apps and complex IT systems for thousands of users. We create your website fully functional also for tablets and smartphones being fully responsive across all devices.
                    </p>
                    <button onClick={()=>history.push("/web")} className="btn-grad">Know More <i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>

                <div  className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 singlecard ">
                <div className="col-12">
                    <img src={Mobile} alt="mobileimage" />
                    <h3><span className="greenspanlight" data-aos="fade-up">Mobile</span> Application Development</h3>
                    <p data-aos="fade-up">
                    You dream it ‘ We build it ‘ We tune in to your vision and goals and we craft most robust mobile app that is secure, scalable and compliant ready, all around your vision. We are experts in programming mobile apps for iOS and Android.
                    </p>
                    <button onClick={()=>history.push("/mobile")}  className="btn-grad">Know More <i class="fas fa-angle-double-right"></i></button>
                    </div>
                </div>
            </div>
            </div>

            {/* fourth div------------------------------------------- */}
            <div className="fourthsection">
            <h1 data-aos="fade-up">WE BRING YOUR <span className="greenspan">BUSINESS</span> INTO A <br /><span className="greenspan">VIRTUAL REALITY</span> PARADIGM</h1>
            <hr />
            <h2 data-aos="fade-up">Revolutionize your business through Virtual Reality</h2>
            <div className="headofrow">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img   className="imghome" src={VR} alt="M" />
                    </div>
                    <div   className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h3 data-aos="fade-up"><span className="greenspanlight">Virtual Reality</span></h3>
                        <p data-aos="fade-up">
                        Create an interactive and immersive Virtual Reality experience, in order to help your customers understand your products and offerings efficiently.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <img  className="imghome" src={AR} alt="Augmented Reality" />
                    </div>
                    <div  className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h3 data-aos="fade-up"><span className="greenspanlight">Augmented Reality</span></h3>
                        <p data-aos="fade-up">
                        We help businesses come up with Augmented Reality use-cases that can enhance customer engagement and help them create a unique brand identity.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img  className="imghome" src={AI} alt="Artificial Intelligence" />
                    </div>
                    <div  className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h3 data-aos="fade-up"><span className="greenspanlight">Artificial intelligence</span></h3>
                        <p data-aos="fade-up">
                        We conceptualize and implement artificial intelligence use cases for a range of purposes, each contributing to business continuity and long-term efficiency. Our team incorporates AI-driven solutions into business operations where they can bring tangible value:
                        </p>
                    </div>
                </div>
                </div>
            </div>

            {/* fifth div-------------------------------------- */}
            <div className="fifthdiv">
                <h1><span className="greenspan" >3D Modeling</span> and <span className="greenspan">Animation</span></h1>
                <div className="row">
                    <div   className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 circle" data-aos="fade-up-right">
                    <h3>Strategy</h3>
                    </div>

                    <div   className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 circle" data-aos="fade-up">
                    <h3>Design</h3>
                    </div>

                    <div   className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 circle" data-aos="fade-up-left">
                    <h3>Development</h3>
                    </div>   
                </div>
                <hr />
                <p>Killer ideas deserve excellent implementation. We don’t see development as simply bringing design to life but as a crucial key to providing the best possible experience to your audience. Our developers work collaboratively across the whole product to solidify your offering.</p>
                <h3>Bringing <span className="greenspan">AR, VR, Apps and Websites</span> to life.</h3>
            </div>
        
        <Footer />


        </div>
    );
}

export default Home;
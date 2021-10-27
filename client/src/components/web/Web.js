import React from 'react'
import "./Web.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import svg from '../Images/undraw_Website_setup_re_d4y9.svg'
import Mongo from '../Images/mongodb-icon.svg'
import Express from '../Images/expressjs-ar21.svg'
import ReactLogo from '../Images/reactjs-icon.svg'
import Node from '../Images/nodejs-ar21.svg'
import Target from '../Images/undraw_target_kriv.svg'
import Wireframe from '../Images/undraw_prototyping_process_rswj.svg'
import Developing from '../Images/undraw_programming_2svr.svg'
import Testing from '../Images/undraw_Usability_testing_re_uu1g.svg'
import Deployement from '../Images/undraw_contract_uy56.svg'
import Aos from 'aos'
import "aos/dist/aos.css"

//import images here
import StoneTech from '../Images/stonetech.jpg'
import webstudio from '../Images/webstudio.jpeg'
import jcasa from '../Images/jcasa.jpeg'
import crestsystems from '../Images/crestsystems.jpeg'
import Fabode from '../Images/fabode.jpeg'
import RestoMentor from '../Images/restomentor.jpeg'
import skillsroot from '../Images/skillsroot.jpeg'
import sundata from '../Images/sundata.jpeg'

const Web = () => {
    React.useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
    return (
        <div>
            <Header id="1" />
            <h1 data-aos="zoom-in-up" className="web"><span className="greenspan">Web</span> App Development Done Right !</h1>
            <hr />

            <div className="wsection1 row">

            <div  className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 sec">
            <p data-aos="zoom-in-up">
            Our software development team is made up of incredibly versatile, creative, and driven programmers.(They're also really good at setting up printers onsite.)
We have programming teams dedicated to web, mobile, and mixed reality projects.
            </p>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={svg} alt="web"  />
            </div>
            </div>

            <h2 data-aos="zoom-in-up" className="web" style={{marginTop:"15%"}}><span className="greenspan">Tech</span> Stack</h2>
            <hr />
            <div className="wsection2 row">

                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 blocks" > 
                <img style={{fill:'white'}} src={Mongo} alt="mongo" />
                <h2><span className="greenspan">M</span>ongoDB</h2>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 blocks" >
                <img src={Express} alt="express" style={{fill:"white"}} />
                <h2><span className="greenspan">E</span>xpress</h2>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 blocks" >
                <img src={ReactLogo} alt="react" />
                <h2><span className="greenspan">R</span>eact</h2>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 blocks" >
                <img src={Node} alt="node" />
                <h2><span className="greenspan">N</span>ode</h2>
                </div>
            </div>


            <div className="wsection4">
            <h2 className="web" data-aos="zoom-in-up" style={{marginTop:"15%"}}><span className="greenspan">Our</span> Approach</h2>
            <hr />
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-aos="zoom-in-right">
                    <h2><span className="greenspan">1. Understanding</span> The Goal</h2>
                    <p>Reprehenderit quis cupidatat labore adipisicing adipisicing aute sunt aliqua mollit proident. Commodo esse consequat exercitation quis eu ad laborum ea Lorem. Laboris voluptate amet labore ex ipsum amet ex voluptate. Enim dolore quis duis occaecat excepteur ea. Veniam sit proident proident cupidatat ipsum eiusmod et anim cupidatat. Amet excepteur adipisicing enim nostrud Lorem labore amet. Qui ea fugiat non eiusmod esse qui veniam magna occaecat eiusmod dolor ea.</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-aos="zoom-in-left">
                <img src={Target} alt="target" />
                </div>
            </div>

            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-aos="zoom-in-right">
                <img src={Wireframe} alt="target" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"  data-aos="zoom-in-left">
                    <h2><span className="greenspan">2.</span> Creating The <span className="greenspan">Wireframes</span></h2>
                    <p>Reprehenderit quis cupidatat labore adipisicing adipisicing aute sunt aliqua mollit proident. Commodo esse consequat exercitation quis eu ad laborum ea Lorem. Laboris voluptate amet labore ex ipsum amet ex voluptate. Enim dolore quis duis occaecat excepteur ea. Veniam sit proident proident cupidatat ipsum eiusmod et anim cupidatat. Amet excepteur adipisicing enim nostrud Lorem labore amet. Qui ea fugiat non eiusmod esse qui veniam magna occaecat eiusmod dolor ea.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-aos="zoom-in-right">
                    <h2><span className="greenspan">3. Developing</span> The Web App</h2>
                    <p>Reprehenderit quis cupidatat labore adipisicing adipisicing aute sunt aliqua mollit proident. Commodo esse consequat exercitation quis eu ad laborum ea Lorem. Laboris voluptate amet labore ex ipsum amet ex voluptate. Enim dolore quis duis occaecat excepteur ea. Veniam sit proident proident cupidatat ipsum eiusmod et anim cupidatat. Amet excepteur adipisicing enim nostrud Lorem labore amet. Qui ea fugiat non eiusmod esse qui veniam magna occaecat eiusmod dolor ea.</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"  data-aos="zoom-in-left">
                <img src={Developing} alt="target" />
                </div>
            </div>

            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-aos="zoom-in-right">
                <img src={Testing} alt="target" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"  data-aos="zoom-in-left">
                    <h2><span className="greenspan">4. Testing</span> The Web App</h2>
                    <p>Reprehenderit quis cupidatat labore adipisicing adipisicing aute sunt aliqua mollit proident. Commodo esse consequat exercitation quis eu ad laborum ea Lorem. Laboris voluptate amet labore ex ipsum amet ex voluptate. Enim dolore quis duis occaecat excepteur ea. Veniam sit proident proident cupidatat ipsum eiusmod et anim cupidatat. Amet excepteur adipisicing enim nostrud Lorem labore amet. Qui ea fugiat non eiusmod esse qui veniam magna occaecat eiusmod dolor ea.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-aos="zoom-in-right">
                    <h2><span className="greenspan">5. Deployment</span> of The Web App</h2>
                    <p>Reprehenderit quis cupidatat labore adipisicing adipisicing aute sunt aliqua mollit proident. Commodo esse consequat exercitation quis eu ad laborum ea Lorem. Laboris voluptate amet labore ex ipsum amet ex voluptate. Enim dolore quis duis occaecat excepteur ea. Veniam sit proident proident cupidatat ipsum eiusmod et anim cupidatat. Amet excepteur adipisicing enim nostrud Lorem labore amet. Qui ea fugiat non eiusmod esse qui veniam magna occaecat eiusmod dolor ea.</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" data-aos="zoom-in-left">
                <img src={Deployement} alt="target" />
                </div>
            </div>

            </div>

            <div className="wsection3">
            <h2 data-aos="zoom-in-up" className="web" style={{marginTop:"15%"}}><span className="greenspan">Web</span> Development Projects</h2>
            <hr />

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 cards" >
                    <span style={{color:"white"}}><img src={StoneTech} alt="stonetech" /></span>
                    <h2>StoneTech</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 cards" >
                    <span style={{color:"white"}}><img src={webstudio} alt="cosmo" /></span>
                    <h2>Web Studio</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 cards" >
                    <span style={{color:"white"}}><img src={jcasa} alt="jcasa" /></span>
                    <h2>Jcasa</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 cards" >
                    <span style={{color:"white"}}><img src={crestsystems} alt="crestsystems" /></span>
                    <h2>Crest Systems</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 cards" >
                    <span style={{color:"white"}}><img src={Fabode} alt="Fabode" /></span>
                    <h2>Fabode</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 cards" >
                    <span style={{color:"white"}}><img src={RestoMentor} alt="Rest" /></span>
                    <h2>Resto Mentor</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 cards" >
                    <span style={{color:"white"}}><img src={skillsroot} alt="skillsroot" /></span>
                    <h2>Skills Root</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 cards" >
                    <span style={{color:"white"}}><img src={sundata} alt="crestsystems" /></span>
                    <h2>Sun Data Analytics</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>
            </div>



            </div>



           
            <Footer />
        </div>
    );
}

export default Web;
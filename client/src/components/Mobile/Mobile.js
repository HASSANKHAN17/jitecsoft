import React from 'react'
import "./Mobile.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import svg from '../Images/undraw_Mobile_apps_re_3wjf.svg'
import Mongo from '../Images/mongodb-icon.svg'
import Express from '../Images/expressjs-ar21.svg'
import ReactLogo from '../Images/reactjs-icon.svg'
import Node from '../Images/nodejs-ar21.svg'
import Target from '../Images/undraw_target_kriv.svg'
import Wireframe from '../Images/undraw_prototyping_process_rswj.svg'
import Developing from '../Images/undraw_programming_2svr.svg'
import Testing from '../Images/undraw_Usability_testing_re_uu1g.svg'
import Deployement from '../Images/undraw_contract_uy56.svg'
import SmartPhone from '../Images/smartphone.png'
import Aos from 'aos'
import "aos/dist/aos.css"



const Mobile = () => {
    React.useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
    return (
        <div>
            <Header id="1" />
            <div className="mob1">
            <h1 data-aos="zoom-in-up" className="web"><span className="greenspan">Mobile</span> App Development Done Right !</h1>
            <hr />

            <div className="wsection1 row mobile">

            <div  className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <img src={svg} alt="web"  />

          
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 sec">
            <p data-aos="zoom-in-up">
                Magna fugiat anim proident in labore fugiat nulla nulla veniam in pariatur. Veniam excepteur ipsum irure do laboris pariatur nisi sunt cupidatat. Ad est deserunt magna et sit ut eiusmod tempor duis nostrud excepteur labore non incididunt. Eiusmod est est proident laborum commodo pariatur fugiat dolor. Incididunt duis ex id consequat officia pariatur consectetur dolor tempor aliquip qui nisi commodo cupidatat. Dolor proident in mollit pariatur est est qui dolor fugiat occaecat magna.
            </p>
            </div>
            </div>
            </div>


            <h2 className="web" data-aos="zoom-in-up" style={{marginTop:"15%"}}><span className="greenspan">Tech</span> Stack</h2>
            <hr />
            <div className="wsection2 row">

                <div className="col-12 blocks" data-aos="zoom-in-up">
                <img style={{fill:'white'}} src={Mongo} alt="mongo" />
                <h2><span className="greenspan">M</span>ongoDB</h2>
                </div>

                <div className="col-12 blocks" data-aos="zoom-in-up">
                <img src={Express} alt="express" style={{fill:"white"}} />
                <h2><span className="greenspan">E</span>xpress</h2>
                </div>

                <div className="col-12 blocks" data-aos="zoom-in-up">
                <img src={ReactLogo} alt="react" />
                <h2><span className="greenspan">R</span>eact Native</h2>
                </div>

                <div className="col-12 blocks" data-aos="zoom-in-up">
                <img src={Node} alt="node" />
                <h2><span className="greenspan">N</span>ode</h2>
                </div>
            </div>

            <div className="wsection4">
            <h2 className="web" data-aos="zoom-in-up" style={{marginTop:"15%"}}><span className="greenspan">Our</span> Approach</h2>
            <hr />
            <div className="row">
                <div className="col-6" data-aos="zoom-in-right">
                    <h2><span className="greenspan">1. Understanding</span> The Goal</h2>
                    <p>Reprehenderit quis cupidatat labore adipisicing adipisicing aute sunt aliqua mollit proident. Commodo esse consequat exercitation quis eu ad laborum ea Lorem. Laboris voluptate amet labore ex ipsum amet ex voluptate. Enim dolore quis duis occaecat excepteur ea. Veniam sit proident proident cupidatat ipsum eiusmod et anim cupidatat. Amet excepteur adipisicing enim nostrud Lorem labore amet. Qui ea fugiat non eiusmod esse qui veniam magna occaecat eiusmod dolor ea.</p>
                </div>
                <div className="col-6" data-aos="zoom-in-left">
                <img src={Target} alt="target" />
                </div>
            </div>

            <div className="row">
            <div className="col-6" data-aos="zoom-in-right">
            <h2><span className="greenspan">2.</span> Creating The <span className="greenspan">Wireframes</span></h2>
                    <p>Reprehenderit quis cupidatat labore adipisicing adipisicing aute sunt aliqua mollit proident. Commodo esse consequat exercitation quis eu ad laborum ea Lorem. Laboris voluptate amet labore ex ipsum amet ex voluptate. Enim dolore quis duis occaecat excepteur ea. Veniam sit proident proident cupidatat ipsum eiusmod et anim cupidatat. Amet excepteur adipisicing enim nostrud Lorem labore amet. Qui ea fugiat non eiusmod esse qui veniam magna occaecat eiusmod dolor ea.</p>
                </div>
                <div className="col-6"  data-aos="zoom-in-left">
                <img src={Wireframe} alt="target" />
                    
                </div>
            </div>

            <div className="row">
                <div className="col-6" data-aos="zoom-in-right">
                    <h2><span className="greenspan">3. Developing</span> The Web App</h2>
                    <p>Reprehenderit quis cupidatat labore adipisicing adipisicing aute sunt aliqua mollit proident. Commodo esse consequat exercitation quis eu ad laborum ea Lorem. Laboris voluptate amet labore ex ipsum amet ex voluptate. Enim dolore quis duis occaecat excepteur ea. Veniam sit proident proident cupidatat ipsum eiusmod et anim cupidatat. Amet excepteur adipisicing enim nostrud Lorem labore amet. Qui ea fugiat non eiusmod esse qui veniam magna occaecat eiusmod dolor ea.</p>
                </div>
                <div className="col-6"  data-aos="zoom-in-left">
                <img src={Developing} alt="target" />
                </div>
            </div>

            <div className="row">
            <div className="col-6" data-aos="zoom-in-right">
            <h2><span className="greenspan">4. Testing</span> The Web App</h2>
                    <p>Reprehenderit quis cupidatat labore adipisicing adipisicing aute sunt aliqua mollit proident. Commodo esse consequat exercitation quis eu ad laborum ea Lorem. Laboris voluptate amet labore ex ipsum amet ex voluptate. Enim dolore quis duis occaecat excepteur ea. Veniam sit proident proident cupidatat ipsum eiusmod et anim cupidatat. Amet excepteur adipisicing enim nostrud Lorem labore amet. Qui ea fugiat non eiusmod esse qui veniam magna occaecat eiusmod dolor ea.</p>
                </div>
                <div className="col-6" data-aos="zoom-in-left">
                <img src={Testing} alt="target" />
                    
                </div>
            </div>

            <div className="row">
                <div className="col-6" data-aos="zoom-in-right">
                <h2><span className="greenspan">5. Deployment</span> of The Web App</h2>
                    <p>Reprehenderit quis cupidatat labore adipisicing adipisicing aute sunt aliqua mollit proident. Commodo esse consequat exercitation quis eu ad laborum ea Lorem. Laboris voluptate amet labore ex ipsum amet ex voluptate. Enim dolore quis duis occaecat excepteur ea. Veniam sit proident proident cupidatat ipsum eiusmod et anim cupidatat. Amet excepteur adipisicing enim nostrud Lorem labore amet. Qui ea fugiat non eiusmod esse qui veniam magna occaecat eiusmod dolor ea.</p>
                </div>
                <div className="col-6" data-aos="zoom-in-left">

                <img src={Deployement} alt="target" />

                </div>
            </div>

            </div>

            <div className="wsection3">
            <h2 data-aos="zoom-in-up" className="web" style={{marginTop:"15%"}}><span className="greenspan">Mobile App</span> Development Projects</h2>
            <hr />

            <div className="mobile4">
            <div className="row">
                <div className="col-12 cards" data-aos="zoom-in-up">
                    <span style={{color:"white"}}><i class="fa fa-sticky-note fa-5x" aria-hidden="true"></i></span>
                    <h2>StoneTech</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>

                <div className="col-12 cards" data-aos="zoom-in-up">
                    <span style={{color:"white"}}><i class="fa fa-sticky-note fa-5x" aria-hidden="true"></i></span>
                    <h2>Cosmo</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12 cards" data-aos="zoom-in-up">
                    <span style={{color:"white"}}><i class="fa fa-sticky-note fa-5x" aria-hidden="true"></i></span>
                    <h2>StoneTech</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>

                <div className="col-12 cards" data-aos="zoom-in-up">
                    <span style={{color:"white"}}><i class="fa fa-sticky-note fa-5x" aria-hidden="true"></i></span>
                    <h2>Cosmo</h2>
                    <p>Enim incididunt fugiat minim in cupidatat. Laborum velit sit cillum anim mollit reprehenderit. Aute excepteur id esse cupidatat sunt in consequat ea proident dolor qui. Excepteur do qui consectetur velit pariatur consectetur. Laborum culpa elit Lorem nisi ad adipisicing minim ex tempor adipisicing. Ullamco ipsum dolor tempor eu.</p>
                </div>
            </div>
            </div>
            </div>



            
            <Footer />
        </div>
    );
}

export default Mobile;
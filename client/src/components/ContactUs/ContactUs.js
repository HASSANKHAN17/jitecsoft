import React from 'react';
import "./ContactUs.scss"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {useForm} from 'react-hook-form'
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const [success,setSuccess] = React.useState(null)
    const [loading,setLoading] = React.useState(false)

    const onSubmit = (data,e)=>{
        setLoading(true)
        console.log(data);
        emailjs.sendForm('service_h5rtv2c', 'template_j7xbmho',e.target, 'user_FSNYDg6xpEqMSIFqFAsZ3')
          .then((result) => {
              console.log(result.text);
              setLoading(false)
          }, (error) => {
              console.log(error);
          });
    }
    return (
        <div>
            <Header id="5" />
            <div className="contactus">
            <h1>Let's Discuss and Convert Your <span className="greenspan">Idea</span> into a <span className="greenspan">tech</span> reality</h1>
            <form  onSubmit = {handleSubmit(onSubmit)}>
                <div className="inputdiv">
                <label>Name</label>
                <input {...register('firstname',{required:true})} className={errors.firstname?"errorinput":"greeninput"} placeholder="Enter Your Name" name="firstname" type="text" />
                {errors.firstname?<p className="errorname">Name is Invalid</p>:null}
                </div>

                <div className="inputdiv">
                <label>Email</label>
                <input {...register('email',{required:true})} className={errors.email?"errorinput":"greeninput"} placeholder="Enter Your Email" name="email" type="text"/>
                {errors.email?<p className="errorname">Email is Invalid</p>:null}
                </div>

                <div className="inputdiv">
                <label>Phone Number</label>
                <input {...register('number',{required:true})} className={errors.number?"errorinput":"greeninput"} placeholder="Enter Your Number" name="number" type="text" />
                {errors.number?<p className="errorname">Mobile Number is Invalid</p>:null}
                </div>
                <h1 className="giveus">Give Us Your Requirement</h1>
                <div className="inputdiv">
                <label>Message</label>
                <textarea {...register('Message',{required:true})} className={errors.Message?"errorinputtextarea":"greeninputtextarea"} placeholder="Message" name="Message" type="textarea" />
                {errors.Message?<p className="errorname">Message is Invalid</p>:null}
                </div>
                
                {loading?
               <div className="ui active dimmer">
               <div className="ui medium text loader">Loading</div>
             </div> 
               :<div>
                <button type="submit" className="btn-grad">Send <span style={{marginLeft:"10px"}}><i class="fa fa-paper-plane" aria-hidden="true"></i></span></button>    
                </div> }
            </form>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;
import React from 'react'
import "./Header.scss"
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
// import Logo from '../../Images/Group 15.png'
const Header = (props) => {
console.log(props);
	return (
        <div className="p-4 rounded" style={{margin:"auto 5%"}}>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark   navbarclass " >
	<div className="container-fluid">
        <Link to="/"><span className="greenspanlight" style={{fontWeight:"700",fontSize:"1.5em"}}><span className="greenspanwhite">JITEC</span>SOFT</span></Link>
		{/* <Link className="navbar-brand"  style={{color:"black"}} to="/"><img style={{height:"6vh"}} src={Logo} /></Link> */}
	<button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
		<span className="navbar-toggler-icon" ></span>
	</button>
	<div className="collapse navbar-collapse" id="navbarResponsive">
		<ul className="navbar-nav ml-auto" id="nav">
			<li className="nav-item">
			{props.id==="2"?<Link  className="nav-link active" to="/aboutus">About Us</Link>:<Link  className="nav-link"  to="/aboutus">About Us</Link>}
			</li>
			<li className="nav-item">
			{props.id==="3"?<Link  className="nav-link active" to="/services">Services</Link>:<Link  className="nav-link"  to="/services">Services</Link>}
			</li>
			<li className="nav-item">
			{props.id==="4"?<Link  className="nav-link active" to="/privacypolicy">Projects</Link>:<Link  className="nav-link"  to="/privacypolicy">Projects</Link>}
			</li>
			<li className="nav-item">
			{props.id==="5"?<Link  className="nav-link active" to="/contactus"><button style={{margin:"0 auto",padding:"10px 20px"}} className="btn-grad">Get In Touch</button></Link>:<Link  className="nav-link"  to="/contactus"><button style={{margin:"0 auto",padding:"10px 20px"}} className="btn-grad">Get In Touch</button></Link>}
			</li>
			
			
		</ul>
	</div>
</div>
</nav>
</div>
    );

}
// const mapStateToProps=({cart,user})=>{
// 	return {
// 		cartCount:cart.itemsCount,
// 		cart:cart.items,
// 		user:user.user
// 	}
// }
export default (Header);
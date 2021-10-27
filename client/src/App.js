import './App.scss';
import {Route,Switch} from 'react-router-dom' 
import Home from './components/Home'
import Web from './components/web/Web'
import Mobile from './components/Mobile/Mobile'
import Enterprise from './components/Enterprise/Enterprise'
import ContactUs from './components/ContactUs/ContactUs'
import AboutUs from './components/AboutUs/AboutUs'
import Services from './components/Services/Services'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/web" component={Web} />
      <Route path="/mobile" component={Mobile} />
      <Route path="/enterprise" component={Enterprise}  />
      <Route path="/contactus" component={ContactUs} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/services" component={Services} />
    </Switch>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import HowItWork from './components/HowItWork';
import Faq from './components/Faqs';
import GetInstantQuote from './components/GetInstantQuote';
// import GetInstantQuote from './pages/GetInstantQuote/GetInstantQuote';



function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/about-us" component={AboutUs} />

        <Route exact path="/contact-us">
          <ContactUs />
        </Route>

       

     

      

      

        <Route exact path="/how-it-work">
          <HowItWork />
        </Route>
        
        <Route exact path="/get-instant-quote">
          <GetInstantQuote />
        </Route>
        
       
       
        <Route exact path="/faq">
          <Faq />
        </Route>
       
      </Switch>
    </Router> 
    </>
  );
}

export default App;

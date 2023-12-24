import React from 'react'
import Navbar from '../../components/header/Navbar';
import Heroo from '../../components/hero/Heroo';
import About from '../../components/about/About';
import Teams from '../../components/teams/Teams';
import Ob from '../../components/objective/Ob'
import Footer from '../../components/footer/Footer';

 const Home = () => {
  return (
    <div>  
  <div><Navbar/></div>
  <div><Heroo/></div>
  <div><About/></div>
  <div><Ob/></div>
  <div><Teams/></div>
  <div><Footer/></div>
  
</div>
  )
}
export default Home;
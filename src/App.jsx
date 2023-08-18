import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero";
 import ABout from "./components/ABout";
import Interest from "./components/Interest";
 import Client from "./components/Client";
 import Exp from "./Exp";
 import Do from "./Do";
 import Test from "./Test";
 import Project from "./components/Project";
 import Contact from "./components/Contact";
 import Foot from "./components/Foot";

// import { Navbar } from "./components/Nav/Navbar";

const App=()=>{
  return (
    <>
    <Navbar/>

     <Hero/>
     <ABout/>
    <Interest/>
    <Client/>
     <Exp/>
     <Do/>
     <Test/>
     <Project/>
     <Contact/>  
      
     <Foot/>
    </>
  )
}
export default App;
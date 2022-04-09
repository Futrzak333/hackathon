
import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

import ReactDOM from "react-dom";
import qrcode from "./qrc";


ReactDOM.render(
    <React.StrictMode>
        <App   text="warning" />
    </React.StrictMode>,
    document.getElementById("root")
);


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Footer/>
    </>
  )
};

export default Home;

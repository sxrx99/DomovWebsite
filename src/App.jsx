import reactLogo from './assets/react.svg'
import logo from './assets/Logo.svg'
import './index.css'
import img1 from './assets/img1.svg'
import img2 from './assets/Nokia XR21.svg'
import img3 from './assets/chatbot.svg'
import mail from './assets/mail.svg'
import tel from './assets/image 1.svg'
import fb from './assets/fb.svg'
import insta from './assets/insta.svg'
import batta from './assets/batta.svg'
import khadidja from './assets/khadidja.svg'
import './Styles.css'
import menu from './assets/icons8-menu.svg'
import cross from './assets/icons8-multiply-30.png'
import { useState } from 'react'
import rafika from './assets/rafika.svg'
import nadine from './assets/nadine.svg'
import sarah from './assets/sarah.svg'
import rania from './assets/rania.svg'


function App() {
  
  const [menuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };
    
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  const handleButtonClickInstallationGuide = () => {
    window.open('/PRJP09_EQ02_SEHAD_MAHFOUDI_INSTALLATION_GUIDE.pdf', '_blank');
  };
  const handleButtonClickUserGuide= () => {
    window.open('/PRJP09_EQ02_SEHAD_MAHFOUDI_USER_GUIDE.pdf', '_blank');
  };

    
  const handleDownloadApk = () => {
   
    const apkUrl = '/application-c77734b0-e422-44a3-898d-57b6de1ac795.apk';
    
    
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'Domov.apk'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div class="container-fluid">
        <div id='home'>
        <nav>
          <div >
            <a href="#">
          <img className="mt-3 mx-3" src={logo} alt="logo" style={{ width: '60px', height: '60px' }}></img>

            </a>
          </div>
          <div className="navbar " >
          <img className="cross" src={cross} alt="cross" style={{ width: '30px', height: '30px' }} onClick={hideMenu} ></img>  
            <ul className="">
              <li style={{ fontSize: '18px' }} onClick={() => scrollToSection('home')} ><a>Home</a></li>
              <li style={{ fontSize: '18px' }} onClick={() => scrollToSection('Team') }><a>Domov team</a></li>
              <li style={{ fontSize: '18px' }} onClick={() => scrollToSection('download')}><a>Download</a></li>
              <li style={{ fontSize: '18px' }} onClick={() => scrollToSection('help')}><a>Help</a></li>
              {/* <li style={{ fontSize: '18px' }} onClick={() => scrollToSection('FAQ')}><a>FAQ</a></li> */}
              <li style={{ fontSize: '18px' }} onClick={() => scrollToSection('contact')}><a>Contact us</a></li>
            </ul>
          </div>
          { !menuVisible && <img className="menu-logo" src={menu} alt="menu" style={{ width: '30px', height: '30px'}} onClick={showMenu} ></img>}
       </nav>
       <style>{`
          @media (max-width: 768px) {
            .navbar {
              right: ${menuVisible ? '0' : '-300px'};
              zIndex: ${menuVisible ? '-1' : '1'};
            }
          }
        `}</style>
       


      
          <div class="Home">
            <div className="mx-5">
             <h1 className="title font-bold " >Domov.</h1>
             <h1 className="text mt-2"  >Precision in every touch , <br></br> 
              a scientifix marvel for your <br></br>
              smart home.
             </h1>
            </div>
            <div >
             <img src={img1} className="image"></img>
            </div>
          </div>

        </div>
        

          
        

        <div  className='Domov'>
          <div>
            <img src={img2} className="image"></img>
          </div>

          <div className=" mt-3 ">
            <h1 className="title font-bold "  >What is Domov ?</h1>
            <h1 className="text mt-2"  > 
            A smart home mobile <br></br>
            application for effortless <br></br>
            control of your lights and <br></br>
            garage door, delivering <br></br>
            unparalleled convenience <br></br>
            and efficiency.
            </h1>
          </div>
        </div>


        <div id='Team'>
        <h1 className='title mt-5 text-center font-bold'>Meet Domov team </h1>
        <div className="image-container">
          <img src={batta}  style={{ width: '300px', height: '320px' }} className='item'></img>
          <img src={khadidja} style={{ width: '300px', height: '320px' }} className='item'></img>
          <img src={rafika}  style={{ width: '300px', height: '320px' }} className='item'></img>
      

        
          <img src={nadine}  style={{ width: '300px', height: '320px' }} className='item'></img>
          <img src={sarah} style={{ width: '300px', height: '320px' }} className='item'></img>
          <img src={rania}  style={{ width: '300px', height: '320px' }} className='item'></img>
          </div>
        </div>
      
      
        <div id='download'>
          <h1 className='title text-center font-bold' >Get started </h1>
          <p className='text text-center mt-3 ' >Transform your home with Domov</p>
          <p className='text2 text-center mx-5'>download now for effortless control and convenience at your fingertips</p>
          <div className="btn d-flex justify-content-center mt-5">
          <button className='col-lg-3 border p-2 px-4'style={{ fontSize: '30px',borderRadius: '40px' }} onClick={handleDownloadApk}>download app</button>
          </div>

        </div>



        <div id='help'>
          <div className="section1">
            <div className="mx-5">
             <h1 className="title font-bold " >Need help ?</h1>
             <h1 className="text mt-2"  >For quick assistance with the<br></br>
              mobile application, download <br></br>
             the application’s user guide and <br></br>
             installation manual.<br></br>
             </h1>
            </div>
            <div className="image col-lg-4">
             <img src={img3} ></img>
            </div>
          </div>

          
          <div className="section2 row d-flex justify-content-between">
           <button className='col-lg-3 border p-2 px-4 ' style={{ borderRadius: '40px'  }} onClick={handleButtonClickUserGuide}> User guide</button>
           <button className='col-lg-3 border p-2 px-4 ' style={{  borderRadius: '40px'  }}  onClick={handleButtonClickInstallationGuide}>Installation manual </button>

           </div>
        </div>

       
         <div id='contact'>
           <h1  className="title text-center font-bold mt-5" >Contact Us</h1>
           <div className='container'>
           <div className="column mt-5">
              <a href="#">
               <div className="item mx-5">
                <img src={tel} ></img>
                <p >+213540656634</p>
               </div>
              </a>
              <a href="#">
              <div className="item">
               <img src={fb} ></img>
               <p >Domov Smart Switch</p>
              </div>
              </a>
            </div>
  

         <div className="column mt-5">
            <a href="#">
            <div className="item">
             <img src={mail}  ></img>
             <p >Domov2024@gmail.com</p>
            </div>
            </a>
            <a href="#">
            <div className="item">
            <img src={insta} ></img>
            <p >Domov_Smart_Switch</p>
             </div>
             </a>
         </div>

          </div>
           

         </div>
        

        
          <p className='text-center mt-5' style={{fontSize:"23px"}}>© 2024 ESI- Algiers. All rights reserved.</p>
        
       
        
      </div>
      
    </>

  )
  
}

export default App

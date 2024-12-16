import {Navigate, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Home.css"
import Footer from '../../components/Footer/footer'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Navigate to="/login" />
  }
  const navigate = useNavigate();
  
  const goToMockInt = () => {
    navigate('/MockInterviews');
  };

  const goToMockTest = () => {
    navigate('/MockTests');
  };

  return (
    <div className="home">
     
      <div>
        {/* <Sidebar/> */}
        <Navbar/>
        </div>
        <div>
        <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Master Your Future with AI Excellence</h1>
        {/* <img
        src="https://www.pngmart.com/files/21/Job-Interview-PNG-Picture.png"
        alt="clothes that get you noticed"
        className="home-mobile-img"
      /> */}
        <p className="home-description">
          Aimock brings AI-driven mock interviews and skill-boosting tests for
          every career path. Prepare for roles like software, GATE, and civil
          services with tailored simulations. Gain confidence with expert
          feedback and comprehensive mock tests. Upskill, stand out, and secure
          your dream job!"
        </p>
        
           </div>
           <div className='hom-img'>
           {/* <img
        src="https://www.pngmart.com/files/21/Job-Interview-PNG-Picture.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      /> */}
           </div>
           </div>
        <div className="buttonSet">
          <div >
            <img src="./rb_4415.png" alt="" className='img1' />
            
            <input type="button" className="shop-now-button" value="Mock Interview" onClick={goToMockInt} />
          </div>
          <div>
                <img src="./rb_5412.png" alt="" className='img2'/>
            
            <input type="button" className="shop-now-button" value="Mock Tests" onClick={goToMockTest} />
            </div>
        </div>
    
        
        <Footer />
        </div>
    </div>

  )
}
export default Home
import BBG from '../src/assets/head.jpg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">I am <Link to="/about"><span className="introName">Xueqiu(Joey) Chen</span> </Link>
          <img src={BBG} alt="profile" className="bbg" align="right" />
          <br/>Website Designer</span>
          <p className="introPara">I am an experienced full-stack developer with a strong background in both front-end and back-end technologies.</p>
          <Link to="/contact"><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></Link>
          
          </div>
          
     </section>
    

     </>
     }
    
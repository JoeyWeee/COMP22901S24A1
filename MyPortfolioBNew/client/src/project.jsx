/* 
File Name: project.jsx
Author: Xueqiu(Joey) Chen
ID: 301310177
Date: 2024-05-24
*/
import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.jpg';
import project4 from '../src/assets/project4.jpg';
import project5 from '../src/assets/project5.jpg';
import project6 from '../src/assets/project6.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
          const handleClick = (url) => {
               window.open(url, '_blank');
          };
     return <>
     
     <section id="works">
         
          <h2 className="worksTitle">My Projects</h2>
          <span className="worksDesc">I take pride in paying attention to the smallest details and making sure my work is pixel perfect/ 
          I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span> 
          <div className="worksImgs">
                    <figure className="project" onClick={() => handleClick('http://studentweb.cencol.ca/xchen295/2023fall/Final%20Project/Home.html')}>
                         <img src={project1} alt="project1" className="worksImg" />
                         <figcaption className="worksName">Customize Table</figcaption>
                    </figure>
                    <figure className="project" onClick={() => handleClick('http://studentweb.cencol.ca/xchen295/2024w/assignment2/js05_txt.html')}>
                         <img src={project2} alt="project2" className="worksImg" />
                         <figcaption className="worksName">Photos</figcaption>
                    </figure>
                    <figure className="project" onClick={() => handleClick('http://studentweb.cencol.ca/xchen295/2024w/assignment3--canva/index.html')}>
                         <img src={project3} alt="project3" className="worksImg" />
                         <figcaption className="worksName">Catch Mouse</figcaption>
                    </figure>
                    <figure className="project" onClick={() => handleClick('http://http://studentweb.cencol.ca/xchen295/2023fall/Assignment3/assignment3.html')}>
                         <img src={project4} alt="project4" className="worksImg" />
                         <figcaption className="worksName">Feedback Survey</figcaption>
                    </figure>
                    <figure className="project" onClick={() => handleClick('http://studentweb.cencol.ca/xchen295/Midterm%20-%20Start-up/index.html')}>
                         <img src={project5} alt="project5" className="worksImg" />
                         <figcaption className="worksName">Form Submit</figcaption>
                    </figure>
                    <figure className="project" onClick={() => handleClick('http://studentweb.cencol.ca/xchen295/2023fall/Final%20Project/Home.html')}>
                         <img src={project6} alt="project6" className="worksImg"  />
                         <figcaption className="worksName">Real Estate Site</figcaption>
                    </figure>
               
               </div>

          <button className="workBtn">See More</button>
                  
                  
     </section>
    

     </>
    }
    
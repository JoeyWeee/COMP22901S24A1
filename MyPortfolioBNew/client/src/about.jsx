/* 
File Name: about.jsx
Author: Xueqiu(Joey) Chen
ID: 301310177
Date: 2024-05-24
*/
import BBG from '../src/assets/head.jpg';
import front from '../src/assets/web-icon.svg';
import code from '../src/assets/web.png';
import database from '../src/assets/database.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill">
         
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I am an experienced full-stack developer with a strong background in both front-end and back-end technologies. I am passionate about technology, enjoy solving complex technical problems, and am committed to delivering high-quality software solutions to my clients.</span> 
          <div className="skillBar">
               <img src={front} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Front-End Technologies</h2>
               <p>HTML: Proficient in HTML5, capable of writing semantic markup to ensure website accessibility and SEO optimization.
CSS: Skilled in using CSS3 for styling web pages, familiar with Flexbox and Grid layouts, and able to create responsive and cross-browser compatible designs.
JavaScript: Knowledgeable in ES6+, able to write efficient and maintainable front-end logic using JavaScript, and proficient with both vanilla JavaScript and modern front-end frameworks.</p>
               </div>
          </div>
          
          <div className="skillBar">
               <img src={code} alt="Back-End" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Back-End Technologies</h2>
               <p>C#: Experienced in C# programming, with expertise in developing web applications using ASP.NET, and capable of writing efficient and secure back-end services.
Java: Proficient in Java programming, with experience in back-end development using the Spring framework, and able to create robust server-side applications.</p>
               </div>
          </div>

          <div className="skillBar">
               <img src={database} alt="Database" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Database Management</h2>
               <p>Oracle: Skilled in designing and managing Oracle databases, capable of writing efficient SQL queries, and experienced in database optimization and performance tuning.
MongoDB: Proficient in using MongoDB for NoSQL database design and management, able to handle large-scale data and implement efficient data storage and retrieval.   </p>
               </div>
          </div>
          
                  
     </section>
    

     </>
    }
    
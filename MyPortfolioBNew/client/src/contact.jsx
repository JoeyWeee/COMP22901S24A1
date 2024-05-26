/* 
File Name: contact.jsx
Author: Xueqiu(Joey) Chen
ID: 301310177
Date: 2024-05-24
*/
import '../src/contact.css'
import { Link } from 'react-router-dom';
export default function Contact() {

     return (
     <>
     <p>Contact</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<Link to="/"><input type="submit" className="submit" value="Submit" /> <br /></Link>
					
		
		</form> <br></br>
          <p><i>Call me on: <strong>437-351-0669 </strong></i></p>
          <p>Instagram:joey.chen996</p>
          <p>email:jiujiedexiaohuozi@gmail.com</p>
     </>
     );
     }
    
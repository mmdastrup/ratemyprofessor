import React, { Component } from "react";
import Navbar from "./navbar";

class About extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="wrapper">
        <div className="TopBar">
          <div className="FacebookLink">
            <i class="fab fa-facebook"></i>
          </div>
          <div className="SnapChatLink">
            <i class="fab fa-instagram"></i>
          </div>
          <div className="TwitterLink">
            <i class="fab fa-twitter-square"></i>
          </div>
        </div>
        <div className = "ATOPLINE">
            <a>
              About Us
            </a>
            <div className = "HR"></div>
        </div>
        <div className="About">
          <a>TeacherRate.com is a great destination for professor ratings and reviews. New ratings are being added each day. We have thousands of professors that you can
          see and read about. If you like you may also sign up for an account and leave a review of your own for others to view. TeacherRate has helped many students discover
          the pros and cons of the professors at their schools so that they may choose a good professor that better fits their learning style. (As a disclaimer this was actually
          class project we worked on)</a>
        </div>
          <div className = "FTOPLINE">
            <a>
              FAQS
            </a>
            <div className = "HR"></div>
          </div>
        <div className="FAQS" >
          <a>Q: What if my school is not listed?</a>
          <a>A: Contact us directly so we can add the school to our database. We will then check to make sure the school is accredited and official, then we will add it.</a>
          <a>Q: How accurate are the reviews?</a>
          <a>A: For this reason we have the overall rating system. There can always be one student to leave a bad review but when everyone else, or the majority of users
          leave postive reviews and ratings then the professors overall start rating (1 through 5 starts) will be higher. This is the best way we can make sure that the ratings
          are acurate.</a>
          <a>Q: Does TeacherRate use cookies?</a>
          <a>A: Yes but you can disable this in your browser settings.</a>
        </div>  
          <div className = "CUTOPLINE">
            <a>
              Contact Us
            </a>
            <div className = "HR"></div>
          </div>
          <div className="ContactUs">
            <div className="CULeft">
              <a className = "FN">FIRST NAME</a>
              <a>LAST NAME</a>
              <a>SCHOOL</a>
              <a>EMAIL</a>
              <a>COMMENTS</a>
            </div>
            <div className="CURight">
              <a>
                <input type="text" name="FirstName"  className = "FNTB"></input>
              </a>
              <a>
                <input type="text" name="LastName" className = "LNTB"></input>
              </a>
              <a>
                <input type="text" name="School" className = "STB"></input>
              </a>
              <a>
                <input type="text" name="Email" className = "ETB"></input>
              </a>
              <div>
                <textarea type="text" name="Comments" className = "CTB"></textarea>
              </div>
              <div className = "sumit">
                <button href="#">Submit Response</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                // Image goes here
                src = {profile_pic_name}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Riya Gandhi</div>
                <div className="brief_description">
                  Fun Facts: I am from Arkansas, I love designing things :), and lastly I have travelled outside the country 4 times!
                  <br></br>
                  <br></br>
                  Hobbies: Listening to music, painting, and coding 
                  <br></br>
                  <br></br>
                  Interests: Front-End Development, Cyber-Security, and ML/AI
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
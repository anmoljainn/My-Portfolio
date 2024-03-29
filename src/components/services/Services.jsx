import React from "react";
import "./services.css";

function Services() {
  return (
    <section id="services">
      
      <h2>Education & Projects</h2>
      <div className="container services__container">
        
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>
          <ul className="service__list">
            <li>
              
              <h3 ><b className="college">College of Engineering Roorkee</b>, Bachelors</h3>
             
            </li>
            <li> <h5>2020-2024, Information Technology ,Roorkee ,Uttarakhand</h5></li><br />
            <li>
             
              <h3><b className="college">SVM Inter College</b>, Intermediate Education</h3>
             
            </li>
            <li><h5>2018-2020, PCM, Saharanpur, Uttar Pradesh</h5></li><br />
            <li>
              <h3><b className="college">SVM Inter College</b>, High School</h3>
            </li>
            <li>
             <h5>2017-2018, Saharanpur, Uttar Pradesh</h5>
            </li>
            
          </ul>
        </article>
       
      </div>
    </section>
  );
}

export default Services;

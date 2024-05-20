import React from 'react';
import './AboutMe.css'; // Make sure to create this CSS file

function AboutMe() {
  return (
    <div className="about-me">
      <div className="profile">
        <img src="/profile.jpg" alt="Profile" className="profile-img" />
        <h2>Garrett West</h2>
        <p>Web Developer Enthusiast</p>
      </div>
      <div className="bio">
        <h3>About Me</h3>
        <p>
          Hello! I'm Garrett, a passionate web development enthusiast with a focus on HTML, CSS, JavaScript, React, and Node.js. I'm currently learning full-stack development, including Python, Flask, Django, and SQL databases. I love creating web applications and am eager to apply my skills in real-world projects.
        </p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js</li>
          <li>Python, Flask, Django</li>
          <li>SQL Databases</li>
        </ul>
      </div>
      <div className="self-taught">
        <h3>Self-Taught</h3>
        <div className="courses">
          <div className="course">
            <a href="https://www.coursera.org/learn/html-css-javascript" target="_blank" rel="noopener noreferrer">
              <img src="/html-css-javascript-course.jpg" alt="HTML, CSS, and JavaScript Course" />
            </a>
            <p>HTML, CSS, and JavaScript (Coursera)</p>
          </div>
          <div className="course">
            <a href="https://www.udacity.com/course/react-nanodegree--nd019" target="_blank" rel="noopener noreferrer">
              <img src="/react-nanodegree.jpg" alt="React Nanodegree" />
            </a>
            <p>React Nanodegree (Udacity)</p>
          </div>
          <div className="course">
            <a href="https://www.pluralsight.com/courses/python-getting-started" target="_blank" rel="noopener noreferrer">
              <img src="/python-course.jpg" alt="Python Course" />
            </a>
            <p>Getting Started with Python (Pluralsight)</p>
          </div>
          {/* Add more courses and certificates as needed */}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

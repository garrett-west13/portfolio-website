import React, { useState } from 'react';
import './AboutMe.css'; // Make sure to create this CSS file

function AboutMe() {
  const [enlargedImgSrc, setEnlargedImgSrc] = useState(null);

  const handleImgClick = (src) => {
    setEnlargedImgSrc(src);
  };

  const handleCloseEnlargedImg = () => {
    setEnlargedImgSrc(null);
  };

  return (
    <div className="container">
      <div className="about-me">
        <div className="profile">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="profile-img"
            onClick={() => handleImgClick('/profile.jpg')}
          />
          <h2>Garrett West</h2>
          <p>Web Developer Enthusiast</p>
        </div>
        <div className="bio">
        <h3>About Me</h3>
        <p>
        Hello! I'm Garrett, a passionate web developer skilled in HTML, CSS, JavaScript, React, and Node.js. I love creating dynamic and responsive web applications.
        </p>
        <p>
          I'm expanding my skill set to full-stack development with Python, Flask, Django, and SQL databases to build robust, scalable applications.
        </p>
        <p>
          I enjoy solving complex problems and continuously improving my coding skills. My goal is to leverage my technical skills and creativity to build impactful web applications.
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
              <img
                src="/freeCodeCamp.png"
                alt="HTML and CSS Course"
                onClick={() => handleImgClick('/freeCodeCamp.png')}
              />
              <p>
                <a
                  href="https://www.freecodecamp.org/garrett_west"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HTML and CSS Responsive Web Design (freeCodeCamp)
                </a>
              </p>
            </div>
            <div className="course">
              <img
                src="/CS50x.png"
                alt="CS50x Introduction Course"
                onClick={() => handleImgClick('/CS50x.png')}
              />
              <p>
                <a
                  href="https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?webview=false&campaign=CS50%27s+Introduction+to+Computer+Science&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fschool%2Fharvardx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CS50's Introduction to Computer Science (edx)
                </a>
              </p>
            </div>
            <div className="course">
              <img
                src="/CS50W.png"
                alt="CS50W Web Programming Course"
                onClick={() => handleImgClick('/CS50W.png')}
              />
              <p>
                <a
                  href="https://www.edx.org/learn/web-development/harvard-university-cs50-s-web-programming-with-python-and-javascript?webview=false&campaign=CS50%27s+Web+Programming+with+Python+and+JavaScript&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Fschool%2Fharvardx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CS50's Web Programming with Python and JavaScript (edx)
                </a>
              </p>
            </div>
            {/* Add more courses and certificates as needed */}
          </div>
        </div>
      </div>
      {enlargedImgSrc && (
        <>
          <div className="overlay" onClick={handleCloseEnlargedImg}></div>
          <img
            src={enlargedImgSrc}
            alt="Enlarged"
            className="enlarged"
            onClick={handleCloseEnlargedImg}
          />
        </>
      )}
    </div>
  );
}

export default AboutMe;

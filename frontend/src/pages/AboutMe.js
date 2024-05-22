import React, { useState } from 'react';
import './AboutMe.css'; 

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
            alt="Garrett West's Profile"
            className="profile-img"
            onClick={() => handleImgClick('/profile.jpg')}
          />
          <h2>Garrett West</h2>
          <p>Web Developer</p>
        </div>
        <div className="bio">
          <h3>About Me</h3>
          <p>
            Hello! I'm Garrett, a passionate web developer with experience in HTML, CSS, JavaScript, React, Node.js, Python, Flask, and Django. I love creating dynamic and responsive web applications.
          </p>
          <p>
            I enjoy solving complex problems and continuously improving my coding skills. My goal is to leverage my technical expertise and creativity to build impactful web applications, and I'm committed to continuous learning and growth.
          </p>
          <p>
            Whether it's using familiar technologies or exploring new ones, I thrive on overcoming challenges and expanding my skill set.
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
          <h3 className="mb-3 border-bottom">Self-Taught</h3>
          <div className="courses">
            <div className="course">
              <img
                src="/freeCodeCamp.png"
                alt="HTML and CSS Responsive Web Design Course"
                onClick={() => handleImgClick('/freeCodeCamp.png')}
              />
              <p>
                <a
                  href="https://www.freecodecamp.org/certification/garrett_west/responsive-web-design"
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
                alt="CS50's Introduction to Computer Science Course"
                onClick={() => handleImgClick('/CS50x.png')}
              />
              <p>
                <a
                  href="https://cs50.harvard.edu/certificates/614eada8-8255-4cb7-ba2a-cba79dbbd56a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CS50's Introduction to Computer Science (edX)
                </a>
              </p>
            </div>
            <div className="course">
              <img
                src="/CS50W.png"
                alt="CS50's Web Programming with Python and JavaScript Course"
                onClick={() => handleImgClick('/CS50W.png')}
              />
              <p>
                <a
                  href="https://cs50.harvard.edu/certificates/3c420b93-6ccb-4676-b9a5-f74625f1855e"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CS50's Web Programming with Python and JavaScript (edX)
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
            alt="Enlarged Course Certificate"
            className="enlarged"
            onClick={handleCloseEnlargedImg}
          />
        </>
      )}
    </div>
  );
}

export default AboutMe;

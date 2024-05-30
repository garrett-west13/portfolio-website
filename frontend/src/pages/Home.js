import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-7">
          <div className="text-center home-container">
            <h1 className="mb-4">Welcome to My Portfolio</h1>
            <p className="lead">
              Hi, I'm <strong className="text-primary"><Link className="no-underline" to="/about">Garrett West</Link></strong>, a dedicated web developer with a passion for crafting engaging and innovative websites and applications. With experience in modern web technologies and a keen eye for detail, I strive to build seamless user experiences.
            </p>
            <p>
              Dive into my portfolio to explore the projects I've worked on, showcasing my skills in HTML, CSS, JavaScript, Python, Django, and more. Whether it's front-end or back-end development, I'm excited to share my journey and work with you.
            </p>
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

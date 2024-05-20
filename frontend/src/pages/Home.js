import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="text-center home-container">
            <h1 className="mb-4">Welcome to My Portfolio</h1>
            <p className="lead">
              Hi, I'm <strong>Garrett West</strong>, a web developer passionate about creating awesome websites and applications. Explore my portfolio to see some of my projects and learn more about me.
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

import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Password Manager",
    description: "A password manager that allows users to store and retrieve passwords securely.",
    link: "https://github.com/garrett-west13/PasswordManager",
    image: "/password-manager.png",
    technologies: ["Flask", "Python", "JavaScript"],
    features: ["Secure storage", "User authentication", "Password generation"]
  },
  {
    title: "Budget App",
    description: "A budget app that allows users to track their expenses and income.",
    link: "https://github.com/garrett-west13/budget-app",
    image: "/budget-app.png",
    technologies: ["Django", "Python", "JavaScript"],
    features: ["Expense tracking", "Income tracking", "Yearly budget report"]
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="container">
      <div className="projects">
      <h2 className="text-center mb-5">My Projects</h2>
        <div className="row mt-5">
          {projects.map((project, index) => (
            <div className="col-12 col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                  <p><strong>Features:</strong> {project.features.join(', ')}</p>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

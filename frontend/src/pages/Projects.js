import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Password Manager",
    description: "A password manager that allows users to store and retrieve passwords securely.",
    link: "https://garrett-password-manager-d9641fbbb90e.herokuapp.com/",
    link2: "https://github.com/garrett-west13/PasswordManager",
    image: "/password-manager.png",
    technologies: ["Flask", "Python", "JavaScript"],
    features: ["Secure storage", "User authentication", "Password generation"]
  },
  {
    title: "Budget App",
    description: "A budget app that allows users to track their expenses and income.",
    link: "https://garrett-budget-app-b4fd2d9cdfc5.herokuapp.com/",
    link2: "https://github.com/garrett-west13/budget-app",
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
                  <a href={project.link} className="btn btn-primary mr-2" target="_blank" rel="noopener noreferrer">View Project</a>
                  {project.link2 && (
                    <a href={project.link2} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">View Code</a>
                  )}
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

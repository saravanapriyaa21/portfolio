import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { ExternalLink, Github, Trophy } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubLink: "https://github.com/saravana-priyaa/ecommerce-platform",
      liveLink: "https://ecommerce-demo.example.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      githubLink: "https://github.com/saravana-priyaa/task-manager",
      liveLink: "https://task-manager-demo.example.com"
    },
    {
      title: "Weather Forecast Dashboard",
      description: "A responsive weather dashboard that provides detailed weather information and forecasts using external APIs with beautiful data visualizations.",
      technologies: ["JavaScript", "Chart.js", "Weather API", "Bootstrap"],
      githubLink: "https://github.com/saravana-priyaa/weather-dashboard",
      liveLink: "https://weather-dashboard-demo.example.com"
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing projects, skills, and experience with modern design and smooth animations.",
      technologies: ["React", "Bootstrap", "CSS3", "React Router"],
      githubLink: "https://github.com/saravana-priyaa/portfolio",
      liveLink: "https://saravana-priyaa.example.com"
    }
  ];

  const hackathons = [
    {
      name: "Hack with gujarat 2025",
      position: "Participant",
      project: "Legal-Ease",
      description: "A Streamlit app that summarizes legal contracts using NLP for quick and easy understanding. "
    },
    {
      name: "AI in Action-google cloud",
      position: "Participant",
      project: "Coloré",
      description: "Tired of guessing how a paint color will look on your wall? COLORÉ brings your room to life with smart, AI-powered color previews. "
    },
    {
      name: "",
      position: "Participant",
      project: "Blockchain Payment Gateway",
      description: "Built a secure and scalable payment gateway using blockchain technology for seamless cryptocurrency transactions."
    },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Projects Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h1 className="text-center mb-5">My Projects</h1>
              <Row className="g-4">
                {projects.map((project, index) => (
                  <Col lg={6} key={index}>
                    <Card className="h-100 project-card shadow-sm border-0">
                      <Card.Body className="d-flex flex-column">
                        <h4 className="card-title mb-3">{project.title}</h4>
                        <p className="card-text text-muted mb-3">{project.description}</p>
                        <div className="mb-3">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge bg="primary" className="me-2 mb-2" key={techIndex}>
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-auto">
                          <Button 
                            className="btn-vibrant me-2 mb-2"
                            href={project.githubLink}
                            target="_blank"
                          >
                            <Github size={16} className="me-1" />
                            View Code
                          </Button>
                          <Button 
                            className="btn-vibrant mb-2"
                            style={{background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)'}}
                            href={project.liveLink}
                            target="_blank"
                          >
                            <ExternalLink size={16} className="me-1" />
                            Live Demo
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Hackathons Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="text-center mb-5">
                <Trophy className="text-warning mb-3" size={48} />
                <h2>Hackathons Participated</h2>
                <p className="text-muted">Competitions and challenges that pushed my limits</p>
              </div>
              <Row className="g-4">
                {hackathons.map((hackathon, index) => (
                  <Col lg={6} key={index}>
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <h5 className="card-title mb-0">{hackathon.name}</h5>
                          <Badge 
                            bg={hackathon.position.includes('Winner') || hackathon.position.includes('1st') ? 'success' : 
                                hackathon.position.includes('2nd') ? 'warning' : 
                                hackathon.position.includes('3rd') ? 'info' : 'secondary'}
                          >
                            {hackathon.position}
                          </Badge>
                        </div>
                        <h6 className="text-primary mb-2">{hackathon.project}</h6>
                        <p className="card-text text-muted">{hackathon.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Mail, Phone, Linkedin, Github, User } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-3 fw-bold mb-4">
                Hi, I'm <span className="text-warning">Saravana Priyaa</span>
              </h1>
              <p className="lead mb-5">
                Passionate Developer | Technology Enthusiast | Problem Solver
              </p>
              <Button variant="outline-light" size="lg" className="me-3">
                <User className="me-2" size={20} />
                Learn More About Me
              </Button>
              <Button className="btn-vibrant" size="lg">
                <Mail className="me-2" size={20} />
                Get In Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Me Preview */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="shadow-lg border-0">
                <Card.Body className="p-5">
                  <h2 className="text-center mb-4">About Me</h2>
                  <p className="text-muted mb-4">
                    I'm a dedicated software developer with a passion for creating innovative solutions 
                    and learning new technologies. With experience in full-stack development, I enjoy 
                    tackling complex problems and building user-friendly applications.
                  </p>
                  <p className="text-muted">
                    When I'm not coding, you can find me exploring new technologies, participating in 
                    hackathons, or contributing to open-source projects. I believe in continuous 
                    learning and staying updated with the latest industry trends.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h3 className="text-center mb-5">Get In Touch</h3>
              <Row className="g-4">
                <Col md={6}>
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body>
                      <div className="mb-3">
                        <Phone className="text-primary" size={32} style={{filter: 'drop-shadow(0 0 10px rgba(0,123,255,0.3))'}} />
                      </div>
                      <h5>Phone</h5>
                      <p className="text-muted">+91 6374027134</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body>
                      <div className="mb-3">
                        <Mail className="text-primary" size={32} style={{filter: 'drop-shadow(0 0 10px rgba(0,123,255,0.3))'}} />
                      </div>
                      <h5>Email</h5>
                      <p className="text-muted">saravanapriyaa21@gmail.com</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body>
                      <div className="mb-3">
                        <Linkedin className="text-primary" size={32} style={{filter: 'drop-shadow(0 0 10px rgba(0,123,255,0.3))'}} />
                      </div>
                      <h5>LinkedIn</h5>
                      <a href="https://www.linkedin.com/in/saravana-priyaa-c-r-770464350/" className="text-decoration-none">
                        linkedin.com/in/saravana-priyaa
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body>
                      <div className="mb-3">
                        <Github className="text-primary" size={32} style={{filter: 'drop-shadow(0 0 10px rgba(0,123,255,0.3))'}} />
                      </div>
                      <h5>GitHub</h5>
                      <a href="https://github.com/saravanapriyaa21" className="text-decoration-none">
                        github.com/saravanapriyaa21
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
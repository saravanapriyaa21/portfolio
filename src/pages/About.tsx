import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Mail, Phone, Linkedin, Github, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* About Me Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1 className="text-center mb-5">About Me</h1>
              <Card className="shadow-lg border-0 mb-5">
                <Card.Body className="p-5">
                  <h3 className="mb-4">My Background</h3>
                  <p className="text-muted mb-4">
                    I'm Saravana Priyaa, a passionate software developer with a strong foundation in 
                    computer science and a love for creating innovative digital solutions. My journey 
                    in technology began during my college years, where I discovered my passion for 
                    programming and problem-solving.
                  </p>
                  <p className="text-muted mb-4">
                    Over the years, I've developed expertise in various programming languages and 
                    frameworks, with a particular focus on web development and software engineering. 
                    I enjoy working on challenging projects that push the boundaries of what's possible 
                    with technology.
                  </p>
                  <p className="text-muted">
                    I believe in continuous learning and staying updated with the latest industry trends. 
                    My goal is to create meaningful applications that solve real-world problems and 
                    make a positive impact on people's lives.
                  </p>
                </Card.Body>
              </Card>

              {/* Contact Info */}
              <Row className="g-4 mb-5">
                <Col md={6}>
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body>
                      <Phone className="text-primary mb-3" size={24} />
                      <h6>Phone</h6>
                      <p className="text-muted small">+91 6374027134</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body>
                      <Mail className="text-primary mb-3" size={24} />
                      <h6>Email</h6>
                      <p className="text-muted small">saravanapriyaa21@gmail.com</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body>
                      <Linkedin className="text-primary mb-3" size={24} />
                      <h6>LinkedIn</h6>
                      <a href="https://www.linkedin.com/in/saravana-priyaa-c-r-770464350/" className="text-decoration-none small">
                        linkedin.com/in/saravana-priyaa
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 text-center border-0 shadow-sm">
                    <Card.Body>
                      <Github className="text-primary mb-3" size={24} />
                      <h6>GitHub</h6>
                      <a href="https://github.com/saravanapriyaa21" className="text-decoration-none small">
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

      {/* Experience & Education Timeline */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h2 className="text-center mb-5">Experience & Education</h2>
              
              <div className="timeline">
                {/* Experience Items */}
                <div className="timeline-item">
                  <div className="timeline-content">
                    <div className="d-flex align-items-center mb-2">
                      <Briefcase className="text-primary me-2" size={20} />
                      <h5 className="mb-0"></h5>
                    </div>
                    <h6 className="text-primary mb-2"></h6>
                    <p className="text-muted mb-0">
                      
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-content">
                    <div className="d-flex align-items-center mb-2">
                      <Briefcase className="text-primary me-2" size={20} />
                      <h5 className="mb-0"></h5>
                    </div>
                    <h6 className="text-primary mb-2"></h6>
                    <p className="text-muted mb-0">
                     
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-content">
                    <div className="d-flex align-items-center mb-2">
                      <GraduationCap className="text-success me-2" size={20} />
                      <h5 className="mb-0"></h5>
                    </div>
                    <h6 className="text-success mb-2"></h6>
                    <p className="text-muted mb-0">
                      
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-content">
                    <div className="d-flex align-items-center mb-2">
                      <Briefcase className="text-primary me-2" size={20} />
                      <h5 className="mb-0"></h5>
                    </div>
                    <h6 className="text-primary mb-2"></h6>
                    <p className="text-muted mb-0">
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-content">
                    <div className="d-flex align-items-center mb-2">
                      <GraduationCap className="text-success me-2" size={20} />
                      <h5 className="mb-0"></h5>
                    </div>
                    <h6 className="text-success mb-2"></h6>
                    <p className="text-muted mb-0">
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
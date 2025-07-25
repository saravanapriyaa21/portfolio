import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Send, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Contact Header */}
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold mb-3">Stay Connected!</h1>
              <p className="lead">
                Let's collaborate and create something amazing together. 
                I'm always excited to discuss new opportunities and projects.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form and Info */}
      <section className="contact-form">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row className="g-5">
                {/* Contact Form */}
                <Col lg={7}>
                  <Card className="shadow-lg border-0 h-100">
                    <Card.Body className="p-5">
                      <h3 className="mb-4">Send Me a Message</h3>
                      
                      {showAlert && (
                        <Alert variant="success" className="mb-4">
                          <strong>Thank you!</strong> Your message has been sent successfully. 
                          I'll get back to you soon!
                        </Alert>
                      )}

                      <Form onSubmit={handleSubmit}>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Your Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                required
                                size="lg"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Email Address</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                required
                                size="lg"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group className="mb-4">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell me about your project or just say hello!"
                            required
                          />
                        </Form.Group>
                        <Button 
                          type="submit" 
                          size="lg"
                          className="btn-vibrant w-100"
                        >
                          <Send className="me-2" size={20} />
                          Send Message
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Contact Information */}
                <Col lg={5}>
                  <Card className="shadow-lg border-0 h-100">
                    <Card.Body className="p-5">
                      <h3 className="mb-4">Get In Touch</h3>
                      <p className="text-muted mb-4">
                        Feel free to reach out through any of these channels. 
                        I'm always happy to connect and discuss new opportunities.
                      </p>

                      <div className="contact-info">
                        <div className="d-flex align-items-center mb-4">
                          <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                            <Mail className="text-primary" size={24} />
                          </div>
                          <div>
                            <h6 className="mb-1">Email</h6>
                            <p className="text-muted mb-0">saravanapriyaa21@gmail.com</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center mb-4">
                          <div className="bg-success bg-opacity-10 rounded-circle p-3 me-3">
                            <Phone className="text-success" size={24} />
                          </div>
                          <div>
                            <h6 className="mb-1">Phone</h6>
                            <p className="text-muted mb-0">+91 6374027134</p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center mb-4">
                          <div className="bg-info bg-opacity-10 rounded-circle p-3 me-3">
                            <MapPin className="text-info" size={24} />
                          </div>
                          <div>
                            <h6 className="mb-1">Location</h6>
                            <p className="text-muted mb-0">Coimbatore, Tamil Nadu, India</p>
                          </div>
                        </div>

                        <hr className="my-4" />

                        <h6 className="mb-3">Follow Me</h6>
                        <div className="social-links">
                          <a 
                            href="https://www.linkedin.com/in/saravana-priyaa-c-r-770464350/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="linkedin"
                          >
                            <Linkedin size={20} />
                          </a>
                          <a 
                            href="https://github.com/saravanapriyaa21" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="github"
                          >
                            <Github size={20} />
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
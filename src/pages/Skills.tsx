import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Code, Monitor, PenTool as Tool, Cloud, Cpu, Database, Heart, Gamepad2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-primary" size={32} />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML5",]
    },
    {
      title: "Web Development",
      icon: <Monitor className="text-success" size={32} />,
      skills: ["HTML","javascript","React", "Node.js", "Express.js","Bootstrap",]
    },
    {
      title: "Tools",
      icon: <Tool className="text-warning" size={32} />,
      skills: ["Git", "Docker", "Webpack", "Vite", "VS Code"]
    },
    {
      title: "Cloud & APIs",
      icon: <Cloud className="text-info" size={32} />,
      skills: ["AWS", "Firebase","Google APIs"]
    },
    {
      title: "Embedded",
      icon: <Cpu className="text-danger" size={32} />,
      skills: ["Arduino", "Raspberry Pi", "IoT Development", "Sensor Integration", "Embedded C"]
    },
    {
      title: "Database",
      icon: <Database className="text-dark" size={32} />,
      skills: ["MongoDB", "MySQL","Firebase Firestore"]
    }
  ];

  const hobbies = [
    "Photography", "Travel", "Reading Fictions",
     "Music", "Cooking", "Hiking","painting"
  ];

  const interests = [
    "Artificial Intelligence", "Machine Learning", "Blockchain Technology", "IoT Development",
    "Mobile App Development", "Cloud Computing", "Cybersecurity", "DevOps", "UI/UX Design"
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Technical Skills Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <h1 className="text-center mb-5">Technical Skills</h1>
              <Row className="g-4">
                {skillCategories.map((category, index) => (
                  <Col lg={4} md={6} key={index}>
                    <Card className="h-100 skill-card text-center">
                      <Card.Body className="p-4">
                        <div className="mb-3">
                          {category.icon}
                        </div>
                        <h4 className="card-title mb-4">{category.title}</h4>
                        <div>
                          {category.skills.map((skill, skillIndex) => (
                            <span 
                              className={`skill-badge ${category.title.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace(/'/g, '')}`}
                              key={skillIndex}
                            >
                              {skill}
                            </span>
                          ))}
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

      {/* Hobbies and Interests Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <Row>
                <Col lg={6} className="mb-4 mb-lg-0">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body className="p-4">
                      <div className="text-center mb-4">
                        <Heart className="text-danger mb-3" size={48} />
                        <h3>Hobbies</h3>
                        <p className="text-muted">Things I love to do in my free time</p>
                      </div>
                      <div className="text-center">
                        {hobbies.map((hobby, index) => (
                          <span 
                            className="hobby-badge me-2 mb-3 d-inline-block" 
                            key={index}
                          >
                            {hobby}
                          </span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={6}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body className="p-4">
                      <div className="text-center mb-4">
                        <Gamepad2 className="text-success mb-3" size={48} />
                        <h3>Interests</h3>
                        <p className="text-muted">Technologies and fields that fascinate me</p>
                      </div>
                      <div className="text-center">
                        {interests.map((interest, index) => (
                          <span 
                            className="interest-badge me-2 mb-3 d-inline-block" 
                            key={index}
                          >
                            {interest}
                          </span>
                        ))}
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

export default Skills;
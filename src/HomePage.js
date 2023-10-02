// HomePage.js

import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import UserTestimonialCard from './CardTemplates/UserTestimonialCard'; // Import the UserTestimonialCard component
import ServiceCard from './CardTemplates/ServiceCard'; // Import the ServiceCard component

function HomePage() {
    // Sample data for available services and user testimonials
    const services = [
      {
        title: 'Service 1',
        description: 'Description of Service 1.',
        buttonText: 'Learn More',
      },
      {
        title: 'Service 2',
        description: 'Description of Service 2.',
        buttonText: 'Learn More',
      },
      // Add more services as needed
    ];
    const userTestimonials = [
      {
        userAvatar: 'user1.jpg',
        userName: 'John Doe',
        userPosition: 'Property Owner',
        userTestimonial:
          'ProtestPal helped me save hundreds on my property taxes. Highly recommended!',
      },
      {
        userAvatar: 'user2.jpg',
        userName: 'Jane Smith',
        userPosition: 'Real Estate Agent',
        userTestimonial:
          'I use ProtestPal to assist my clients with property tax protests. It makes the process so much easier.',
      },
      // Add more user testimonials as needed
    ];
  
  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <h1 className="display-4">Welcome to ProtestPal</h1>
              <p className="lead">
                Your trusted partner in property tax protests.
              </p>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Hero Section */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <h2 className="display-5">Empower Yourself with ProtestPal</h2>
              <p>
                Take control of your property taxes. File protests, connect with
                others, and stay informed about tax-related news.
              </p>
              <Button variant="info">Learn More</Button>
            </Col>
            <Col lg={6}>
              <Card>
                <Card.Body>
                  <h5>Sign Up for Free</h5>
                  <p>
                    Join ProtestPal and start saving on your property taxes
                    today.
                  </p>
                  <Button variant="primary">Sign Up</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="display-5">Featured Services</h2>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col key={index} md={4}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  buttonText={service.buttonText}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="display-5">What Our Users Say</h2>
            </Col>
          </Row>
          <Row>
            {userTestimonials.map((testimonial, index) => (
              <Col key={index} md={6} lg={4}>
                <UserTestimonialCard
                  userAvatar={testimonial.userAvatar}
                  userName={testimonial.userName}
                  userPosition={testimonial.userPosition}
                  userTestimonial={testimonial.userTestimonial}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;

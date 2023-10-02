// ServiceCard.js

import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ServiceCard({ title, description, buttonText }) {
  return (
    <Card>
      {/* You can add an image or icon here */}
      <Card.Body>
        <h5>{title}</h5>
        <p>{description}</p>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default ServiceCard;

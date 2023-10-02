// UserTestimonialCard.js

import React from 'react';
import { Card } from 'react-bootstrap';

function UserTestimonialCard({ userAvatar, userName, userPosition, userTestimonial }) {
  return (
    <Card>
      <Card.Body>
        <img
          src={userAvatar}
          alt={userName}
          className="mb-3 rounded-circle"
          width={64}
          height={64}
        />
        <h5>{userName}</h5>
        <p className="mb-1">{userPosition}</p>
        <Card.Text>{userTestimonial}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserTestimonialCard;

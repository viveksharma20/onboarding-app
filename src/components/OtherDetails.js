import React from "react";
import { Card } from "react-bootstrap";

const OtherDetails = ({ page, setPage }) => {

  return (
    <div className="userform">
      <div className="step-title">
        <h2>How are you planning to use Eden?</h2>
        <p>We'll streamline your setup experience accordingly.</p>
      </div>

      <div className="card__info">
        <Card className="card__details">
          <Card.Body>
            <Card.Title>For Myself</Card.Title>
            <Card.Text>
              Write better. Think more
              clearly. Stay
              organized.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="card__details__1">
          <Card.Body>
            <Card.Title>With My team</Card.Title>
            <Card.Text>
              Wikis, docs, tasks & projects, all in one place.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Create Workspace
      </button>
    </div >
  );
};

export default OtherDetails;
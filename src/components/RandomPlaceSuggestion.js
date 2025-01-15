import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row, Card, 
    CardBody, CardTitle, CardText, Button } from "reactstrap";

const RandomPlaceSuggestion = () => {
  const places = useSelector((state) => state.places);
  const [randomPlace, setRandomPlace] = useState(
    places[Math.floor(Math.random() * places.length)]
  );

  const suggestNewPlace = () => {
    const newRandomPlace = places[Math.floor(Math.random() * places.length)];
    setRandomPlace(newRandomPlace);
  };

  return (
      <Row>
        <Col lg="12">
          <h3 className="mb-4">Random Place Suggestion</h3>
        </Col>
        <Col lg="12">
          <Card
            style={{
              width: '100%'
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                {randomPlace.name}
              </CardTitle>
              
            </CardBody>

            <img
            
              height="600"
              src={randomPlace.image} 
              alt={randomPlace.name}
            />
            <CardBody>
              <CardText>
                {randomPlace.description}
              </CardText>
              
            </CardBody>
          </Card>
        </Col>
        <Col lg="12" className="mt-4"
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Button 
            color="primary"
            onClick={suggestNewPlace}
          >
            Suggest New
          </Button>
        </Col>
      </Row>

     
  );
};

export default RandomPlaceSuggestion;

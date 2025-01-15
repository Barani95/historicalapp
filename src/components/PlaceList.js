import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markVisited, unmarkVisited } from "../redux/actions";
import { Link } from "react-router-dom";
import {Card, CardTitle, CardText, Button, CardBody,
    Row, Col, Container
} from "reactstrap";
import RandomPlaceSuggestion from "../components/RandomPlaceSuggestion";


const PlaceList = () => {
  const places = useSelector((state) => state.places);
  const dispatch = useDispatch();

  return (
    <Container className="m-4">
      <Row>
        <Col lg="12">
          <h3 className="mb-4">Historical Places</h3>
        </Col>
      </Row>
      
      <Row>
        
          {places.map((place, key) => (
            <Col lg="4" md="6" sm="12" key={key}>
              <Card
              style={{
                width: '18rem',
                height: '400px',
                marginBottom: '2rem'
              }}
              >
                <img
                  src={place.image} 
                  alt={place.name}
                  style={{
                    height: '161px'
                  }}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    <Link to={`/place/${place.id}`}
                    style={{textDecoration: 'none'}}
                    >
                      {place.name}
                    </Link>
                    
                  </CardTitle>
                  
                  <CardText>
                    {place.description}
                  </CardText>
                  <Button 
                    color={ place.visited ? 'secondary' : 'primary'}
                    onClick={() =>
                      dispatch(
                        place.visited
                          ? unmarkVisited(place.id)
                          : markVisited(place.id)
                      )
                    }
                  >
                    {place.visited ? "Unmark as Visited" : "Mark as Visited"}
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        
      </Row>

      <RandomPlaceSuggestion />

    </Container>
  );
};

export default PlaceList;

import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {Card, CardTitle, CardText, CardBody,
  Row, Col, Container
} from "reactstrap";

const PlaceDetail = () => {
  const { id } = useParams();
  const place = useSelector((state) =>
    state.places.find((p) => p.id === parseInt(id))
  );

  return (
  <Container className="m-4">
    <Row>
      <Col lg="12">
        <h3 className="mb-4">Place Details</h3>
      </Col>
      <Col lg="12">
        <Card
            style={{
              width: '100%'
            }}
          >
            <CardBody>
              <CardTitle tag="h5">
                {place.name}
              </CardTitle>
              
            </CardBody>

            <img
            
              height="600"
              src={place.image} 
              alt={place.name}
            />
            <CardBody>
              <CardText>
                {place.description}
              </CardText>
              
            </CardBody>
        </Card>
      </Col>
      <Col lg="12" className="mt-3">
        <Link className="btn btn-warning" to="/">Back to List</Link>
      </Col>
    </Row>
  </Container>
  );
};

export default PlaceDetail;

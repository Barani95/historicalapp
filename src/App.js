import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PlaceList from "./components/PlaceList";
import PlaceDetail from "./components/PlaceDetail";
import NotFoundPage from "./components/NotFoundPage";

import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "reactstrap";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Row>
            <Col lg="12">
              <Routes>
                <Route path="/" element={<PlaceList />} />
                <Route path="/place/:id" element={<PlaceDetail />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Col>
          </Row>
          {/* <Row>
            <Col lg="12">
              <RandomPlaceSuggestion />
            </Col>
          </Row> */}
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
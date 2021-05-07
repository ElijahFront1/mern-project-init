import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getPosts } from "./store/actions/postsActions";
import './styles/app.scss';
import { Container, Row, Col } from 'react-bootstrap';
import TopInfoLine from './components/topInfoLine/TopInfoLine';
import Header from './components/header/Header';
import { auth } from './store/actions/userActions';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
    dispatch(auth())
  }, [])

  return (
    <div>
      <Container fluid={true}>
        <Row className="top-info-line">
          <TopInfoLine />
        </Row>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col>NAVBAR</Col>
          <Col xs={10}>
            CONTENT
            {/* <PostList /> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App;

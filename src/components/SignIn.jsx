import React ,{useEffect }from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "../styles/form.css";
import { connect ,useDispatch} from "react-redux";
import {submitLogin} from '../actions/authAction'
const SignIn = ({ isLoggedIn}) => {
    const dispatch = useDispatch()
    let history = useHistory()
  const formik = useFormik({
    initialValues: {
        clientId: "1",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
        dispatch(submitLogin(JSON.stringify(values, null, 2)))  
      console.log(JSON.stringify(values));
    },
  });
  useEffect(()=>{
    isLoggedIn ?history.push("/user"): localStorage.removeItem('accessToken');
  })
  const body = (
    <Container fluid="md">
      <Row>
        <Col className="colForm">
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br/>
          </Form>
        </Col>
      </Row>
    </Container>
  );
  return body;
};

function mapStateToProps(state) {
    const { isLoggedIn } = state.auth;
    return {
      isLoggedIn,
    };
  }
export default connect(mapStateToProps)(SignIn);

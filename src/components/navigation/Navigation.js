/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Container, Form, Button } from 'react-bootstrap';

import { fetchProducts } from '../../redux/products/productsSlice';

const Navigation = () => {
  const [setProduct] = useState('');
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(fetchProducts(e.target.value));
  };

  const onClickHandler = () => {
    dispatch(fetchProducts(''));
    setProduct('');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            src="../../images/NYX.png"
            alt="NYX logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search..."
            className="me-2"
            aria-label="Search"
            onClick={onChangeHandler}
          />
          <Button
            type="submit"
            variant="outline-success"
            onClick={onClickHandler}
          >
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Navigation;

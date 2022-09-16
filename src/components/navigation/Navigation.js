import { useDispatch } from 'react-redux';
import {
  Navbar, Container, Form,
} from 'react-bootstrap';
import { searchProducts } from '../../redux/products/productsSlice';
import logo from '../../images/logo.png';

const Navigation = () => {
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(searchProducts(e.target.value));
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt="NYX logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          NYX
        </Navbar.Brand>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search..."
            className="me-2"
            aria-label="Search"
            onChange={onChangeHandler}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Navigation;

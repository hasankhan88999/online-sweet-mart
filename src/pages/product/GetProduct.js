import { Table, Col, Button, Collapse, Card, Form, Row, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import './productStyle/ProductStyle.css'
import axios from "axios";

const schema = yup.object().shape({
    productId: yup.number().min(1, "Id must be >= 1").required(),
});



function GetProduct() {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [isAvailable, setIsAvailable] = useState(false);
    
    const [product, setProduct] = useState();

    // handling get product error for display
    const [errorData, setErrorData] = useState("");


    let handleSubmitForms = (values) => {
        axios
            .get("http://localhost:2081/api/v1/product/" + values.productId)
            .then((response) => {
                return (
                    setProduct(response.data),
                    console.log(response.data),
                    setIsAvailable(true),
                    setErrorData("")
                    )})
            .catch((error) => {
                return(
                    setErrorData(error.response.data.errorMessage),
                    setIsAvailable(false)
                )
            });
    }

    return (
        <Col className='prd-col'>
            <Button variant="outline-dark"
                onClick={() => setOpen(!open)}
                aria-controls="getproduct-collapse-text"
                aria-expanded={open}
            >
                Get Product
            </Button>
            <Collapse in={open} className='prd-collapse'>
                <div id="getproduct-collapse-text">
                    <Card className='card-section'>
                        {
                            errorData !== "" && <Alert variant='warning'>{errorData}</Alert>
                        }
                        <Formik
                            validationSchema={schema}
                            onSubmit={(e) => handleSubmitForms(e)}
                            initialValues={{
                                productId: '',
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                                            <Form.Label>Product ID</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="productId"
                                                placeholder='Eg:- 21'
                                                value={values.productId}
                                                onChange={handleChange}
                                                isValid={touched.productId && !errors.productId}
                                                isInvalid={!!errors.productId}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.productId}
                                            </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>

                                    </Row>
                                    <Button type="submit" variant="warning" size='sm' style={{color:"black"}}>Get Product</Button>
                                </Form>
                            )}
                        </Formik>
                        {
                            isAvailable && 
                        
                        <Table striped responsive bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Name</th>
                                    <th>Photopath</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    {/* <th>Available</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                            <tr key={product.productId}>
                                                <td>{product.productId}</td>
                                                <td>{product.name}</td>
                                                <td>{product.photoPath}</td>
                                                <td>{product.price}</td>
                                                <td>{product.description}</td>
                                                {/* <td>{toString(product.available)}</td> */}
                                            </tr>
                                }

                            </tbody>
                        </Table>
                    }

                    </Card>
                </div>
            </Collapse>
        </Col>
    );
}

export default GetProduct;
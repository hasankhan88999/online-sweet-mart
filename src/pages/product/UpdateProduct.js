import { Alert, Col, Button, Collapse, Card, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import './productStyle/ProductStyle.css'
import axios from "axios";

const schema = yup.object().shape({
    productId: yup.number().min(1, "Id must be >= 1").required(),
    name: yup.string().required(),
    photoPath: yup.string().required(),
    price: yup.number().required().min(0),
    description: yup.string().required(),
    available: yup.bool().required().oneOf([true], 'Product must be available'),
});

function UpdateProduct() {
    const [open, setOpen] = useState(false);

    const [isUpdated, setIsUpdated] = useState(false);
    // handling getAllProducts error for display
    const [errorData, setErrorData] = useState("");

    let handleSubmitForms = (values) => {
        axios
            .put("http://localhost:2081/api/v1/product", values)
            .then((response) => {
                return (
                    setIsUpdated(true),
                    console.log(response.data),
                    setErrorData("")
                )
            })
            .catch((error) =>{
                return (
                    setErrorData(error.response.data.errorMessage),
                    setIsUpdated(false)
                )
            } );
    }

    return (
        <Col className='prd-col'>
            <Button variant="outline-dark"
                onClick={() => setOpen(!open)}
                aria-controls="update-collapse-text"
                aria-expanded={open}
            >
                Update Product
            </Button>
            <Collapse in={open} className='prd-collapse'>
                <div id="update-collapse-text">
                    <Card className='card-section'>
                        {
                            errorData !== "" && <Alert variant='warning'>{errorData}</Alert>
                        }
                        {
                            isUpdated && <Alert variant='success'>"Product is successfully updated!"</Alert>
                        }
                        <Formik
                            validationSchema={schema}
                            onSubmit={(e) => handleSubmitForms(e)}
                            initialValues={{
                                productId: '',
                                name: '',
                                photoPath: '',
                                price: '',
                                description: '',
                                available: false,
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

                                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                                            <Form.Label>Product Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder='Eg:- Bangali sweet'
                                                value={values.name}
                                                onChange={handleChange}
                                                isValid={touched.name && !errors.name}
                                                isInvalid={!!errors.name}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                                            <Form.Label>Photo Path</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="photoPath"
                                                placeholder='Eg:- www.google.com'
                                                value={values.photoPath}
                                                onChange={handleChange}
                                                isValid={touched.photoPath && !errors.photoPath}
                                                isInvalid={!!errors.photoPath}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.photoPath}
                                            </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="price"
                                                placeholder='Eg:- 700'
                                                value={values.price}
                                                onChange={handleChange}
                                                isValid={touched.price && !errors.price}
                                                isInvalid={!!errors.price}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.price}
                                            </Form.Control.Feedback>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>

                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6" controlId="validationFormik03">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder='Eg:- Delicious sweet'
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                isInvalid={!!errors.description}
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                {errors.description}
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                    </Row>
                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            required
                                            name="available"
                                            label="Product Available"
                                            onChange={handleChange}
                                            isInvalid={!!errors.available}
                                            feedback={errors.available}
                                            feedbackType="invalid"
                                            id="validationFormik0"
                                        />
                                    </Form.Group>
                                    <Button type="submit" variant="warning" size='sm' style={{color:"black"}}>Update Product</Button>
                                </Form>
                            )}
                        </Formik>

                    </Card>
                </div>
            </Collapse>
        </Col>
    );
}

export default UpdateProduct;
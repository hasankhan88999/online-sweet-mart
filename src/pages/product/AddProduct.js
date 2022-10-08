import { Alert, Col, Button, Collapse, Card, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import './productStyle/ProductStyle.css'
import axios from "axios";

const schema = yup.object().shape({
    name: yup.string().required(),
    photoPath: yup.string().required(),
    price: yup.number().required().min(0),
    description: yup.string().required(),
    available: yup.bool().required().oneOf([true], 'Product must be available'),
});

function AddProduct() {
    const [open, setOpen] = useState(false);

    const [isAdded, setIsAdded] = useState(false);

    const [productData, setProductData] = useState();

    let handleSubmitForms = (values) => {
    axios
      .post("http://localhost:2081/api/v1/product", values)
      .then((response) => {
        return (
            setIsAdded(true), setProductData(response.data), console.log(response.data)
        )});
    }

    return (
        <Col className='prd-col'>
            <Button variant="outline-dark"
                onClick={() => setOpen(!open)}
                aria-controls="addproduct-collapse-text"
                aria-expanded={open}
            >
                Add Product
            </Button>
            <Collapse in={open} className='prd-collapse'>
                <div id="addproduct-collapse-text">
                    <Card className='card-section'>
                    {
                        isAdded && <Alert variant='success'>"Product is successfully added!"</Alert>
                    }
                        <Formik
                            validationSchema={schema}
                            onSubmit={(e) => handleSubmitForms(e)}
                            initialValues={{
                                name: '',
                                photoPath: '',
                                price: "",
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
                                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                                            <Form.Label>Product Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                placeholder="Eg:- Bangali sweet"
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
                                                placeholder="Eg:- www.google.com"
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
                                                placeholder="Eg: 254"
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
                                                name="description"
                                                placeholder="Eg: Amazing and delicious sweets"
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
                                    <Button type="submit" variant="warning" size='sm' style={{color:"black"}}>Add Product</Button>
                                </Form>
                            )}
                        </Formik>
                    
                    </Card>
                </div>
            </Collapse>
        </Col>
    );
}

export default AddProduct;
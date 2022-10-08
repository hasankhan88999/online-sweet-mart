import { Alert, Col, Button, Collapse, Card, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import { Formik } from "formik";
import * as yup from "yup";
import './productStyle/ProductStyle.css'
import axios from "axios";

const schema = yup.object().shape({
    productId: yup.number().min(1, "Id must be >= 1").required(),
});

function DeleteProduct() {
    const [open, setOpen] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    // handling getAllProducts error for display
    const [errorData, setErrorData] = useState("");

    let handleSubmitForms = (values) => {
    axios
        .delete("http://localhost:2081/api/v1/product/" + values.productId)
        .then((response) => {
            return(
                setIsDeleted(true),
                setErrorData("")
            )
        })
        .catch((error) => {
            return(
                setErrorData(error.response.data.errorMessage),
                setIsDeleted(false)
            )
        });
    }

    return (
        <Col className='prd-col'>
            <Button variant="outline-dark"
                onClick={() => setOpen(!open)}
                aria-controls="deleteproduct-collapse-text"
                aria-expanded={open}
            >
                Delete Product
            </Button>
            <Collapse in={open} className='prd-collapse'>
                <div id="deleteproduct-collapse-text">
                    <Card className='card-section'>
                        {
                            errorData !== "" && <Alert variant='warning'>{errorData}</Alert>
                        }
                        {
                            isDeleted && <Alert variant='success'>"Product is successfully deleted!"</Alert>
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
                                    <Button type="submit" variant="warning" size='sm' style={{color:"black"}}>Delete Product</Button>
                                </Form>
                            )}
                        </Formik>

                    </Card>
                </div>
            </Collapse>
        </Col>
    );
}

export default DeleteProduct;
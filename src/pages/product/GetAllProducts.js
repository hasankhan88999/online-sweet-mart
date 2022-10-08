import { Col, Button, Collapse, Card, Table, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import './productStyle/ProductStyle.css'
import axios from "axios";
import { useEffect } from "react";

function GetAllProducts() {
    const [open, setOpen] = useState(false);

    // handling product list for display
    const [productData, setProductData] = useState([]);

    // handling getAllProducts error for display
    const [errorData, setErrorData] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:2081/api/v1/product")
            .then((response) => setProductData(response.data))
            .catch((error) => setErrorData(error.response.data.errorMessage));
    }, []);

    return (
        <Col className='prd-col'>
            <Button variant="outline-dark"
                onClick={() => setOpen(!open)}
                aria-controls="getallproducts-collapse-text"
                aria-expanded={open}
            >
                Get All Products
            </Button>
            <Collapse in={open} className='prd-collapse'>
                <div id="getallproducts-collapse-text">
                
                    <Card className='card-section'>
                    {
                        errorData !== "" && <Alert variant='danger'>{errorData}</Alert>
                    }
                    <h3>Product Data</h3>
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
                                    productData.map((product) => {
                                        return (
                                            <tr key={product.productId}>
                                                <td>{product.productId}</td>
                                                <td>{product.name}</td>
                                                <td>{product.photoPath}</td>
                                                <td>{product.price}</td>
                                                <td>{product.description}</td>
                                                {/* <td>{product.available}</td> */}
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>
                        </Table>

                    </Card>
                </div>
            </Collapse>
        </Col>
    );
}

export default GetAllProducts;
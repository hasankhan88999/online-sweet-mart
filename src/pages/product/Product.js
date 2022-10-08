import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import GetProduct from './GetProduct';
import './productStyle/ProductStyle.css'
import GetAllProducts from './GetAllProducts';
import { Link } from 'react-router-dom';

function Product() {
    

    return (
        <div className='product-wrapper'>
            <Container>
                <Row>
                    <h1 className='product-title'><Link to="/admin"><span className='title-head'>SweetMart</span></Link> Products</h1>
                </Row>
            </Container>
            <Container fluid>
                <Row className='prd-funcs'>
                    <AddProduct/>
                    
                </Row>

                <Row>
                <UpdateProduct/>
                </Row>

                <Row>
                <DeleteProduct/>
                </Row>

                <Row>
                <GetProduct/>
                </Row>

                <Row>
                <GetAllProducts/>
                </Row>
            </Container>

        </div>
    );
}

export default Product;
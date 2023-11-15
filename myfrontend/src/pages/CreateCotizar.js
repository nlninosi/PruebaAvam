import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {useForm} from 'react-hook-form'
import { getallproducts } from '../api/product.api';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Section } from '../components/Section';
import { Link } from 'react-router-dom';
import { createCotizacion } from '../api/cotizaciones.api';

export function CreateCotizar() {
    const [products , setproducts] = useState();
        
    useEffect( ()=> {
        async function loadproducts(){
            const res = await getallproducts();
            console.log(res);
            setproducts(res.data)
        }
        loadproducts()
    }, []);
    const dummyproducts = [
        { product_code: 1, product_name: 'Product 1', product_price: 10 },
        { product_code: 2, product_name: 'Product 2', product_price: 15 },
        { product_code: 3, product_name: 'Product 3', product_price: 20 },
    ];
    
    const initialQuantities = dummyproducts.reduce(
        (quantities, product) => ({ ...quantities, [product.product_code]: 0 }),
        {}
    );
    
    const [showConfirmmar, setShowConfirmmar] = useState(true);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [quantities, setQuantities] = useState(initialQuantities);
    const [totalPrice, setTotalPrice] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleComponent = () => {
        setShowConfirmmar(!showConfirmmar);
    };
  
    useEffect(() => {
        const calculateTotalPrice = () => {
          return dummyproducts.reduce((total, product) => {
            const quantity = quantities[product.product_code];
            return total + product.product_price * quantity;
          }, 0);
        };
      setTotalPrice(calculateTotalPrice());
    }, [dummyproducts, quantities]);
  
    const handleInputChange = (product_code, quantity) => {
      const updatedQuantities = {...quantities, [product_code]: quantity };
      setQuantities(updatedQuantities);
      console.log(quantities)
    };
    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      lastName,
      date,
      address,
      totalPrice,
      }
      console.log(formData)
      createCotizacion(FormData)
    };
    
  return (
    <div className="Switch" style={{ display: "flex" , height: "100%"}}>
        <div style={{ display: "flex", alignItems: "left", height: "100%"
      }}>
         <Section/>
        </div>
        <div>
            <div style={{ display: "flex", alignItems: "center", height: "100%"}}>
                <form>
                    <label htmlFor="name">Nombre:</label>
                    <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="lastName">Apellido:</label>
                    <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    />

                    <label htmlFor="date">Date:</label>
                    <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />

                    <label htmlFor="address">Address:</label>
                    <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    />
                </form>
            </div>
        
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                    <tbody>
                        {dummyproducts.map((product) => (
                        <tr key={product.product_code}>
                            <td>{product.product_name}</td>
                            <td>${product.product_price}</td>
                            <td>
                            <input type="number" min= '0' value={quantities[product.product_code]} onChange={(e) => handleInputChange(product.product_code, parseInt(e.target.value, 10))}/>
                            </td>
                            <td>${(quantities[product.product_code] || 0) * product.product_price}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            <p>{totalPrice}</p>
        <Button variant="primary" onClick={handleShow}> Guardar Cambios </Button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Deseas confirmar la cotizacion?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div>
            <p>Informacion del cliente</p>
            <Table striped bordered hover>
                <thead>
                <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Direccion</th>
                <th>Fecha</th>
                </tr>
                </thead>
                <tbody>
                <tr key={name}>
                    <td>{name}</td>
                    <td>${lastName}</td>
                    <td>{address}</td>
                    <td>{date}</td>
                </tr>
                </tbody>
            </Table>
            <p>Product Information</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Quantity</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {dummyproducts.map((product) => (
              <tr key={product.product_code}>
                <td>{product.product_name}</td>
                <td>${product.product_price}</td>
                <td>{quantities[product.product_code] || 0}</td>
                <td>${(quantities[product.product_code] || 0) * product.product_price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
  
        <p>Total Cost: ${totalPrice}</p>
        </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>

        <Link to="/">
          <Button variant="primary" > Lista de cotizaciones </Button>
        </Link>
    </div> 
  );
};

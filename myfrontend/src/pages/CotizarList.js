import {useEffect,useState} from 'react'
import { getallcotizaciones } from '../api/cotizaciones.api';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Section } from '../components/Section';


    
    export function CotizarList(){
        const dummyCotizar = [
            { date: 'DateN1', name: 'ClientN1', value: 'ValueN1' },
            { date: 'DateN2', name: 'ClientN2', value: 'ValueN2' },
        ];
        
        const [cotizaciones , setcotizaciones] = useState();
        
        useEffect( ()=> {
            async function loadcotizaciones(){
                const res = await getallcotizaciones();
                console.log(res);
                setcotizaciones(res.data)
            }
            loadcotizaciones()
        }, []);

        
      return (
        <div style={{ display: "flex", height: "100%"}}>
            <div style={{ display: "flex", alignItems: "left", height: "100%"}}>
                <Section/>
            </div>
            <div style={{ display: "flex", alignItems: "center", height: "100%"}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Client</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyCotizar.map((cotizacion, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{cotizacion.date}</td>
                        <td>{cotizacion.name}</td>
                        <td>{cotizacion.value}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            </div>
            <Link to="/create">
                <Button variant="primary" > Crear Cotizacion </Button>
             </Link>
        </div>
      );
  }

import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./List.css"

const List = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchCustomers(){
      const apiResponse = await fetch("http://localhost:5147/customer", {method:"GET"});
      const data = await apiResponse.json();
      setCustomers(data);
    }
    fetchCustomers();
  },[])
  return (
    <>
      <Header/>
      <div className="list-container">
        <h1>Lista de clientes cadastrados</h1>
        {customers.length !== 0 ?
          customers.map((item, i) => (
            <Accordion key={i} className="accordion-item">
              <AccordionSummary expandIcon={<ExpandMoreIcon/>}><b>{item.name} &emsp; {item.email}</b></AccordionSummary>
              <AccordionDetails className="accordion-details">
                <span>CPF: {item.cpf} &emsp; {item.phone}</span>
                <span>{item.street} {item.number} &emsp; {item.city}, {item.state}</span>
              </AccordionDetails>
            </Accordion>
          ))
          : <h1>Nenhum cliente cadastrado</h1>
        }
      </div>
    </>
  )
}

export default List;
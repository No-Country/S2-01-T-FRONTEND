import React , { useEffect, useState } from "react";
import DebtCard from "../../components/debtCard/DebtCard";
import { Grid } from '@mui/material';
import "./styles/_debtsPage.scss";
import axios from 'axios';

const DebtsPage = () => {

    const [userId, setUserId] = useState(15);
    const [deudas, setDeudas] = useState([]);

    const token = localStorage.getItem('token');

    let config = {
        headers: {
            accept: "*/*",
            Authorization: token,
        }
    }
    
    useEffect(() => {
    axios.get(`https://fiados.herokuapp.com/api/v1/customer/${userId}`, config)
        .then(res => {
            setDeudas(res.data.debtResponseList);
        }
        ).catch(err => console.log(err))
    }, []);

    return (
        <div className="debts-container">
            <h1 className="debts-title">Fiados a pagar</h1>
            <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
                justify="center"
                // style={{ minHeight: '10vh' }}
            >
                {deudas?.map((deuda) => (
                    <Grid item xs={3} key={deuda.id}>
                        <DebtCard key={deuda.id} deuda={deuda}></DebtCard>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};

export default DebtsPage;
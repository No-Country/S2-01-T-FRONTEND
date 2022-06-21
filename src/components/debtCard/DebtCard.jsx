import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import "./styles/_debtCard.scss";

const DebtCard = ({ deuda }) => {

    const formatted = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'USD',
    }).format(deuda.totalAmount);
    
    return (
        <>
        {deuda ? 
            <Card variant="outlined" sx={{ width: '85vw' }}>
                <CardContent justifyContent="space-between">
                    <Typography color="text.secondary" align="right">
                        N° de orden: #{deuda.id}
                    </Typography>
                    <Typography color="text.primary">
                        Comercio: "{deuda.company}"
                    </Typography>
                    <Typography color="error.main">
                       {'$ ' + formatted.slice(0, -2)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Saldar</Button>
                </CardActions>
            </Card>
        : <h1>nada</h1>
        }
        </>
    )
};

export default DebtCard;
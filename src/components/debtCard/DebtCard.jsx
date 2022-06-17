import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import "./styles/_debtCard.scss";

const DebtCard = () => {
    return (
        <>
            <Card variant="outlined" sx={{ width: '85vw' }}>
                <CardContent justifyContent="space-between">
                    <Typography color="text.secondary" align="right">
                        21:07 14/6/22
                    </Typography>
                    <Typography color="text.primary">
                        "Nombre del comercio"
                    </Typography>
                    <Typography color="error.main">
                        $1.234,56
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Saldar</Button>
                </CardActions>
            </Card>
        </>
    )
};

export default DebtCard;
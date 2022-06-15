import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import "./styles/_debtCard.scss";

const DebtCard = () => {
    return (
        <>
            <Card variant="outlined" sx={{ minWidth: 575 }} >
                <CardContent justifyContent="space-between">
                    <Typography color="text.secondary" align="right">
                        21:07 14/6/22
                    </Typography>
                    <Typography color="text.secondary">
                        "Nombre del comercio"
                    </Typography>
                    <Typography color="text.primary">
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
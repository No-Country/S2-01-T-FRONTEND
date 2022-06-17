import React from "react";
import DebtCard from "../../components/debtCard/DebtCard";
import { Grid } from '@mui/material';
import "./styles/_debtsPage.scss";

const DebtsPage = () => {
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
                <Grid item xs={3}>
                    <DebtCard></DebtCard>
                </Grid>
                <Grid item xs={3}>
                    <DebtCard></DebtCard>
                </Grid>
                <Grid item xs={3}>
                    <DebtCard></DebtCard>
                </Grid>
            </Grid>
        </div>
    )
};

export default DebtsPage;
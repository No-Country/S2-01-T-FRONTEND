import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import "./styles/_debtCard.scss";

const DebtCard = () => {
  return (
    <>
      <Card variant="outlined" sx={{ width: "85vw" }}>
        <div>
          <CardContent justifyContent="space-between">
            <Typography color="text.secondary" align="right">
              21:07 14/6/22
            </Typography>
            <Typography color="text.primary">Nombre de Cliente</Typography>
            <Typography color="error.main">$1.234,56</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Saldar</Button>
          </CardActions>
        </div>
      </Card>
    </>
  );
};

export default DebtCard;
/**
 * <Card key={e.id} variant="outlined" sx={{ width: "85vw" }}>
          <CardContent justifyContent="space-between">
            <Typography color="text.secondary" align="right">
              21:07 14/6/22
            </Typography>
            <Typography color="text.primary">
              {console.log(e.debtResponseList)}
            </Typography>
            <Typography color="error.main">$1.234,56</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Saldar</Button>
          </CardActions>
        </Card>
 * 
 * 
 * 
 */

import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const RatingStar = ({ rating }) => {
  return (
    <Box
      sx={{
        "& > legend": { mt: 1 },
      }}
    >
      <Typography component="legend">Calificación</Typography>
      <Rating size="small" name="read-only" value={rating} readOnly />
    </Box>
  );
};

export default RatingStar;

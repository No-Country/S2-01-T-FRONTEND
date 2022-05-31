import { Typography, Box } from "@mui/material";
import "../help/styles/_helpStyle.scss";
import imgAppTienda from "../../assets/img/app-tienda.png";
import imgMetodosPago from "../../assets/img/metodos-pago.png";
import imgElFiado from "../../assets/img/el-fiado.png";
import imgTiendaPagos from "../../assets/img/tienda-pagos.png";

const HelpPage = () => {
    return (
        <article className="article__help-page">
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <section className="section__help-page">
                <Box component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Typography variant="h5"
                        sx={{
                            fontWeight: 'bold',
                            width: 1/2
                        }}>1.- Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            width: 1/2
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quam in justo tristique efficitur.
                    </Typography>
                </Box>
                <Box component="div" sx={{ textAlign: 'center'}}>
                    <Box
                        component="img"
                        sx={{
                            width: 3/4
                        }}
                        alt=""
                        src={imgAppTienda}
                    ></Box>
                </Box>
            </section>

            <section className="section__help-page">
                <Box component="div" sx={{ textAlign: 'center'}}>
                    <Box
                    component="img"
                    sx={{
                        width: 4/5
                    }}
                    alt=""
                    src={imgMetodosPago}
                    ></Box>
                </Box>
                
                <Box component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Typography variant="h5"
                        sx={{
                            fontWeight: 'bold',
                            width: 1/2
                        }}>1.- Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            width: 1/2
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quam in justo tristique efficitur.
                    </Typography>
                </Box>
            </section>

            <section className="section__help-page">
                <Box component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Typography variant="h5"
                        sx={{
                            fontWeight: 'bold',
                            width: 1/2
                        }}>3.- Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            width: 1/2
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quam in justo tristique efficitur.
                    </Typography>
                </Box>
                <Box component="div" sx={{ textAlign: 'center'}}>
                    <Box
                        component="img"
                        sx={{
                            width: 3/4
                        }}
                        alt=""
                        src={imgElFiado}
                    ></Box>
                </Box>
            </section>

            <section className="section__help-page">
                <Box component="div" sx={{ textAlign: 'center'}}>
                    <Box
                    component="img"
                    sx={{
                        width: 2/3
                    }}
                    alt=""
                    src={imgTiendaPagos}
                    ></Box>
                </Box>
                
                <Box component="div"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Typography variant="h5"
                        sx={{
                            fontWeight: 'bold',
                            width: 1/2
                        }}>4.- Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            width: 1/2
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quam in justo tristique efficitur.
                    </Typography>
                </Box>
            </section>
        </article>
    )
};

export default HelpPage;
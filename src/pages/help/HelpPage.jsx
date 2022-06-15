import { Typography, Box } from "@mui/material";
import "../help/styles/_helpStyle.scss";
import imgAppTienda from "../../assets/img/app-tienda.png";
import imgMetodosPago from "../../assets/img/metodos-pago.png";
import imgElFiado from "../../assets/img/el-fiado.png";
import imgTiendaPagos from "../../assets/img/tienda-pagos.png";

const HelpPage = () => {
    return (
        <article className="article__help-page">
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Tus primeros pasos en elFiadoYa.com</Typography>
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
                        }}>1.- ¿Cómo funciona?
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            width: 1/2
                        }}>Creá tu cuenta llenando el formulario en línea. Al estar registrado como comercio, podrás comenzar a agregar fiados realizados. Si te registrás como cliente, podrás ver los puntos afiliados.
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
                        }}>2.- ¿Cómo agrego una operación de fiado?
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            width: 1/2
                        }}>Desde la página de búsqueda podrás encontrar a tu cliente por DNI y asignarle un monto de fiado. Como cliente podrás aceptar la operación.
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
                        }}>3.- ¿Cómo veo las deudas que debo o tengo a favor?
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            width: 1/2
                        }}>Desde la sección "Mis Fiados" podrás ver tanto las deudas actuales como las que ya fueron saldadas.
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
                        }}>4.- ¿Qué pasa si se incumple algún pago?
                    </Typography>
                    <Typography variant="body1"
                        sx={{
                            width: 1/2
                        }}>Al saldar una deuda, el sistema actualizará tu calificación de manera positiva, no hacerlo reducirá tu calificación y corrés riesgo de ser limitado o suspendido para futuras operaciones.
                    </Typography>
                </Box>
            </section>
        </article>
    )
};

export default HelpPage;
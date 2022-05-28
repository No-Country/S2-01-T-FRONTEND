import { Typography, Box } from "@mui/material";
import "../help/styles/_helpStyle.scss";

const HelpPage = () => {
    return (
        <article>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
            <section>
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
                <Box
                    component="img"
                    sx={{
                        width: 3/4
                    }}
                    alt=""
                    src="https://s3-alpha-sig.figma.com/img/c2e3/892c/321c82d13193c79c322ef2abc34b00f2?Expires=1654473600&Signature=hDcUbDA7STKUtAx5IH8LX0N9iDne3Jqw5ykMbTwZiLyck6DtrLuwaeR25sEaVLDBm4TrUmjFs9wxoHICPhn4vVMXyE4tRVBDzdfvqKHaVDXT0PQdvQQBltobHVhlFue79ZmYL7IpgpNSzVslTCaT6s4jcDhe4kUk6l7R99atPv~fHu28dmwf-SZ-7AXAHUgAG57xqpz7jc-Q2tclU80Ly2cxas74EJR0PimrW-bLYR6ma6hnNmAPNHNWutoZ4codCMpFkpUK4w6SnLbbDiothyltKE-nkS8IKfgBVNxxBMenm~MjmuTSBbXO2IyqiQ6uEVmkWe1tqLJUedNM-MAI5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                ></Box>
            </section>
        </article>
    )
};

export default HelpPage;
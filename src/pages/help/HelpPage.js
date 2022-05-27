import { Typography, Box } from "@mui/material";
import "../help/styles/_helpStyle.scss";

const HelpPage = () => {
    return (
        <article>
            <Typography variant="h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
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
                    src="https://s3-alpha-sig.figma.com/img/3c69/a676/688a7d744985903d5e62967779c4b621?Expires=1654473600&Signature=eKM-nkZyGmJW4EAaPDVdCNQ1Bdv8yVQP19~Gzyq0P8eYViQtuC4WQMMqGoUhL8vQx4ZZZ~NhoQv1UQOmPbG7RyA9S2Qr9MNIZiidH022bm-3InuuPZw9JTMBocEDNBDwc0PJg~tkZCA1fP7d1HxaaBB4rgSiY-KREFQVxQ8gqUGt1-cs7Z1O0nnGBd66CguWNoBgqTKs4hx90n9RbaBYfowUi3lpaZSpNinyQuUXyWQFyKdhlit5QKIwNVjsOfGHdDSlO70~NdWD-6odGzjCeg40BCLsldA6AN2tiwqafxhpel4TgWa3b14o2KJGWtxkW5YW2fgywxWOhthrAb9YiA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                ></Box>
            </section>
        </article>
    )
};

export default HelpPage;
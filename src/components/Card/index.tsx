import { Container, LoadingButton } from "./styles";
import React, { useEffect, useState } from "react";
import Lottie from 'react-lottie';
import * as animationData from '../../assets/loading.json';
import { Button, Snackbar, TextField } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Card() {
    const [open, setOpen] = useState(false);
    const [hourglass, setHourglass] = useState([
        {
            line: ""
        }
    ]);
    const [size, setSize] = useState<string>('');

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    function handleInputChange(value: string) {
        setSize(value.replace(/[^0-9]/g, ''))
    }

    function insertLineHourglass(value: string) {
        setHourglass(oldState => [...oldState,
        {
            line: value
        }
        ]);
    }

    function handleDrawHourglass() {
        if (parseInt(size) < 20) {
            setOpen(true);
            return;
        }

        setHourglass([
            {
                line: ""
            }
        ]);

        let count = 0;

        const sz = parseInt(size);

        for (let i = 0; i <= sz; i++) {

            count++
            if (i == 0) {
                insertLineHourglass(`${"#".repeat(sz - i)}`);
                insertLineHourglass(`${"#".repeat(sz - i)}`);
            } else if (i == 1) {
                insertLineHourglass(`##${" ".repeat(sz - 4)}##`);
            } else if (i == 2) {
                insertLineHourglass(`# ${"#" + " ".repeat(sz - 4 - i)}# #`);
            } else if (count % 2 == 0 && count < sz - 3) {
                insertLineHourglass(`#${" ".repeat((count / 2)) + "#" + " ".repeat(sz - 4 - count) + "#" + " ".repeat((count / 2))}#\n`);
            }

        }

        for (let i = sz; i >= 0; i--) {
            count--
            if (i == 0) {
                insertLineHourglass(`${"#".repeat(sz - i)}`);
                insertLineHourglass(`${"#".repeat(sz - i)}`);
            } else if (i == 1) {
                insertLineHourglass(`${"#".repeat(sz)}`)
            } else if (i == 2) {
                insertLineHourglass(`# ${" ".repeat((i / 2) - 1) + "#".repeat(sz - i - 2)} #\n`);
            } else if (i % 2 == 0 && i < sz - 3) {
                insertLineHourglass(`#${" ".repeat((count / 2)) + "#".repeat((sz - count - 2)) + " ".repeat((count / 2))}#\n`)
            }
        }
    }

    return (
        <Container>
            <div id="content">
                <div>
                    {hourglass.map(h => <pre>{h.line}</pre>)}
                </div>
            </div>
            <div id="input-data">
                <TextField
                    id="sizeHourglass"
                    label="Size Hourglass"
                    variant="outlined"
                    value={size}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleDrawHourglass}>
                    Draw
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Sorry 😞. But you must to insert a number greater or iqual 20!
                    </Alert>
                </Snackbar>
            </div>
        </Container>
    );
}
import Layout from '../../components/Layout'
import style from '../../styles/Home.module.css'
import { Card, CardActions, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import getReservationsReducer from "../../redux/reducers/getReservations";
import { fetchReservations } from "../../redux/actions/getReservations";
import getLocationsReducer from "../../redux/reducers/getLocations";
import { fetchLocations } from "../../redux/actions/getLocations";
import { useEffect, useState } from "react";
import { Button } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { DialogContent } from '@mui/material';
import { Box } from '@mui/system';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { MenuItem } from '@mui/material';
import { DialogActions, Slider } from '@mui/material';
import getFilterReducer from '../../redux/reducers/sendFilter';
import { fetchFilter } from '../../redux/actions/sendFilter';

export default function Home() {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [juc, setJuc] = useState('');
    const [loc, setLoc] = useState('');

    const handleChange = (event) => {
        setJuc(Number(event.target.value) || '');
    };

    const handleChangeL = (event) => {
        setLoc(Number(event.target.value) || '');
    };


    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
            console.log(juc);
            console.log(loc);
        }
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const dataF = useSelector(state => state.getFilterReducer.data)
    const dataL = useSelector(state => state.getLocationsReducer.data)
    const error = useSelector(state => state.getReservationsReducer.error)

    const handleDispatch = () => {
        dispatch(fetchLocations())
        dispatch(fetchFilter(juc, loc))
    }

    useEffect(() => {
        handleDispatch()
    }, [])


    const handleFilter = () => {
        setOpen(false);
        setJuc('');
        handleDispatch();
    }

    const getTime = (time) => {
        return time.split('T')[1]
    }

    const getDate = (time) => {
        return time.split('T')[0]
    }

    return (
        <Layout>
            <Button onClick={handleClickOpen} variant='contained' className='button'>Filtrare rezervari</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Selectati numarul de jucatori sau locatia dupa care doriti sa sortati</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 4, minWidth: 150 }}>
                            <InputLabel id="demo-dialog-select-label">Numar jucatori</InputLabel>
                            <Slider value={juc} onChange={handleChange} marks min={1} max={14} valueLabelDisplay="auto" />
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-dialog-select-label">Locatii</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={loc}
                                onChange={handleChangeL}
                                input={<OutlinedInput label="Locatii" />}
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                                {dataL.map(loc => (
                                    <MenuItem key={loc.id} value={loc.id}>{loc.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Anulare</Button>
                    <Button onClick={handleFilter}>Filtrare</Button>
                </DialogActions>
            </Dialog>
            <div className={style.cardContent}>
                {dataF.map(elem => (
                    <Card key={elem.id}>
                        <CardActionArea href={`http://localhost:3000/rezervari/${elem.id}`}>
                            <img
                                className={style.image}
                                src='https://www.worcester.gov.uk/images/easyblog_shared/2019/Football---carousel.jpg'
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {elem.reservedLocation.name}
                                </Typography>
                                <Typography variant="div" color="text.secondary">
                                    <div>Description: {elem.reservedLocation.description}</div>
                                    <div>Ora: {getTime(elem.startTime)} - {getTime(elem.endTime)}</div>
                                    <div>Data: {getDate(elem.startTime)}</div>
                                    <div>Pret: {elem.reservedLocation.rentPrice} lei</div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </Layout>
    )
}


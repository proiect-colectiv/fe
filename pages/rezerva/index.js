import Layout from '../../components/Layout'
import style from '../../styles/Rezerva.module.css'
import Container from "@mui/material/Container";
import {Button, TextField} from "@mui/material";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReservation } from '../../redux/actions/postReservation';

export default function rezerva() {

    const complexeNoi = [
        {
            id: 1,
            denumire: 'Complex Ghiorgheni',
            descriere: 'Situat in cartier Gheorgheni, Adresa etc. Potrivit pentru sporturile: ------.'
        },
        {
            id: 2,
            denumire: 'Complex Ghiorgheni',
            descriere: 'Situat in cartier Gheorgheni, Adresa etc. Potrivit pentru sporturile: ------.'
        },
        {
            id: 3,
            denumire: 'Complex Ghiorgheni',
            descriere: 'Situat in cartier Gheorgheni, Adresa etc. Potrivit pentru sporturile: ------.'
        },
    ]

    const [reservation, setReservation] = useState([]);

    const handleInput = (event) => {
        setReservation({
            ...reservation,
            [event.target.id]: event.target.value
        });
    }

    const dispatch = useDispatch()

    const handleSubmit = () => {
        console.log('locatie: ' + reservation.location)
        console.log('name: ' + reservation.name)
        console.log('data: ' + reservation.data)

        dispatch(addReservation(reservation))
    }

    return (
        <Layout>
            <div className={style.content}>
                <div>
                    <h1 className={style.header}>Alegeti unul dintre complexele afiliate noua:</h1>
                    <div className={style.complexe}>
                        {complexeNoi.map(complex => (
                            <div key={complex.id} className={style.complexNou}>
                                <h3>{complex.denumire}</h3>
                                <div>{complex.descriere}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className={style.header}>Creaza o rezervare:</h1>
                    <div className={style.formContainer}>
                        <TextField className={style.textInput} id="location" label="location" onChange={handleInput}/>
                        <TextField className={style.textInput} id="name" label="name" onChange={handleInput}/>
                        <TextField
                          className={style.textInput}
                          id="data"
                          label="data"
                          InputLabelProps={{ shrink: true }}
                          type='date'
                          onChange={handleInput}
                        />
                        <Button variant='contained' className={style.buttonRez} onClick={handleSubmit}>Rezerva</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


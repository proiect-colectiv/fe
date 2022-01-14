import Layout from '../components/Layout'
import style from '../styles/Home.module.css'
import {Card, CardActions, CardContent, CardMedia, Typography, CardActionArea} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import getReservationsReducer from "../redux/reducers/getReservations";
import {fetchReservations} from "../redux/actions/getReservations";
import {useEffect} from "react";

export default function Home() {

    const dispatch = useDispatch();

    const data = useSelector(state => state.getReservationsReducer.data)
    const error = useSelector(state => state.getReservationsReducer.error)

    useEffect(() => {
        handleDispatch()
    }, [])

    const handleDispatch = () => {
        dispatch(fetchReservations())
    }

    console.log(data)

    const getTime = (time) => {
        return time.split('T')[1]
    }

    const getDate = (time) => {
        return time.split('T')[0]
    }

    return ( 
        <Layout>
            <div className={style.cardContent}>
                {data.map(elem => (
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


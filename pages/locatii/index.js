import Layout from '../../components/Layout'
import style from '../../styles/Home.module.css'
import { Card, CardActions, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLocations } from "../../redux/actions/getLocations";

import { getToken } from '../../redux/actions/postLogin'

import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        if (!getToken()) {
            router.push('/login');
        }
    }, [])

    const dispatch = useDispatch();

    const data = useSelector(state => state.getLocationsReducer.data)

    useEffect(() => {
        handleDispatch()
    }, [])

    const handleDispatch = () => {
        dispatch(fetchLocations())
    }

    console.log(data)

    return (
        <Layout>
            <div className={style.cardContent}>
                {data.map(elem => (
                    <Card key={elem.id}>
                        <CardActionArea href={`http://localhost:3000/locatii/${elem.id}`}>
                            <img
                                className={style.image}
                                src='https://www.worcester.gov.uk/images/easyblog_shared/2019/Football---carousel.jpg'
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {elem.name}
                                </Typography>
                                <Typography variant="div" color="text.secondary">
                                    <p><b>Descriere:</b> {elem.description}</p>
                                    <p><b>Adresa:</b> {elem.adress}</p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </Layout>
    )
}


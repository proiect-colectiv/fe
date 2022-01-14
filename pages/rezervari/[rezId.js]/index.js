import Layout from '../../../components/Layout'
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getReservationIdReducer from '../../../redux/reducers/getReservationId';
import { fetchReservationId } from '../../../redux/actions/getReservationId';
import style from '../../../styles/ZonaId.module.css'
import { Button } from '@mui/material';

export default function rezId() {

    const router = useRouter();
    const pathNames = router.asPath.split('/')
    pathNames.shift()
    const rezId = pathNames[1]
  
    const dispatch = useDispatch()
  
    useEffect(() => {
      handleFetch()
    }, [router])
  
    const data = useSelector(state => state.getReservationIdReducer.data)
  
    const handleFetch = () => {
      dispatch(fetchReservationId(rezId))
    }

    console.log('id: '+ rezId)
    console.log("data: " + data)
    console.log('name: ' + data.name)
  
    return (
      <Layout>
        <div className={style.content}>
            <div className={style.imageContainer}>
              <img
                className={style.image}
                src='https://biotechnodata.com/wp-content/uploads/2021/07/4.jpg'
                alt="green iguana"
              />
            </div>
            <div className={style.textContainer}>
              <h1>{data.name}</h1>
              <div className={style.detailsContainer}>
                <div>Numar maxim de jucatori: {data.maxNumberOfPlayers}</div>
                <div>Numar actual de jucatori: {data.currentNumberOfPlayers}</div>

              </div>
  
              <div className={style.dataContainer}>
                <div>Ora incepere: {data.startTime}</div>
                <div>Inchidere: {data.endTime}</div>
              </div>
              <div>
             <br />
            <Button variant='contained' className='button'>Alaturare rezervare</Button>
            </div>
            </div>
        </div>
      </Layout>
    )
  }
  
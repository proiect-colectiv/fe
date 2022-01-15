import Layout from '../../../components/Layout'
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getReservationIdReducer from '../../../redux/reducers/getReservationId';
import getUsersReservationsIdReducer from '../../../redux/reducers/getUsersForReservationId';

import { fetchReservationId } from '../../../redux/actions/getReservationId';
import { fetchUsersReservations } from '../../../redux/actions/getUsersForReservationId';

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

    const user_reservations = useSelector(state =>  state.getUsersReservationsIdReducer.data)
    
    
    const list = []
    const length=user_reservations.length;
    for( var i=0; i< length; i++){
      list.push(user_reservations[i])
    }

    console.log(list);

    const disabled = false;
    if(data.maxNumberOfPlayers==data.currentNumberOfPlayers){
      const disabled = true;
    }

    const handleFetch = () => {
      dispatch(fetchReservationId(rezId))
      dispatch(fetchUsersReservations(rezId))
    }

    console.log('id: '+ rezId)
    console.log("data: " + data)
    console.log('name: ' + data.name)

    const getTime = (time) => {
       return time?.split('T')[1]
  }

    const getDate = (time) => {
       return time?.split('T')[0]
  }
    
    
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
                <div>Jucatori alaturati:
                  <div className={style.textContainer2}>
                  {list.map(user => (
                     <div key={user.ID}>{user.firstName} {user.lastName} </div>
                  ))}
                  </div>
                </div>
              </div>
  
              <div className={style.dataContainer}>
                <div>Ora incepere: {getTime(data.startTime)}</div>
                <div>Inchidere: {getTime(data.endTime)}</div>
                <div>Data: {getDate(data.startTime)} </div>
              </div>
              <div>
             <br />
            <Button variant='contained' className='button' id='buttonAl' disabled={disabled}>Alaturare rezervare</Button>
            </div>
            </div>
        </div>
      </Layout>
    )
  }
  
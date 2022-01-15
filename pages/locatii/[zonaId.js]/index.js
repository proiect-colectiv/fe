import Layout from '../../../components/Layout'
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import getLocationIdReducer from '../../../redux/reducers/getLocationId';
import { fetchLocationId } from '../../../redux/actions/getLocationId';
import style from '../../../styles/ZonaId.module.css'
import { Button } from '@mui/material';

export default function zonaId() {

  const router = useRouter();
  const pathNames = router.asPath.split('/')
  pathNames.shift()
  const zonaId = pathNames[1]

  const dispatch = useDispatch()

  useEffect(() => {
    handleFetch()
  }, [router])

  const data = useSelector(state => state.getLocationIdReducer.data)

  const handleFetch = () => {
    dispatch(fetchLocationId(zonaId))
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
              <div>Descriere: {data.description}</div>
              <div>Adresa: {data.adress}</div>
              <div className={style.pret}>Pret: {data.rentPrice} lei</div>
            </div>

            <div className={style.dataContainer}>
              <div>Deschidere: {data.openTime}</div>
              <div>Inchidere: {data.closeTime}</div>
            </div>
            <div className={style.daysContainer}>
              <div>Deschis in zilele: <i className={style.days}>Luni - Duminica</i></div>
            </div>
            <div>
             <br />
            <Button variant='contained' className='button' href={`http://localhost:3000/locatii/rezervare/${zonaId}`}>Rezerva locatia</Button>
            </div>
          </div>
      </div>
    </Layout>
  )
}

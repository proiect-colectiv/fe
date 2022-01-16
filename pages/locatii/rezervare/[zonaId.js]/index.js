import Layout from '../../../../components/Layout'
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from "react-redux";
import React,{useEffect,useState } from "react";
import { fetchLocationId } from '../../../../redux/actions/getLocationId';
import style from '../../../../styles/ZonaId.module.css'
import { Button,Slider } from '@mui/material';
import { LocalizationProvider } from '@mui/lab';
import { DatePicker } from '@mui/lab';
import DateAdapter from '@date-io/dayjs';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';


export default function rezervareZonaId() {

  const router = useRouter();
  const pathNames = router.asPath.split('/')
  pathNames.shift()
  const zonaId = pathNames[2]

  const getTime = (time) => {
    return time?.split('T')[1]
}

 const getDate = (time) => {
    return time?.split('T')[0]
}

  const dispatch = useDispatch()
  useEffect(() => {
    handleFetch()
  }, [router])

  const data = useSelector(state => state.getLocationIdReducer.data)
  const handleFetch = () => {
    dispatch(fetchLocationId(zonaId))
  }



  const [val, setVal] = useState(10);

  const [valueO, setValO] = useState(1);

  const [valueT,setValT] = useState(12);

  const updateRangeO = (e,valueO) => {
    setValO(valueO);
  };
  const updateRange = (e,val) => {
    setVal(val);
  };
  const updateRangeT = (e,valueT) => {
    setValT(valueT);
  };

  const now = dayjs()
  const [value, setValue] = useState(now);


  const month= Number(value.$M)+1
  const dataValue= value.$y+'-'+month+'-'+value.$D;

  return (
    <Layout>
      <div className={style.content}>
          <div className={style.textContainer}>
            <h1>{data.name}</h1>
            <div className={style.detailsContainer}>
              <div>Adresa: {data.adress}</div>
              <div className={style.pret}>Pret: {data.rentPrice} lei</div>
            </div>
            <div>Numarul maxim de jucatori: {val}</div>
            <Slider value={val} onChange={updateRange} marks min={8} max={14} valueLabelDisplay="auto"/>
            <div>Data:<br /> </div>
            <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
            views={['day', 'month', 'year']}
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            <div>Ora incepere: {valueT} <br /></div>
            <Slider value={valueT} onChange={updateRangeT} marks min={ 8} max={ 21} step={1} valueLabelDisplay="auto"/>
            <div>Durata: {valueO}  </div>
            <Slider value={valueO} onChange={updateRangeO} marks min={1} max={3} valueLabelDisplay="auto"/>
            <div></div>
            <div>
             <br />
            <Button variant='contained' className='button'>Confirma rezervarea</Button>
            </div>
          </div>
      </div>
    </Layout>
  )
}


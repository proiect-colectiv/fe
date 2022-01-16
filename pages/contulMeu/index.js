import Layout from '../../components/Layout';
import style from '../../styles/ContulMeu.module.css';
import {Button, TextField} from "@mui/material";
import { fetchUsers } from '../../redux/actions/getUser';
import getUsersReducer from '../../redux/reducers/getUser';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import { useEffect } from "react";
export default function contulMeu() {

const dispatch = useDispatch();
  
  useEffect(() => {
    handleFetch()
  })

  const user =useSelector( state => state.getUsersReducer.data)
  const handleFetch = () => {
    dispatch(fetchUsers())
  };

    return (
        <Layout>
            <div style={{marginBottom:'40px'}}>
                <h2 align={"center"}>
                   Contul meu
                </h2>
            </div>
            <div className={style.login}>
            </div>
            <div className={style.photo}>
                <img className={style.image}
                    src='https://i.ibb.co/b2Yw368/3bkf81.png'
                    alt="profile picture"
                />
                <div className={style.info}>
                    <p>Nume:      {user.lastName}<br />
                       Prenume:   {user.firstName}<br />
                       Username:  {user.username}<br />
                       Email:     {user.email}<br />
                       Sporturi practicate: Football <br />
                    </p>
                    
                </div>
            </div>
        </Layout>
    )
}


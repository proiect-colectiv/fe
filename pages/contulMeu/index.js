import Layout from '../../components/Layout';
import style from '../../styles/ContulMeu.module.css';
import {Button, TextField} from "@mui/material";

export default function contulMeu() {
    return (
        <Layout>
            <div style={{marginBottom:'40px'}}>
                <h2 align={"center"}>
                   Contul meu
                </h2>
            </div>
            <div className={style.login}>

            <Button variant='contained' className={style.button}>Login</Button>

            <Button variant='contained' className={style.button} >Register</Button>

            <Button variant='contained' disabled='true' className={style.button}>Logout</Button>

            </div>
            <div className={style.photo}>
                <img className={style.image}
                    src='https://i.ibb.co/b2Yw368/3bkf81.png'
                    alt="profile picture"
                />
                <div className={style.info}>
                    <p>Nume:<br />
                       Prenume:<br />
                       Username:<br />
                       Email:<br />
                       Sporturi practicate: <br />
                    </p>

                </div>
            </div>
        </Layout>
    )
}


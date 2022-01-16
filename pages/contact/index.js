import { useEffect } from 'react'
import { getToken } from '../../redux/actions/postLogin'
import Layout from '../../components/Layout'
import style from '../../styles/Contact.module.css'

import { useRouter } from 'next/router';

export default function contact() {
    const router = useRouter();

    useEffect(() => {
        if (!getToken()) {
            router.push('/login');
        }
    }, [])

    return (
        <Layout>
            <h3>Contact Form</h3>
            <label className={style.label}>Multumim ca folosesti aplicatia noastra. Daca ai intampinat o problema sau doresti sa ne lasi un Feedback despre cum a fost experienta ta sau doresti sa vii cu propria ta idee, completeaza formularul si noi vom reveni cu un raspuns cat de curand.</label>

    <div className={style.container}>
        <form>
            
            <label for="name">Nume</label>
            <input className={style.input} type="text" id="name" name="name" placeholder="Your name.."></input>

            <label for="email">Email</label>
            <input className={style.input} type="text" id="email" name="email" placeholder="Your email.."></input>

            <label for="country">Problema semnalata</label>
            <select className={style.select} id="problem" name="problem">
            <option value="fed">Feedback</option>
            <option value="alat">Probleme la alaturarea unei rezervari </option>
            <option value="crea">Probleme la creearea unei rezervari</option>
            </select>

            <label for="subject">Descrie-ne problema ta</label>
            <textarea className={style.textarea}  id="subject" name="subject" placeholder="Scrie aici.." style={{height:'200px'}}></textarea>

            <input className={style.input} type="submit" value="Submit"></input>
        </form>
    </div>
    </Layout>
    )
}


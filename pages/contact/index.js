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
            <h1 className={style.titleHeader}>Aici va fi pagina de Contact</h1>
        </Layout>
    )
}


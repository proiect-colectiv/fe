import { useEffect } from 'react'
import Layout from '../../components/Layout'
import style from '../../styles/ContulMeu.module.css'
import { getToken } from '../../redux/actions/postLogin'

import { useRouter } from 'next/router';

export default function contulMeu() {
    const router = useRouter();

    useEffect(() => {
        if (!getToken()) {
            router.push('/login');
        }
    }, [])

    return (
        <Layout>
            <div style={{ marginBottom: '100px' }}>
                <h2 align={"center"}>
                    Informaţii
                </h2>
            </div>
            <div style={{ marginBottom: '100px' }}>
                <table align={"center"}>
                    <tr>
                        <td rowSpan={3}>
                            <img
                                className={style.image}
                                src='https://i.ibb.co/b2Yw368/3bkf81.png'
                                alt="profile picture"
                            />
                        </td>
                        <td>
                            Nume, prenume
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Manager / Firma
                        </td>
                    </tr>
                    <tr>
                        <td>
                            moto-ul meu
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <h3 align={"center"}>
                    DESPRE MINE
                </h3>
            </div>
            <div style={{ marginBottom: '50px' }}>
                <p align={"justify"}>
                    Aici începe textul. Apăsați aici și începeți să scrieți. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores
                </p>
            </div>
        </Layout>
    )
}


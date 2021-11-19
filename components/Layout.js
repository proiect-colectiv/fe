import React from 'react'
import Container from '@mui/material/Container'

import Navbar from './Navbar.js'
import Footer from './Footer.js'

const Layout = (props) => (
    <>
        <Navbar />
        <Container>
            { props.children }
        </Container>
        <Footer />
    </>
)

export default Layout

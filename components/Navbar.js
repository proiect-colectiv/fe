import React from 'react'
import style from './style/Navbar.module.css'
import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link'
import GenericLink from '../common/GenericLink';

const useStyles = makeStyles({
  active: {
    color: 'blue'
  }
})


const Navbar = () => {
  const classes = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ProiectColectiv
          </Typography>
          <div className={style.lista}>
            <div className={style.listaElem}>
              <GenericLink href='/home' activeClassName={classes.active}>Rezervari</GenericLink>
            </div>
            <div className={style.listaElem}>
              <GenericLink href='/locatii' activeClassName={classes.active}>Locatii</GenericLink></div>
            <div className={style.listaElem}>
              <GenericLink href='/contulMeu' activeClassName={classes.active}>Contul meu</GenericLink>
            </div>
            <div className={style.listaElem}>
              <GenericLink href='/contact' activeClassName={classes.active}>Contact</GenericLink>
            </div>
            <div className={style.listaElem}>
              <GenericLink href='/rezerva' activeClassName={classes.active}>Creaza echipa</GenericLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar

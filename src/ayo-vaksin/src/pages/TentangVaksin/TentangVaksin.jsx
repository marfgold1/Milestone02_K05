import React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  Typography
} from '@material-ui/core';

import ImageTentangVaksin from '../../images/tentangVaksin.png'

const useStyles = makeStyles(theme => ({
  tentangVaksin: {
    backgroundColor: '#222232',
    height: '100%',
    width: '100%',
    padding: '5em 8em',
    [theme.breakpoints.down('sm')]: {
      padding: '5em 0'
    }
  },
  title: {
    color: '#FFFFFF',
    fontSize: '3em',
    fontFamily: 'Nunito',
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.6em',
      textAlign: 'center'
    }
  },
  image: {
    marginTop: '2.5em',
    marginBottom: '1.5em',
    width: '100%'
  },
  body: {
    color: '#FFFFFF',
    fontSize: '1.5em',
    lineHeight: '1.5em',
    fontFamily: 'Nunito',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1em',
      padding: '.5em 2.5em',
      lineHeight: '1.4em'
    }
  },
  reference: {
    marginTop: '1em',
    color: '#FFFFFF',
    fontSize: '1.5em',
    fontFamily: 'Nunito',
    [theme.breakpoints.down('sm')]: {
      paddingInline: '2em',
      fontSize: '1.3em'
    }
  },
  link: {
    color: '#FFFFFF',
    fontFamily: 'Nunito'
  }
}))

export const TentangVaksin = () => {

  const classes = useStyles()

  return (
    <div className={classes.tentangVaksin}>
      <Typography variant='h3' className={classes.title}>Tentang Vaksin</Typography>
      <img src={ImageTentangVaksin} alt='Gambar Vaksin' className={classes.image}></img>
      <Typography className={classes.body}>Vaksin adalah suatu zat yang dimasukkan ke dalam tubuh untuk mengurangi resiko terkenanya suatu penyakit. Zat yang dimasukkan adalah virus yang telah dimatikan atau dilemahkan sehingga tidak akan membahayakan tubuh. Jadi, tidak ada alasan bahwa vaksin berisi zat berbahaya karena pada faktanya, kandungan yang ada vaksin itu sendiri sebenarnya adalah zat-zat yang secara alami ada pada tubuh kita, pada lingkungan kita, dan bahkan pada makanan kita. Zat yang dimasukkan dalam tubuh ini nantinya dapat memicu terbentuknya antibodi terhadap suatu penyakit atau infeksi. Sehingga ketika suatu saat kita terjangkit oleh virus tersebut, tubuh kita dapat langsung mengenalinya dan telah memiliki sistem pertahanan untuk melawan. Itulah mengapa vaksin penting untuk diri kita. Sederhananya, vaksin penting untuk melindungi diri kita dan orang di sekitar kita.</Typography>
      <Typography className={classes.reference}>Sumber: <a href='https://www.who.int/news-room/q-a-detail/vaccines-and-immunization-what-is-vaccination' target='_blank' rel='noreferrer' className={classes.link}>WHO</a></Typography>
    </div>
  )
}

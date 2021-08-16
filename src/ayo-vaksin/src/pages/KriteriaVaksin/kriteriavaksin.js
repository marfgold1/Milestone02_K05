import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    kriteriaVaksin: {
      background: 'linear-gradient(137.49deg, #F4A58A 0%, #ED6B4E 96.01%)',
      height: '100%',
      width: '100%',
      padding: '5em 8em',
      [theme.breakpoints.down('sm')]: {
        padding: '3em 3em'
      }
    },
    contentWrap: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse'
        }
    },
    body: {
        color: '#222232',
        fontSize: '1.5em',
        lineHeight: '1.5em',
        fontFamily: 'Nunito',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '10px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.1em',
          lineHeight: '1.4em'
        }
    },
    title: {
        color: '#181829',
        fontSize: '3em',
        fontFamily: 'Nunito',
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2.3em',
          textAlign: 'center'
        }
    },
    poin: {
        paddingLeft : '1.8em'
    },
    gambar: {
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          display:'flex',
          alignItems : 'center'
        }
    },
    image: {
        width: '21em',
        [theme.breakpoints.down('sm')]: {
            width: '8em'
        }
    }
}))

export const Kriteria = () => {
    const classes = useStyles()
    return(
        <div className={classes.kriteriaVaksin}>
        <p className={classes.title}>Kriteria Vaksinasi</p>
        <div className={classes.contentWrap}>
            <div className={classes.body}>
            <p>
                <b>Beberapa </b> kondisi dimana individu <b> tak boleh</b> untuk divaksinasi adalah :
            </p>
            <ol className={classes.poin}>
                <li>Demam > 37,5C</li>
                <li>Hipertensi >180/110 mmHg</li>
                <li>Alergi setelah vaksin 1</li>
                <li>
                    Hamil
                </li>
                <li>
                    Autoimun
                </li>
                <li>
                    Penyakit Jantung Berat
                </li>
            </ol>
            <p>
                Untuk daftar kondisi lebih lengkap, kunjungi
                <a href="https://covid19.go.id/tanya-jawab?search=kriteria"> Kriteria Vaksin
                </a>
            </p>
            </div>
            <div item className={classes.gambar}>
                <img src={require('../../images/kriteriaVaksin.png').default} className={classes.image} alt='warning'/>
            </div>
        </div>
        </div>

        )
}
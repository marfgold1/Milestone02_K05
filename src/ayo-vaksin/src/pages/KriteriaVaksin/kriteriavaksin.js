import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    kriteriaVaksin: {
      background: 'linear-gradient(137.49deg, #F4A58A 0%, #ED6B4E 96.01%)',
      height: '100%',
      width: '100%',
      padding: '5em 8em',
      [theme.breakpoints.down('sm')]: {
        padding: '5em 3em'
      }
    },
    body: {
        color: '#222232',
        fontSize: '1.5em',
        lineHeight: '1.5em',
        fontFamily: 'Nunito',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.1em',
          padding: '.5em 2.5em',
          lineHeight: '1.4em'
        }
    },
    title: {
        color: '#181829',
        fontSize: '3em',
        fontFamily: 'Nunito',
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2.6em',
          textAlign: 'center'
        }
    },
    poin: {
        paddingLeft : '1.8em'
    },
    gambar: {
        [theme.breakpoints.down('sm')]: {
          display:'flex',
          alignItems : 'center'
        }
    },
}))

export const Kriteria = () => {
    const classes = useStyles()
    return(
        <div className={classes.kriteriaVaksin}>
        <p className={classes.title}>Kriteria Vaksinasi</p>
        <br />
        <Grid container direction="row" wrap="wrap-reverse">
            <Grid className={classes.body} item xs={12} md={8}>
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
            </Grid>
            <Grid item className={classes.gambar} xs={12} md={4}>
                <img src={require('../../images/kriteriaVaksin.png').default} width={335} height={335} alt='warning'/>
            </Grid>
        </Grid>
        </div>

        )
}
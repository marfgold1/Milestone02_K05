import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

import Icon from '../images/icon.png'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    backgroundColor: '#181829',
    color: '#FFFFFF',
    padding: '0 7em',
    [theme.breakpoints.down('sm')]: {
      padding: '1em',
      gap: '16px',
    }
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      minHeight: '150px',
      height: '150px',
    }
  },
  icon: {
    width: 'auto',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      height: 'fit-content',
    }
  },
  contentWrapper: {
    gap: '8px',
    [theme.breakpoints.up('md')]: {
      gap: '16px'
    },
  },
  title: {
    ...theme.typography.h3,
    [theme.breakpoints.up('md')]: {
      ...theme.typography.h1,
    },
  },
  text: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      fontSize: ''
    },
  },
  infoBox: {
    background: 'linear-gradient(137.49deg, #F4A58A 0%, #ED6B4E 96.01%)',
    borderRadius: '15px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: '15px',
    },
  },
  infoBoxNumber: {
    ...theme.typography.h5,
    fontWeight: 900,
    [theme.breakpoints.up('md')]: {
      ...theme.typography.h4,
      fontWeight: 900,
    },
  }
}))

const formatNumber = (num) => new Intl.NumberFormat('en-ID', { maximumSignificantDigits: 20 }).format(num)

export const Homepage = function () {
  const classes = useStyles()

  const [vaxData, setVaxData] = useState([
    { number: 0, addition: 0 },
    { number: 0, addition: 0 },
  ])

  useEffect(() => {
    fetch('https://thingproxy.freeboard.io/fetch/https://data.covid19.go.id/public/api/pemeriksaan-vaksinasi.json')
    .then((resp) => resp.json())
    .then((data) => {
      const vax = data.vaksinasi;
      setVaxData([
        { number: vax.total.jumlah_vaksinasi_1, addition: vax.penambahan.jumlah_vaksinasi_1 },
        { number: vax.total.jumlah_vaksinasi_2, addition: vax.penambahan.jumlah_vaksinasi_2 },
      ]);
    })
  }, [])

  return (
    <Grid container wrap="wrap-reverse" justifyContent="center" alignItems="center" alignContent="center" className={classes.wrapper}>
        <Grid container item xs={12} md={7} direction="column" justifyContent="center" className={classes.contentWrapper}>
          <Grid item className={`${classes.title} ${classes.text}`}>
            Ayo Vaksin!
          </Grid>
          <Grid item className={classes.text}>
            <Typography variant="subtitle1">
              Dapatkan informasi terkini tentang vaksin, kriteria individu yang mendapatkan vaksin, lokasi terdekat untuk melakukan vaksin, dan tanya jawab mengenai vaksin
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              {vaxData.map((data, i) => (
                <Grid item xs={12} md={6} key={i}>
                  <div className={classes.infoBox}>
                    <div>Vaksinasi ke-{i+1}</div>
                    <div className={classes.infoBoxNumber}>
                      {formatNumber(data.number)}
                    </div>
                    <div>+{formatNumber(data.addition)}</div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className={classes.iconWrapper}>
          <img src={Icon} className={classes.icon} alt="Syringe Icon" />
        </Grid>
    </Grid>
  )
}

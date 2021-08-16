import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid, Hidden, Typography } from '@material-ui/core'

import Call from '../images/Call.svg'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    backgroundColor: '#246BFD',
    color: '#FFFFFF',
    padding: '2em 7em',
    [theme.breakpoints.down('sm')]: {
      padding: '2em 1em'
    }
  },
  linksWrapper: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  linkList: {
    margin: 0,
    paddingInlineStart: '2em',
  },
  link: {
    color: '#FFFFFF',
  },
  hotlineWrapper: {
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    }
  }
}))

const links = [
  { label: 'Satuan Tugas Penanganan COVID-19', href: 'https://covid19.go.id/' },
  { label: 'PeduliLindungi', href: 'https://pedulilindungi.id/' },
  { label: 'Linktree KPCPEN', href: 'https://linktr.ee/covid19.go.id' },
  { label: 'Alodokter', href: 'https://www.alodokter.com/informasi-berbagai-vaksin-covid-19-di-indonesia' },
]

export const Footer = function () {
  const classes = useStyles()
  const spacing = 2

  return (
    <Box padding={`${spacing * 4}px`}>
      <Grid container wrap="wrap-reverse" spacing={spacing} className={classes.wrapper}>
        <Hidden mdUp>
          <Grid container item direction="column" alignItems="center">
            <Grid item><strong>Kelompok 5 Milestone SPARTA</strong></Grid>
            <Grid item>All Rights Reserved - 2021</Grid>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={7} className={classes.linksWrapper}>
          <Grid item>
            Untuk info lebih lanjut tentang vaksin, silahkan kunjungi link berikut:
            <ol className={classes.linkList}>
              {links.map((link) => (
                <li>
                  <a href={link.href} className={classes.link}>{link.label}</a>
                </li>
              ))}
            </ol>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={5} direction="column">
          <Grid container item spacing="2" className={classes.hotlineWrapper}>
            <Grid item><img src={Call} alt="telephone" /></Grid>
            <Grid item direction="column">
              <Typography variant="h5">
                <Grid item>Covid-19</Grid>
                <Grid item>Hotline</Grid>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">119</Typography>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid container item direction="column" alignItems="flex-end">
              <Grid item><strong>Kelompok 5 Milestone SPARTA</strong></Grid>
              <Grid item>All Rights Reserved - 2021</Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Box>
  )
}

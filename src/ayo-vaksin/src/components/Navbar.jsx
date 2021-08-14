import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Hidden, Toolbar, Typography } from '@material-ui/core'
import { NavDrawer } from './NavDrawer'

import Icon from '../images/icon.png'

const links = [
  { label: 'Tentang' },
  { label: 'Kriteria' },
  { label: 'Lokasi' },
  { label: 'Tanya Jawab' },
]

const useStyles = makeStyles((theme) => ({
  icon: {
    height: '30px',
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px',
    }
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
  },
  navRow: {
    display: 'flex',
    gap: '20px',
  },
  rowButton: {
    fontSize: '16px',
    fontWeight: 700,
    textTransform: 'none',
  },
}))

export const Navbar = function () {
  const classes = useStyles()

  const navRow = links.map((link) => (
    <Button color="inherit" className={classes.rowButton}>{link.label}</Button>
  ))

  return (
    <AppBar position="sticky">
      <Toolbar>
        <img src={Icon} className={classes.icon} alt="Syringe Icon" />
        <Typography variant="h6" className={classes.title}>
          Ayo Vaksin
        </Typography>
        <Hidden smDown>
          <div className={classes.navRow}>{navRow}</div>
        </Hidden>
        <Hidden mdUp>
          <NavDrawer links={links}></NavDrawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Hidden, Toolbar, Typography } from '@material-ui/core'
import { NavDrawer } from './NavDrawer'

import Icon from '../images/icon.png'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: '#246BFD',
  },
  icon: {
    height: '30px',
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px',
    }
  },
  logoTitle: {
    color: 'inherit',
    textDecoration: 'none',
    flexGrow: 1,
    display: 'flex',
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
    color: 'inherit',
    fontSize: '16px',
    fontWeight: 700,
    textTransform: 'none',
  },
}))

export const Navbar = function ({ links }) {
  const classes = useStyles()

  const navRow = links
    .map((link) => (
      <Button key={link.key} href={'#' + link.key} className={classes.rowButton}>
        {link.label}
      </Button>
    ))

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <a href="#home" className={classes.logoTitle}>
          <img src={Icon} className={classes.icon} alt="Syringe Icon" />
          <Typography variant="h6" className={classes.title}>
            Ayo Vaksin
          </Typography>
        </a>
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

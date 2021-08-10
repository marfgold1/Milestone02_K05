import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Drawer, Hidden, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const links = [
  { label: 'Tentang' },
  { label: 'Kriteria' },
  { label: 'Lokasi' },
  { label: 'Tanya Jawab' },
]

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}))

function NavDrawer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <List>
          {links.map((link) => (
            <ListItem><ListItemText primary={link.label} /></ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

function Navbar() {
  const navRow = links.map((link) => (
    <Button color="inherit">{link.label}</Button>
  ))

  const classes = useStyles()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Ayo Vaksin
        </Typography>
        <Hidden smDown>{navRow}</Hidden>
        <Hidden mdUp>
          <NavDrawer></NavDrawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;

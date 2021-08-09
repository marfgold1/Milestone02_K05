import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

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

function Navbar() {
  const navlinks = links.map((link) => (
    <Button color="inherit">{link.label}</Button>
  ))

  const classes = useStyles()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Ayo Vaksin
        </Typography>
        {navlinks}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;

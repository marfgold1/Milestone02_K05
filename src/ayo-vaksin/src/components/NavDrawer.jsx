import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  itemText: {
    fontWeight: 700,
  },
}))

export const NavDrawer = function ({ links }) {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
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
            <ListItem button component="a" href={'#' + link.key} onClick={handleClose}>
              <ListItemText primary={link.label} disableTypography className={classes.itemText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

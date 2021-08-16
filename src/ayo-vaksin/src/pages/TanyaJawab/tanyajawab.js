import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    tanyajawab: {
      backgroundColor:'#181829',
      height: '100%',
      width: '100%',
      padding: '8em 8em',
      [theme.breakpoints.down('sm')]: {
        padding: '3em 3em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    },
    title: {
        color: '#ECECEC',
        fontSize: '3em',
        fontFamily: 'Nunito',
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2em',
          textAlign: 'Center'
        }
    },
    root: {
      padding: '0px 0px',
      display: 'flex',
      alignItems: 'center',
      marginBlock: '2em',
      width: '100%'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
      borderRadius : '0px',
      backgroundColor: '#246BFD',
      [theme.breakpoints.down('sm')]: {
        padding: 5
      }
    },
    icon: {
      color: '#FFFFFF'
    }
    
}))

export const TanyaJawab = () => {
    const classes=useStyles()
    return(
        <div className={classes.tanyajawab}>
            <p className={classes.title}>Tanya Jawab Vaksin</p>
              <Paper component="form" className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder="Pencarian........."
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                  <SearchIcon className={classes.icon} />
                </IconButton>
              </Paper>
        </div>
        )
}
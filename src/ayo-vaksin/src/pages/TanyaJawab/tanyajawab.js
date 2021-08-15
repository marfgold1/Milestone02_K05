import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    tanyajawab: {
      backgroundColor:'#181829',
      height: '407px',
      width: '100%',
      padding: '8em 8em',
      [theme.breakpoints.down('sm')]: {
        padding: '5em 3em'
      }
    },
    title: {
        color: '#ECECEC',
        fontSize: '3em',
        fontFamily: 'Nunito',
        fontWeight: '600',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2.6em',
          textAlign: 'Center'
        }
    },
    root: {
      padding: '0px 0px',
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing("147px"),
      marginRight: theme.spacing("147px"),
      marginTop: 21,
      [theme.breakpoints.down('sm')]: {
        width: 327,
        height: 36,
      }
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
      borderRadius : '0px',
      backgroundColor: '#246BFD',
    },
    
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
                  <SearchIcon />
                </IconButton>
              </Paper>
        </div>
        )
}
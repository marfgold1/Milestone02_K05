import React from 'react'

import { IconButton, makeStyles, Typography } from '@material-ui/core'

import MapOutlinedIcon from '@material-ui/icons/MapOutlined';

const useStyles = makeStyles(theme => ({
  dataCard: {
    backgroundColor: '#14274D',
    height: '10.5em',
    width: '33em',
    borderRadius: '10px',
    padding: '1.5em 2.3em',
    [theme.breakpoints.down('sm')]: {
      width: '23em',
      padding: '1.5em 1em'
    }
  },
  cardWrap: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '68%'
  },
  contentHead: {
    color: '#FFFFFF',
    fontSize: '20px',
    fontFamily: 'Nunito',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px'
    }
  },
  content: {
    color: '#FFFFFF',
    fontSize: '16px',
    fontFamily: 'Nunito',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px'
    }
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    color: '#FFFFFF'
  },
  icon: {
    color: '#FFFFFF',
    fontSize: '45px',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px'
    }
  }
}))

export const DataCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.dataCard} id={props.id}>
      <div className={classes.cardWrap}>
        <div className={classes.left}>
          <Typography className={classes.contentHead}>{props.nama_lokasi}</Typography>
          <Typography className={classes.content}>{props.alamat}</Typography>
          <Typography className={classes.content}>{props.no_telpon}</Typography>
        </div>
        <div className={classes.right}>
          <IconButton className={classes.iconButton}>
            <MapOutlinedIcon className={classes.icon}/>
          </IconButton>
          <Typography className={classes.content}>Arahkan</Typography>
        </div>
      </div>
    </div>
  )
}

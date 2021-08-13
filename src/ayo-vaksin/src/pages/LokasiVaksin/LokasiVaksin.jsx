import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

import { DataCard } from './DataCard/DataCard'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const useStyles = makeStyles(theme => ({
  lokasiVaksin: {
    backgroundColor: '#222232',
    height: '100%',
    width: '100%',
    padding: '7em',
    [theme.breakpoints.down('sm')]: {
      padding: '3em 1em'
    }
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Nunito',
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3em'
    }
  },
  subBody: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingBlock: '1em',
    paddingBottom: '2em',
    fontFamily: 'Nunito',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      paddingTop: '.5em'
    }
  },
  mapContent: {
    width: '53em',
    height: '42em',
    [theme.breakpoints.down('sm')]: {
      width: '85%',
      height: '40em',
    }
  },
  left: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  contentWrapper: {
    display: 'flex',
    gap: '40px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '25px'
    }
  },
  right: {
    height: '36em',
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gap: '13px',
    paddingRight: '20px',
    overflowX: 'hidden',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
      justifyContent: 'center',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    }
  }
}))

const dataLokasiVaksin = [
  {
    id: 1,
    nama_lokasi: 'RUMAH SAKIT A',
    alamat: 'Jl. lorem',
    no_telpon: '08441973813',
  },
  {
    id: 2,
    nama_lokasi: 'RUMAH SAKIT B',
    alamat: 'Jl. Ipsum',
    no_telpon: '018471483321',
  },
  {
    id: 3,
    nama_lokasi: 'RUMAH SAKIT C',
    alamat: 'Jl. dolor sit',
    no_telpon: '4385734501234',
  },
  {
    id: 4,
    nama_lokasi: 'RUMAH SAKIT D',
    alamat: 'Jl. lorem ipsum dolor sit amet',
    no_telpon: '981479057348',
  },
]

export const LokasiVaksin = () => {
  const classes = useStyles();

  const position = [51.505, -0.09]

  return (
    <div className={classes.lokasiVaksin}>
      <Typography variant='h3' className={classes.title}>Lokasi Vaksin</Typography>
      <Typography className={classes.subBody}>Lihat lokasi vaksin terdekat dari Anda disini</Typography>
      <div className={classes.contentWrapper}>
        <div className={classes.left}>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={classes.mapContent}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Hello guys
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className={classes.right}>
          {dataLokasiVaksin.map((data) => (
            <DataCard 
              id={data.id}
              nama_lokasi={data.nama_lokasi}
              alamat={data.alamat}
              no_telpon={data.no_telpon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

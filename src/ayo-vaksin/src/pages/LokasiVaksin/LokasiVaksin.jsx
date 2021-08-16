import React, { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core'

import { DataCard } from './DataCard/DataCard'

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

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
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
      paddingTop: '.5em'
    }
  },
  mapContent: {
    width: '53em',
    height: '42em',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      height: '40em',
    },
  },
  left: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  contentWrapper: {
    display: 'flex',
    gap: '30px',
    [theme.breakpoints.down('md')]: {
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
    paddingRight: '30px',
    overflowX: 'hidden',
    [theme.breakpoints.down('md')]: {
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
    nama_lokasi: 'STEI',
    alamat: 'Labtek VIII/Gedung Achmad Bakrie, Jl. II, Lebak Siliwangi, Coblong, Bandung City, West Java 40132',
    no_telpon: '08441973813',
    posisi: [-6.89060, 107.61103]
  },
  {
    id: 2,
    nama_lokasi: 'PERPUSTAKAAN ITB',
    alamat: 'Jalan V Kawasan ITB Kampus Ganesa, Jl. Ganeca No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132',
    no_telpon: '018471483321',
    posisi: [-6.88788, 107.61071]
  },
  {
    id: 3,
    nama_lokasi: 'SBM ITB',
    alamat: 'Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132',
    no_telpon: '4385734501234',
    posisi: [-6.88800, 107.60923]
  },
  {
    id: 4,
    nama_lokasi: 'SABUGA CONVENTION HALL',
    alamat: 'Jl. Tamansari No.73, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132',
    no_telpon: '981479057348',
    posisi: [-6.88619, 107.60785]
  },
]

const ChangeView = ({center, zoom}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export const LokasiVaksin = () => {
  const classes = useStyles();

  const [position, setPosition] = useState([-6.89145, 107.61061])
  const [namaLokasi, setNamaLokasi] = useState('ITB')

  return (
    <div className={classes.lokasiVaksin}>
      <Typography variant='h3' className={classes.title}>Lokasi Vaksin</Typography>
      <Typography className={classes.subBody}>Lihat lokasi vaksin terdekat dari Anda disini</Typography>
      <div className={classes.contentWrapper}>
        <div className={classes.left}>
          <MapContainer center={position} zoom={16} scrollWheelZoom={false} className={classes.mapContent}>
            <ChangeView center={position} zoom={17}/>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                {namaLokasi}
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
              onClick={() => {
                setPosition(data.posisi);
                setNamaLokasi(data.nama_lokasi);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

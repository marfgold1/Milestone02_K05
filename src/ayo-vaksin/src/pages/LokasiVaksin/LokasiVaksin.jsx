import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

import imageSamplePeta from '../../images/samplePeta.png'
import { DataCard } from './DataCard/DataCard'

const useStyles = makeStyles({
  lokasiVaksin: {
    backgroundColor: '#222232',
    height: '100%',
    width: '100%',
    padding: '7em 7em',
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Nunito'
  },
  subBody: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingBlock: '1em',
    paddingBottom: '2em',
    fontFamily: 'Nunito'
  },
  image: {
    width: '45em'
  },
  contentWrapper: {
    display: 'flex',
    gap: '40px'
  },
  right: {
    height: '35.2em',
    overflow: 'auto',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gap: '15px',
    paddingRight: '10px'
  }
})

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
  return (
    <div className={classes.lokasiVaksin}>
      <Typography variant='h3' className={classes.title}>Lokasi Vaksin</Typography>
      <Typography className={classes.subBody}>Lihat lokasi vaksin terdekat dari Anda disini</Typography>
      <div className={classes.contentWrapper}>
        <div className={classes.left}>
          <img src={imageSamplePeta} alt='Peta lokasi vaksin' className={classes.image}></img>
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

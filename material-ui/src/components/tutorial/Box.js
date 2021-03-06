import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import { Container, Paper } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
// import tileData from './tileData'
// import image from 'https://.../image.jpg'

import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWarp: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}))

const tileData = [
  {
    // img: image,
    title: 'Image',
    author: 'author',
    cols: 2
  },
  {
    // [etc...]
  }
]

// export const ImageGridList = () => {
//   const classes = useStyles()

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={160} className={classes.gridList} cols={3}>
//         {
//           tileData.map(tile => (
//             <GridListTile key={tile.img} cols={tile.cols || 1}>
//               <img src={tile.img} alt={tile.title}/>
//             </GridListTile>
//           ))
//         }
//       </GridList>
//     </div>
//   )
// }

const AppBox = () => {
  const classes = useStyles()
  return (
    <Hidden xsUp>
      <Paper className={classes.paper}>xsUp</Paper>
    </Hidden>
  )
}

export default AppBox
// export default withWidth(AppBox)
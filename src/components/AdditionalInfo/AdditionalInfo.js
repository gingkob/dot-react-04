import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Box, Button } from '@material-ui/core';
import './AdditionalInfo.css'

function AdditionalInfo(props) {
  const { imageSrc, imageDescription, notes, link, name, showAddInfo } = props.additionalInfo;
  const [showBox, setShowBox] = useState(false);

  useEffect(() => { setShowBox(true) }, [name, showAddInfo])

  return (
    showBox && <Box className='additioanal-info' mt={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            style={{ height: 0, paddingTop: '56.25%' }}
            image={imageSrc || "/assets/images/no-image.png"}
            title={imageDescription}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {notes}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {link}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ marginLeft: "8px" }}>
          <Button variant='contained' color='secondary' size='small' onClick={() => setShowBox(false)}>Hide Additional Info</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default AdditionalInfo

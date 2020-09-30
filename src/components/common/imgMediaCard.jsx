import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 10,
  },
});

export default function ImgMediaCard({ data, removeBreed }) {
  const classes = useStyles();

  const handleRemove = (arg) => {
    console.log('remove', arg);
    removeBreed(arg);
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={data.image}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography noWrap>{data.name}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button
          onClick={() => handleRemove(data.name)}
          className='btn btn-danger'
        >
          Remove
        </button>
      </CardActions>
    </Card>
  );
}

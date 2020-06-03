import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 230,
    backgroundColor: '#c4c4c44d',
    color: '#fff',
    margin: 15
  },
  media: {
    height: 140,
  },
});


export default function Followers(props) {
  console.log(props)
const classes = useStyles();
  
return (
  <div>
    <div className='followers'>
      <h6>Followers</h6>
    </div>
    <div className='followers-container'>
        {props.followers.map(user => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={user.avatar_url}
              title="Github User"
          />
          <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {user.login}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {user.bio ? user.bio : 'User Bio N/A'}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        ))}
      </div>
    </div>
  );
}
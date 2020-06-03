import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: 230,
    backgroundColor: '#c4c4c44d',
    color: '#fff'
  },
  media: {
    height: 140,
  },
});


export default function InitialUsers(props) {
    const { user, searchFollowers } = props;
    const classes = useStyles();

return (
   <div className='card-container'>
       {!!user && (
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
                    <Typography variant="body2" color='#fff' component="p">
                    {user.bio ? user.bio : 'User Bio N/A'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        )}
    </div>
   )
}

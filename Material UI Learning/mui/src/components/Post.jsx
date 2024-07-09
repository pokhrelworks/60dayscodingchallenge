import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import MoreVertIcon from "@mui/icons-material/MoreVert";

function Post({ accountname, date, profilepic, caption, imageurl }) {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "red" }}
            src={profilepic}
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpxYXf7gBkXvf9WFiiBaqIHor2DSyfir1Hg&s"
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={accountname}
        subheader={date}
      />
      <CardMedia
        component="img"
        height="20%"
        // image="https://marmelab.com/static/1019d1daef4f6f43bcb03af50c0df098/60188/react-meme.jpg"
        image={imageurl}
        alt="img"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;

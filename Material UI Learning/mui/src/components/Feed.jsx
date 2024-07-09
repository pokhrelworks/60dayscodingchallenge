import { Box } from "@mui/material";
import Post from "./Post";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post
        accountname="Xavier"
        date="Jun 9, 2024"
        profilepic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpxYXf7gBkXvf9WFiiBaqIHor2DSyfir1Hg&s"
        caption="It is what it is!"
        imageurl="https://marmelab.com/static/1019d1daef4f6f43bcb03af50c0df098/60188/react-meme.jpg"
      />
      <Post
        accountname="Doge"
        date="Jul 5, 2024"
        profilepic="https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
        caption="When you finally understand useState in React"
        imageurl="https://i.imgflip.com/3si4.jpg"
      />
    </Box>
  );
}

export default Feed;

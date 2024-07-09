import {
  Avatar,
  Badge,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import ModeNight from "@mui/icons-material/ModeNight";

import QuestionAnswerSharp from "@mui/icons-material/QuestionAnswerSharp";
import PeopleOutline from "@mui/icons-material/PeopleOutline";
import SettingsBackupRestore from "@mui/icons-material/SettingsBackupRestore";
import Bookmark from "@mui/icons-material/Bookmark";
import Groups from "@mui/icons-material/Groups";
import VideoLibraryRounded from "@mui/icons-material/VideoLibraryRounded";
import SportsEsportsRounded from "@mui/icons-material/SportsEsportsRounded";

function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <Avatar
                  xs={{ width: 30, height: 30 }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBD7Ti97Rp4wiAWHewdm9TY7GQf-TkIWEPQ&s"
                />
              </ListItemIcon>
              <ListItemText primary="Xavier" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <PeopleOutline />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#memories">
              <ListItemIcon>
                <SettingsBackupRestore />
              </ListItemIcon>
              <ListItemText primary="Memories" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#saved">
              <ListItemIcon>
                <Bookmark />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <Groups />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#reels">
              <ListItemIcon>
                <VideoLibraryRounded />
              </ListItemIcon>
              <ListItemText primary="Reels" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#playgame">
              <ListItemIcon>
                <SportsEsportsRounded />
              </ListItemIcon>
              <ListItemText primary="Games" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#messenger">
              <ListItemIcon>
                <Badge badgeContent={4} color="error">
                  <QuestionAnswerSharp />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Reel'ationship" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#messenger">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;

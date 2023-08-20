import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './chat.module.css'

function ChatList(props) {
    const [isChatOpen, setChatOpen] = useState(false);
    const location = useLocation();
    const users = location.state?.users;

    const handleHeadClick = () => {
        if (isChatOpen) {
            props.userProfileCall(null);
        }
        setChatOpen((open) => !open);
    }

    return (
        <div className={styles.chatList} style={{ height: isChatOpen ? 400 : 56 }}>
            <Box backgroundColor="#2c65c8" color="white"
                p="1rem" display="flex" justifyContent="space-between"
                onClick={handleHeadClick}
                sx={{
                    cursor: 'pointer'
                }}>
                <Box display="flex" gap=".5rem">
                    <ChatBubbleOutlineIcon />
                    <div>Chats</div>
                </Box>
                {isChatOpen ? (<KeyboardArrowDownIcon />) : (<KeyboardArrowUpIcon />)}
            </Box>
            <div style={{
                backgroundColor: "white", height: "calc(100% - 56px)", overflow: "auto", cursor: "pointer"
            }}>
                <List>
                    {users.map((user, index) => {
                        let randomValue = (Math.random() * 10) % 2;
                        return (<div key={user.id}>
                            <div onClick={() => { props.userProfileCall(user) }} style={{ textDecoration: "none", color: "black" }}>
                                <ListItem style={{ padding: "3px 20px" }} >
                                    <ListItemAvatar>
                                        <Avatar
                                            alt='user-profile-picture'
                                            src={user.profilepicture}
                                            sx={{ width: 32, height: 32 }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText>
                                        <div style={{ fontSize: 14 }}>
                                            {user.name}
                                        </div>
                                    </ListItemText>
                                    {(randomValue > 1)
                                        ?
                                        <div style={{ width: 10, backgroundColor: "green", height: 10, borderRadius: "50%" }}></div>
                                        :
                                        <div style={{ width: 10, backgroundColor: "#e1e1e1", height: 10, borderRadius: "50%" }}></div>
                                    }
                                </ListItem>
                            </div>
                        </div>)
                    })}
                </List>

            </div>
        </div>
    )
}

export default ChatList;
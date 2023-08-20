import { useLocation } from "react-router-dom";
import styles from './chat.module.css'
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

function ChatWindow(props) {
    const [isChatOpen, setChatOpen] = useState(false);

    useEffect(() => {
        setChatOpen(true)
    }, [props.user])
    return (
        props.user ?
            <div style={{
                position: 'fixed', right: 330,
                bottom: 0, width: 250, boxShadow: '0 0 1px blue',
                borderRadius: "1rem 1rem 0 0", overflow: 'hidden', transition: 'height 300ms',
                backgroundColor: "white",

            }}>

                <Box backgroundColor="#2c65c8" color="white"
                    p="10px" display="flex" alignItems="center" justifyContent="space-between"
                    sx={{
                        cursor: 'pointer'
                    }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <Avatar
                                alt='user-profile-picture'
                                src={props.user.profilepicture}
                                sx={{ width: 32, height: 32 }}
                            />
                        </div>
                        <div style={{ paddingInline: 10 }}>
                            {props.user.name}
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div onClick={() => setChatOpen((open) => !open)}>
                            {isChatOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                        </div>
                        <CloseIcon onClick={() => props.userProfileCall(null)} fontSize="small" />
                    </div>
                </Box>
                <div style={{ height: isChatOpen ? 280 : 0 }}>
                    <div style={{
                        maxHeight: 250,
                        overflow: 'auto'

                    }}>
                        <div className={styles.left}>
                            <div className={styles.msg}>
                                Lorem ipsum dolor sit amet,
                            </div>
                            <div className={styles.msg}>
                                consectetur adipiscing elit,
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', color: '#aaa', fontSize: 10 }}>
                            9:16 PM
                        </div>
                        <div className={styles.right}>
                            <div className={styles.msg}>
                                sed do eiusmod tempor incididunt ut
                            </div>
                            <div className={styles.msg}>
                                labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div className={styles.left}>
                            <div className={styles.msg}>
                                Lorem ipsum dolor sit amet,
                            </div>
                            <div className={styles.msg}>
                                consectetur adipiscing elit,
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', color: '#aaa', fontSize: 10 }}>
                            10:21 PM
                        </div>
                        <div className={styles.right}>
                            <div className={styles.msg}>
                                labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                    <div className={styles.chatInputWrapper}>
                        <input />
                        <SendIcon color="primary" fontSize="small" />
                    </div>
                </div>
            </div> : ''


    )
}

export default ChatWindow;
import { Divider, Popover, Table, TableCell, TableRow } from "@mui/material";
import styles from "./user-profile.module.css"
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import AddProfile from "../add-profille/add-profile";
import ChatList from "../chats/chat-list";
import ChatWindow from "../chats/chat";
import UserProfileMenu from "../user-profile-menu/user-profile-menu";

function UserProfile() {

    const location = useLocation();
    const userDetail = location.state?.user;
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [chatUser, setChatUser] = useState(null);

    const handleuserProfile = (userProfil) => {
        console.log("users", userProfil)
        setChatUser(userProfil)
    }

    return userDetail ? (
        <div style={{ display: "flex", margin: 40 }}>
            <UserProfileMenu active="profile" />
            <div style={{ width: "78%", paddingLeft: 35, fontWeight: 500 }}>
                <div className={styles.profileTitle}>
                    <div>
                        Profile
                    </div>
                    <div className={styles.activeAccount}>
                        <div aria-describedby={id} style={{ display: "flex", alignItems: "center", fontSize: 16 }} onClick={handleOpen}>
                            <img src={userDetail.profilepicture} className={styles.changeProfileImg} alt="profilePicture"></img>
                            <div className={styles.username}>
                                {userDetail.name}
                            </div>
                        </div>
                    </div>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                        <AddProfile changeAccount={userDetail} />
                    </Popover>
                </div>
                <Divider />
                <div className={styles.userDetail}>
                    <div className={styles.user}>
                        <div className={styles.userImage}>
                            <img src={userDetail.profilepicture} style={{
                                width: 200,
                                borderRadius: "50%"
                            }} alt="profilePicture"></img>
                        </div>
                        <div style={{ textAlign: "center", padding: 20, fontSize: 18 }}>{userDetail.name}</div>
                        <Table>
                            <TableRow>
                                <TableCell className={styles.alignRight} variant="head">
                                    Username
                                    <span style={{ paddingInline: 5 }}>:</span>
                                </TableCell>
                                <TableCell className={styles.alignLeft}>{userDetail.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={styles.alignRight} variant="head">
                                    e-mail
                                    <span style={{ paddingInline: 5 }}>:</span></TableCell>
                                <TableCell className={styles.alignLeft}>{userDetail.email}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={styles.alignRight} variant="head">
                                    Phone
                                    <span style={{ paddingInline: 5 }}>:</span></TableCell>
                                <TableCell className={styles.alignLeft}>{userDetail.phone}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={styles.alignRight} variant="head">
                                    website
                                    <span style={{ paddingInline: 5 }}>:</span></TableCell>
                                <TableCell className={styles.alignLeft}>{userDetail.website}</TableCell>
                            </TableRow>
                        </Table>

                        <Divider />
                        <div className={styles.companyTitle}> Company </div>
                        <Table>
                            <TableRow>
                                <TableCell className={styles.alignRight} variant="head">
                                    Name
                                    <span style={{ paddingInline: 5 }}>:</span>
                                </TableCell>
                                <TableCell className={styles.alignLeft}>{userDetail.company.name}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={styles.alignRight} variant="head">
                                    Catchphrase
                                    <span style={{ paddingInline: 5 }}>:</span></TableCell>
                                <TableCell className={styles.alignLeft}>{userDetail.company.catchPhrase}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={styles.alignRight} variant="head">
                                    Bs
                                    <span style={{ paddingInline: 5 }}>:</span></TableCell>
                                <TableCell className={styles.alignLeft}>{userDetail.company.bs}</TableCell>
                            </TableRow>
                        </Table>
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className={styles.address}>
                        <div>
                            <div className={styles.addressTitle}>
                                Address
                            </div>
                            <div style={{ paddingInline: 20, width: 'fit-content' }}>
                                <Table>
                                    <TableRow>
                                        <TableCell className={styles.alignRight} variant="head">
                                            Street
                                            <span style={{ paddingInline: 5 }}>:</span>
                                        </TableCell>
                                        <TableCell className={styles.alignLeft}>{userDetail.address.street}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={styles.alignRight} variant="head">
                                            Suite
                                            <span style={{ paddingInline: 5 }}>:</span></TableCell>
                                        <TableCell className={styles.alignLeft}>{userDetail.address.suite}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={styles.alignRight} variant="head">
                                            City
                                            <span style={{ paddingInline: 5 }}>:</span></TableCell>
                                        <TableCell className={styles.alignLeft}>{userDetail.address.city}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={styles.alignRight} variant="head">
                                            Zipcode
                                            <span style={{ paddingInline: 5 }}>:</span></TableCell>
                                        <TableCell className={styles.alignLeft}>{userDetail.address.zipcode}</TableCell>
                                    </TableRow>
                                </Table>
                            </div>
                            <div className={styles.map}>
                                <img src="/map.png" />
                            </div>
                        </div>
                        <ChatWindow user={chatUser} userProfileCall={handleuserProfile} />
                        <ChatList userProfileCall={handleuserProfile} />
                    </div >
                </div >
            </div>
        </div>
    ) : (<div>Empty</div>);
}

export default UserProfile;

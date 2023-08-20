import { Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./users.module.css"
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = (() => {
        axios.get(`https://panorbit.in/api/users.json`)
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(error => {
                console.error(error);
            });
    })

    return (
        <div style={{ width: "100vw" }}>
            <div className={styles.akshCenter}>
                <Card className={styles.akshCard}>
                    <div className={styles.accountTitle}>
                        Select an account
                    </div>
                    <div className={styles.users}>
                        <List>
                            {users.map((user, index) => <div key={user.id}>
                                <Link to={`${user.id}/user-profile`} state={{ user, users }} style={{ textDecoration: "none", color: "black" }}>
                                    <ListItem className={styles.user} >
                                        <ListItemAvatar>
                                            <Avatar
                                                alt='user-profile-picture'
                                                src={user.profilepicture}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText>
                                            {user.name}
                                        </ListItemText>
                                    </ListItem>
                                </Link>
                                {users.length !== index + 1 ? <Divider /> : ''}
                            </div>)}
                        </List>
                    </div>
                    <div className={styles.bottomSpace}></div>
                </Card>
            </div>
        </div>
    );
}

export default Users;

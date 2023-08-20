
import { Divider } from "@mui/material";
import styles from "./menu.module.css"
import { Link, useLocation } from "react-router-dom";

function UserProfileMenu(props) {
    const active = props.active;
    const location = useLocation();
    return (
        <div className={styles.sidebar}>
            <div className={`${styles.menu} ${active === 'profile' ? styles.active : ''}`}>
                <Link to={location.state ? `/users/${location.state.user.id}/user-profile` : '/'} state={location.state}>
                    Profile
                </Link>
            </div>
            <Divider color="white" />
            <div className={`${styles.menu} ${active === 'posts' ? styles.active : ''}`}>
                <Link to={location.state ? `/users/${location.state.user.id}/posts` : '/'} state={location.state}>
                    Post
                </Link>
            </div>
            <Divider color="white" />
            <div className={`${styles.menu} ${active === 'gallery' ? styles.active : ''}`}>
                <Link to={location.state ? `/users/${location.state.user.id}/gallery` : '/'} state={location.state}>
                    Gallery
                </Link>
            </div >
            <Divider color="white" />
            <div className={`${styles.menu} ${active === 'todo' ? styles.active : ''}`}>
                <Link to={location.state ? `/users/${location.state.user.id}/todo` : '/'} state={location.state}>
                    ToDo
                </Link>
            </div>
        </div>
    )
}

export default UserProfileMenu;
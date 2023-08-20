import { Button, Divider } from "@mui/material"
import styles from "./add-profile.module.css"
import { Link } from "react-router-dom"

function AddProfile() {
    return (
        <div className={styles.addProfile}>
            <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" className={styles.popoverImg} alt="profilePicture"></img>
            <div style={{ textAlign: "center", paddingBlock: 15 }}>
                <div style={{ paddingBottom: 10 }}>
                    Leanne Graham
                </div>
                <div style={{ opacity: 0.5 }}>
                    Sincere@april.biz
                </div>
            </div>
            <Divider />
            <div className={styles.changeAccount}>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" className={styles.changeAccountImg} alt="profilePicture"></img>
                <div style={{ paddingLeft: 10 }}>
                    Leanne Graham
                </div>
            </div>
            <Divider />
            <div className={styles.changeAccount}>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" className={styles.changeAccountImg} alt="profilePicture"></img>
                <div style={{ paddingLeft: 10 }}>
                    Leanne Graham
                </div>
            </div>
            <div style={{ display: "grid", justifyContent: "center" }}>
                <Link to="/users">
                    <Button variant="contained" style={{ backgroundColor: "#d55151", width: "fit-content", borderRadius: 25 }} >Sign out</Button>
                </Link>
            </div>
        </div>
    )
}

export default AddProfile
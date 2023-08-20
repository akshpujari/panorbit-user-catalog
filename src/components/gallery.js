import ComingSoon from "./coming-soon/coming-soon";
import UserProfileMenu from "./user-profile-menu/user-profile-menu";

function Gallery() {
    return (
        <div style={{ display: 'flex', margin: 40 }}>
            <UserProfileMenu active="gallery" />
            <ComingSoon />
        </div>
    )
}

export default Gallery;
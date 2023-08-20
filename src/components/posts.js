import ComingSoon from "./coming-soon/coming-soon";
import UserProfileMenu from "./user-profile-menu/user-profile-menu";

function Posts() {
    return (
        <div style={{ display: 'flex', margin: 40 }}>
            <UserProfileMenu active="posts" />
            <ComingSoon />
        </div>
    )
}

export default Posts;
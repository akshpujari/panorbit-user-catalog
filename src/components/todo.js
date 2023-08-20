import ComingSoon from "./coming-soon/coming-soon";
import UserProfileMenu from "./user-profile-menu/user-profile-menu";

function Todo() {
    return (
        <div style={{ display: 'flex', margin: 40 }}>
            <UserProfileMenu active="todo" />
            <ComingSoon />
        </div>
    )
}

export default Todo;
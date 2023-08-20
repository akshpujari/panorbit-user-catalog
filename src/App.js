import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Users from './components/users/users';
import UserProfile from './components/user-profile/user-profile';
import ComingSoon from './components/coming-soon/coming-soon';
import Posts from './components/posts';
import Gallery from './components/gallery';
import Todo from './components/todo';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace={true} />}  >
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="users/:id/user-profile" element={<UserProfile />} />
          <Route path="users/:id/posts" element={<Posts />} />
          <Route path="users/:id/gallery" element={<Gallery />} />
          <Route path="users/:id/todo" element={<Todo />} />
          <Route path="*" element={<Navigate to="/users" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

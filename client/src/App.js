import './App.css';
import {Route, Routes} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/LoginSignupPage/LoginPage';
import SignupPage from './components/LoginSignupPage/SignupPage';
import UploadNotes from './components/CreatePostPage/UploadNotes';
import HomePage from './components/HomePage/HomePage';
import ViewPage from './components/PdfNotes/ViewPage';
import RequestsPage from './components/RequestsPage/RequestsPage';
import NotificationsPage from './components/NotificationsPage/NotificationsPage';
import SavedPage from './components/SavedPage/SavedPage';
import LikedPage from './components/LikedPage/LikedPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/createpost' element={<UploadNotes />} />
      <Route path='/requests' element={<RequestsPage />} />
      <Route path='/notifications' element={<NotificationsPage />} />
      <Route path='/saved' element={<SavedPage />} />
      <Route path='/liked' element={<LikedPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/pdf/:id' element={<ViewPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import SignInPage from './pages/SignInPage'; 
import SignUpPage from './pages/SignUpPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account/signin" element={<SignInPage />} />
        <Route path="/account/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
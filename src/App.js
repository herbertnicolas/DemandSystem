import { BrowserRouter } from 'react-router-dom';
import './App.css';
import firebase from './services/firebaseConnection';
import Routes from './routes';
import AuthProvider from './pages/contexts/auth';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

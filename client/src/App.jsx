import './App.css';
import { Navbar } from './components';
import GlobalStyle from './Global';
import { Routes, Route } from 'react-router-dom';
import { Login, Product } from './pages';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/" />
            </Routes>
        </div>
    );
};

export default App;

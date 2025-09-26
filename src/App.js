import Profile from './components/profile';
import Form from './components/Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Profile />} />
                <Route path='/form' element={<Form />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;

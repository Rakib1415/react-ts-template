import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Header from './components/header/Header'
import Login from './pages/login/Login'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App

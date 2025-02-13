import Login from '@/pages/Login';
import Registration from '@/pages/Registration';
import Writer_my_post from '@/pages/Writer_my_post';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/Registration"
                    element={<Registration />}
                />

                <Route
                    path="/Login"
                    element={<Login />}
                />

                <Route
                    path="*"
                    element={<Navigate to="/Registration" />}
                />
                
                <Route
                    path='/Writer_my_post'
                    element={<Writer_my_post/>}
                />

            </Routes>
        </Router>
  )
}

export default App

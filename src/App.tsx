import Login from '@/pages/Login';
import Registration from '@/pages/Registration';
import Reader_post from '@/pages/Reader_post';
import Writer_post from '@/pages/Writer_post';
import Writer_my_post from '@/pages/Writer_my_post';
import Writer_draft from '@/pages/Writer_draft';

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
                    path='/Reader_post'
                    element={<Reader_post/>}
                />

                <Route
                    path='/Writer_post'
                    element={<Writer_post/>}
                />

                <Route
                    path='/Writer_my_post'
                    element={<Writer_my_post/>}
                />

                <Route
                path='/Writer_draft'
                element={<Writer_draft/>}            
                />

            </Routes>
        </Router>
  )
}

export default App

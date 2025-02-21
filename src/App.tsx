import Login from '@/pages/Login';
import Registration from '@/pages/Registration';
import Posts from '@/pages/Posts';
import Post_inside from '@/pages/Post_inside';

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
                    path='/Posts/:id'
                    element={<Post_inside/>}
                />

                <Route
                    path='/Posts'
                    element={<Posts/>}
                />

            </Routes>
        </Router>
  )
}

export default App

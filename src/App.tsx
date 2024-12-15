import Login from '@/components/Login.tsx';
import Registration from '@/components/Registration.tsx';
import Reader_post from '@/components/Reader_post.tsx';
import Reader_post_inside from '@/components/Reader_post_inside';
import Writer_post from '@/components/Writer_post';
import Writer_my_post from '@/components/Writer_my_post';
import Writer_draft from '@/components/Writer_draft';

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
                path='/Reader_post_inside'
                element={<Reader_post_inside/>}
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

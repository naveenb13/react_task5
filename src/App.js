import './css/sb-admin-2.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Students from './Students';
import Teachers from './Teachers';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Createstudent from './Createstudent';
import Createteacher from './Createteacher';
import Portal from './Portal';
import Login from './Login';
import Studentview from './Studentview';
import Teacherview from './Teacherview';
import Editteacher from './Editteacher';
import Editstudent from './Editstudent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="students" element={<Students />} />
          <Route path="students/:id" element={<Studentview />} />
          <Route path="students/edit/:id" element={<Editstudent />} />
          <Route path="create-student" element={<Createstudent />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="teachers/:id" element={<Teacherview />} />
          <Route path="teachers/edit/:id" element={<Editteacher />} />
          <Route path="create-teacher" element={<Createteacher />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

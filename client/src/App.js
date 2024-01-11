import {
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import AddStudent from "./component/student/AddStudent";
import EditStudent from "./component/student/EditStudent";
import StudentPofile from "./component/student/StudentPofile";
import StudentsView from "./component/student/StudentsView";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
	return (
		<main className="container mt-5">
			<Router>
				
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-students"
						element={<StudentsView />}></Route>
					<Route
						exact
						path="/add-students"
						element={<AddStudent />}></Route>
					<Route
						exact
						path="/edit-student/:id"
						element={<EditStudent />}></Route>
					<Route
						exact
						path="/student-profile/:id"
						element={<StudentPofile />}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;

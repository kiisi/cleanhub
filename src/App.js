import React from 'react'
import './App.scss';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login';

const App = () => {

	return (
		<Router>
			<div className="app">
				<Routes>
					<Route exact path="/" element={<Home/>}/>
					<Route exact path="/login" element={<Login/>}/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}


export default App;
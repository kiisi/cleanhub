import React from 'react'
import './App.scss';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Signup from './Pages/Signup/Signup';

const App = () => {

	return (
		<Router>
			<ScrollToTop>
				<div className="app">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/signin" element={<Login />} />
						<Route exact path="/signup" element={<Signup />} />
					</Routes>
					<Footer />
				</div>
			</ScrollToTop>
		</Router>
	);
}


export default App;
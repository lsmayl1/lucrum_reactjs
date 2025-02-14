import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import AboutPage from './About';
import ServicesPage from './Services';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import PerformancePage from './PerformancePage';
import ExpertAdviserPage from './ExpertAdviserPage';

export default function Main(){
	return (
		<Router>
		  <Routes basename={process.env.PUBLIC_URL}> 
			<Route path="/" element={<App />} />
			<Route path="/about" element={<AboutPage />} />
			<Route path="/service" element={<ServicesPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/performance" element={<PerformancePage/>} />
			<Route path="/expertadviser" element={<ExpertAdviserPage/>} />
	
		  </Routes>
		</Router>
	  );
};



const root = document.getElementById('app')
ReactDOMClient.createRoot(root).render(<Main/>)



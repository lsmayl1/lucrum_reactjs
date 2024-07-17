import Header from './components/Header';
import Hero from './components/Hero';
import Price from './components/Price';
import About from './components/About';
import Services from './components/Services';
import Faq from './components/Faq';
import Footer from './components/Footer';

import "./assets/css/style.css"
import "./assets/css/responsive.css"



export default function App(){
	return( 
		<>
		<div className='container'>
		<Header/>
		<Hero/>
		<About/>
		<Services/>
		 <Price/> 
		 <Faq/>
		</div>
	
		<Footer/>
		 </>
	)

}
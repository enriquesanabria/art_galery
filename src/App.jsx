import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Artist from './components/Artist';
import Contact from './components/Contact';
import Expo from './components/Expo';
import Featured from './components/Featured';
import Portfolio from './components/Portfolio';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Artist' element={<Artist />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='/Expo' element={<Expo />} />
					<Route path='/Featured' element={<Featured />} />
					<Route path='/Portfolio' element={<Portfolio />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

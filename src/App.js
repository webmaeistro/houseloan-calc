import React from 'react';
import {Calculator} from './components/Calculator';
import './App.css';
import ReactGA from 'react-ga-gtm';

ReactGA.initialize('*');
ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
	return (
    	<div className="App">
      		<header>
        		<h1>Pay back plan | by Martin Andersen</h1>
      		</header>
      		<Calculator />
    	</div>
  	);
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloud, faCloudRain, faCloudSun, faCloudSunRain, faLongArrowAltUp, faLongArrowAltDown, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faCloud, faCloudRain, faCloudSun, faCloudSunRain, faLongArrowAltUp, faLongArrowAltDown, faSpinner)

ReactDOM.render(<App />, document.getElementById('root'));

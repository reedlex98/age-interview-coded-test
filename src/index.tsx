import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltUp, faLongArrowAltDown, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faLongArrowAltUp, faLongArrowAltDown, faSpinner)

ReactDOM.render(<App />, document.getElementById('root'));

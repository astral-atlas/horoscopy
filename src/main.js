import { render, createElement as h } from './lib/react.js';
import { Horoscopy } from './components/Horoscopy.js';

const mainElement = document.createElement('div');
render(h(Horoscopy), mainElement);
document.body.append(mainElement);
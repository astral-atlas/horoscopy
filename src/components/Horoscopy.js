import { createElement as h, useState } from '../lib/react.js';
import { Background } from './Background.js';
import { Title } from './Title.js';
import { StarSign } from './StarSign.js';

import { starSigns } from '../stars.js';

export const Horoscopy = () => {
  return [
    h(Background),
    h('main', { className: 'horoscopy' },
      h(Title),
      h('p', {}, 'A peaceful night allows the elves of Corbath to guide your eyes to the heavens.'),
      h('p', {}, 'They spend the hours spinning tales of the stars; of their discovery, meaning, fates, shapes.'),
      h('p', {}, '"Everybody ever born was born under a star sign, somewhere" a voice remarks. "What\'s yours?"'),
      h('div', { className: 'star-sign-container' },
        ...starSigns.map(sign => h(StarSign, { sign, key: sign.name }))
      ),
    )
  ];
};
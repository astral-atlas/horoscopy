import { createElement as h } from '../lib/react.js';

export const StarSign = ({ sign }) => {
  const onClick = (event) => {
    event.target.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };
  return h('button', { className: 'star-sign', onClick }, 
    h('h2', {}, sign.name),
    h('img', { src: sign.image }),
    h('h3', {}, 'Qualities'),
    h('em', { className: 'star-sign-qualities' }, sign.qualities),
    h('h3', {}, 'Description'),
    ...(sign.description || []).map((description, key) => h('p', { key }, description)),
    h('h3', {}, 'Stars'),
    h('em', { className: 'star-sign-stars' }, sign.stars),
  )
};
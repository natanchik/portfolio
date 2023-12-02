import { intro } from './components/intro';
import { aboutMe } from './components/about-me';
import { stack } from './components/stack';
import { projects } from './components/projects';
import { contacts } from './components/contacts';
import './style.scss';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.append(wrapper);

wrapper.append(intro, aboutMe, stack, projects, contacts);

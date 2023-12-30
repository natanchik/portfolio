import { wrapper } from './components/wrapper';
import { header } from './components/header';
import { intro } from './components/intro';
import { aboutMe } from './components/about-me';
import { stack } from './components/skills';
import { projects } from './components/projects';
import { contacts } from './components/contacts';
import { modal } from './components/modal';
import { footer } from './components/footer';
import './style.scss';

document.body.append(wrapper);
wrapper.append(header, intro, aboutMe, stack, projects, contacts, modal, footer);

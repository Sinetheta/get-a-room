import Calendars from './pages/Calendars';
import Events from './pages/Events';
import Home from './pages/Home';

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/calendars',
    component: Calendars
  },
  {
    name: 'calendars',
    path: '/calendars/:id',
    component: Events
  }
];

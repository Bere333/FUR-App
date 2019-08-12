"use strict";

//Vistas de la página
import Login from './views/pages/login.js';
import Home from './views/pages/home.js';
import MyInfo from './views/pages/myinfo.js';
import Profile from './views/pages/profile.js';
import Activities from './views/pages/activities.js';
import Help from './views/pages/help.js';
import Error404 from './views/pages/Error404.js';
import Utils from './services/utils.js';
import Navbar from './views/components/Navbar.js';
import Bottombar from './views/components/Bottombar.js';


const routes = {
    '/': Login,
    '/home': Home,

    '/perfil': Profile,
    '/mi-informacion': MyInfo,
    '/mis-actividades': Activities,
    '/ayuda': Help

};

const router = async() => {
    const header = null || document.getElementById('header-container');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer-container');

    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    if (parsedURL !== '/') {
        header.innerHTML = await Navbar.render();
        await Navbar.after_render();
        footer.innerHTML = await Bottombar.render();
        await Bottombar.after_render();
    }

    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
}

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
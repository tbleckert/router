Router
=============
_<0.5kb minified and gzipped_

## Install

Download dist/module.js or install with npm (`npm install @bleckert/router`).

## Usage

Simply create a new router like this:

    const router = new Router();

You can also create the router with a base url (will be prepended on all routes) and/or a routes object.

    const router = new Router('/user', {
    	profile(route, path) {

    	},
    	settings(route, path) {

    	}
    });

You can also add routes after init and call `dispatch` manually. This is how you add routes:

    router.on('/profile', (route, path, event) => {

    });

    router.on('/splat/*', (route, path, event) => {

    });

    router.on('/named/:id', (route, path, event) => {

    });

    router.dispatch();

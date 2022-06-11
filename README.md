Location Init
=============
_0.5kb minified and gzipped_

Sometimes you just want to trigger something on a certain page, location-init is perfect for that. Think of it as a callback to normal page requests. No magic, just simple route callbacks that triggers on page requests. Of course you can also trigger the route dispatcher manually whenever you want, for example on pushstate, but it's not handled automatically.

## Install

Download dist/build.min.js or install with npm (`npm install location-init`).

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

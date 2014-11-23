location-init
=============

Simple js browser router. This is not an ajax library or does not handle navigation. It simply register routes with callbacks. It checks first location and then listens to the [popstate](https://developer.mozilla.org/en-US/docs/WindowEventHandlers.onpopstate) event. You need to manually trigger the router when you use the pushState or replaceState (since there's no native events for these actions).

## Install

Download index.js or install with npm (`npm install location-init`).

## Usage

Simply create a new router like this:

    var router = new router();

You can also create the router with a base url (will be prepended on all routes) and/or a routes object.

    var router = new router('/user', {
    	'profile': function (route, path) {

    	},
    	'settings': function (route, path) {

    	}
    });

When passing routes the router will start watching the location automatically, otherwise you need to call `watch` yourself. This is how you setup a route:

    router.on('/profile', function (route, path, event) {

    });

    router.on('/splat/*', function (route, path, event) {

    });

    router.on('/named/:id', function (route, path, event) {

    });

After you've setup your routes call `router.watch()` to trigger any route callback that matches the current location and to start watching the `popstate` event. When you navigate with `pushState` or `replaceState` you need to call `router.dispatch()`. You can also build a wrapper to those actions that automatically always calls the `dispatch` method on the router.
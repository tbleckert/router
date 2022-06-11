const namedParam = /:\w+/g;
const splatParam = /\*\w+/g;

function stripTrailingSlash (str) {
    if (str.slice(-1) === '/') {
        return str.substring(0, str.length - 1);
    }

    return str;
}

function prepareRoute(route) {
    if (!route) {
        return null;
    }

    return stripTrailingSlash(route).replace(namedParam, '([^\/]+)').replace(splatParam, '(.*?)');
}

export default class Router {
    constructor(base = '/', routes = {}) {
        this.base = base;
        this.routes = routes;

        this.dispatch();
    }

    on(route, cb) {
        if (!route || !cb) {
            throw new Error('A route and a callback needs to be defined');
        }

        const formattedRoute = `^${this.base}${prepareRoute(route)}$`;

        this.routes[formattedRoute] = cb;

        return formattedRoute;
    }

    dispatchRoute(route, cb) {
        const regex = new RegExp(route);
        const path = prepareRoute(window.location.pathname);

        if (regex.test(path)) {
            cb.call(false, route, path);
        }
    }

    dispatch() {
        Object.entries(this.routes).forEach(([route, cb]) => this.dispatchRoute(route, cb));
    }
}

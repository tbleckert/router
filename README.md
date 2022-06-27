<h1 align="center">
  Simple router
</h1>

<h6 align="center">
  <a href="https://github.com/tbleckert/router#install">Install</a>
  ·
  <a href="https://github.com/tbleckert/router#usage">Usage</a>
</h6>

<p align="center">
    <a href="https://www.npmjs.com/package/@bleckert/router">
        <img src="https://img.shields.io/npm/v/@bleckert/router?style=for-the-badge" alt="NPM" />
    </a>
    <a href="https://bundlephobia.com/result?p=@bleckert/router">
        <img src="https://img.shields.io/bundlephobia/minzip/@bleckert/router?style=for-the-badge" />
    </a>
    <a href="https://github.com/sponsors/tbleckert">
        <img src="https://img.shields.io/badge/GitHub-donate-yellow?style=for-the-badge" />
    </a>
</p>

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

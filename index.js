(function () {

	'use strict';

	var router = (function () {

		var _routes = {},
		    _namedParam = /:\w+/g,
		    _splatParam = /\*\w+/g,
		    _prepareRoute,
		    _stripTrailingSlash,
		    module;

		_stripTrailingSlash = function (str) {
			if (str.substr(-1) == '/') {
				return str.substr(0, str.length - 1);
			}
		
			return str;
		}

		_prepareRoute = function (route) {
			if (!route) {
				return null;
			}

			return _stripTrailingSlash(route).replace(_namedParam, '([^\/]+)').replace(_splatParam, '(.*?)');
		}

		module = function (base, routes) {

			this.base = _prepareRoute(base);
			this.isWatching = false;
			
			if (typeof routes === 'object') {
				_routes = routes;

				this.watch();
				this.isWatching = true;
			}

		};

		module.prototype = {

			on: function (route, callback) {
				if (!route) {
					throw new Error('A route needs to be defined');
				}

				callback || (callback = function () {});

				route = this.base + _prepareRoute(route);

				_routes['^' + route + '$'] = callback;
				return route;
			},

			dispatch: function (event) {
				var regex, regexText, callback, path;

				for (regexText in _routes) {
					if (_routes.hasOwnProperty(regexText)) {
						callback = _routes[regexText];
						regex    = new RegExp(regexText);
						path     = window.location.pathname;

						if (regex.test(path)) {
							callback.call(false, regexText, path, event);
						}
					}
				}
			},

			watch: function () {
				if (this.isWatching) {
					return true;
				}

				this.isWatching = true;

				var _this = this;

				/** Check current location */
				this.dispatch();

				/** If popstate exists, listen to it */
				window.addEventListener('popstate', function (event) {
					console.log(location.pathname);
					_this.dispatch(event);
				});
			}

		};

		return module;

	}());

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = router;
	} else if (typeof this !== 'undefined') {
		this.router = router;
	}

}).call(this);
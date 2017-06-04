define('app',["require", "exports", "./user"], function (require, exports, user_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            var _this = this;
            this.users = [];
            this.userRequest = user_1.User.fetchUsers();
            this.userRequest.then(function (users) {
                _this.users = users;
            });
        }
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUlFO1lBQUEsaUJBTUM7WUFMQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7Z0JBQzFCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNILFVBQUM7SUFBRCxDQVhBLEFBV0MsSUFBQTtJQVhZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VXNlcn0gZnJvbSAnLi91c2VyJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHVzZXJzOiBhbnk7XG4gIHVzZXJSZXF1ZXN0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy51c2VycyA9IFtdO1xuICAgIHRoaXMudXNlclJlcXVlc3QgPSBVc2VyLmZldGNoVXNlcnMoKTtcbiAgICB0aGlzLnVzZXJSZXF1ZXN0LnRoZW4oKHVzZXJzKSA9PiB7XG4gICAgICB0aGlzLnVzZXJzID0gdXNlcnM7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBSUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhOiBBdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmZlYXR1cmUoJ3Jlc291cmNlcycpO1xuXG4gIGlmIChlbnZpcm9ubWVudC5kZWJ1Zykge1xuICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xuICB9XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtdGVzdGluZycpO1xuICB9XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('user',["require", "exports", "aurelia-fetch-client"], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createUrl(parameters) {
        var url = '';
        var paramsUrl = [];
        url += parameters.url;
        if (parameters.fields !== undefined || parameters.quantity !== undefined) {
            url += "?";
        }
        if (parameters.fields !== undefined) {
            paramsUrl.push('inc=' + parameters.fields.join(","));
        }
        if (parameters.quantity !== undefined) {
            paramsUrl.push('results=' + parameters.quantity);
        }
        url += paramsUrl.join("&");
        return url;
    }
    var User = (function () {
        function User(data) {
            this.name = {
                first: data.name.first,
                last: data.name.last
            };
            this.email = data.email;
            this.picture = data.picture.medium;
        }
        User.fetchUsers = function () {
            var requestParameters = {
                url: 'https://randomuser.me/api/',
                fields: ["name", "email", "picture"],
                quantity: 10
            };
            var promise = new Promise(function (resolve, reject) {
                var httpClient = new aurelia_fetch_client_1.HttpClient();
                httpClient.fetch(createUrl(requestParameters))
                    .then(function (response) { return response.json(); })
                    .then(function (data) {
                    var users = [];
                    for (var _i = 0, _a = data.results; _i < _a.length; _i++) {
                        var res = _a[_i];
                        var user = new User(res);
                        users.push(user);
                    }
                    resolve(users);
                }).catch(function (err) {
                    reject(new Error(err));
                });
            });
            return promise;
        };
        return User;
    }());
    exports.User = User;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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ZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcblxuZnVuY3Rpb24gY3JlYXRlVXJsKHBhcmFtZXRlcnMpIHtcbiAgdmFyIHVybDogc3RyaW5nID0gJyc7XG4gIHZhciBwYXJhbXNVcmwgPSBbXTtcblxuICB1cmwgKz0gcGFyYW1ldGVycy51cmw7XG4gIGlmIChwYXJhbWV0ZXJzLmZpZWxkcyAhPT0gdW5kZWZpbmVkIHx8IHBhcmFtZXRlcnMucXVhbnRpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgIHVybCArPSBcIj9cIjtcbiAgfVxuICBpZiAocGFyYW1ldGVycy5maWVsZHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHBhcmFtc1VybC5wdXNoKCdpbmM9JyArIHBhcmFtZXRlcnMuZmllbGRzLmpvaW4oXCIsXCIpKTtcbiAgfVxuICBpZiAocGFyYW1ldGVycy5xdWFudGl0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyYW1zVXJsLnB1c2goJ3Jlc3VsdHM9JyArIHBhcmFtZXRlcnMucXVhbnRpdHkpO1xuICB9XG4gIHVybCArPSBwYXJhbXNVcmwuam9pbihcIiZcIik7XG5cbiAgcmV0dXJuIHVybDtcbn1cblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBwdWJsaWMgbmFtZToge1xuICAgIGZpcnN0OiBzdHJpbmcsXG4gICAgbGFzdDogc3RyaW5nXG4gIH07XG4gIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuICBwdWJsaWMgcGljdHVyZTogc3RyaW5nO1xuXG5cbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMubmFtZSA9IHtcbiAgICAgIGZpcnN0OiBkYXRhLm5hbWUuZmlyc3QsXG4gICAgICBsYXN0OiBkYXRhLm5hbWUubGFzdFxuICAgIH1cbiAgICB0aGlzLmVtYWlsID0gZGF0YS5lbWFpbDtcbiAgICB0aGlzLnBpY3R1cmUgPSBkYXRhLnBpY3R1cmUubWVkaXVtO1xuICB9XG5cblxuICBzdGF0aWMgZmV0Y2hVc2VycygpIHtcbiAgICBjb25zdCByZXF1ZXN0UGFyYW1ldGVycyA9IHtcbiAgICAgIHVybCA6J2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJyxcbiAgICAgIGZpZWxkcyA6IFtcIm5hbWVcIiwgXCJlbWFpbFwiLCBcInBpY3R1cmVcIl0sXG4gICAgICBxdWFudGl0eSA6IDEwXG4gICAgfVxuXG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuICAgICAgaHR0cENsaWVudC5mZXRjaChjcmVhdGVVcmwocmVxdWVzdFBhcmFtZXRlcnMpKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIHZhciB1c2VycyA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IHJlcyBvZiBkYXRhLnJlc3VsdHMpIHtcbiAgICAgICAgICAgIGxldCB1c2VyID0gbmV3IFVzZXIocmVzKTtcbiAgICAgICAgICAgIHVzZXJzLnB1c2godXNlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUodXNlcnMpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXJyKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><div class=\"user\" repeat.for=\"user of users\"><img class=\"picture\" src.bind=\"user.picture\"><p class=\"name\"><span class=\"firstname\">${user.name.first}</span> <span class=\"lastname\">${user.name.last}</span></p><p class=\"email\"><a href=\"mailto:${user.email}\">${user.email}</a></p></div></template>"; });
define('text!style.css', ['module'], function(module) { module.exports = ".user {\n  width: 320px;\n  height: 72px;\n  margin: 20px auto;\n  padding: 20px 20px;\n}\n\n.user:hover {\n  -webkit-box-shadow: 1px 2px 4px 0px rgba(102,102,102,0.2);\n  -moz-box-shadow: 1px 2px 4px 0px rgba(102,102,102,0.2);\n  box-shadow: 1px 2px 4px 0px rgba(102,102,102,0.2);\n}\n\n.user .picture {\n  float: left;\n  margin-right: 20px;\n}\n\n.user .name {\n  font-size: 1.6em;\n  margin: 4px 0px;\n}\n\n.user .email {\n  font-size: 1em;\n  text-decoration: underline;\n  margin: 2px 0px;\n}\n"; });
//# sourceMappingURL=app-bundle.js.map
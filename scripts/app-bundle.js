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
        }
        User.fetchUsers = function () {
            var requestParameters = {
                url: 'https://randomuser.me/api/',
                fields: ['name'],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUEsbUJBQW1CLFVBQVU7UUFDM0IsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVuQixHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUN0QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxVQUFVLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekUsR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUNiLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFM0IsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDtRQUtFLGNBQVksSUFBSTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNyQixDQUFBO1FBQ0gsQ0FBQztRQUVLLGVBQVUsR0FBakI7WUFDRSxJQUFNLGlCQUFpQixHQUFHO2dCQUN4QixHQUFHLEVBQUUsNEJBQTRCO2dCQUNqQyxNQUFNLEVBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQ2pCLFFBQVEsRUFBRyxFQUFFO2FBQ2QsQ0FBQTtZQUVELElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQzFDLElBQU0sVUFBVSxHQUFHLElBQUksaUNBQVUsRUFBRSxDQUFDO2dCQUNwQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3FCQUM1QyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO3FCQUNqQyxJQUFJLENBQUMsVUFBQSxJQUFJO29CQUNSLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDYixHQUFHLENBQUMsQ0FBWSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO3dCQUF2QixJQUFJLEdBQUcsU0FBQTt3QkFDVixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDekIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDbEI7b0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO29CQUNWLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBQ0YsV0FBQztJQUFELENBckNBLEFBcUNDLElBQUE7SUFyQ1ksb0JBQUkiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xuXG5mdW5jdGlvbiBjcmVhdGVVcmwocGFyYW1ldGVycykge1xuICB2YXIgdXJsOiBzdHJpbmcgPSAnJztcbiAgdmFyIHBhcmFtc1VybCA9IFtdO1xuXG4gIHVybCArPSBwYXJhbWV0ZXJzLnVybDtcbiAgaWYgKHBhcmFtZXRlcnMuZmllbGRzICE9PSB1bmRlZmluZWQgfHwgcGFyYW1ldGVycy5xdWFudGl0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdXJsICs9IFwiP1wiO1xuICB9XG4gIGlmIChwYXJhbWV0ZXJzLmZpZWxkcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcGFyYW1zVXJsLnB1c2goJ2luYz0nICsgcGFyYW1ldGVycy5maWVsZHMuam9pbihcIixcIikpO1xuICB9XG4gIGlmIChwYXJhbWV0ZXJzLnF1YW50aXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBwYXJhbXNVcmwucHVzaCgncmVzdWx0cz0nICsgcGFyYW1ldGVycy5xdWFudGl0eSk7XG4gIH1cbiAgdXJsICs9IHBhcmFtc1VybC5qb2luKFwiJlwiKTtcblxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gIHB1YmxpYyBuYW1lOiB7XG4gICAgZmlyc3Q6IHN0cmluZyxcbiAgICBsYXN0OiBzdHJpbmdcbiAgfVxuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5uYW1lID0ge1xuICAgICAgZmlyc3Q6IGRhdGEubmFtZS5maXJzdCxcbiAgICAgIGxhc3Q6IGRhdGEubmFtZS5sYXN0XG4gICAgfVxuICB9XG5cbiBzdGF0aWMgZmV0Y2hVc2VycygpIHtcbiAgIGNvbnN0IHJlcXVlc3RQYXJhbWV0ZXJzID0ge1xuICAgICB1cmwgOidodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLycsXG4gICAgIGZpZWxkcyA6IFsnbmFtZSddLFxuICAgICBxdWFudGl0eSA6IDEwXG4gICB9XG5cbiAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgIGNvbnN0IGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpO1xuICAgICBodHRwQ2xpZW50LmZldGNoKGNyZWF0ZVVybChyZXF1ZXN0UGFyYW1ldGVycykpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdmFyIHVzZXJzID0gW107XG4gICAgICAgICAgZm9yIChsZXQgcmVzIG9mIGRhdGEucmVzdWx0cykge1xuICAgICAgICAgICAgbGV0IHVzZXIgPSBuZXcgVXNlcihyZXMpO1xuICAgICAgICAgICAgdXNlcnMucHVzaCh1c2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgIHJlc29sdmUodXNlcnMpO1xuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlcnIpKTtcbiAgICAgIH0pO1xuICAgfSk7XG5cbiAgIHJldHVybiBwcm9taXNlO1xuIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><div class=\"user\"><p class=\"name\" repeat.for=\"user of users\"><span class=\"firstname\">${user.name.first}</span> <span class=\"lastname\">${user.name.last}</span></p></div></template>"; });
//# sourceMappingURL=app-bundle.js.map
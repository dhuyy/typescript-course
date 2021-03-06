"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.get('/', function (req, res) {
            res.send('Hello World!');
        });
    };
    return Routes;
}());
exports.default = Routes;

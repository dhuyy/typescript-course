"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var Api = /** @class */ (function () {
    function Api() {
        this.express = express();
        this.middleware();
        this.router(this.express);
    }
    Api.prototype.middleware = function () {
        this.express.use(morgan('dev'));
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
    };
    Api.prototype.router = function (app) {
        new routes_1.default(app);
    };
    return Api;
}());
exports.default = new Api().express;

"use strict";
exports.__esModule = true;
require("reflect-metadata");
var plane = {
    color: "red"
};
Reflect.defineMetadata("note", "hi there", plane);
console.log(plane);

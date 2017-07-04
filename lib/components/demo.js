"use strict";
/**
 * this is a module demo, it is create by heartblood
 *
 * @module Demo
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const className = require("./style/demo.less");
/**
 * This module will be hot-reloaded and rendered upon modification.
 * @class
 * @param {string} name - the name of creater.
 */
class Greeting extends React.Component {
    render() {
        return React.createElement("h1", { className: className.hello },
            "hello! this demo create by ",
            this.props.name);
    }
}
exports.Greeting = Greeting;

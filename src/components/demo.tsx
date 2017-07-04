/**
 * this is a module demo, it is create by heartblood
 *
 * @module Demo
 */

import * as React from 'react';
import * as className from './style/demo.less';

/**
 * This module will be hot-reloaded and rendered upon modification.
 * @class
 * @param {string} name - the name of creater.
 */
export class Greeting extends React.Component<{ name: String }, {}> {
    render() {
        return <h1 className={(className as any).hello}>hello! this demo create by {this.props.name}</h1>;
    }
}


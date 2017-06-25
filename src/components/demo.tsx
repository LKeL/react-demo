import * as React from 'react';
import * as className from './style/demo.less';
/**
 * This module will be hot-reloaded and rendered upon modification
 */
console.log(className);
export class Greeting extends React.Component<{ name: String }, {}> {
    render() {
        return <h1 className={className.hello}>Greeting! this demo create by {this.props.name}</h1>;
    }
}


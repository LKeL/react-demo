import * as React from 'react';
import * as className from './style/demo.less';
/**
 * This module will be hot-reloaded and rendered upon modification
 */
export class Greeting extends React.Component<{ name: String }, {}> {
    render() {
        return <h1 className={(className as any).hello}>Greeting! this demo create by {this.props.name}</h1>;
    }
}


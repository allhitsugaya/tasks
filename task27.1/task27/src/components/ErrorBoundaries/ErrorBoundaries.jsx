import { Component } from 'react';

export class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error('We have a problem, Houston. Here is the error:', error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h2>We have some problems....</h2>;
        }
        return this.props.children;
    }
}

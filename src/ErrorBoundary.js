import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state =  {
            hasError: false
        }
    }

    getDerivedStateFromError() {
        return {hasError: true}
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        if(this.state.hasError) {
            return (
                <h1> Something went wrong</h1>
            )
        }

        return(
            <h2> Everything is allright</h2>
        )
    }
}

export default ErrorBoundary;
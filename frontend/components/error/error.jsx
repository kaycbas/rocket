import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        const path = this.props.history.location.pathname
        return (
            <div className="error-container">
                <div className="error-content">
                    <h1>
                        No match for {path}
                    </h1>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
export default class Persons extends Component {
    render() {
        return (
            <Card.Body>
                <Card.Text className="person-info">
                        <div className="person-info-image">
                                <img src={this.props.img} alt=""/>
                            </div>
                        <div className="person-info-data">
                            <h2>{this.props.name}</h2>
                            <h3>{this.props.prof}</h3>
                        </div>
                </Card.Text>
            </Card.Body>
        )
    }
}

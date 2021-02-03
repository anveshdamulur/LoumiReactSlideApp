import React, { Component } from 'react'
export default class Persons extends Component {
    render() {
        return (
               <>
                    <div className='person-info'> 
                        <div className='person-img'>
                                <img src={this.props.img} alt=""/>
                        </div>
                        <div className='person'>
                            <h3>{this.props.name}</h3>
                            <h4>{this.props.prof}</h4>
                        </div>
                    </div>
                      
            </>
        )
    }
}

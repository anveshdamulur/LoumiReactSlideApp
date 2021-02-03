import React, { Component } from 'react'
import Persons from './Persons'

export class ChildSlide extends Component {
    render() {
        return (
        <>
            <div className="container-card">
                <div className='header'>
                     {this.props.title}.
                </div>
                <div className='person-div' >
                    <center>
                    {this.props.persons.map((person,i)=>(
                                <Persons
                                    key={i}
                                    name= {person.name}
                                    img={person.img}
                                    prof ={person.profession}
                                />
                            ))
                        } 
                    </center>
                </div>
            </div>
            <div className='container-revenue'>
                <div className='revenue-header'>
                    <h2>{this.props.revenue}</h2>
                </div>   
                <div className='revenue-body'>
                    <div className='revenue-option'>
                        <h4>Candidats</h4>
                        <p>{this.props.candidates}</p>
                    </div>
                    <div className='revenue-prix'>
                        <h4>Grants</h4>
                        <p>{this.props.grants}</p>
                    </div>
                </div>
                <div className='revenue-button'>
                <button>
                    <h5>Voir plus</h5>
                </button> 
                </div> 
            </div>
            <div className='footer'>
                    <p>{this.props.visit}</p>
            </div>         
        </>
        )
    }
}

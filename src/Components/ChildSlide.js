import React, { Component } from 'react'
import Persons from './Persons'
import {Card, Button } from 'react-bootstrap';
export class ChildSlide extends Component {
    render() {
        return (
                <Card style={{ width: '26rem', borderRadius:'20px' }}  className="text-center shadow-lg bg-white rounded">
                <Card.Header style={{backgroundColor:'white',textDecoration:'none'}}><p style={{fontSize:'25px',fontWeight:'bold'}}>{this.props.title}...</p></Card.Header>
                <Card.Body>
                    {this.props.persons.map((person,i)=>(
                            <Persons
                                key={i}
                                name= {person.name}
                                img={person.img}
                                prof ={person.profession}
                            />
                        ))
                        } 
                    <div className="container-revenue">
                        <div className="container-revenue-info">
                        <p>{this.props.revenue}</p> 
                           <div className="revenue-header">
                                <p>Candidates</p>
                                <p>Grants</p>
                           </div>
                            <div className="revenue-data">
                               <p>{this.props.candidates}</p>
                             <p>{this.props.grants}</p>
                            </div>
                        </div>
                    </div>
                <Button variant="primary" style={{width:'90%', height:'50px'}}>Voir plus</Button>
                </Card.Body>
                <Card.Footer className="text-light bg-secondary rounded-bottom" style={{ width: '26rem' }}>{this.props.visit}</Card.Footer>
                 </Card>
        )
    }
}

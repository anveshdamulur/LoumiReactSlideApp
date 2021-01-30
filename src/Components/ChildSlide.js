import React, { Component } from 'react'
import Persons from './Persons'
import {Card, Button } from 'react-bootstrap';
export class ChildSlide extends Component {
    render() {
        return (
                <div className="container-card">
                <Card style={{marginLeft:'10px'}}  className="text-center bg-white">
                <Card.Header><p style={{fontSize:'25px',fontWeight:'bold'}}>{this.props.title}...</p></Card.Header>
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
                <Button variant="primary" style={{width:'95%', height:'50px', borderRadius:'10px'}}>Voir plus</Button>
                </Card.Body>
                <Card.Footer className="text-light bg-secondary border-0 " style={{ borderRadius:'0px 0px 30px 30px' }}>{this.props.visit}</Card.Footer>
                 </Card>
                 </div>  
        )
    }
}

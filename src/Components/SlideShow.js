import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ChildSlide } from './ChildSlide';
import {LoumiData } from '../Data/Data'
import './Style.css';
const properties = {
  autoplay: false
};
export const SlideShow = () => {
    return (
        <Slide className="slide-container" {...properties} >
        {LoumiData.map((card,i)=>(
             card.map((item,index)=>(
              <div>
                  <div key={index} className="each-slide">
                    <div className="main-container">
                        <ChildSlide
                                      title = {item.title}
                                      persons ={item.persons}
                                      revenue = {item.revenue}
                                      candidates = {item.candidats}
                                      grants = {item.grants}
                                      visit ={item.visiting}
                              />
                    </div>
                 </div>
              </div>  
                )
              )
            )
           )
        }
        </Slide>
    )
};

import React from 'react';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ChildSlide } from './ChildSlide';
import {LoumiData } from '../Data/Data'
import './Style.css';

const properties={
  autoplay : false,

}
export const SlideShow = () => {
    return (
      <React.Fragment>
        <div className='slide-container'>
            <Slide {...properties}>
                {
                  LoumiData.map((card,i)=>(
                    <div key={i} className='main-container'>
                      {
                          card.map((item,index)=>(
                            <div key={index} className="each-slide">
                              <div>
                                  <ChildSlide
                                                title = {item.title}
                                                persons ={item.persons}
                                                revenue = {item.revenue}
                                                candidates = {item.Candidats}
                                                grants = {item.Grants}
                                                visit ={item.visiting}
                                        />
                              </div>
                          </div>
                          )
                        )
                      }
                    </div>
                    )
                  )
                }
            </Slide>
        </div>
        </React.Fragment>
    )
};

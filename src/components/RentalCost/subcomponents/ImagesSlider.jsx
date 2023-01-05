import React from 'react'
import { useParams } from 'react-router-dom';

import CarsData from '../../../assets/data/CarsData';

const ImagesSlider = (props) => {
  const {slug} = useParams();
  const carItem = CarsData.find((item) => item.detailsLink === slug);
  return (
          
            
                <div  className=''>
                    <img src={props.img} alt=''/>
                </div>
            

  )
}

export default ImagesSlider
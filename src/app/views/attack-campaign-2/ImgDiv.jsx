import React, {useState} from 'react';

import "./divStyleClass.css";

const DivStyle = ({data}) => {


    const imgPath = "flagImg/"+ data + ".png";

    return( 
        <div className='imgDiv'>   
            <img src = {imgPath} border='1' /> 
        </div>

        )

}
export default DivStyle;
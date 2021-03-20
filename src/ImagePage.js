import React from 'react'
import img1 from './alliLoganImages/4C906AE6-62D2-4BB3-BBF3-89FFA25A940E.jpeg'
import img2 from './alliLoganImages/5C677C8F-D63A-4AC5-962A-AAF9C007880B.jpeg'
import img3 from './alliLoganImages/22AF5B5B-CED8-4E83-BBF5-5DAC48283597.jpeg'
import img4 from './alliLoganImages/1270A88B-6FF1-4108-B5B4-80177322505C.jpeg'
import img5 from './alliLoganImages/39309A23-CA40-44DF-AB02-35D06C09A206.jpeg'
import img6 from './alliLoganImages/A6A1CAFE-AFC7-4545-ADBA-42C142D758E7.jpeg'
import img7 from './alliLoganImages/A7BFFC89-4AF3-4F54-B22A-87E67399A12F.jpeg'







function ImagePage() {
    
    const images = [img1,img2,img3,img4,img5,img6,img7].map(img=>{
        return <div
        style={{width: '40%', margin: 5 }}
        ><img src={img} style={{
            width: '100%',
        }}/></div>
    })
    
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {images}
        </div>
    )
}

export default ImagePage

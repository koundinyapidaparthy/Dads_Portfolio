import React from 'react'
import CustomLinks from '../../Reused/CustomLinks'
import CustomImage from '../../Reused/CustomImage'
import "./Home.css"
const Home = () => {
    return (
        <div>
            Home
            <CustomLinks to={{pathname:"/pidaparthysambasivasastry"}} className="customLink" >
                asfasd
            </CustomLinks>
            <CustomImage src={"https://picsum.photos/200/300"} alt={"image"} />
        </div>
    )
}

export default Home

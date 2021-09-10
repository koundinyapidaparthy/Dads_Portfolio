import React from "react"
import Home from "../Components/Home/Home"
import Sastry from "../Components/Sastry/Sastry"
import ContactUS from "../Components/ContactUS/ContactUs"
import Years from "../Components/500Years/500Years"
type PathConstantsTypes={
    path:string,
    exact:boolean,
    Component:React.ComponentType<any>;
}[]
const PathConstants:PathConstantsTypes=[
    {
        path:"/",
        exact:true,
        Component:Home
    },
    
    {
        path:"/pidaparthysambasivasastry",
        exact:true,
        Component:Sastry
    },
    {
        path:"/contactus",
        exact:true,
        Component:ContactUS
    },
    {
        path:"/aboutus",
        exact:true,
        Component:Years
    },

]
export default PathConstants
import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PathConstants from './PathConstants'
type PathConstantsobj={
    path:string,
    exact:boolean,
    Component:React.ComponentType<any>;
}
const RouteFile:()=>JSX.Element = () => {
    return (
        <Router>
            <Switch>
                {
                    PathConstants.map(({path,exact,Component}:PathConstantsobj,index:number)=>{
                        return <Route key={index} path={path} exact={exact} component={Component}/>
                    })
                }
            </Switch>
        </Router>
    )
}

export default RouteFile

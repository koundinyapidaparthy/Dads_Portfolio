import React, { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
interface CustomLinksProps{
    to:{
        pathname?:string;
        search?:string;
        hash?:string;
        state?:object;
    } | string;
    children:string | number | JSX.Element;
    className?:string;
    style?:CSSProperties;
}
const CustomLinks = ({to,children,...others}:CustomLinksProps) => {
    return (
        <Link to={to} {...others} >{children}</Link>
    )
}

export default CustomLinks

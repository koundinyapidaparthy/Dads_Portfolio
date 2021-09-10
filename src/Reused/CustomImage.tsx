import React, { CSSProperties } from 'react'
interface CustomImageProps{
    src:string;
    alt?:string;
    className?:string;
    style?:CSSProperties;
    width?:string | number;
    height?:string | number;
    loading?:"lazy" | "eager";
}
const CustomImage = ({src,alt,...others}:CustomImageProps) => {
    return (
        <img src={src} alt={alt} {...others} />
    )
}

export default CustomImage

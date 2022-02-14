import React from "react"
import {useHistory} from "react-router-dom"
interface ILinkProps{
    to: string
}

export const Link: React.FC<ILinkProps> = ({children,to})=>{
    const history = useHistory()
    return (
        <a href={to} onClick={()=>{history.push(to)}}>
            {children}
        </a>
    )
}
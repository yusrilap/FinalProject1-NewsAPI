import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

const Programming = ()=> {
    const { id } = useParams()
    return(
        <div>
            <p>{id}</p>
        </div>
    )
}
export default Programming

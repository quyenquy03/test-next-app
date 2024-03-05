'use client'
import { useEffect } from "react"

export default function Facebook() {
    useEffect(() => {
        console.log('re render')   
    })
    return (
        
        <div>Facebook</div>
    )
}
import React, { useEffect } from 'react'

const About = ({ ad, yas }) => {
    useEffect(() => {
        console.log("About componenti render olundu");
    }, []);
    return (
        <div>
            <h1 className="text-3xl font-bold underline text-red-500">About</h1>
            <h2 className="text-2xl font-bold text-blue-500">Hello {ad}</h2>
            <h3 className="text-xl font-bold text-green-500">You are {yas} years old</h3>
            <p>This is the about page</p>
        </div>
    )
}

export default About
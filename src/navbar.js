import React from 'react'

function Navbar() {
    return (
        <div
            style={{
                backgroundColor: 'pink',
                padding: 10,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <h1>
                Alli's 19th Birthday!
            </h1>
            <a href="/">Note</a>
            <a href="something">Pictures (bc why not?)</a>
        </div>
    )
}

export default Navbar

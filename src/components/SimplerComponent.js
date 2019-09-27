import React from 'react'

const SimplerComponent = (props) => {

    return <div onClick={(e) => props.handleClick() } >I am just happy</div>
}

export default SimplerComponent
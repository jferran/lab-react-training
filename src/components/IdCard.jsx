//import React from 'react'

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props
    
  return (
    <div style={{borderStyle: 'solid', margin: '3px'}}>
        <img src={picture} alt=''/>
        <div class="data" style={{display: "inline-block"}}>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth.toString().slice(0,15)}</p>
        </div>

    </div>
  )
}

export default IdCard
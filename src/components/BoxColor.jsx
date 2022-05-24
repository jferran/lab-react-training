//import React from 'react'

function BoxColor({ r, g, b }) {
    const hexColor=convertRGBtoHex(r, g, b)
    const styles = {
        color: '',
        border: 'solid',
        padding: '50px',
        margin: '3px',
        backgroundColor: hexColor
    }

    function colorToHex(color) {
        var hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
      }
      
      function convertRGBtoHex(red, green, blue) {
        return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
      }
      
      

  return (
    <div style={styles}>
        rgb({r},{g},{b})
        <br/>
        {hexColor}
    </div>
  )
}

export default BoxColor
//import React from 'react'

function Greetings({lang, children}) {
  return (
    <div>
        {
            lang==='de' ? 'Hallo'
            : lang==='en' ? 'Hello'
            : lang==='es' ? 'Hola'
            : lang==='fr' ? 'Bonjour' 
            : ''
        }
        &nbsp;
        {children}
    </div>
  )
}

export default Greetings
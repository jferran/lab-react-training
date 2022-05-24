//import React from 'react'

function Greetings({lang, children}) {
  return (
    <div>
        {/* {
            lang==='de' ? 'Hallo'
            : lang==='en' ? 'Hello'
            : lang==='es' ? 'Hola'
            : lang==='fr' ? 'Bonjour' 
            : ''
        } */}
        {
            {
                'de': 'Hallo',
                'en': 'Hello',
                'es': 'Hola',
                'fr': 'Bonjour'
            }[lang]
        }


        &nbsp;
        {children}
    </div>
  )
}

export default Greetings
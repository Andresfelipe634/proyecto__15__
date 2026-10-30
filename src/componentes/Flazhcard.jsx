import{ useState}  from 'react'; // importamos la herramienta de memoria de react

function Flashcard ({ pregunta, respuesta}) {

  
    const [isFlipped, setIsFlipped]= useState(false);

   
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };


    return(
     
        <div className='tarjeta' onClick={handleClick}>

            <h2>
                
             
                {isFlipped ? respuesta : pregunta }
            </h2>
        </div>
    );
}

export default Flashcard;

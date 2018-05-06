import React from 'react'; 

const Alert = ({
            message,
            alertType
        }) => {
    const style = `card-text alert alert-${alertType}`;

   
   if(message){
        return (
            <p className={style} role="alert"> {message} </p>
        )
   }
   return (
       <div> </div> 
   )
    
}

export default Alert; 
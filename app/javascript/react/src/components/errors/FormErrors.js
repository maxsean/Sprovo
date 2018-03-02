import React from 'react';
import { Alert } from 'react-bootstrap'

// meant for anything the backend throws back (i.e. errors and messages) in {key => [values]} format
const FormErrors = (props) => {
  let errors = props.formErrors;
  return(
    <div className='form-errors'>
      <ul>
       {Object.keys(errors).map((fieldName, i) => {
         if(errors[fieldName].length > 0){
           if(fieldName == "handle"){
             return (
               <Alert bsStyle='warning' key={i}>username {errors[fieldName].join(', ')}</Alert>
             )
           } else {
             return (
               <Alert bsStyle='warning' key={i}>{fieldName} {errors[fieldName].join(', ')}</Alert>
             )
           }
         } else {
           return '';
         }
       })}
      </ul>
   </div>
 );
};

export default FormErrors;

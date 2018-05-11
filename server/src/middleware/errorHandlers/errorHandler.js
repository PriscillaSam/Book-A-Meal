/* eslint no-unused-vars: 0 */
const errorHandler = (err, req ,res, next) => {

    if (Object.keys(err).length > 0) {

      let fields = [];
      let messages = [];

      err.errors.forEach(error => {
        fields = [...fields, ...error.field];
        messages = [...messages, ...error.messages];
      });
      return res.status(400).json({
        errors: {
          status: err.status,
          statusText: err.statusText,
          errors: {
            field: fields,
            messages
          }
        }      
      
    });
  } 
  
   
    return res.status(500).json({
        status: err.status,
        message:'something went wrong'
    }); 
  
};
export default errorHandler;
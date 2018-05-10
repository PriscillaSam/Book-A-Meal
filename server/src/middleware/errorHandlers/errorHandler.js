/* eslint no-unused-vars: 0 */
const errorHandler = (err, req ,res, next) => {

    if (Object.keys(err).length > 0) {
      return res.status(400).json({
        err
        // status: err.status,
        // text:err.statusText,
        // errors: {
        //     fields: {
        //       field: err.field,
              // message: err.field.messages
      //  }}

      // });
    });
   
  }
   
    return res.status(500).json({
        status: err.status,
        err: err.stack
    }); 
  };
  
export default errorHandler;
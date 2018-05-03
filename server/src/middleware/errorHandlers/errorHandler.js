/* eslint no-unused-vars: 0 */
const errorHandler = (err, req ,res, next) => {

    if (Object.keys(err).length > 0) {
      return res.status(err.status).json({
        err,
      });
    }  

    return res.status(err.status).json({
        err: err.message
    }); 
        
  };
  
export default errorHandler;
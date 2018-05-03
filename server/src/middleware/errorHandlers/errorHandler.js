/* eslint no-unused-vars: 0 */
const errorHandler = (err, req ,res, next) => {

    if (Object.keys(err).length > 0) {
      return res.status(400).json({
        err,
      });
    }  

    return res.status(500).json({
        error: {err}
    }); 
        
  };
  
export default errorHandler;
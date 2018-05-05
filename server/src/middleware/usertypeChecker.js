const checkUserType = (userTypeId) => (req, res, next) => {

    if(req.userTypeId === userTypeId) next();

    return res.status(401).json({
        status: 'error',
        message:'Unauthorized action'
    });
};

export default checkUserType;
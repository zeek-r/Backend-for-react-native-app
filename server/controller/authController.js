var User = require('../model/user'),
    tokenHelper = require('../helpers/tokenHelper'),
    authHelper = require('../helpers/authHelper');



var authController = {
    register : function (req, res) {
        User.create( 
            {
                email : req.body.username,
                password : authHelper.generateHash(req.body.password),
                status : 'active',
                createdAt : new Date(),
                updatedAt : new Date(),
            })
            .then(function(){
                res.json( {message : "User created successfully"} );
            }).catch(function(result) {
            	console.log(result);
                res.status(401);
                res.json({result});
            });
    },

    index : function(req, res) {
        res.send("index");
    },

    login : function(req, res) {
        User.findOne ({ 
            where :  {
                email : req.body.username
            }
        })
        .then (user => {
            if(!user) {
                res.status(401);
                res.json( { message : "Authentication failed, User not found" } );
            }
            else if(user) {
                if(user.status !== 'active'){
                    res.status(401)
                    res.json( { message : "Without activation you shall not pass. Please contact our admin for a/c activation" } );
                }

                 if(authHelper.compare(req.body.password, user.password)){
                    const payload = {
                        type : user.type,
                        email : user.email,
                        _uid : user.id,
                        status : user.status,
                        name : user.firstName + user.lastName
                    };

                    const token = tokenHelper.sign(payload);
                    res.json ({
                        success : true,
                        token : token,
                        user : payload
                    })
                }
                else { 
                    res.status(401);
                    res.json({message : "Wrong Password,You Shall not pass"});
                }
            }
        });
            
    },
    verify : function(req, res) {
        if(tokenHelper.verify(req.body.token)) {
            res.status(200);
            res.json({});
        }
        else {
            res.status(401);
            res.json({});
        }
    }

}


module.exports = authController;

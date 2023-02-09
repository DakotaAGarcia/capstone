let db = require("./db.json");
let userData = db.userData
globalId = 0
module.exports = {
    signUp: (req, res) => {
            const {email, username, password} = req.body;
    
            let newUser = {
                id: globalId,
                email: email,
                username: username,
                password: password
            }
    
            userData.push(newUser)
    
            globalId ++
            
            console.log(userData)
            res.status(200).send({ message: "Sign up successful"})
    
        },
        login:(req,res) =>{
            
            
            const {username, password} = req.body;
            
           
          console.log(req.body)
            userData.forEach((newUser) => {
              if (newUser.username === username && newUser.password === password) {
               res.send({
                    message: 'Login successful!',
                  });
              }else {
                res.status(401).send({message: 'Username or password is incorrect'});
              }
            });
          
          },    
            
        
    }
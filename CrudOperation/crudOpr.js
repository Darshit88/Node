const express = require("express")
const app = express()

const PORT = 3000;

app.use(express.json())

const users = []

app.get("/user" , (req, res) => {
    res.json({
        users : users,
    })
})


app.get("/user/:user_id" ,(req,res) => {
    const user_id = Number(req.params["user_id"])

    if (isNaN(user_id)) {
        return res.json({
            msg : "invalid url"
        })
    } else if(!users[user_id]) {
        return res.json ({
            msg : "this user is does not exist..!!"
        })
    } else {
        return res.json({
            user : users[user_id]
        })
    }
})

app.post("/user" , (req,res) => {
    users.push(req.body)

    res.json({
        msg : "User added successfullyyy..."
    })
})

app.put("/user/:user_id" , (req,res) => {
 const user_id = Number(req.params["user_id"]);

    const user_data = req.body;

 if (isNaN(user_id)) {
   return res.json({
     msg: "Invalid URL",
   });
 } else if (!users[user_id]) {
   return res.json({
     msg: "This user does not exist...!!",
   });
 } else {

    if(user_data["username"]) {
        users[user_id] ["username"] = user_data["username"]
    } 
    
     if (user_data["age"]) {
       users[user_id]["age"] = user_data["age"];
     }

      if (user_data["email"]) {
        users[user_id]["email"] = user_data["email"];
      }

   return res.json({
     msg: "User updated successfully",
   });
 }



})

app.delete("/user/:user_id" , (req,res) =>{
    const user_id = Number(req.params["user_id"])

    if(isNaN(user_id)){
        return res.json({
            msg : "invalid url"
        })
    } else if (!users[user_id]){
        return res.json({
            msg : "this user is does not exist...!!"
        })
    } else {
        delete users[user_id]

        return res.json({
            msg : "this user is removed"
        })
    }
})


app.listen(PORT , () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
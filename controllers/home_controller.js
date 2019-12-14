module.exports.home = function(req, res){
    console.log(req.cookies);
    res.cookie('user_id', 25);
    return res.render('home', {
        title: "Home"
    });
}

// const Question = require('../models/questions');

// const ques = {
//     statement: "What is the moment of inertia of a rod around an axis passing through its end point perpendicular to the plane?",
//     option1: "(ML^2)/2",
//     option2: "(ML^2)/4",
//     option3: "(ML^2)/6",
//     option4: "(ML^2)/8",
//     tags: ["physics", "moderate", "rotation"]
// }


module.exports.add = function(req, res) {
    Question.create(ques, function(err, ques){
        if(err){console.log('error in creating user while signing up'); return;}
        return res.redirect('/');
    })
}
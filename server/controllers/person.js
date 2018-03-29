// const Person = require('./../models/person');
const mongoose = require('mongoose');
const Person =  mongoose.model('Person');
mongoose.Promise = global.Promise;

module.exports = {
  show_all: (req, res) => {
    Person.find({}, (err, people) => {
      if(err){
        console.log("Error", err);
        res.json({message: "error", error: err});
      } else {
        res.json({message: "success", people});
        }
    });
  },

  add_name: (req, res) => {
      const new_person = new Person({
        name: req.body.name
      });
      const promise = new_person.save;
      promise.then((doc) => {
        res.json("added" + doc);
      })
      .catch((err) => {
        console.log("error");
        res.json(err);
      })
  },

  person_info: (req, res) => {
    const id = req.params.id;
    Person.findOne({_id:id}, (err, person) => {
      if(err) {
        console.log("error", err);
        res.json({message: "error", error: err})
      } else {
        console.log("info on this person", id);
        res.json({message: "success", person});
        }
    });
  },

  delete_name: (req, res) => {
    const id = req.params.id;
    Person.remove({_id:id}, (err, person) => {
      if(err) {
        console.log("error deleting", err);
        res.json({message: "error", error: err});
      } else {
        res.redirect('/');
        }
    })
  }
}

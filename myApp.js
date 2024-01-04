require("dotenv").config();
const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("MongoDB connected");
} catch (error) {
  console.log(error);
}

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Jane",
    age: 34,
    favoriteFoods: ["noodles", "pizza"],
  });

  person.save((err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const arrayOfPeople = [
  {
    name: "John",
    age: 34,
    favoriteFoods: ["noodles", "pizza"],
  },
  {
    name: "Mary",
    age: 28,
    favoriteFoods: ["noodles", "pizza"],
  },
  {
    name: "Jane",
    age: 34,
    favoriteFoods: ["noodles", "pizza"],
  },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.error(err);
    done(null, people);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, (err, data) => {
    if (err) return console.error(err);
    done(null, data);
  });
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

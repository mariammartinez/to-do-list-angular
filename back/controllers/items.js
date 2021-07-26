import Items from './models/items.js'

Items.find({})
 .then((data)=>{
    console.log(data);
  })
 .catch((err)=>{
   console.log(err);
 })

/*
// you can pass query parameter to get particular record
User.find({name:"YOUR_NAME"})
 .then((doc)=>{
    console.log(doc);
 })
.catch((err)=>{
    console.log(err);
}); */

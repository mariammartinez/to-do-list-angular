import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import Lists from './models/lists.js'
import Items from './models/items.js'


const app = express ()
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

mongoose.connect('mongodb+srv://Mariam:simodosea@cluster0-u3oqt.mongodb.net/mean?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.post('/', (req, res, next) => {
  const items = new Items({
    ...req.body
  })
  items.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
})

app.get('/', (req, res) => {
  Items.find({})
   .then((data)=>{
      console.log(data)
      res.send(data)
    })
   .catch((err)=>{
     console.log(err)
   })
})

app.get('/:id', (req, res, next) => {
  Items.findOne({ _id: req.params.id })
    .then(items => res.status(200).json(items))
    .catch(error => res.status(404).json({ error }));
})
app.put('/:id', (req, res, next) => {
req.body.updatedAt = Date.now()
  Items.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }))
})

app.delete('/:id', (req, res, next) => {
  Items.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }))
})


export default app
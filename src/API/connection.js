import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://juliandrojas:<password>@portalrestaurante.xxbl2ug.mongodb.net/portalRestauranteReact?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Db is connected')).catch(error => console.error(error))
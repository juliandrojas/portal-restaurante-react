import mongoose from 'mongoose';
mongoose.connect("mongodb+srv://juliandrojas:Yamid6409801@portalrestaurante.xxbl2ug.mongodb.net/PortalRestaurante?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Db is connected')).catch(error => console.error(error))
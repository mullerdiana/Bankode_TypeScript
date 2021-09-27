import mongoose from 'mongoose';

export = ()=>{ 
    mongoose.Promise = global.Promise;

    mongoose.connect('mongodb+srv://diana_muller:diana_muller@cluster0.9jadt.mongodb.net/bankode?retryWrites=true&w=majority').then(()=>{
        console.log('Conexao com o MongoDb realizada com sucesso');
    }).catch((error: Error)=>{
        console.log(`Conexão com o MongoDB falhou: ${error}`);
    });
};

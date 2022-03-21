import {Schema, model, connection, Model} from 'mongoose'
// estou especificados os tipos do meus campos do banco para pode alteralos


type UserType ={
    nome:{
        primeiroNome:string,
        sobrenome:string
    },
    idade:number,
    email:string,
    interesses:[string]

}

//criando meu schema
// no schema os tipos tem a primeira letra maiuscula pois ja esta se tratando do javascript 
//explicando pro   mongoose a estrutura de dados que vai querer

const schema = new Schema<UserType>({
    nome:{
        primeiroNome:{type:String, required:true},
        sobrenome:String
    },
    idade:{type:Number, required:true},
    email:{type:String , required:true},
    interesses:[String]

})

const modelName:string= 'User'

const userModel = connection && connection.models[modelName]
? (connection.models[modelName] as Model<UserType>)
: model<UserType>(modelName, schema);

export default userModel;
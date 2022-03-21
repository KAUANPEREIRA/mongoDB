import {connect} from 'mongoose' // para conectar com mongodb
import dotenv from 'dotenv'

dotenv.config()

//regra pra conexão com mongo db
export const mongoConnect = async()=>{

    try{
        console.log('Conectando ao mongoDB...')
        await connect(process.env.MONGO_URL as string)

        console.log('conexão efetuada com sucesso')

    }catch(error){
        console.log('falha na conexão erro ', error)
    }
    




}
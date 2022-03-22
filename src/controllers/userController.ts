import { Request, Response } from 'express';
import { userInfo } from 'os';
import User from '../models/User'

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

//função para inserir dados com mongo db
export const addUserAction = async (req:Request, res:Response)=>{
    res.redirect('/')
   
    let {primeiroNome,sobrenome,idade,email,interesses} = req.body
    if(primeiroNome && idade !=''){
    let newUser = new User()
    newUser.nome={primeiroNome:primeiroNome,sobrenome:sobrenome}
    newUser.idade = parseInt(idade)
    newUser.email = email
    newUser.interesses= interesses.split(',')//transormando minha string em um array e separando por virgula

    let resultado = await newUser.save()
    console.log('Usuario inserido com sucesso!')
    }else{
        console.log('Houve um problema na inserção dos dados')
    }


}

//função para atualizar idade 

export const aumentIdade = async(req:Request, res:Response)=>{
   
   let id = req.params.id
   let meuUser = await User.findById({_id:id})
   if(meuUser){// este if tbm serve pra atualizar
       meuUser.idade+=1
       await meuUser.save()
       res.redirect('/')
   }
   
}
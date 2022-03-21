import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User'

export const home = async (req: Request, res: Response)=>{

   //criando usuario dado no banco com create
  /* let newUser = await User.create({
       nome:{primeiroNome:'Edgar',sobrenome:'Santos'},
       idade:33,
       email:'edgar@hotmail.com.br',
       interesses:['jogar videogame','fuebol','faculdade']
   })*/

   

    
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Kauan',
        lastName: 'Pereira',
        showOld,
        expensives: expensiveList,
        frasesDoDia: []
    });
};
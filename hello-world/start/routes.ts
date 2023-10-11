/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/generate_number_triangle', async ({ request }: HttpContextContract) => {

  let number = request.input('number')  
  let digits = number.toString().split('');
  
  let init: any = '0';
  let result: any = []

  digits.forEach((data)=>{
    result.push(`${data}${init}`)
    init = `${init}0`
  })

  return {
    data: result
  }
})


Route.post('/generate_number_odds', async ({ request }: HttpContextContract) => {

  let number = request.input('number')

  let odd_numbers: any = 0;
  for (let i=1; i<parseInt(number);i+=2){
    odd_numbers = `${odd_numbers}, ${i}`
  }

  return {
    data: odd_numbers
  }
})


Route.post('/generate_number_prime', async ({ request }: HttpContextContract) => {
  let number = request.input('number')

  let prime_numbers: any = 0
  for (let i = 0; i <= number; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
      prime_numbers = `${prime_numbers}, ${i}`
    }
  }

  return {
    data: prime_numbers
  }
})
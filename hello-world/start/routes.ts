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

  console.log(number);
  
  let digits = number.toString().split('');
  console.log(digits);
  
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

  var i, sum = 0;
  for (i = 1; i <= parseInt(number); i += 2){
    sum += i;
  }

  return sum
})


Route.post('/generate_number_prime', async ({ request }: HttpContextContract) => {

  let number = request.input('number')

  let digits = number.toString().split('');
  let realDigits = digits.map(Number)
  let odds: any = realDigits.filter(data => data%2)

  return odds
})
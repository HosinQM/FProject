// For creating Database you can use db.create function
// couch.db.create('Database name', (error) => {
//     if(error) { console.log(error) }
//     console.log('Your Database is created');
// })

// example Data to putting it into Database
// let Ho3ein = {
//     name: 'Ho3ein',
//     username: 'Ho3einOz',
//     password: '',
//     email: 'hosinOz@yahoo.com',
//     sex: 'male',
//     ultimateBias: 'Eunha',
//     biasList: ["Eunha", "Nayeon", "V"]
// }

// usersDb.insert(Ho3ein , (err, body) => {
//     if(err) { console.error('There is a something wrong') }
//     console.log('Data inserted successfully');
// })

// an example to view users
// usersDb.view('usersDesign', 'usersView', (err, body) => {
//     if(err){ console.error('There was an error in designing view') }
//     let rows = body.rows
//     console.log(rows);
// })

// deleting a data
// usersDb.destroy('8ca06238d573991b93883b36ee000a51', '1-9d52d276856e2a507148c4ba8327e9b6', (err) => {
//     if(err){ console.error('There was an error while removing data') }
//     console.log('Data removed successfully');
// })
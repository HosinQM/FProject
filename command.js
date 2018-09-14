let Ho3ein = {
    name: 'Ho3ein',
    username: 'Ho3einOz',
    password: '',
    email: 'hosinOz@yahoo.com',
    sex: 'male',
    ultimateBias: 'Eunha',
    biasList: ["Eunha", "Nayeon", "V"]
}

usersDb.insert(Ho3ein , (err, body) => {
    if(err) { console.error('There is a something wrong') }
    console.log('Data inserted successfully');
})
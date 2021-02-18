const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost:27017/formRepo');

//const Schema = mongoose.Schema;

const db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected');
})

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    zip: Number,
  },
  phone: String,
  creditCard: {
    number: Number,
    expiry: String,
    cvv: Number,
    billingZip: Number
  }
})

let Repo = mongoose.model('Repo', schema);

let save = (formProfile, cb) => {
  const name = formProfile.name;
  const email = formProfile.email;
  const password = formProfile.password;
  const line1 = formProfile.address_line1;
  const line2 = formProfile.address_line2;
  const city = formProfile.address_city;
  const state = formProfile.address_state;
  const zip = formProfile.address_zip;
  const phone = formProfile.phone;
  const number = formProfile.credit_card_number;
  const expiry = formProfile.credit_card_expiry;
  const cvv = formProfile.credit_card_cvv;
  const billingZip = formProfile.credit_card_billing_zip;

  const creditCard = {
    number,
    expiry,
    cvv,
    billingZip
  }

  const address = {
    line1,
    line2,
    city,
    state,
    zip
  }
  const repos = new Repo({
    name,
    email,
    password,
    address,
    phone,
    creditCard
  });

  repos.save()
    .then(data => {
      console.log('Repos added!');
      cb(null, data);
    })
    .catch(err => cb(err))
}

module.exports = {
  save,
  Repo
}

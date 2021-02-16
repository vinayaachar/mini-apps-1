import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      address: {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: 0
      },
      phone: '',
      credit_card: {
        number: 0,
        expiry: '',
        cvv: 0,
        billing_zip: 0
      }
    }

    this.handleChangeForm1 = this.handleChangeForm1.bind(this);
    this.handleChangeForm2 = this.handleChangeForm2.bind(this);
    this.handleChangeForm3 = this.handleChangeForm3.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.renderForm1 = this.renderForm1.bind(this);
    this.renderForm2 = this.renderForm2.bind(this);
    this.renderForm3 = this.renderForm3.bind(this);
  }

  //Component functions

  //handleChange functions

  handleChangeForm1(e) {
    //set states of form1
    this.state({
      [e.target.name] : e.target.value
    })
    //POST request to Server to save this to DB
  }

  handleChangeForm2(e) {
    //set states of form1
    this.state({
      [e.target.name] : e.target.value
    })
    //POST request to Server to save this to DB
  }

  handleChangeForm3(e) {
    //set states of form1
    this.state({
      [e.target.name] : e.target.value
    })
    //POST request to Server to save this to DB
  }

  // Checkout button

  handleCheckout() {
    // call form1 element/function
    this.renderForm1();
  }



  // Form1

  renderForm1() {
    return (
      <form onSubmit = {this.renderForm2}>
        <label>
          Name:
          <input type="text" value= {this.state.name} onChange= {this.handleChangeForm1}/>
        </label>
        <label>
          email:
          <input type="text" value= {this.state.email} onChange= {this.handleChangeForm1}/>
        </label>
        <label>
          password:
          <input type="text" value= {this.state.password} onChange= {this.handleChangeForm1}/>
        </label>
        <input type="submit" value="Next"/>
      </form>
    )
  }

  // Form 2

  renderForm2() {
    return (
      <form onSubmit = {this.renderForm3}>
        <label>
          Address:
          <label>
            line1:
            <input type="text" value= {this.state.address.line1} onChange= {this.handleChangeForm2}/>
          </label>
          <label>
            line2:
            <input type="text" value= {this.state.address.line2} onChange= {this.handleChangeForm2}/>
          </label>
          <label>
            City:
            <input type="text" value= {this.state.address.city} onChange= {this.handleChangeForm2}/>
          </label>
          <label>
            State:
            <input type="text" value= {this.state.address.state} onChange= {this.handleChangeForm2}/>
          </label>
          <label>
            Zip:
            <input type="number" value= {this.state.address.zip} onChange= {this.handleChangeForm2}/>
          </label>
        </label>
        <label>
          phone:
          <input type="text" value= {this.state.phone} onChange= {this.handleChangeForm2}/>
        </label>
        <input type="submit" value="Next"/>
      </form>
    )
  }
  // Form 3
  renderForm3() {
    return (
      <form onSubmit = {this.renderForm3}>
        <label>
          Credit Card:
          <label>
            Number:
            <input type="number" value= {this.state.credit_card.number} onChange= {this.handleChangeForm3}/>
          </label>
          <label>
            Expiry Date:
            <input type="text" value= {this.state.credit_card.expiry} onChange= {this.handleChangeForm3}/>
          </label>
          <label>
            CVV:
            <input type="number" value= {this.state.credit_card.cvv} onChange= {this.handleChangeForm3}/>
          </label>
          <label>
            Billing Zip:
            <input type="number" value= {this.state.credit_card.billing_zip} onChange= {this.handleChangeForm3}/>
          </label>
        </label>
        <input type="submit" value="Next"/>
      </form>
    )
  }



  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <button onClick = {this.handleCheckout}>Checkout</button>
      </div>

    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));


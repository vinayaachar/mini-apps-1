// import React from 'react';
// import ReactDOM from 'react-dom';

//const { post } = require("jquery");

//import $ from 'jquery';


  // Form1 Component

const RenderForm1 = (props) => {
  return (
      <form onSubmit = {props.onFormSubmit}>
      <label>
        Name:
        <input type="text"  name= "name" onChange= {props.onFormChange}/>
      </label>
      <label>
        email:
        <input type="text"  name="email" onChange= {props.onFormChange}/>
      </label>
      <label>
        password:
        <input type="text" name="password" onChange= {props.onFormChange}/>
      </label>
      <input type="submit" value="Next"/>
    </form>
  )
}

// Form 2 Component

const RenderForm2 = (props) => {
  return (
    <form onSubmit = {props.onFormSubmit}>
      <label>
        Address:
        <label>
          line1:
          <input type="text"  name="address_line1" onChange= {props.onFormChange}/>
        </label>
        <label>
          line2:
          <input type="text"  name="address_line2" onChange= {props.onFormChange}/>
        </label>
        <label>
          City:
          <input type="text"  name="address_city" onChange= {props.onFormChange}/>
        </label>
        <label>
          State:
          <input type="text"  name="address_state" onChange= {props.onFormChange}/>
        </label>
        <label>
          Zip:
          <input type="number"  name="address_zip" onChange= {props.onFormChange}/>
        </label>
      </label>
      <label>
        phone:
        <input type="text" name="phone" onChange= {props.onFormChange}/>
      </label>
      <input type="submit" value="Next"/>
    </form>
  )
}
// Form 3 Component
const RenderForm3 = (props) => {
  return (
    <form onSubmit = {props.onFormSubmit}>
      <label>
        Credit Card:
        <label>
          Number:
          <input type="number" name="credit_card_number" onChange= {props.onFormChange}/>
        </label>
        <label>
          Expiry Date:
          <input type="text" name="credit_card_expiry" onChange= {props.onFormChange}/>
        </label>
        <label>
          CVV:
          <input type="number" name="credit_card_cvv" onChange= {props.onFormChange}/>
        </label>
        <label>
          Billing Zip:
          <input type="number" name="credit_card_billing_zip" onChange= {props.onFormChange}/>
        </label>
      </label>
      <input type="submit" value="Next"/>
    </form>
  )
}


// const Checkout = (props) => {
//   if(props.clicked) {
//     console.log('PPPPLLLLLSSSS')
//     return <RenderForm1 />
//   }
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      form1: false,
      form2: false,
      render: false,
      name: '',
      email: '',
      password: '',
      address_line1: '',
      address_line2: '',
      address_city: '',
      address_state: '',
      address_zip: 0,
      phone: '',
      credit_card_number: 0,
      credit_card_expiry: '',
      credit_card_cvv: 0,
      credit_card_billing_zip: 0
    }

    this.handleChangeForm = this.handleChangeForm.bind(this);
    // this.handleChangeForm2 = this.handleChangeForm2.bind(this);
    // this.handleChangeForm3 = this.handleChangeForm3.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
    this.handleSubmit3 = this.handleSubmit3.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleForm1 = this.handleForm1.bind(this);
    this.handleForm2 = this.handleForm2.bind(this);
    this.handleRender = this.handleRender.bind(this);
    this.makePostRequest = this.makePostRequest.bind(this);
  }


  //handleChange functions

  handleChangeForm(e) {
    //set states of form1
    this.setState({
      [e.target.name] : e.target.value
    })
    //POST request to Server to save this to DB
  }

  // handleChangeForm2(e) {
  //   //set states of form1
  //   this.state({
  //     [e.target.name] : e.target.value
  //   })
  //   //POST request to Server to save this to DB
  // }

  // handleChangeForm3(e) {
  //   //set states of form1
  //   this.state({
  //     [e.target.name] : e.target.value
  //   })
  //   //POST request to Server to save this to DB
  // }

  handleSubmit1(e) {
    this.setState({
      form1: true,
      clicked: false
    })

  }


  handleSubmit2(e) {
    this.setState({
      form1: false,
      form2: true
    })
  }

  handleSubmit3(e) {
    this.setState({
      clicked: false,
      form1: false,
      form2: false,
      render: true
    })
  }
  //Checkout button

  handleCheckout() {
    this.setState({
      clicked: true,
      render: false
    })
  }

  // handleCheckout() {
  //   this.setState({
  //     clicked: true
  //   })

  //   if(this.state.clicked) {
  //     return <RenderForm1 />
  //   }
  // }

  handleForm(clicked) {
    if (clicked) {
      return <RenderForm1 onFormChange= {this.handleChangeForm} onFormSubmit={this.handleSubmit1} />
    }
  }

  handleForm1(next) {
    if (next) {
      return <RenderForm2 onFormChange= {this.handleChangeForm} onFormSubmit={this.handleSubmit2} />
    }
  }

  handleForm2(next) {
    if (next) {
      return <RenderForm3 onFormChange= {this.handleChangeForm} onFormSubmit={this.handleSubmit3} />
    }
  }

  handleRender(next) {
    if(next) {
      this.makePostRequest(this.state);
      return (
        <div>
          <p><div>Name: {this.state.name}</div></p>
          <p><div>Email: {this.state.email}</div></p>
          <p><div>Address: {this.state.address_line1} {this.state.address_line2}</div></p>
          <p><div>City: {this.state.address_city}</div></p>
          <p><div>State: {this.state.address_state}</div></p>
          <p><div>Zip: {this.state.address_zip}</div></p>
          <p><div>Phone: {this.state.phone}</div></p>
          <p><div>Credit Card: {this.state.credit_card_number}</div></p>
          <p><div>Credit Card Expiry: {this.state.credit_card_expiry}</div></p>
          <p><div>CVV: {this.state.credit_card_cvv}</div></p>
          <p><div>Billing Zip: {this.state.credit_card_billing_zip}</div></p>
        </div>

      )
    }
  }

  makePostRequest(form){
    console.log('POST', form.address_line1)
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/form",
      data: form,
      success: () => console.log('Sucessfully made post')
    })
  }


  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <button onClick = {this.handleCheckout}>Checkout</button>
        <div>
          {this.handleForm(this.state.clicked)}
        </div>
        <div>
          {this.handleForm1(this.state.form1)}
        </div>
        <div>
          {this.handleForm2(this.state.form2)}
        </div>
        <div>
          {this.handleRender(this.state.render)}
        </div>
      </div>

    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));


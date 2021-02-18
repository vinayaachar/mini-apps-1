"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// import React from 'react';
// import ReactDOM from 'react-dom';
//const { post } = require("jquery");
//import $ from 'jquery';
// Form1 Component
var RenderForm1 = function RenderForm1(props) {
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: props.onFormSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Name:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "name",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("label", null, "email:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "email",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("label", null, "password:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "password",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Next"
  }));
}; // Form 2 Component


var RenderForm2 = function RenderForm2(props) {
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: props.onFormSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Address:", /*#__PURE__*/React.createElement("label", null, "line1:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "address_line1",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("label", null, "line2:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "address_line2",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("label", null, "City:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "address_city",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("label", null, "State:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "address_state",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("label", null, "Zip:", /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "address_zip",
    onChange: props.onFormChange
  }))), /*#__PURE__*/React.createElement("label", null, "phone:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "phone",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Next"
  }));
}; // Form 3 Component


var RenderForm3 = function RenderForm3(props) {
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: props.onFormSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Credit Card:", /*#__PURE__*/React.createElement("label", null, "Number:", /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "credit_card_number",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("label", null, "Expiry Date:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "credit_card_expiry",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("label", null, "CVV:", /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "credit_card_cvv",
    onChange: props.onFormChange
  })), /*#__PURE__*/React.createElement("label", null, "Billing Zip:", /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "credit_card_billing_zip",
    onChange: props.onFormChange
  }))), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Next"
  }));
}; // const Checkout = (props) => {
//   if(props.clicked) {
//     console.log('PPPPLLLLLSSSS')
//     return <RenderForm1 />
//   }
// }


var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
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
    };
    _this.handleChangeForm = _this.handleChangeForm.bind(_assertThisInitialized(_this)); // this.handleChangeForm2 = this.handleChangeForm2.bind(this);
    // this.handleChangeForm3 = this.handleChangeForm3.bind(this);

    _this.handleSubmit1 = _this.handleSubmit1.bind(_assertThisInitialized(_this));
    _this.handleSubmit2 = _this.handleSubmit2.bind(_assertThisInitialized(_this));
    _this.handleSubmit3 = _this.handleSubmit3.bind(_assertThisInitialized(_this));
    _this.handleCheckout = _this.handleCheckout.bind(_assertThisInitialized(_this));
    _this.handleForm = _this.handleForm.bind(_assertThisInitialized(_this));
    _this.handleForm1 = _this.handleForm1.bind(_assertThisInitialized(_this));
    _this.handleForm2 = _this.handleForm2.bind(_assertThisInitialized(_this));
    _this.handleRender = _this.handleRender.bind(_assertThisInitialized(_this));
    _this.makePostRequest = _this.makePostRequest.bind(_assertThisInitialized(_this));
    return _this;
  } //handleChange functions


  _createClass(App, [{
    key: "handleChangeForm",
    value: function handleChangeForm(e) {
      //set states of form1
      this.setState(_defineProperty({}, e.target.name, e.target.value)); //POST request to Server to save this to DB
    } // handleChangeForm2(e) {
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

  }, {
    key: "handleSubmit1",
    value: function handleSubmit1(e) {
      this.setState({
        form1: true,
        clicked: false
      });
    }
  }, {
    key: "handleSubmit2",
    value: function handleSubmit2(e) {
      this.setState({
        form1: false,
        form2: true
      });
    }
  }, {
    key: "handleSubmit3",
    value: function handleSubmit3(e) {
      this.setState({
        clicked: false,
        form1: false,
        form2: false,
        render: true
      });
    } //Checkout button

  }, {
    key: "handleCheckout",
    value: function handleCheckout() {
      this.setState({
        clicked: true,
        render: false
      });
    } // handleCheckout() {
    //   this.setState({
    //     clicked: true
    //   })
    //   if(this.state.clicked) {
    //     return <RenderForm1 />
    //   }
    // }

  }, {
    key: "handleForm",
    value: function handleForm(clicked) {
      if (clicked) {
        return /*#__PURE__*/React.createElement(RenderForm1, {
          onFormChange: this.handleChangeForm,
          onFormSubmit: this.handleSubmit1
        });
      }
    }
  }, {
    key: "handleForm1",
    value: function handleForm1(next) {
      if (next) {
        return /*#__PURE__*/React.createElement(RenderForm2, {
          onFormChange: this.handleChangeForm,
          onFormSubmit: this.handleSubmit2
        });
      }
    }
  }, {
    key: "handleForm2",
    value: function handleForm2(next) {
      if (next) {
        return /*#__PURE__*/React.createElement(RenderForm3, {
          onFormChange: this.handleChangeForm,
          onFormSubmit: this.handleSubmit3
        });
      }
    }
  }, {
    key: "handleRender",
    value: function handleRender(next) {
      if (next) {
        this.makePostRequest(this.state);
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Name: ", this.state.name)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Email: ", this.state.email)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Address: ", this.state.address_line1, " ", this.state.address_line2)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "City: ", this.state.address_city)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "State: ", this.state.address_state)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Zip: ", this.state.address_zip)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Phone: ", this.state.phone)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Credit Card: ", this.state.credit_card_number)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Credit Card Expiry: ", this.state.credit_card_expiry)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "CVV: ", this.state.credit_card_cvv)), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("div", null, "Billing Zip: ", this.state.credit_card_billing_zip)));
      }
    }
  }, {
    key: "makePostRequest",
    value: function makePostRequest(form) {
      console.log('POST', form.address_line1);
      $.ajax({
        type: "POST",
        url: "http://localhost:3000/form",
        data: form,
        success: function success() {
          return console.log('Sucessfully made post');
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Shopping Cart"), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleCheckout
      }, "Checkout"), /*#__PURE__*/React.createElement("div", null, this.handleForm(this.state.clicked)), /*#__PURE__*/React.createElement("div", null, this.handleForm1(this.state.form1)), /*#__PURE__*/React.createElement("div", null, this.handleForm2(this.state.form2)), /*#__PURE__*/React.createElement("div", null, this.handleRender(this.state.render)));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
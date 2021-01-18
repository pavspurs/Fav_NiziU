import React from 'react'
import '../styles/SignIn.css'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { vEmail, vPassword } from '../utils/validation'

class SignIn extends React.Component{
  render(){
    return (<div className="signin">
      <div className="signin__wrapper">
        <div className="signin__form">
          <Formik
          initialValues={{
            email:"",
            password:""
          }}
          validationSchema={ Yup.object({
            email: vEmail(),
            password: vPassword()
          })}
          onSubmit={(values) => {
            this.props.signIn(values)
          }}
          >
            {props => <form onSubmit={props.handleSubmit}>
              <input id="email"
              defaultValue={props.values.email}
              name="email" 
              type="email"
              onChange={props.handleChange} /><br />
              <input id="password"
              defaultValue={props.values.password}
              name="password" 
              type="password"
              onChange={props.handleChange} /><br />
              <button className="submit__btn" type="submit"
              >LOGIN</button><br />
            </form>}
          </Formik>
        </div>
        <div className="signin__register">
          <p>Not registered? 
          <span className="signin__register__create"> Create an account</span>
          </p>
        </div>
      </div>
    </div>)
  }
}

export default SignIn
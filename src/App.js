import React from 'react';
import SignIn from './components/SignIn'
import Main from './components/Main'
import './App.css'
import { observer, inject } from 'mobx-react'

@inject('userStore')
@observer
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isSignIn : false,
    }
  }

  // signIn 컴포넌트에서 formik을 통한 로그인을 성공하면 isSignIn을 true로 만든다!
  signIn = (values) => {
    const { email } = values;
    const { userStore } = this.props
    userStore.setUsermail(email)
    this.setState({
      isSignIn: true
    })
  }


  render(){
    const { isSignIn } = this.state
    return (
      isSignIn ? <div className="content__container">
      <Main />
    </div> : <div className="signin__container">
      <SignIn signIn={this.signIn} />
    </div>)
  }
}

export default App;
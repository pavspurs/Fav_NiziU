import { observable, action } from 'mobx'

export class UserStore{

  /*
   로그인 페이지에서는 사용자 계정명을 저장하고 
   본 페이지에서는 사용자 계정명을 표시하고
  */
  @observable usermail = ""

  @action setUsermail = (usermail) => {
    this.usermail = usermail
  }
}
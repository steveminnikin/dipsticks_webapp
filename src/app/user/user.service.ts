import {Injectable} from 'angular2/core';


@Injectable()
export class UserService {

  constructor() {};
  
  getCurrentuser(){
      var currentUser: myUser;
      
      currentUser = {
          username: 'Steve',
          email: 'steve@dipsticksengineering.co.uk'
      }
      
      return currentUser
      
  }

}

export interface myUser {
        username: string;
        email: string;
    }
import { Dispatch } from 'redux';
import { login } from '../redux/userSlice'
import { UserState } from '../redux/userSlice';

export type UserLoginData = {
    email: string,
    password: string
};

export interface LoginResponse {
    ok: boolean;
    token?: string;
    errors?: string[];
}

export const loginUser = async (userData: UserLoginData, dispatch: Dispatch<any>): Promise<boolean> => {
    try {
      const response = await fetch('http://localhost:3001/users/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
      });
  
      const responseData = await response.json();
  
      if (response.ok) {
        console.log('responseData', responseData);
        const user: UserState = responseData.result;  
        dispatch(login(user));  
        console.log("Login Successful");
        return true;
      } else {
        console.log('responseData', responseData);
        console.log(responseData.errors);
        return false;
      }      
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      return false;
    }
  };
  
export interface User {
    email: string;
    password: string;
    token?:string;
    user?:{
        name?: string;
    }
  }
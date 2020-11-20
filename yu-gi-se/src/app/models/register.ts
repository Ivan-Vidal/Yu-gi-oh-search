export interface Register {
    name: string;
    email: string;
    password: string;
    confirma_password: string;
    token?:string;
    user?:{
        name?: string;
    }
  }
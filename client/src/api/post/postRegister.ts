import { instance } from '../instance';
export interface RegisterBodyType {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  isSponsor: boolean;
}

const postRegister = async (userData: RegisterBodyType) => {
  try {
    const response = await instance.post('/auth', userData);
    return response.data;
  } catch (error) {
    console.error('회원가입 에러:', error);
    throw error;
  }
};

export default postRegister;

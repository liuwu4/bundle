import Cookies from 'js-cookie';
import LoginServices from '../services/index';
export default {
  async login(phone: string, passwrod: string) {
    const result = await LoginServices.login(phone, passwrod);
    const { code, data: token } = result;
    if (code === 200) {
      Cookies.set('token', token, { expires: 1 });
    }
  }
}



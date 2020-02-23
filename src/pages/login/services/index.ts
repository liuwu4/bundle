import Request from '@src/utils/Request';
export default {
  login(phone: string, password: string) {
    return Request.post(`/login`, {
      account: phone,
      password
    })
  }
}
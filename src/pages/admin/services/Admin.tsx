import Request from '@src/utils/Request';
export default {
  users() {
    return Request.get(`/users`)
  }
}
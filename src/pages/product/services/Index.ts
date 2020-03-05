import Request from '@src/utils/Request';


export default {
  products() {
    return Request.get('/products');
  },
  addProduct(obj: object) {
    return Request.post('/product', obj);
  },
  deleteProduct(no: number) {
    return Request.delete(`/product/${no}`);
  }
}
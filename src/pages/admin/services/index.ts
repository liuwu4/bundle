import Request from '@src/utils/Request';
export default {
  users() {
    return Request.get(`/users`);
  },
  types() {
    return Request.get('/types');
  },
  deleteType(typeId: number) {
    return Request.delete(`/type/${typeId}`);
  },
  postType(obj: object) {
    return Request.post('/type', obj);
  },
  putType(typeId: number, type: object) {
    return Request.put(`/type/${typeId}`, type);
  },
  importExcel(file: any) {
    console.log(file);
    return Request.post(`/type/import`, file)
  }
}
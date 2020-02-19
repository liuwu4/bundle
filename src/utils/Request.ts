import Config from '@src/env.config';

function sendFetch(url: string, options: object) {
  return fetch(url, options)
    .then(json)
    .then(status);
}
function json(response: any) {
  const contentType = response.headers.get("content-type");
  if (contentType === 'application/json') {
    return Promise.all([response.text(), response]);;
  } else {
    throw new Error('返回格式不是application/json')
  }
}
function status(response: Array<Object>) {
  const [context, raw]: any = response;
  if (raw.status >= 200 && raw.status <= 300) {
    return JSON.parse(context);
  }
  throw new Error(raw)

}
function setHeader(type = "GET") {
  const header = {
    method: type,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Config.debug ? 1432 : 1234}`
    },
  }

  return header;
}
function path(url: string) {
  return Config.api + url;
}

const Request = {
  get(url: string) {
    console.log('get', url);
    return sendFetch(path(url), setHeader());
  },
  post(url: string, body: object) {
    console.log('post');
  },
  put(url: string, body: object) {
    console.log('put');
  },
  delete(url: string, body: object) {
    console.log('delete');
  }
};

export default Request;
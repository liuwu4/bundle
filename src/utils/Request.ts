import Cookies from 'js-cookie'
import Config from '@src/env.config';
import { message } from 'antd';

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
    message.error({ content: '返回格式不是application/json' });
    throw new Error('返回格式不是application/json')
  }
}
function status(response: Array<Object>) {
  const [context, raw]: any = response;
  if (raw.status >= 200 && raw.status <= 300) {
    return JSON.parse(context);
  }
  message.error({ content: raw })
  throw new Error(raw)
}
function setHeader(type = "GET", body?: object) {
  const obj = {
    method: type,
    credentials: 'include',
  };
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${Config.debug ? Cookies.get('token') : 1234}`
  }
  if (type !== 'GET') {
    Object.assign(obj, { headers: headers }, { body: JSON.stringify(body) });
  }
  return obj;
}
function path(url: string) {
  return Config.api + url;
}

const Request = {
  get(url: string) {
    return sendFetch(path(url), setHeader());
  },
  post(url: string, body?: object) {
    return sendFetch(path(url), setHeader("POST", body));
  },
  put(url: string, body?: object) {
    return sendFetch(path(url), setHeader("PUT", body));
  },
  delete(url: string, body?: object) {
    return sendFetch(path(url), setHeader("DELETE", body));
  }
};

export default Request;
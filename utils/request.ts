import Configuration from '../env.config';

function parseJSON(response) {
  return response.text().then(JSON.parse);
}
/**
 * Pre check http status.
 *
 * @param {object}  response  A response of http request
 */
function checkStatus(response) {
  const [resolved, raw] = response;
  if ((raw.status >= 200 && raw.status < 300)) {
    return resolved;
  }
  const message = resolved ? resolved.message : raw.statusText;
  throw new Error(message);
}

function generateUrl(url: string) {
  return `${Configuration.api}/api/${url}`;
}

function toJson(raw: object) {
  const contentType = raw.headers.get('content-type');
  if (contentType === 'application/json') {
    try {
      const resolved = parseJSON(raw);
      return Promise.all([resolved, raw]);
    } catch (e) {
      throw new Error(e);
    }
    // return Promise.all([resolved, raw]);
  } else {
    throw new Error('Ooops!');
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
function genreateRequest(url: string, options: object) {
  return fetch(generateUrl(url), options)
    .then(toJson)
    .then(checkStatus);
}

/**
 * Generate the header of request
 *
 * @param  {string} method   The Methon of http
 * @return {object}          A http request header
 */
function genrateRequestHeader(method: string) {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (global.user && global.user.token) {
    Object.assign(headers, {
      Authorization: `Bearer ${global.user.token}`,
    });
  }
  return {
    method,
    headers,
  };
}

const Request = {
  post(url: string, data: object) {
    const body = JSON.stringify(data);
    console.log('post请求:', url,body);
    return genreateRequest(url, { ...genrateRequestHeader('POST'), body });
  },
  patch(url: string, data: object) {
    const body = JSON.stringify(data);
    console.log('patch请求:', url,body);
    return genreateRequest(url, { ...genrateRequestHeader('PATCH'), body });
  },
  put(url: string, data: object) {
    const body = JSON.stringify(data);
    console.log('put请求:', url,body);
    return genreateRequest(url, { ...genrateRequestHeader('put'), body });
  },
  get(url: string) {
    console.log('get请求:', url);
    return genreateRequest(url, { ...genrateRequestHeader('GET') });
  },
  delete(url: string) {
    console.log('delete请求:', url)
    return genreateRequest(url, { ...genrateRequestHeader('DELETE') });
  },
};

export default Request;

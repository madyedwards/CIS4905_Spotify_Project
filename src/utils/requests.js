import { server } from './hosts';
import axios from 'axios';
import { getToken } from './AuthRequests';

const GET = 'GET';
const PUT = 'PUT';
const POST = 'POST';
const DELETE = 'DELETE';

// all request functions should utilize makeRequest and return an obj with structure {data, err}
const makeRequest = async ({ method, path, data, auth = false, error }) => {
  let res = null;
  let err = null;
  const config = auth
    ? {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    : null;

  try {
    switch (method) {
      case GET:
        res = (await axios.get(path, config)).data;
        break;
      case POST:
        res = (await axios.post(path, data, config)).data;
        break;
      case PUT:
        res = (await axios.put(path, data, config)).data;
        break;
      case DELETE:
        res = (await axios.delete(path, config)).data;
        break;
      default:
        throw Error('Invalid method.');
    }
  } catch (e) {
    console.error(e);
    err = error ? error : 'An error occurred.';
  }

  return { data: res, err: err };
};

//need to modify for this project
export const getSongs = async () =>
  makeRequest({
    method: GET,
    path: `${server}/activities`,
    auth: true,
    error: 'Activities could not be retrieved.',
  });
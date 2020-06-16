import axios from 'axios';
import { Response } from '@/utils/type';
import qs from 'qs';
function checkStatus(response: { data: Response; status: number }): Response {
  // console.log(response);
  if (response.status >= 200 && response.status < 300) {
    return { ...response.data };
  }

  return { datas: [], success: false, keywords: '' };
}
axios.defaults.headers = {
  'Content-type': 'application/x-www-form-urlencoded',
  accept: 'application/json',
  'Cache-Control': 'no-cache ',
};
export const userLogin = (params: object) => {
  return axios.post('/users/login', qs.stringify(params)).then(checkStatus);
  // return axios.post('/users/login',  params ).then(checkStatus);
};

import * as axios from 'axios';
import URL from "./URL"

const instance = axios.create({
    baseURL: URL.BASE_URL,
    timeout: 10000,
    params: {}, // do not remove this, its added to add params later in the config
});

const WebApi = {
      getRequest : (APIEndPoints) => {
        return new Promise((resolve,reject)=>{
              instance.get(APIEndPoints).then((response) => { 
                resolve(response)
              }).catch( (error) => {
                reject(error)
              });
            })
      },
      postRequest : (APIEndPoints,params)=>{
        return new Promise((resolve,reject)=>{
          instance.post(APIEndPoints,params)
            .then((response)=> {
                resolve(response)
                console.log(response);
            })
            .catch( (error)=> {
                reject(error)
                console.log(error);
            });
        })
      }
}

export default WebApi
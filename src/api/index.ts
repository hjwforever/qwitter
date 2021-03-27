import request from "../utils/request";

const AV = require('leancloud-storage');

AV.init({
  appId: 'CyF9Q1Ug9LkqeKsK32cHqNE3-gzGzoHsz',
  appKey: 'w1x64rb53CYph41lCY260l0e',
  serverURL: 'https://api.aruoxi.com',
});

const Todo = AV.CLASS('Todo');

// get
export function getSomeThings(params: Array<any> | any) {
  return request({
    url: "/api/getSomethings",
  });
}

// post
export function postSomeThings(params: Array<any> | any) {
  return request({
    url: "/api/postSomethings",
    method: "post",
    data: params,
  });
}

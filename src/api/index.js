import requests from './request'
import mockRequest from './mockRequest';

export const requestCategoryList = () => { 
    return requests({url:'/product/getBaseCategoryList',method:'get'})
 }
 requestCategoryList().then((result) => {
     return result.data
 }).catch((err) => {
     
 });

 export const requestBannerList = () => { 
    return mockRequest({url:'/banner',method:'get'})
 }

 export const requestFloorList = () => { 
    return mockRequest({url:'/floor',method:'get'})
 }

 export const requestSearchInfo = (params) => { 
   return requests({url:'/list',method:'post',data:params})
  }
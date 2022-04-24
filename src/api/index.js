import requests from './request'
import mockRequest from './mockRequest';

export const requestCategoryList = () => {
   return requests({
      url: '/product/getBaseCategoryList',
      method: 'get'
   })
}

  
requestCategoryList().then((result) => {
   return result.data
}).catch((err) => {

});

export const requestBannerList = () => {
   return mockRequest({
      url: '/banner',
      method: 'get'
   })
}

export const requestFloorList = () => {
   return mockRequest({
      url: '/floor',
      method: 'get'
   })
}

export const requestSearchInfo = (params) => {
   return requests({
      url: '/list',
      method: 'post',
      data: params
   })
}


export const requestGoodInfo = ({
   skuid
}) => {
   return requests({
      url: `/item/${skuid}`,
      method: 'get'
   })
}


export const requestAddToCart = (skuId, skuNum) => {
   return requests({
      url: `/cart/addToCart/ ${skuId} /${skuNum}`,
      method: 'post'
   })
}


export const requestCartList = () => {
   return requests({
      url: '/cart/cartList',
      method: 'get'
   })
}

// /api/cart/deleteCart/{skuId}
export const requestDeleteCartList = (skuId) => {
   return requests({
      url: `/cart/deleteCart/${skuId}`,
      method: 'delete'
   })
}

// /api/cart/checkCart/{skuID}/{isChecked}
export const requestChangCartState = (skuID, isChecked) => {
   return requests({
      url: `/cart/checkCart/${skuID}/${isChecked}`,
      method: 'get'
   })
}


export const requestGetCode = (phone) => {
   return requests({
      url: `/user/passport/sendCode/${phone}`,
      method: 'get'
   })
}

// /api/user/passport/register

export const requestUserRegister = (data) => {
   return requests({
      url: '/user/passport/register',
      data,
      method: 'post'
   })
}

// /api/user/passport/login 用户登录

export const requestUserLogin = (data) => {
   return requests({
      url: '/user/passport/login',
      data,
      method: 'post'
   })
}

// 获取用户的信息
export const requestUserInfo = () => {
   return requests({
      url: '/user/passport/auth/getUserInfo',
      method: 'get'
   })
}

// /api/user/passport/logout 退出登录
export const requestLogout = () => {
   return requests({
      url: '/user/passport/logout',
      method: 'get'
   })
}

// /api/user/userAddress/auth/findUserAddressList //获取用户地址
export const requestUserAddressLise = () => {
   return requests({
      url: '/user/userAddress/auth/findUserAddressList',
      method: 'get'
   })
}

// /api/order/auth/trade 获取获取我的订单列表
export const requestOrderList = () => {
   return requests({
      url: '/order/auth/trade',
      method: 'get'
   })
}

// /api/order/auth/submitOrder?tradeNo={tradeNo} 提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({
   url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
   data,
   method: 'post'
});

// /api/payment/weixin/createNative/{orderId} 获取订单支付信息
export const reqOrderPayment = (orderId) => requests({
   url: `/payment/weixin/createNative/${orderId}`,
   method: 'get'
});

// /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) => requests({
   url: `/payment/weixin/queryPayStatus/${orderId}`,
   method: 'get'
});


// /api/order/auth/{page}/{limit} 获取我的订单列表
export const reqMyOrderList = (page,limit) => requests({
   url: `/order/auth/${page}/${limit}`,
   method: 'get'
});
import store from "../store";
import { ThunkAction } from 'redux-thunk'

//定义一个登陆的action类型
export type LoginType = {
  type:'Login/login'
}
//所有action的联合类型
export type ActionType = LoginType

//根state的类型
export type RootState = ReturnType<typeof store.getState>

//页面中 写异步逻辑的dispatch(()=>{}) 异步函数的类型是固定的
export type RootThunkAction = ThunkAction<void,RootState,unknown,ActionType>
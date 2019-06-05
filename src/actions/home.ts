import { actionCreator } from '../utils/actions'
import ActionTypes from '../constants/action-types'
import { HomeItem } from '../types/home'

export const homeLoading = actionCreator<boolean>(ActionTypes.HOME_LOADING)
export const homeReceiveData = actionCreator<HomeItem>(ActionTypes.HOME_RECEIVE_DATA)

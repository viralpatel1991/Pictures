import _ from 'lodash';
import { GET_CHARACTER_LIST } from '../actions/types';

export default (state = [], action)=>{
    switch(action.type){
        case GET_CHARACTER_LIST:
            return {...state, ..._.mapKeys(action.payload,'id')};
        default:
            return state;
    }
}
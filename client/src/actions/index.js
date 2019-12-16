import { GET_CHARACTER_LIST } from '../actions/types';
import axios from 'axios';

export const fetchCharacter = () => async (dispatch) => {
    const response = await axios.get(`http://localhost:3001/characters/`);
    dispatch({
        type: GET_CHARACTER_LIST,
        payload: response.data.items
    });
}

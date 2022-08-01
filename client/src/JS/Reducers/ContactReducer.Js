import { LOAD_CONTACT, SUCCESS_CONTACT, FAIL_CONTACT } from "../actionTypes/ActionsTypes"


// initialState
const initialState = {
    listContacts: [],
    errors: null,
    load : false
}
// pure function
const contactReducer = (state = initialState, { type, payload })
switch (type) {
    case LOAD_CONTACT:
        return { ...state, load: true }
    case SUCCESS_CONTACT:
        return { ...state, load: false, listContacts: payload.listContacts }
    case FAIL_CONTACT:
        return {...state, errors: payload.errors, load : false}
    default: state;
}
export default contactReducer;
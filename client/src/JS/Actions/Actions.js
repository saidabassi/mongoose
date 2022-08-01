import axios from "axios";
import{ LOAD_CONTACT, SUCCESS_CONTACT, FAIL_CONTACT } from '../actionTypes/ActionsTypes'

export const getContacts = () => async (dispatch) => {
    dispatch({ LOAD_CONTACT })
    try {
        let result = axios.get('/api/contact/all')
        dispatch({ type: SUCCESS_CONTACT, payload: (await result.data) })
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error.response})
        
    }
}
// add contact function
export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post('/api/contact/add', newContact)
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error.response})
    }
}
// delete contact function
export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/contact/delete/${id}` )
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error.response})
    }
}
// edit contact function
export const editContact = (id, newContact) => async (dispatch) => {
    try {
        await axios.put(`/api/contact/edit/${id, newContact}` )
        dispatch(getContacts())
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error.response})
    }
}
// get-one contact function
export const getOneContact = (id) => async (dispatch) => {
    dispatch(LOAD_CONTACT)
    try {
        const getContact= axios.get(`/api/contact/get-one/${id}`)
        dispatch({type: SUCCESS_CONTACT, payload: getContact.data})
    } catch (error) {
        dispatch({type: FAIL_CONTACT, payload: error.response})
    }
}
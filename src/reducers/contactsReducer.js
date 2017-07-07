
//constants for the reducer
const UPDATE_CONTACT = 'UPDATE_CONTACT'
const ADD_CONTACT = 'ADD_CONTACT'
const DELETE_CONTACT = 'DELETE_CONTACT'

//action creators used to dispatch appropriate actions to the reducer
export const updateContact = (contact) => {
  return {
    type: UPDATE_CONTACT,
    contact: contact
  }
}

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    contact: contact
  }
}

export const deleteContact = (contactId) => {
  return {
    type: DELETE_CONTACT,
    contactId: contactId
  }
}

const initialState = {
    allContacts: [
      {
      id: 1,
      targetId: 1,
      name: 'Bonnie Scottsdale',
      email: 'bonnie@amazon.com',
      phone: '(202)390-8599',
      primary: 'yes'
    },
    {
      id: 2,
      targetId: 1,
      name: 'Clyde Owen',
      email: 'clyde@amazon.com',
      phone: '(212)867-5309',
      primary: 'yes'
    }
  ],
  nextContactId: 3
}
const contactsReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
  case UPDATE_CONTACT:
    newState.allContacts = newState.allContacts.map(contact => {
      if (+contact.id === +action.contact.id){
        return Object.assign({}, contact, action.contact)
      } else {
        return contact
      }
    })
    break
  case ADD_CONTACT:
    let contactWithId = Object.assign({}, {id: newState.nextContactId++}, action.contact)
    newState.allContacts = [...newState.allContacts, contactWithId]
    break
  case DELETE_CONTACT:
    newState.allContacts = newState.allContacts.filter(contact => contact.id !== action.contactId)
    break
  default:
    return state
  }
  return newState
}

export default contactsReducer

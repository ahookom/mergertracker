
//constants for the reducer
const UPDATE_CONTACT = 'UPDATE_CONTACT'
const ADD_CONTACT = 'ADD_CONTACT'

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
const contactsReducer = (state = initialState) => {
  let newState = Object.assign({},state)
  return newState
}

export default contactsReducer

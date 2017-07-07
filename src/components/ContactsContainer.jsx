import React from 'react'
import Table from './Table.jsx'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import ContactForm from './ContactForm.jsx'
import { deleteContact } from '../reducers/contactsReducer'

class ContactsContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      showContactForm: false,
      activelyEditingContactId: false
    }
    this.addContactHandler = this.addContactHandler.bind(this)
    this.editButtonHandler = this.editButtonHandler.bind(this)
    this.deleteButtonHandler = this.deleteButtonHandler.bind(this)
    this.toggleContactForm = this.toggleContactForm.bind(this)
  }

  addContactHandler(e){
    e.preventDefault()
    this.setState({showContactForm: true, activelyEditingContactId: false})
  }

  editButtonHandler(id){
    this.setState({showContactForm: true, activelyEditingContactId: id})
  }

  deleteButtonHandler(id){
    this.props.deleteContact(id)
  }

  toggleContactForm(){
    this.setState({showContactForm: !this.state.showContactForm})
  }

  render(){
    let currContacts = this.props.contacts.filter(contact => +contact.targetId === +this.props.currentTargetId)
    let columnNames = currContacts.length ? Object.keys(currContacts[0]) : []
    return (
      <div className="col-md-9 col-sm-12 col-lg-6" style={{marginBottom: '75px'}}>
        {currContacts.length ?
          <Table
            rows = {currContacts}
            columns = {columnNames}
            tableName = "Contact Information"
            editButtonHandler = {this.editButtonHandler}
            deleteButtonHandler = {this.deleteButtonHandler}
          /> :
          <h3>No Contacts Added</h3>
        }
        {this.state.showContactForm ?
          <ContactForm contactId = {this.state.activelyEditingContactId} submitCallback = {this.toggleContactForm} />  :
          <Button bsStyle="info" onClick={this.addContactHandler}>Add Contact</Button>
        }
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    contacts: state.contacts.allContacts,
    currentTargetId: state.targets.currentTargetId
  }
}

let mapDispatchToProps = dispatch => {
  return {
    deleteContact: contactId => dispatch(deleteContact(contactId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactsContainer)

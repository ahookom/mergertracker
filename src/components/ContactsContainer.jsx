import React from 'react'
import Table from './Table.jsx'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import ContactForm from './ContactForm.jsx'

class ContactsContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      showContactForm: false,
      activelyEditingContactId: false
    }
    this.addContactHandler = this.addContactHandler.bind(this)
    this.editButtonHandler = this.editButtonHandler.bind(this)
  }

  addContactHandler(e){
    e.preventDefault()
    this.setState({showContactForm: true, activelyEditingContactId: false})
  }
  editButtonHandler(id){
    this.setState({showContactForm: true, activelyEditingContactId: id})
  }

  render(){
    let currContacts = this.props.contacts.filter(contact => +contact.targetId === +this.props.currTargetId)
    let columnNames = Object.keys(currContacts[0])
    return (
      <div className="col-md-9 col-sm-12 col-lg-6">
        {currContacts.length && <Table
        rows = {currContacts}
        columns = {columnNames}
        tableName = "Contact Information"
        editButtonHandler = {this.editButtonHandler}
        />}
        {this.state.showContactForm ?
          <ContactForm contactId = {this.state.activelyEditingContactId} />  :
          <Button bsStyle="info" onClick={this.addContactHandler}>Add Contact</Button>
        }
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    contacts: state.contacts.allContacts,
    currTargetId: state.targets.currentTargetId
  }
}

let mapDispatchToProps = null

export default connect(mapStateToProps,mapDispatchToProps)(ContactsContainer)

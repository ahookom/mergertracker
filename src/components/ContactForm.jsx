import React from 'react'
import { connect } from 'react-redux'
import { updateContact, addContact } from '../reducers/contactsReducer.js'
import { Button, FormGroup, FormControl, ControlLabel, Checkbox , HelpBlock } from 'react-bootstrap'


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

class ContactForm extends React.Component{
  constructor(props){
    super()
    let oldContactInfo = {
      targetId: props.currentTargetId,
      name: '',
      email: '',
      phone: '',
      primary: 'no',
    }
    if(props.contactId){
      oldContactInfo = props.contacts.filter(contact=>contact.id===props.contactId)[0]
    }
    this.state = Object.assign({}, oldContactInfo)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    if(this.props.contactId){
      this.props.updateContact(this.state)
    }else{
      this.props.addContact(this.state)
    }
    this.props.submitCallback()
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formControlsName"
            type="text"
            label="Name"
            name="name"
            placeholder={this.state.name}
            onChange={this.handleInputChange}
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Email address"
            name="email"
            placeholder={this.state.email}
            onChange={this.handleInputChange}
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Phone number"
            name="phone"
            placeholder={this.state.phone}
            onChange={this.handleInputChange}
          />
          <Checkbox name="primary" onChange={this.handleInputChange}>Primary point of contact?</Checkbox>
          <Button type='submit' bsStyle="primary">Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.allContacts,
    currentTargetId: state.targets.currentTargetId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    updateContact: (contact) => dispatch(updateContact(contact))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)

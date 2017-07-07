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
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    console.log('in handle submit')
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formControlsName"
            type="text"
            label="Name"
            placeholder=""
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Email address"
            placeholder=""
          />
          <FieldGroup
            id="formControlsText"
            type="text"
            label="Phone number"
            placeholder=""
          />
          <Checkbox>Primary point of contact?</Checkbox>
          <Button type='submit' bsStyle="primary">Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.allContacts,
    currentTargetId: state.currentTargetId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    updateContact: (contact) => dispatch(updateContact(contact))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)

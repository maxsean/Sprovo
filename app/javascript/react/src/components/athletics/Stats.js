import React from 'react'
import { Alert, Table, Button, Form, FormGroup, FormControl } from 'react-bootstrap'

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stat: null,
      edit: false,
      delete: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  };

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value })
  };

  handleCloseButton(event) {
    event.preventDefault();
    this.setState({
      edit: false
    })
  };

  handleDismiss(event) {
    event.preventDefault()
    this.setState({
      delete: false
    })
  }

  handleDeleteButton(event) {
    event.preventDefault();
    this.setState({
      delete: true
    })
  };

  handleDeleteSubmit(event) {
    event.preventDefault();
    this.props.deleteStats(this.props.sport, this.props.description, this.props.year, this.props.position, this.props.user.id)
  }

  handleEditButton(event) {
    event.preventDefault();
    this.setState({
      edit: true
    })
  };

  handleEditSubmit(event) {
    event.preventDefault();
    this.props.updateStats(this.props.sport, this.props.description, this.state.stat, this.props.year, this.props.position, this.props.user.id);
    this.setState({
      edit: false
    })
  }

  render() {
    let changeStat, deleteAlert, deleteButton, editButton;

    if (this.props.current_user && this.props.current_user.role == "mentor") {
      deleteButton = <Button onClick={this.handleDeleteButton}>Delete</Button>
      editButton = <Button onClick={this.handleEditButton}>Edit</Button>
    }

    if (this.state.delete) {
      deleteAlert =
      <tr>
        <td colSpan="2">
          <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
            <p>Are you sure you want to delete this stat?</p>
            <p>
              <Button bsStyle="warning" onClick={this.handleDeleteSubmit}>Yes</Button>
              <Button onClick={this.handleDismiss}>No</Button>
            </p>
          </Alert>
        </td>
      </tr>
    }

    if (this.state.edit) {
      changeStat =
      <tr>
        <td>
          Change Stat
        </td>
        <td>
          <Form onSubmit={this.handleEditSubmit}>
            <FormGroup controlId="formStat">
              Stat
              <FormControl
                type="number"
                onChange={this.handleChange}
                name="stat"
              />
            </FormGroup>
            <FormGroup>
              <Button bsStyle="warning" type="submit">Update</Button>
            </FormGroup>
          </Form>
        </td>
        <td>
          <Button onClick={this.handleCloseButton}>
            Close
          </Button>
        </td>
      </tr>
    }

    return(
      <tbody className="stats-table">
        <tr>
          <td >
            {this.props.description}
          </td>
          <td>
            {this.props.stat}
          </td>
          <td style={{textAlign:"right"}}>
            {editButton}
            {deleteButton}
          </td>
        </tr>
        {changeStat}
        {deleteAlert}
      </tbody>
    )
  }
}

export default Stats

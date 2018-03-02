import React from 'react'
import { Alert, Table, Button, Form, FormGroup, FormControl } from 'react-bootstrap'

class Grades extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: "",
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
    this.props.deleteGrades(this.props.course, this.props.score, this.props.user.id)
  }

  handleEditButton(event) {
    event.preventDefault();
    this.setState({
      edit: true
    })
  };

  handleEditSubmit(event) {
    event.preventDefault();
    this.props.updateGrades(this.props.course, this.state.score, this.props.user.id);
    this.setState({
      edit: false
    })
  }

  render() {
    let changeGrade, deleteAlert, deleteButton, editButton;

    if (this.props.current_user && this.props.current_user.role == "mentor") {
      deleteButton = <Button onClick={this.handleDeleteButton}>Delete</Button>
      editButton = <Button onClick={this.handleEditButton}>Edit</Button>
    }

    if (this.state.delete) {
      deleteAlert =
      <tr>
        <td colSpan="2">
          <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
            <p>Are you sure you want to delete this grade?</p>
            <p>
              <Button bsStyle="warning" onClick={this.handleDeleteSubmit}>Yes</Button>
              <Button onClick={this.handleDismiss}>No</Button>
            </p>
          </Alert>
        </td>
      </tr>
    }

    if (this.state.edit) {
      changeGrade =
      <tr>
        <td>
          Change Grade
        </td>
        <td>
          <Form onSubmit={this.handleEditSubmit}>
            <FormGroup controlId="formGrade">
              Grade
              <FormControl
                type="text"
                onChange={this.handleChange}
                name="score"
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
      <tbody className="grades-table">
        <tr>
          <td >
            {this.props.course}
          </td>
          <td>
            {this.props.score}
          </td>
          <td style={{textAlign:"right"}}>
            {editButton}
            {deleteButton}
          </td>
        </tr>
        {changeGrade}
        {deleteAlert}
      </tbody>
    )
  }
}

export default Grades

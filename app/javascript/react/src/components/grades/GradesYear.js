import React from 'react';
import { Panel, Alert, Modal, Button } from 'react-bootstrap';
import GradesAdd from './GradesAdd';
import GradesQuarter from './GradesQuarter';
import Functions from '../../utils/Functions';

class GradesYear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: {},
      add: false,
      error: null,
      success: null
    };
    this.addGrades = this.addGrades.bind(this);
    this.deleteGrades = this.deleteGrades.bind(this);
    this.fetchGrades = this.fetchGrades.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.updateGrades = this.updateGrades.bind(this)
  };

  addGrades(payload) {
    fetch(`/api/v1/grades.json`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.setState({
          success: data.success
        })
        this.fetchGrades(this.props.id)
      }
    })

    this.setState({
      add: false
    })
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.id) {
      this.fetchGrades(nextProps.id)
    }
  };

  deleteGrades(course, score, user_id) {
    let payload = {
      user_id: user_id,
      course: course,
      score: score,
      authenticity_token: Functions.getMetaContent("csrf-token")
    };

    fetch(`/api/v1/grades/${user_id}.json`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.setState({
          success: data.success
        })
        this.fetchGrades(this.props.id)
      }
    })
  };

  fetchGrades(id) {
    fetch(`/api/v1/grades/${id}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.setState({
          grades: data
        })
      }
    })
  };

  handleAddButton(event) {
    event.preventDefault();
    this.setState({
      add: true
    })
  };

  handleCloseButton(event) {
    event.preventDefault();
    this.setState({
      add: false
    })
  };

  updateGrades(course, score, user_id) {
    let payload = {
      user_id: user_id,
      course: course,
      score: score,
      authenticity_token: Functions.getMetaContent("csrf-token")
    };

    fetch(`/api/v1/grades/${user_id}.json`, {
      credentials: 'same-origin',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.setState({
          success: data.success
        })
        this.fetchGrades(this.props.id)
      }
    })
  };

  render() {
    let addButton, error, gradesyear, success;

    if (this.props.current_user && this.props.current_user.role == "mentor") {
      addButton = <Button
        onClick={this.handleAddButton}
        style={{marginBottom:"2%"}}
        >Add Grade</Button>
    }

    if (this.state.error) {
      error = <Alert bsStyle='warning'>
        <p>{this.state.error}</p>
      </Alert>
    };

    if (this.state.success) {
      success = <Alert bsStyle='success'>
        <p>{this.state.success}</p>
      </Alert>
    };

    if (this.state.grades != {}) {
      let grades = this.state.grades
      gradesyear = Object.keys(grades).map(key => {
        return(
          <Panel key={key}>
            <Panel.Heading>
              <Panel.Title toggle>
                {key}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Collapse>
              <GradesQuarter
                grades={grades[key]}
                user={this.props.user}
                updateGrades={this.updateGrades}
                deleteGrades={this.deleteGrades}
                current_user={this.props.current_user}
              />
            </Panel.Collapse>
          </Panel>
        )
      })
    }

    return(
      <div className="grades-year">
        {error}
        {success}
        {addButton}
        {gradesyear}
        <Modal show={this.state.add} onHide={this.handleCloseButton}>
          <Modal.Header closeButton>
            <Modal.Title>Add Grade</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <GradesAdd
              addGrades={this.addGrades}
              user={this.props.user}
            />
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default GradesYear

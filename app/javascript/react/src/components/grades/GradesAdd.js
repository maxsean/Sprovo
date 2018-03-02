import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Functions from '../../utils/Functions'

class GradesAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: "",
      score: "",
      year: "",
      quarter: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value })
  };

  handleSubmit(event) {
    event.preventDefault();
    let formPayLoad = {
      user_id: this.props.user.id,
      course: this.state.course,
      score: this.state.score,
      year: this.state.year,
      quarter: this.state.quarter,
      authenticity_token: Functions.getMetaContent("csrf-token")
    };
    this.props.addGrades(formPayLoad);
  }

  render() {
    return(
      <div className="add-grade-form">
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalCourse">
            <Col componentClass={ControlLabel} sm={2}>
              Course
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                name="course"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalScore">
            <Col componentClass={ControlLabel} sm={2}>
              Grade
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                name="score"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalYear">
            <Col componentClass={ControlLabel} sm={2}>
              Year
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                name="year"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalQuarterSelect">
            <Col componentClass={ControlLabel} sm={2}>
              Quarter
            </Col>
            <Col sm={10}>
              <FormControl
                componentClass="select"
                placeholder="select"
                name="quarter"
                onChange={this.handleChange}
                >
                  <option value="">select</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                </FormControl>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Submit</Button>
              </Col>
            </FormGroup>
          </Form>
      </div>
    )
  }
}

export default GradesAdd

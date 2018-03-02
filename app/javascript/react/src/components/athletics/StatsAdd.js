import React from 'react';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Functions from '../../utils/Functions'

class StatsAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: "",
      position: "",
      year: "",
      description: "",
      stat: ""
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
      sport: this.state.sport,
      position: this.state.position,
      year: this.state.year,
      description: this.state.description,
      stat: this.state.stat,
      authenticity_token: Functions.getMetaContent("csrf-token")
    };
    this.props.addStats(formPayLoad);
  }

  render() {
    return(
      <div className="add-stat-form">
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalSport">
            <Col componentClass={ControlLabel} sm={2}>
              Sport
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                name="sport"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPosition">
            <Col componentClass={ControlLabel} sm={2}>
              Position
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                name="position"
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
          <FormGroup controlId="formHorizontalDescription">
            <Col componentClass={ControlLabel} sm={2}>
              Description
            </Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="i.e. Passing Yards"
                name="description"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalStat">
            <Col componentClass={ControlLabel} sm={2}>
              Stat
            </Col>
            <Col sm={10}>
              <FormControl
                type="number"
                name="stat"
                onChange={this.handleChange}
              />
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

export default StatsAdd

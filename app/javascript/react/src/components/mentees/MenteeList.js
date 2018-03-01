import React from 'react';
import MenteeTile from './MenteeTile';
import { Alert } from 'react-bootstrap'

class MenteeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentees: [],
      error: null
    };
    this.fetchMentees = this.fetchMentees.bind(this)
  };

  componentDidMount() {
    this.fetchMentees()
  };

  fetchMentees() {
    fetch('/api/v1/mentees.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: {}
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.setState({
          mentees: data
        })
      }
    })
  };

  render() {
    let mentees, error;

    if (this.state.mentees.length > 0) {
      mentees = this.state.mentees.map(mentee => {
        return(
          <MenteeTile
            key={mentee.id}
            mentee={mentee}
          />
        )
      })
    };

    if (this.state.error) {
      error = <Alert bsStyle='warning'>
        {this.state.error}
      </Alert>
    }

    return(
      <div className="mentee-list">
        {error}
        {mentees}
      </div>
    )
  }
}

export default MenteeList

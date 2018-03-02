import React from 'react';
import { Panel, Alert, Modal, Button } from 'react-bootstrap';
import Functions from '../../utils/Functions';
import StatsYear from './StatsYear';
import StatsAdd from './StatsAdd'

class StatsSport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: {},
      add: false,
      error: null,
      success: null
    };
    this.addStats = this.addStats.bind(this);
    this.deleteStats = this.deleteStats.bind(this);
    this.fetchStats = this.fetchStats.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.updateStats = this.updateStats.bind(this)
  };

  addStats(payload) {
    fetch(`/api/v1/stats.json`, {
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
        this.fetchStats(this.props.id)
      }
    })
    this.setState({
      add: false
    })
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.id) {
      this.fetchStats(nextProps.id)
    }
  };

  deleteStats(sport, stat_description, year, position, user_id) {
    let payload = {
      user_id: user_id,
      sport: sport,
      description: stat_description,
      year: year,
      position: position,
      authenticity_token: Functions.getMetaContent("csrf-token")
    };

    fetch(`/api/v1/stats/${user_id}.json`, {
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
        this.fetchStats(this.props.id)
      }
    })
  };

  fetchStats(id) {
    fetch(`/api/v1/stats/${id}`, {
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
          stats: data
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

  handleDismiss(event) {
    event.preventDefault();
    this.setState({
      error: null,
      success: null
    })
  };

  updateStats(sport, stat_description, stat, year, position, user_id) {
    let payload = {
      user_id: user_id,
      sport: sport,
      description: stat_description,
      stat: stat,
      year: year,
      position: position,
      authenticity_token: Functions.getMetaContent("csrf-token")
    };

    fetch(`/api/v1/stats/${user_id}.json`, {
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
        this.fetchStats(this.props.id)
      }
    })
  };

  render() {
    let addButton, error, statssport, success;

    if (this.props.current_user && this.props.current_user.role == "mentor") {
      addButton = <Button
        onClick={this.handleAddButton}
        style={{marginBottom:"2%"}}
        >Add Stat</Button>
    }

    if (this.state.error) {
      error = <Alert bsStyle='warning' onDismiss={this.handleDismiss}>
        <p>{this.state.error}</p>
      </Alert>
    };

    if (this.state.success) {
      success = <Alert bsStyle='success' onDismiss={this.handleDismiss}>
        <p>{this.state.success}</p>
      </Alert>
    };

    if (this.state.stats != {}) {
      let stats = this.state.stats
      statssport = Object.keys(stats).map(key => {
        return(
          <Panel key={key} bsStyle="info">
            <Panel.Heading>
              <Panel.Title componentClass="h3">
                {key}
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <StatsYear
                stats={stats[key]}
                sport={key}
                user={this.props.user}
                updateStats={this.updateStats}
                deleteStats={this.deleteStats}
                current_user={this.props.current_user}
              />
            </Panel.Body>
          </Panel>
        )
      })
    }

    return(
      <div className="stats-sport">
        {error}
        {success}
        {addButton}
        {statssport}
        <Modal show={this.state.add} onHide={this.handleCloseButton}>
          <Modal.Header closeButton>
            <Modal.Title>Add Stats</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <StatsAdd
              addStats={this.addStats}
              user={this.props.user}
            />
          </Modal.Body>
        </Modal>

      </div>
    )
  }
}

export default StatsSport

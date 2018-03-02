import React from 'react';
import StatsPosition from './StatsPosition';
import { Panel } from 'react-bootstrap'

const StatsYear = (props) => {

  let stats = props.stats
  var statsyear = Object.keys(stats).map(key => {
    return(
      <Panel key={key} bsStyle="success">
        <Panel.Heading>
          <Panel.Title toggle>
            {key}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <StatsPosition
            stats={stats[key]}
            sport={props.sport}
            year={key}
            user={props.user}
            current_user={props.current_user}
            updateStats={props.updateStats}
            deleteStats={props.deleteStats}
          />
        </Panel.Collapse>
      </Panel>
    )
  })

  return(
    <div className="stats-year">
      {statsyear}
    </div>
  )
}

export default StatsYear

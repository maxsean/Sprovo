import React from 'react';
import StatsTable from './StatsTable';
import { Panel } from 'react-bootstrap'

const StatsPosition = (props) => {

  let stats = props.stats
  var statsposition = Object.keys(stats).map(key => {
    return(
      <Panel key={key}>
        <Panel.Heading>
          <Panel.Title>
            {key}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <StatsTable
            stats={stats[key]}
            sport={props.sport}
            year={props.year}
            position={key}
            user={props.user}
            current_user={props.current_user}
            updateStats={props.updateStats}
            deleteStats={props.deleteStats}
          />
        </Panel.Body>
      </Panel>
    )
  })

  return(
    <div className="stats-position">
      {statsposition}
    </div>
  )
}

export default StatsPosition

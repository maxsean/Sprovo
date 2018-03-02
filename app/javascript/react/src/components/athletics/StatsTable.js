import React from 'react';
import Stats from './Stats'
import { Table } from 'react-bootstrap'

const StatsTable = (props) => {
  let stats = props.stats

  var statstable = Object.keys(stats).map(key => {
    return(
      <Stats
        key={key}
        user={props.user}
        sport={props.sport}
        year={props.year}
        position={props.position}
        description={key}
        stat={stats[key]}
        current_user={props.current_user}
        updateStats={props.updateStats}
        deleteStats={props.deleteStats}
      />
    )
  })

  return(
    <Table responsive>
      {statstable}
    </Table>
  )
}

export default StatsTable

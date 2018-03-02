import React from 'react';
import GradesCourse from './GradesCourse'
import { Panel } from 'react-bootstrap'

const GradesQuarter = (props) => {

  let grades = props.grades
  var gradesquarter = Object.keys(grades).map(key => {
    return(
      <Panel key={key}>
        <Panel.Heading>
          <Panel.Title>
            {key} Quarter
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <GradesCourse
            grades={grades[key]}
            user={props.user}
            current_user={props.current_user}
            updateGrades={props.updateGrades}
            deleteGrades={props.deleteGrades}
          />
        </Panel.Body>
      </Panel>
    )
  })

  return(
    <div className="grades-quarter">
      {gradesquarter}
    </div>
  )
}

export default GradesQuarter

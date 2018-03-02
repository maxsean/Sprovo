import React from 'react';
import Grades from './Grades'
import { Table } from 'react-bootstrap'

const GradesCourse = (props) => {
  let grades = props.grades

  var gradescourse = Object.keys(grades).map(key => {
    return(
      <Grades
        key={key}
        user={props.user}
        course={key}
        score={grades[key]}
        current_user={props.current_user}
        updateGrades={props.updateGrades}
        deleteGrades={props.deleteGrades}
      />
    )
  })

  return(
    <Table responsive>
      {gradescourse}
    </Table>
  )
}

export default GradesCourse

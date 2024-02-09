import Proptypes from 'prop-types';


//props- read only properties that are shared between components.
//a parent component can send data to a child component
//<Component key =value />


function Students(props) {
  return (
    <div className="student">
      <p>Name: {props.firstName}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent? "Yes this student is enrolled": 'Kindly pay fees'}</p>
    </div>
  )
}

//learn more about prop types
Students.propTypes ={
    firstName:Proptypes.string,
    age:Proptypes.number,
    isStudent: Proptypes.bool
}

export default Students

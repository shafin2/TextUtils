import React from 'react'

function alert(props) {
  return (
    <div style={{height:"40px"}}>
    {props.alert &&
    <div className={`alert alert-${props.alert.alert_type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.alert_type==="success"?"Success":"Alert"}! </strong>{props.alert.message}
    </div>}
    </div>
  )
}

export default alert

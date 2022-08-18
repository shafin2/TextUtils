import React from 'react'

function alert(props) {
  return (
    props.alert &&
    <div className={`alert alert-${props.alert.alert_type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.alert_type==="success"?"Success":"Alert"}! </strong>{props.alert.message}
    </div>
  )
}

export default alert

import React from 'react'

function Button(props) {
  return (
    <button onClick={props.btn_click}>
      {props.btn_txt}
    </button>
  )
}

export default Button
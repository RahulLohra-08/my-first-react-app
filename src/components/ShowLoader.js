import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { actionCreater } from '../reducers/mainAction'
// import { bindActionCreators } from 'redux'



export default function ShowLoader(props) {
  // const loading = useSelector((state) => state.loading)
  // const dispatch = useDispatch()
  // const {showLoader, hideLoader} = bindActionCreators(actionCreater, dispatch)

  console.log("props", props)

  return (
    <div>
       <button className='btn btn-primary mx-2'>Show Loader</button>
       <span>Show True or False </span>
        <button className='btn btn-primary' >Hide Loader</button>
    </div>
  )
}

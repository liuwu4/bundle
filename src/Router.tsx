import React from 'react';
import { connect } from 'react-redux';
const Router = (props: object) => {
  const { dispatch, loginStateWill: { name } }: any = props;
  return (
    <div onClick={() => {
      dispatch({
        type: 'login',
        payload: {
          name: 'connect'
        }
      })
    }}>
      路由{name}
    </div>
  )
}
const mapStateToProps = (state: object) => {
  return { ...state };
}
export default connect(mapStateToProps)(Router);




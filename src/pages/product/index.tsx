import React, { useEffect } from 'react';
import List from './components/List';
import { connect } from 'react-redux';

const Index = (props: object) => {
  const { dispatch }: any = props;
  useEffect(() => {
    dispatch({
      type: 'product/products',
    })
  }, []);
  return (
    <div>
      <List {...props} />
    </div>
  )
}
const mapStateToProps = (state: object) => {
  return { ...state };
}
export default connect(mapStateToProps)(Index);
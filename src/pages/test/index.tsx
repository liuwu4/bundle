import React from 'react';
import { Table, Button, message } from 'antd';
import { connect } from 'react-redux';
const TestTable = (props: any) => {
  const { dispatch } = props;
  console.log(props);
  return (
    <div>
      <Table
        columns={[
          {
            dataIndex: 'number',
            title: '1234'
          },
          {
            dataIndex: 'type',
            title: 'sfdsaf'
          },
          {
            dataIndex: 'typefdsafsa',
            title: 'sfd2342saf'
          }
        ]}
      />
      <Button onClick={() => {
        dispatch({
          type: 'test/test',
          payload: {
            test: '2342143214'
          }
        })
      }} type="primary">ceshi范德萨范德萨 </Button>
    </div>
  )
}
const mapStateToProps = (state: object) => {
  return { ...state };
}
export default connect(mapStateToProps)(TestTable);
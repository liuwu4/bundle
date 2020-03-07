import React from 'react';
import { Table, Button, message } from 'antd';
import { connect } from 'react-redux';
const TestTable = (props: any) => {
  const { dispatch } = props;
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
          type: 'test'
        })
      }} type="primary">ceshi范德萨范德萨 </Button>
    </div>
  )
}
export default connect()(TestTable);
import React from 'react';
import { Table, Button, message } from 'antd';
const TestTable = () => {
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
        message.success({ content: '测试' });
      }} type="primary">ceshi范德萨范德萨 </Button>
    </div>
  )
}
export default TestTable;
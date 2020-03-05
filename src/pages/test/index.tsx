import React from 'react';
import { Table, Button } from 'antd';
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
      <Button type="primary">ceshi范德萨范德萨 </Button>
    </div>
  )
}
export default TestTable;
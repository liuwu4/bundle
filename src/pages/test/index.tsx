import React from 'react';
import { Table } from 'antd';
const TestTable = () => {
  return (
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
  )
}
export default TestTable;
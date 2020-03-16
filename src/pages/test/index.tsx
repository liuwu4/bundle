import React from 'react';
import { Table, Button, message } from 'antd';
import { connect } from 'react-redux';
import './assets/styles/index.less';

const TestTable = (props: any) => {
  const { dispatch } = props;
  return (
    <div className="test">
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
        message.info({ content: '测试样式是否正常' });
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
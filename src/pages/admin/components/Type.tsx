import React from 'react';
import { connect } from 'react-redux';
import '../assets/Type.less'
import { EditColumns } from '../utils/Helper';

import { Button, Input, Table, Row, Col } from 'antd';
class Type extends React.Component {

  componentDidMount() {
    const { dispatch }: any = this.props;
    dispatch({
      type: 'admin/type'
    });
  }

  handleDelete(typeId: number) {
    const { dispatch }: any = this.props;
    dispatch({
      type: 'admin/deleteType',
      payload: {
        typeId
      }
    });
  }

  handleAdd() {
    const { admin, dispatch }: any = this.props;
    const { types } = admin;
    const addType = { typeId: types.length, typeName: '', flag: true, newId: types.length };
    dispatch({
      type: 'admin/stateWillUpdate',
      payload: {
        types: [...types, addType],
      }
    });
  }


  handleUpdate(colType: ProductType) {
    console.log(colType);
    const { admin, dispatch }: any = this.props;
    const { types } = admin;
    const clone = types;
    if (colType.flag) {
      dispatch({
        type: 'admin/putType',
        payload: {
          type: colType,
          typeId: colType.typeId
        }
      });
    } else {
      clone.map((item: ProductType) => {
        if (colType.typeId === item.typeId) {
          item.flag = true;
        }
        return { ...item };
      });
      dispatch({
        type: 'admin/stateWillUpdate',
        payload: {
          types: clone
        }
      });
    }
  }

  handleChange(record: ProductType, e: any) {
    const { admin, dispatch }: any = this.props;
    const { types } = admin;
    const { value } = e.target;
    const clone = types;
    record = { ...record, typeName: value };
    console.log(record);
    clone.map((item: ProductType) => {
      if (item.typeId === record.typeId) {
        Object.assign(item, record);
      }
      return { ...item };
    });
    dispatch({
      type: 'admin/stateWillUpdate',
      payload: {
        types: clone
      }
    });
  }

  renderColumns() {
    const columns = [
      {
        title: "序号",
        dataIndex: 'typeId',
        width: '25%'
      },
      {
        title: '类型编号',
        dataIndex: 'typeNum',
        width: '25%'
      },
      {
        title: "类型名称",
        dataIndex: 'typeName',
        width: '25%',
        render: (text: string, record: ProductType) => {
          return (record.flag ? <Input value={text} onChange={this.handleChange.bind(this, record)} /> : text)
        }
      },
      {
        title: '操作',
        dataIndex: 'operations',
        width: '25%',
        render: (_text: any, col: ProductType) => {
          return (
            <Row>
              <Col span={12} style={{ color: '#1890ff', cursor: 'pointer' }}><span onClick={this.handleUpdate.bind(this, col)}>{col.flag ? '完成' : '修改'}</span></Col>
              <Col span={12} style={{ color: '#f24', cursor: 'pointer' }}><span onClick={this.handleDelete.bind(this, col.typeId)}>删除</span></Col>
            </Row>);
        }
      }
    ];
    return columns;
  }
  render() {
    const { admin }: any = this.props;
    const { types } = admin;
    return (
      <div style={{ background: '#fff' }}>
        <Table
          bordered
          columns={this.renderColumns()}
          dataSource={types}
          rowKey={(item: any) => item.typeId}
        />
      </div>
    )
  }
}
const mapStateToProps = (state: object) => {
  return { ...state }
};
export default connect(mapStateToProps)(Type);
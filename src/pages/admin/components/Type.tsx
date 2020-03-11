import React from 'react';
import { connect } from 'react-redux';
import '../assets/Type.less'
import 'antd/dist/antd.css';

import { Button, Input, Table } from 'antd';
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
    })
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
    })
  }
  handleUpdate(typeIndex: number) {
    const { admin, dispatch }: any = this.props;
    const { types } = admin;
    const clone = types;
    const data = clone[typeIndex];
    const isAdd = data.newId;
    if (isAdd) {
      dispatch({
        type: 'admin/postType',
        payload: {
          type: data
        }
      })
    } else {
      if (!data.flag) {
        clone[typeIndex].flag = true;
        dispatch({
          type: 'admin/stateWillUpdate',
          payload: {
            types: clone,
          }
        });
      } else {
        dispatch({
          type: 'admin/putType',
          payload: {
            type: data,
            typeId: data.typeId,
          }
        });
      }
    }
  }

  handleChange(typeIndex: number, e: any) {
    const { admin, dispatch }: any = this.props;
    const { types } = admin;
    const { value } = e.target;
    const clone = types;
    clone[typeIndex].typeName = value;
    dispatch({
      type: 'admin/stateWillUpdate',
      payload: {
        types: clone,
      }
    })
  }

  render() {
    const { admin }: any = this.props;
    const { types } = admin;
    return (
      <div className="types">
        {types.map((item: any, index: number) => (
          <div key={item.typeId} className="list" >
            <div className='list-item'>
              <span>{item.typeId}</span>
              <span>{item.flag ? <Input value={item.typeName} onChange={this.handleChange.bind(this, index)} /> : item.typeName}</span>
              <div className='list-operation'>
                <span onClick={this.handleUpdate.bind(this, index)}>{item.flag ? '完成' : '修改'}</span>
                <span onClick={this.handleDelete.bind(this, item.typeId)}>删除</span>
              </div>
            </div>
          </div>
        ))}
        <br />
        <Button onClick={this.handleAdd.bind(this)} type="default">＋</Button>
      </div>
    )
  }
}
const mapStateToProps = (state: object) => {
  return { ...state }
};
export default connect(mapStateToProps)(Type);
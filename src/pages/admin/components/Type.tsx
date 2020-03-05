import React from 'react';
import { connect } from 'react-redux';
import '../assets/Type.less'
import 'antd/dist/antd.css';

import { Button, Input, Table } from 'antd';
class Type extends React.Component {
  componentDidMount() {
    const { dispatch }: any = this.props;
    dispatch({
      type: 'types'
    });
  }

  handleDelete(typeId: number) {
    const { dispatch }: any = this.props;
    dispatch({
      type: 'delete',
      payload: {
        typeId
      }
    })
  }
  handleAdd() {
    const { loginStateWill, dispatch }: any = this.props;
    const { types } = loginStateWill;
    const addType = { typeId: types.length, typeName: '', flag: true, newId: types.length };
    dispatch({
      type: 'sign',
      payload: {
        types: [...types, addType],
      }
    })
  }
  handleUpdate(typeIndex: number) {
    const { loginStateWill, dispatch }: any = this.props;
    const { types } = loginStateWill;
    const clone = types;
    const data = clone[typeIndex];
    const isAdd = data.newId;
    if (isAdd) {
      dispatch({
        type: 'addType',
        payload: {
          type: data[0]
        }
      })
    } else {

      if (!data.flag) {
        clone[typeIndex].flag = true;
        dispatch({
          type: 'sign',
          payload: {
            types: clone,
          }
        });
      } else {
        dispatch({
          type: 'updateType',
          payload: {
            type: data,
            typeId: data.typeId,
          }
        });
      }
    }
  }

  handleChange(typeIndex: number, e: any) {
    const { loginStateWill, dispatch }: any = this.props;
    const { types } = loginStateWill;
    const { value } = e.target;
    const clone = types;
    clone[typeIndex].typeName = value;
    dispatch({
      type: 'sign',
      payload: {
        types: clone,
      }
    })
  }

  render() {
    const { loginStateWill }: any = this.props;
    const { types } = loginStateWill;
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
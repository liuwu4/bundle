import React, { useEffect } from 'react';
import { Card, Icon, Modal, Form, Row, Col, Select, Input, DatePicker, Button } from 'antd';

const Add = (props: any) => {
  const { login, form, dispatch } = props;
  const { addModel, types } = login;
  const { getFieldDecorator } = form;
  useEffect(() => {
    dispatch({
      type: 'types',
    })
  }, []);
  const handleAdd = (e: any) => {
    e.stopPropagation()
    sendDispatch({ addModel: true, });
  }
  const handleCancel = (e: any) => {
    e.stopPropagation()
    sendDispatch({ addModel: false, });
  }
  const sendDispatch = (params: object) => {
    dispatch({
      type: 'addProduct',
      payload: {
        ...params,
      }
    });
  }

  const handleSubmit = () => {
    const { validateFields } = form;
    validateFields((error: any, value: any) => {
      dispatch({
        type: 'addList',
        payload: {
          value: { ...value, productionDate: new Date() }
        }
      })
    });
  }

  return (
    <Card
      onClick={handleAdd}
      style={{
        width: 240,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        marginRight: 5,
        marginBottom: 5
      }}
    >
      <Icon style={{
        fontSize: 20
      }} type="plus-circle" />
      <Modal
        closable={false}
        visible={addModel}
        onCancel={handleCancel}
        footer={null}
      >
        <input type="file" />
        <Form onSubmit={handleSubmit} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
          <Form.Item label="编号" >{
            getFieldDecorator("no")(
              <Input placeholder="请输入编号 " />)
          }</Form.Item>
          <Form.Item label="名称" >{
            getFieldDecorator("name")(
              <Input placeholder="请输入名称 " />)
          }</Form.Item>
          <Form.Item label="类型" >{
            getFieldDecorator("type")(
              <Select
                showArrow={false}
                placeholder="请选择"
              >
                {types.map((item: any) => (
                  <Select.Option value={item.typeId} key={item.typeId}>
                    {item.typeName}
                  </Select.Option>
                ))}
              </Select>)
          }</Form.Item>
          <Form.Item label="价格" >{
            getFieldDecorator("price")(
              <Input placeholder="请输入价格" />)
          }</Form.Item>
          <Form.Item label="库存" >{
            getFieldDecorator("number")(
              <Input placeholder="请输入库存" />)
          }</Form.Item>
          <Form.Item label="状态" >{
            getFieldDecorator("status")(
              <Select
                showArrow={false}
                placeholder="请输入状态"
              >
                {[{ id: 0, title: '下架' }, { id: 1, title: '上架' }].map((item: any) => (
                  <Select.Option value={item.id} key={item.id}>{item.title}</Select.Option>
                ))}
              </Select>)
          }</Form.Item>
          <Form.Item label="生产日期" >{
            getFieldDecorator("productionDate")(
              <DatePicker />)
          }</Form.Item>
          <Form.Item label="生产地址" >{
            getFieldDecorator("productionAddress")(
              <Input.TextArea placeholder="请输入生产地址" />)
          }</Form.Item>
          <Form.Item label="介绍" >{
            getFieldDecorator("descripton")(
              <Input.TextArea placeholder="请输入描述" />)
          }</Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Row>
              <Col span={11} style={{ textAlign: 'right' }}>
                <Button htmlType="submit" type='primary' style={{ width: '60%' }}>添加</Button>
              </Col>
              <Col span={2} />
              <Col span={11} >
                <Button onClick={handleCancel} type='default' style={{ width: '60%' }}>取消</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </Card >
  )
}

export default Form.create()(Add);
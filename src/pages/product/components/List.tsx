import React from 'react';
import { Card, Row, Button } from 'antd';
import Add from './Add';
const List = (props: object) => {
  const { productReducer: { products }, dispatch }: any = props;
  const handleDelete = (no: number) => {
    dispatch({
      type: 'deleteProduct',
      payload: {
        no,
      }
    })
  }
  return (
    <Row type="flex">
      <Add {...props} />
      {products.map((item: any) => (<Card
        key={item.no}
        hoverable
        style={{ width: 240, marginRight: 5, marginBottom: 5 }}
        cover={<img alt="example" height="200" src={item.picture || "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"} />}
      >
        <li>编号：{item.no}</li>
        <li>名称：{item.name}</li>
        <li>类型：{item.typeInfo.typeName}</li>
        <li>价格：{item.price}￥</li>
        <li>介绍：{item.description}</li>
        <Button onClick={handleDelete.bind(null, item.no)} type="ghost">删除</Button>
      </Card>))}
    </Row>

  )
}
export default List;
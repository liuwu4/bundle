import { Row, Col } from "antd";
import React from "react";
export const EditColumns = function (): Array<Object> {
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
            width: '25%'
        },
        {
            title: '操作',
            dataIndex: 'operations',
            width: '25%',
            render: (_text: any, col: any) => {
                return (
                    <Row>
                        <Col span={12} style={{ color: '#1890ff', cursor: 'pointer' }}><span >{col.flag ? '完成' : '修改'}</span></Col>
                        <Col span={12} style={{ color: '#f24', cursor: 'pointer' }}><span>删除</span></Col>
                    </Row>);
            }
        }
    ];
    return columns;
}
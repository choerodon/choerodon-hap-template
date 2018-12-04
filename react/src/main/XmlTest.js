import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {CheckBox ,DataSet, Modal, Button, Table, TextField, NumberField, Radio,Row,Col} from 'choerodon-hap-ui';

const queryDS = new DataSet({
    fields: [
        { name: 'code', type: 'string'  },
        { name: 'description', type: 'string' }
    ],
});

const codeValueDS = new DataSet({
    queryUrl: '/dataset/CodeValueXml/query',
    submitUrl: '/dataset/CodeValueXml/submit',
    pageSize:5,
    fields: [
        { name: 'value', type: 'string', label: '值', require: true },
        { name: 'meaning', type: 'string', label: '含义' },
        { name: 'description', type: 'string', label: '描述' },
        { name: 'order_seq', type: 'number', label: '排序号' },
        { name: 'parent_code_value', type: 'string', label: '父级快码值' },
        { name: 'tag', type: 'string', label: '标记' },
        { name: 'enabled_flag', type: 'string', label: '是否启用' },
    ],
    events: {
        query: (dataset, param) => console.log('codeValue query parameter', param),
    },
});

const codeDS = new DataSet({
    primaryKey: 'code_id',
    autoQuery: true,
    pageSize: 5,
    queryUrl: 'dataset/CodeXml/query',
    submitUrl: 'dataset/CodeXml/submit',
    fields: [
        {name: 'code_id', type: 'number', label: "代码ID", require: true},
        {name: 'code', type: 'string', label: "代码"},
        {name: 'description', type: "string", label: "描述"},
        {name: 'enabled_flag', type: "string", label: "是否启用"},
        {name: 'parent_code_value', type: "string", label: "父级快码"},
        {name: 'edit', type: URL, label: "编辑", readOnly: true, defaultValue: "www.baidu.com"}
    ],
    events: {
        indexchange: (dataset, current) => console.log('current code', current),
        submit: (dataset, json) => console.log('submit data', json),
    },
    children: {
        codeValues: codeValueDS,
    },
    queryDataSet: queryDS
});



const { Column } = Table;
const tf=<TextField />
@observer
class Test extends Component {
    constructor(props) {
        super(props);
        this.state= {};
    }

    render() {

        return (

            <div>

                <Row gutter={10}>
                    <Col span={8}>
                        <TextField dataSet={queryDS} name="code" placeholder="代码"  />
                    </Col>
                    <Col span={8}>
                        <TextField dataSet={queryDS} name="description" placeholder="描述"   />
                    </Col>
                </Row>

                <Button onClick={() => codeDS.create()}>新增</Button>
                <Button onClick={() => codeDS.query()}>查询</Button>
                <Button onClick={() => codeDS.remove(codeDS.selected)}>删除</Button>
                <Button onClick={() => codeDS.first()}>第一条</Button>
                <Button onClick={() => codeDS.pre()}>上一条</Button>
                <Button onClick={() => codeDS.next()}>下一条</Button>
                <Button onClick={() => codeDS.last()}>最后一条</Button>
                <Button onClick={() => codeDS.firstPage()}>首页</Button>
                <Button onClick={() => codeDS.prePage()}>上一页</Button>
                <Button onClick={() => codeDS.nextPage()}>下一页</Button>
                <Button onClick={() => codeDS.lastPage()}>尾页</Button>
                <Button icon="save" type="submit" dataSet={codeDS} onClick={() => codeDS.submit()}>保存</Button>

                <Table dataSet={codeDS}>
                    <Column name="code" editor={<TextField/>}/>
                    <Column name="description" editor={<TextField/>}/>
                    <Column name="enabled_flag" editor={<CheckBox value="Y" unCheckedValue="N" />} />
                </Table>
                <div>
                    <Button type="button" onClick={() => codeValueDS.create()}>新增</Button>
                    <Button type="button" onClick={() => codeValueDS.query()}>查询</Button>
                    <Button type="button" onClick={() => codeValueDS.remove(codeValueDS.selected)}>删除</Button>
                    <Button type="button" onClick={() => codeValueDS.pre()}>上一条</Button>
                    <Button type="button" onClick={() => codeValueDS.next()}>下一条</Button>

                <Table dataSet={codeValueDS}>
                    <Column name="value" editor={tf} />
                    <Column name="meaning" editor={tf} />
                    <Column name="description" editor={tf} />
                    <Column name="parent_code_value" editor={tf} />
                    <Column name="tag" editor={<TextField />} />
                    <Column name="order_seq" editor={<NumberField />} />
                    <Column name="enabled_flag" editor={<CheckBox value="Y" unCheckedValue="N" />}/>
                </Table>
                </div>
            </div>
        );
    }
}
export default withRouter(Test);
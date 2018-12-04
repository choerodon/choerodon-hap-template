import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {CheckBox ,DataSet, Modal, Button, Table, TextField, NumberField, Radio,Row,Col, Select} from 'choerodon-hap-ui';

const ds = new DataSet({
    autoQuery: true,
    fields: [
        { name: 'sex', type: 'object', label: '性别', lookupCode: 'HR.EMPLOYEE_GENDER' },
        { name: 'sex_code', bind: 'sex.value', type: 'string', label: '性别' },
    ],
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
                        <Select dataSet={ds} name="sex_code" placeholder="请选择" />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default withRouter(Test);
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {IntlField, Lov, Table, TextField,Select,Button,DatePicker,NumberField} from 'choerodon-hap-ui';
import queryDS from '../stores/QueryDataSet';
import headDS from '../stores/HeadDataSet';
import { Content } from 'choerodon-hap-front-boot'

const {Column} = Table;
const textField = <TextField/>;

function editorRenderer(record) {
    return record.status === 'add' ? textField : null;
}


@withRouter
@observer
class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TEMP_CLEAR_SIGN: false,
        };
        this.modal = undefined;
        this.searchDrawer = undefined;
    }

    /**
     * 临时方法：复杂查询后标记改变
     */
    handleSearch() {
        this.setState({TEMP_CLEAR_SIGN: true});
    }

    /**
     * 清除复杂查询的条件并触发查询
     */
    handleResetQuery() {
        queryDS.reset();
        headDS.query();
        this.setState({TEMP_CLEAR_SIGN: false});
    }


    renderHeadTable() {
        return (
            <React.Fragment>
                {this.renderHeadTableBody()}
            </React.Fragment>
        );
    }


    /**
     * 渲染表格内容
     */
    renderHeadTableBody() {
        return (
            <Table buttons={['add', 'save', 'delete']} dataSet={headDS} border={false} queryFieldsLimit={2} funcType="flat" color="blue">
                <Column name="name" editor={<IntlField />} />
                <Column name="age" editor={<NumberField step={1} />} />
                <Column name="position" editor={<Lov />} />
                <Column name="sex" editor={<Select />} />
                <Column name="birth" editor={<DatePicker />} />
            </Table>
        );
    }

    render() {
        return (
            <Content>
                {this.renderHeadTable()}
            </Content>
        );
    }
}

export default Grid;

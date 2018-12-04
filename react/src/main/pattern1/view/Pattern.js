import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import {CheckBox, IntlField, Lov, NumberField, Table, TextField,Button} from 'choerodon-hap-ui';
import recordDS from '../stores/RecordDataSet';
import queryDS from '../stores/QueryDataSet';
import headDS from '../stores/HeadDataSet';
import '../style/index';
import { Content } from 'choerodon-hap-front-boot';

const {Column} = Table;

@withRouter
@observer
class Pattern extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TEMP_CLEAR_SIGN: false,
        };
        this.searchDrawer = null;
    }

    handleSearch() {
        this.setState({TEMP_CLEAR_SIGN: true});
    }

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
     * 渲染表格内容，两种场景
     * 1. 单表格渲染
     * 2. 头行表格头表格渲染
     */
    renderHeadTableBody() {
        return (
            <Table dataSet={headDS} border={false} buttons={['add', 'save', 'delete']} queryFieldsLimit={2}>
                <Column name="code" editor={<TextField/>} style={{ textAlign: 'left' }}/>
                <Column name="parent" editor={<Lov clearButton/>} style={{ textAlign: 'left' }}/>
                <Column name="description" editor={<IntlField clearButton/>} style={{ textAlign: 'left' }}/>
                <Column name="enabledFlag" editor={<CheckBox value="Y" unCheckedValue="N"/>} style={{ textAlign: 'left' }}/>
            </Table>
        );
    }


    renderRecordTable() {
        return (
            <React.Fragment>
                {this.renderRecordTableBody()}
            </React.Fragment>
        );
    }


    /**
     * 渲染`行表格`内容，只有在头行表格场景中行表格渲染
     * 如不需要渲染此部分，可以
     * 1. 传入空的recordDS
     * 2. 将该函数改为return null;
     * 3. 在render()中删除{this.renderRecordTable()}
     */
    renderRecordTableBody() {
        return (
            <Table dataSet={recordDS} border={false}  buttons={['add', 'delete']}>
                <Column name="value" editor={<TextField/>} style={{ textAlign: 'left' }}/>
                <Column name="meaning" editor={<IntlField clearButton/>} style={{ textAlign: 'left' }}/>
                <Column name="description" editor={<IntlField clearButton/>} style={{ textAlign: 'left' }}/>
                <Column name="codevalue" editor={<Lov/>} style={{ textAlign: 'left' }}/>
                <Column name="tag" editor={<TextField/>} style={{ textAlign: 'left' }}/>
                <Column name="orderSeq" editor={<NumberField step={1}/>} style={{ textAlign: 'left' }}/>
                <Column name="enabledFlag" editor={<CheckBox value="Y" unCheckedValue="N"/>} style={{ textAlign: 'left' }}/>
            </Table>
        );
    }

    render() {
        return (
            <Content>
                {this.renderHeadTable()}
                {this.renderRecordTable()}
            </Content>
        );
    }
}

export default Pattern;

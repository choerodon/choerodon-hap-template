import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {
  DataSet, Table, Radio, CheckBox, TextField, Row, Col, NumberField, Modal,
} from 'choerodon-hap-ui';
import { Button } from 'choerodon-ui';
import recordDS from '../stores/RecordDataSet';
import headDS from '../stores/HeadDataSet';
import '../style/index';

const { Column } = Table;

@observer
class CodeValue extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
    this.searchDrawer = null;
  }

  openDemoDrawer() {
    if (this.searchDrawer) {
      this.searchDrawer.open();
    } else {
      this.searchDrawer = Modal.open({
        title: '高级搜索',
        drawer: true,
        footer: null,
        style: { width: 400 },
        children: (
          <div>二级抽屉</div>
        ),
      });
    }
  }

  renderRecordTable() {
    return (
      <React.Fragment>
        {this.renderRecordTableToolbar()}
        {this.renderRecordTableBody()}
      </React.Fragment>
    );
  }

  /**
   * 渲染表格顶部功能栏，包括
   * 1. 常用（增删）功能
   * 2. 简要查询功能和查询按钮
   * 头行结构行表格`无保存`
   */
  renderRecordTableToolbar() {
    return (
      <div className="table-search-bar">
        <div className="table-search-bar-btn-group">
          <Button type="primary" icon="playlist_add" onClick={() => recordDS.create()}>新增</Button>
          <Button type="primary" icon="search" onClick={() => recordDS.query()}>查询</Button>
          <Button type="primary" icon="delete" onClick={() => recordDS.remove(recordDS.selected)}>删除</Button>
          <Button type="primary" icon="save" onClick={() => headDS.submit()}>保存</Button>
          <Button
            type="primary"
            onClick={() => this.openDemoDrawer()}
          >
            打开二级抽屉
          </Button>
        </div>
      </div>
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
      <Table dataSet={recordDS}>
        <Column name="value" editor={<TextField />} />
        <Column name="meaning" editor={<TextField />} />
        <Column name="description" editor={<TextField />} />
        <Column name="parentCodeValue" editor={<TextField />} />
        <Column name="tag" editor={<TextField />} />
        <Column name="orderSeq" editor={<NumberField />} />
        <Column name="enabledFlag" editor={<CheckBox value="Y" />} />
      </Table>
    );
  }


  dataSetSubmit(dataSet) {
    this.props.dataSetOperation(dataSet);
  }

  render() {
    const { record } = this.props;
    return (
      <div className="content">
        <Row gutter={10}>
          <Col span={10}>
            <TextField placeholder="" dataSet={headDS} name="code" />
          </Col>
          <Col span={10} offset={4}>
            <TextField placeholder="" dataSet={headDS} name="parentCodeValue" />
          </Col>
          <Col span={10}>
            <TextField dataSet={headDS} name="description" />
          </Col>
          <Col span={10} offset={4}>
            <CheckBox name="enabledFlag" dataSet={headDS} value="Y" unCheckedValue="N" />
          </Col>
        </Row>
        <Row gutter={10}>
          {this.renderRecordTable()}
        </Row>
      </div>
    );
  }
}

export default CodeValue;

import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { 
  Modal, CheckBox, DataSet, Table, TextField, Col, Select, Icon, Lov
} from 'choerodon-hap-ui';
import { Button } from 'choerodon-ui';
import CreateModal from './view/CreateModal';
import SearchModal from './view/SearchModal';
import queryDS from './stores/QueryDataSet';
import headDS from './stores/HeadDataSet';
import './style/index';

const { Column } = Table;

const ds = new DataSet({
    fields: [
        {
            name: 'code_description',
            type: 'string',
            mapping: {
                description: 'code_description',
                code: 'code_code',
            },
            lovCode: 'LOV_CODE',
        },
    ],
});

@withRouter
@observer
class Pattern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TEMP_CLEAR_SIGN: false,
    };
    this.modal = undefined;
    this.searchDrawer = undefined;
  }

  /**
   * 关闭弹窗函数
   * 处理新建时关闭，删除该条情况
   */
  handleCloseDrawer() {
    const codeId = headDS.current.get('codeId');
    if (!codeId) {
      headDS.remove();
    }
  }

  /**
   * 临时方法：复杂查询后标记改变
   */
  handleSearch() {
    this.setState({ TEMP_CLEAR_SIGN: true });
  }

  /**
   * 清除复杂查询的条件并触发查询
   */
  handleResetQuery() {
    queryDS.reset();
    headDS.query();
    this.setState({ TEMP_CLEAR_SIGN: false });
  }

    handleOnOkDrawer() {
      window.console.log("handleOnOkDrawer");
    }
  /**
   * 打开record弹窗
   * @param {*} isNew 是否为新建
   */
  openModal(isNew = false) {
    if (isNew) {
      headDS.create();
    }
    if (this.modal) {
      this.modal.open();
    } else {
      this.modal = Modal.open({
        title: isNew ? '新建' : '编辑',
        drawer: true,
        destroyOnClose: true,
        children: (
          <CreateModal />
        ),
        onCancel: this.handleCloseDrawer,
        onClose: this.handleCloseDrawer,
          onOk: this.handleOnOkDrawer,
        style: {
          width: 900,
        },
      });
    }
  }

  /**
   * 打开详细搜索弹窗
   */
  openSearchDrawer() {
    if (this.searchDrawer) {
      this.searchDrawer.open();
    } else {
      this.searchDrawer = Modal.open({
        title: '高级搜索',
        drawer: true,
        footer: null,
        style: { width: 400 },
        children: (
          <SearchModal
            handleClickSearch={this.handleSearch.bind(this)}
          />
        ),
      });
    }
  }

  renderHeadTable() {
    return (
      <React.Fragment>
        {this.renderHeadTableToolbar()}
        {this.renderHeadTableBody()}
      </React.Fragment>
    );
  }

  /**
   * 渲染表格顶部功能栏，包括
   * 1. 常用（增删保存）功能
   * 2. 简要查询功能和查询按钮
   */
  renderHeadTableToolbar() {
    const { TEMP_CLEAR_SIGN } = this.state;
    return (
      <div className="table-search-bar">
        <div className="table-search-bar-btn-group">
          <Button type="primary" icon="playlist_add" onClick={() => this.openModal(true)}>新增</Button>
          <Button type="primary" icon="save" onClick={() => headDS.submit()}>保存</Button>
          <Button type="primary" icon="delete" onClick={() => headDS.delete(headDS.selected)}>删除</Button>
        </div>
        <div className="table-search-bar-input-group">
          {TEMP_CLEAR_SIGN ? (
            <div className="table-search-drawer-reset">
              <Icon type="report" />
              <span className="tip">显示条件已更改</span>
              <span
                className="reset"
                role="none"
                onClick={() => this.handleResetQuery()}
              >
                还原
              </span>
            </div>
          ) : null}
          <TextField dataSet={queryDS} name="code" placeholder="代码" style={{ width: 130, marginRight: 8 }} />
          <TextField dataSet={queryDS} name="description" placeholder="描述" style={{ width: 130, marginRight: 16 }} />
          <Button type="primary" funcType="raised" onClick={() => headDS.query()}>查询</Button>
          <Button type="primary" onClick={() => this.openSearchDrawer()}>高级搜索</Button>
        </div>
      </div>
    );
  }

  /**
   * 渲染表格内容
   */
  renderHeadTableBody() {
    return (
      <Table dataSet={headDS} border={false}>
        <Column name="code" editor={<TextField />} />
        <Column name="description" editor={<TextField />} />
        <Column name="enabledFlag" editor={<CheckBox value="Y" />} />
        <Column
          renderer={(record, text, name) => (
            <Button shape="circle" funcType="flat" icon="mode_edit" onClick={() => this.openModal()} />
          )}
        />
      </Table>
    );
  }

  render() {
    return (
      <div className="content">
        {this.renderHeadTable()}
      </div>
    );
  }
}

export default Pattern;

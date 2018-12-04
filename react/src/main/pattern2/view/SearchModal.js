import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import {
  DataSet, Table, Radio, CheckBox, TextField, Row, Col, NumberField,
  Form, Password, SelectBox, Select, EmailField, DatePicker,
} from 'choerodon-hap-ui';
import { Button } from 'choerodon-ui';
import recordDS from '../stores/RecordDataSet';
import queryDS from '../stores/QueryDataSet';
import headDS from '../stores/HeadDataSet';
import '../style/index';

const { Column } = Table;
const { Option } = Select;

@observer
class SearchModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const { handleClickSearch } = this.props;
    return (
      <Form id="basic" style={{ paddingRight: 34 }}>
        <TextField label="代码" dataSet={queryDS} name="code" />
        <TextField label="描述" dataSet={queryDS} name="description" />
        <CheckBox label="启用" dataSet={queryDS} name="enabledFlag" value="Y" unCheckedValue="N" />
        <Button
          type="primary"
          funcType="raised"
          onClick={() => {
            headDS.query();
            if (handleClickSearch) {
              handleClickSearch();
            }
          }}
        >
          查询
        </Button>
      </Form>
    );
  }
}

export default SearchModal;

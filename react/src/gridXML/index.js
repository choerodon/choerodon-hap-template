import React, { PureComponent } from 'react';
import { DataSet, DatePicker, IntlField, Lov, NumberField, Select, Table, TextField } from 'choerodon-hap-ui';
import { Content } from 'choerodon-hap-front-boot';
import GridXMLDataSet from './stores/GridXMLDataSet';

const { Column } = Table;

export default class index extends PureComponent {
  gridXMLDS = new DataSet(GridXMLDataSet);

  render() {
    return (
      <Content>
        <Table buttons={['add', 'save', 'delete']} dataSet={this.gridXMLDS} queryFieldsLimit={2}>
          <Column name="name" editor sortable />
          <Column name="age" editor />
          <Column name="sex" editor />
          <Column name="description" editor />
          <Column name="position" editor />
          <Column name="birth" editor />
        </Table>
      </Content>
    );
  }
}

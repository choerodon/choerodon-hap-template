import React, { PureComponent } from 'react';
import { DataSet, Table } from 'choerodon-hap-ui';
import { Content } from 'choerodon-hap-front-boot';
import GridServiceDataSet from './stores/GridServiceDataSet';

const { Column } = Table;

export default class index extends PureComponent {
  gridServiceDS = new DataSet(GridServiceDataSet);

  render() {
    return (
      <Content>
        <Table buttons={['add', 'save', 'delete']} dataSet={this.gridServiceDS} queryFieldsLimit={2}>
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

import React, { PureComponent } from 'react';
import { DataSet, Table, TextField ,IntlField, Lov,Select,DatePicker,NumberField} from 'choerodon-ui/pro';
import { Content } from '@choerodon/boot';
import GridDemoDataSet from './stores/GridDataSet';

const {Column} = Table;

export default class Grid extends PureComponent {
    gridDemoDataSet =  new DataSet(GridDemoDataSet);

    render() {
        return (
            <Content>
            <Table buttons={['add', 'save', 'delete']} dataSet={this.gridDemoDataSet} border={false} queryFieldsLimit={2}>
            <Column name="name" editor={<IntlField />} />
        <Column name="age" editor={<NumberField step={1} />} />
        <Column name="position" editor={<Lov />} />
        <Column name="sex" editor={<Select />} />
        <Column name="birth" editor={<DatePicker />} />
        </Table>
        </Content>
    );
    }
}
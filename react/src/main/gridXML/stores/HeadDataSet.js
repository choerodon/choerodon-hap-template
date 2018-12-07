import {DataSet} from 'choerodon-hap-ui';
import queryDS from './QueryDataSet';

let headDS;


headDS = new DataSet({
    primaryKey: 'id',
    autoQuery: true,
    pageSize: 20,
    name: 'gridDemoXML',
    fields: [
        {name: 'name', type: 'string', label: '姓名', required: true},
        {name: 'age', type: 'number', label: '年龄'},
        {name: 'position', type: 'object', textField: 'name', label: '岗位', lovCode: 'LOV_POSITION'},
        {name: 'positionId', bind: 'position.positionId', type: 'number', label: '岗位ID'},
        {name: 'positionName', bind: 'position.name', type: 'string', label: '岗位'},
        {name: 'sex', type: 'string', label: '性别', lookupCode: 'HR.EMPLOYEE_GENDER'},
        {name: 'birth', type: 'date', label: '出生日期'},
    ],
    events: {
        indexchange: (dataset, current) => window.console.log('current code', current),
        submit: (dataset, json) => window.console.log('submit data', json),
    },
    queryDataSet: queryDS,
});


export default headDS;

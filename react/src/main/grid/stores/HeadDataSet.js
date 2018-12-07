import {DataSet} from 'choerodon-hap-ui';
import queryDS from './QueryHeadDataSet';

const headDS = new DataSet({
    primaryKey: 'id',
    autoQuery: true,
    pageSize: 20,
    name:'gridDemo',
    fields: [
        { name: 'name', type: 'string', label: '姓名', require: true },
        { name: 'age', type: 'number', label: '年龄' },
        {name: 'position', type: 'object', textField: 'name', label: '岗位', lovCode: 'LOV_POSITION'},
        {name: 'positionId', bind: 'position.positionId', type: 'number', label: '岗位ID'},
        {name: 'positionName', bind: 'position.name', type: 'string', label: '岗位', require: true},
        { name: 'sex', type: 'string', label: '性别', lookupCode: 'HR.EMPLOYEE_GENDER' },
        { name: 'birth', type: 'date', label: '出生日期' },
    ],
    queryDataSet: queryDS
});

export default headDS;

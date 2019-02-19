export default {
  primaryKey: 'id',
  autoQuery: true,
  pageSize: 20,
  name: 'GridDemo',
  fields: [
    { name: 'name', type: 'intl', label: '姓名', required: true, unique: true },
    { name: 'age', type: 'number', label: '年龄', required: true, },
    { name: 'sex', type: 'string', label: '性别', lookupCode: 'HR.EMPLOYEE_GENDER', required: true, },
    { name: 'description', type: 'intl', label: '描述' },
    { name: 'position', type: 'object', textField: 'name', label: '岗位', lovCode: 'LOV_POSITION' },
    { name: 'positionId', bind: 'position.positionId', type: 'number' },
    { name: 'positionName', bind: 'position.name', type: 'string' },
    { name: 'birth', type: 'date', label: '出生日期' },
  ],
  queryFields: [
    { name: 'name', type: 'string', label: '姓名' },
    { name: 'description', type: 'string', label: '描述' },
  ],
};

export default {
    //主键字段名，一般用作级联行表的查询字段
    primaryKey: 'id',
    autoQuery: true,
    pageSize: 20,
    //对应后台ds的name，自动生成约定的submitUrl, queryUrl, tlsUrl
    name: 'GridDemo',
    //与后端对应的列的描述
    fields: [
        {name: 'name', type: 'string', label: '姓名', require: true},
        {name: 'age', type: 'number', label: '年龄'},
        {name: 'position', type: 'object', textField: 'name', label: '岗位', lovCode: 'LOV_POSITION'},
        {name: 'positionId', bind: 'position.positionId', type: 'number', label: '岗位ID'},
        {name: 'positionName', bind: 'position.name', type: 'string', label: '岗位', require: true},
        {name: 'sex', type: 'string', label: '性别', lookupCode: 'HR.EMPLOYEE_GENDER'},
        {name: 'birth', type: 'date', label: '出生日期'},
    ],
    //查询字段，自动生成查询组件
    queryFields: [
        { name: 'name', type: 'string', label: '姓名' },
        { name: 'age', type: 'number', label: '年龄' },
    ],
};
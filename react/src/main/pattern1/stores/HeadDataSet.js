import {DataSet} from 'choerodon-hap-ui';
import recordDS from './RecordDataSet';

let headDS;


headDS = new DataSet({
    primaryKey: 'codeId',
    autoQuery: true,
    pageSize: 5,
    name: 'code',
    fields: [
        {name: 'codeId', type: 'number', label: '代码ID', required: true},
        {name: 'code', type: 'string', label: '代码'},
        {name: 'description', type: 'string', label: '描述', required: true},
        {name: 'enabledFlag', type: 'string', label: '是否启用'},
        {name: 'parent', type: 'object', textField: 'description', label: '父级快码', lovCode: 'LOV_CODE_ID'},
        {name: 'parentCodeDescription', bind: 'parent.description', type: 'string', label: '描述'},
        {name: 'parentCodeId', bind: 'parent.codeId', type: 'string', label: '父级快码'},
    ],
    events: {
        update:({ dataSet, record, name, value, oldValue }) => {
            window.console.log(recordDS);
            debugger;
           if (name=='parent'){

               recordDS.getField('codevalue').setLovPara('codeId',value.codeId)
               // recordDS.getField('codevalue').set('lovCode', value.codeId);
               recordDS.data.forEach(record => record.set('codevalue', {}));
           }
            window.console.log( record)}
    },
    children: {
        codeValues: recordDS,
    },
    queryDataSet: new DataSet({
        fields: [
            {name: 'code', type: 'string', label: '代码'},
            {name: 'description', type: 'string', label: '描述'},
        ],
    }),
});


export default headDS;

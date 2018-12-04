import { DataSet } from 'choerodon-hap-ui';
import recordDS from './RecordDataSet';

let headDS;

if (!headDS) {
  headDS = new DataSet({
    primaryKey: 'codeId',
    autoQuery: true,
    name: 'code',
    queryDataSet:  new DataSet({
        fields: [
            { name: 'code', type: 'string' },
            { name: 'description', type: 'string' },
        ],
    }),
    fields: [
      { name: 'codeId', type: 'number', label: '代码ID', require: true, readOnly: true },
      { name: 'code', type: 'string', label: '代码'},
      { name: 'description', type: 'string', label: '描述'},
      { name: 'enabledFlag', type: 'string', label: '是否启用'},
      { name: 'parentCodeValue', type: 'string', label: '父级快码'},
    ],
    events: {
      indexchange: (dataset, current) => window.console.log('current code', current),
      submit: (dataset, json) => window.console.log('submit data', json),
      query: (dataset, param) => window.console.log('query param:', param),
    },
    children: {
      codeValues: recordDS,
    },
  });S
}

export default headDS;

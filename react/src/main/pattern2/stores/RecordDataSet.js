import { DataSet } from 'choerodon-hap-ui';

let recordDS;

if (!recordDS) {
  recordDS = new DataSet({
    name: 'codeValue',
    pageSize: 5,
    fields: [
      { name: 'value', type: 'string', label: '值', require: true },
      { name: 'meaning', type: 'string', label: '含义' },
      { name: 'description', type: 'string', label: '描述' },
      { name: 'orderSeq', type: 'number', label: '排序号' },
      { name: 'parentCodeValue', type: 'string', label: '父级快码值' },
      { name: 'tag', type: 'string', label: '标记' },
      { name: 'enabledFlag', type: 'string', label: '是否启用' },
    ],
    events: {
      query: (dataset, param) => window.console.log('codeValue query parameter', param),
    },
  });
}

export default recordDS;

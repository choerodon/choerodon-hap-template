import {DataSet} from 'choerodon-hap-ui';

let recordDS;


recordDS = new DataSet({
    name: 'codeValue',
    pageSize: 5,
    fields: [
        {name: 'value', type: 'string', label: '值', required: true},
        {name: 'meaning', type: 'string', label: '含义'},
        {name: 'description', type: 'string', label: '描述'},
        {name: 'orderSeq', type: 'number', label: '排序号'},
        {name: 'codevalue', type: 'object', textField: 'meaning', label: '父级快码值', lovCode: 'LOV_CODE_VALUE'},
        {name: 'parentCodeValueMeaning', bind: 'codevalue.meaning', type: 'string', label: '含义'},
        {name: 'parentCodeValueId', bind: 'codevalue.codeValueId', type: 'string', label: 'ID'},
        {name: 'parentCodeValue',bind: 'codevalue.value', type: 'string', label: '父级快码值'},
        {name: 'tag', type: 'string', label: '标记'},
        {name: 'enabledFlag', type: 'string', label: '是否启用'},
    ],
});


export default recordDS;

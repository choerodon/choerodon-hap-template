import {DataSet} from 'choerodon-hap-ui';

const queryDS = new DataSet({
    fields: [
        {name: 'name', type: 'string',label:'姓名'},
        {name: 'age', type: 'number',label: '年龄'},

    ],
});

export default queryDS;

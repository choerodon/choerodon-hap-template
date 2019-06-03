package io.choerodon.grid.service.impl;

import com.github.pagehelper.PageHelper;
import io.choerodon.base.annotation.Dataset;
import io.choerodon.dataset.exception.DatasetException;
import io.choerodon.dataset.service.IDatasetService;
import io.choerodon.mybatis.service.BaseServiceImpl;
import io.choerodon.grid.dto.GridDemo;
import io.choerodon.grid.mapper.GridDemoMapper;
import io.choerodon.grid.service.IGridDemoService;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

import static io.choerodon.hap.system.dto.DTOStatus.ADD;
import static io.choerodon.hap.system.dto.DTOStatus.DELETE;
import static io.choerodon.hap.system.dto.DTOStatus.UPDATE;

@Service
@Transactional(rollbackFor = Exception.class)
@Dataset("GridDemo")
public class GridDemoServiceImpl extends BaseServiceImpl<GridDemo> implements IGridDemoService, IDatasetService<GridDemo> {

    @Autowired
    private GridDemoMapper mapper;

    @Override
    public List<?> queries(Map<String, Object> body, int page, int pageSize, String sortname, boolean isDesc) {
        try {
            GridDemo gridDemo = new GridDemo();
            BeanUtils.populate(gridDemo, body);
            gridDemo.setSortname(sortname);
            gridDemo.setSortorder(isDesc ? "desc" : "asc");
            PageHelper.startPage(page, pageSize);
            return mapper.selectGrid(gridDemo);
        } catch (Exception e) {
            throw new DatasetException("dataset.error", e);
        }
    }

    @Override
    public List<GridDemo> mutations(List<GridDemo> list) {
        for (GridDemo demo : list) {
            switch (demo.get__status()) {
                case ADD:
                    super.insertSelective(demo);
                    break;
                case DELETE:
                    super.deleteByPrimaryKey(demo);
                    break;
                case UPDATE:
                    super.updateByPrimaryKey(demo);
                    break;
                default:
                    break;
            }
        }
        return list;
    }
}
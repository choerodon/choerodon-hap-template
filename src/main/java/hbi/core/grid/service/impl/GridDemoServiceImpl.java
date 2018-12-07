package hbi.core.grid.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.StringUtil;
import com.hand.hap.core.IRequest;
import com.hand.hap.dataset.annotation.Dataset;
import com.hand.hap.dataset.exception.DatasetException;
import com.hand.hap.dataset.service.IDatasetService;
import com.hand.hap.mybatis.common.Criteria;
import com.hand.hap.system.service.impl.BaseServiceImpl;
import hbi.core.grid.dto.GridDemo;
import hbi.core.grid.mapper.GridDemoMapper;
import hbi.core.grid.service.IGridDemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import static com.hand.hap.system.dto.DTOStatus.*;

@Service
@Transactional(rollbackFor = Exception.class)
@Dataset("gridDemo")
public class GridDemoServiceImpl extends BaseServiceImpl<GridDemo> implements IGridDemoService, IDatasetService<GridDemo> {

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private GridDemoMapper gridDemoMapper;


    @Override
    @Transactional(propagation = Propagation.SUPPORTS)
    public List<GridDemo> selectUsers(IRequest request, GridDemo gridDemo, int pageNum, int pageSize) {
        if (gridDemo != null && StringUtil.isNotEmpty(gridDemo.getName())) {
            gridDemo.setName(gridDemo.getName().toLowerCase());
        }
        PageHelper.startPage(pageNum, pageSize);
        return gridDemoMapper.select(gridDemo);
    }

    @Override
    public List<?> queries(Map<String, Object> map, int page, int pageSize, String sortname, boolean isDesc) {

        try {
            GridDemo gridDemo = objectMapper.readValue(objectMapper.writeValueAsString(map), GridDemo.class);
            Criteria criteria = new Criteria(gridDemo);
            return super.selectOptions(null,gridDemo,criteria ,page, pageSize);
        } catch (IOException e) {
            throw new DatasetException("dataset.error", e);
        }

    }


    @Override
    public List<GridDemo> mutations(List<GridDemo> submitItems) {
        for (GridDemo item : submitItems) {
            switch (item.get__status()) {
                case ADD:
                    this.insertSelective(null, item);
                    break;
                case DELETE:
                    this.deleteByPrimaryKey(item);
                    break;
                case UPDATE:
                    this.updateByPrimaryKeySelective(null, item);
                    break;
            }
        }
        return submitItems;
    }
}
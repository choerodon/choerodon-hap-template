package hbi.core.grid.service.impl;

import com.hand.hap.dataset.annotation.Dataset;
import com.hand.hap.dataset.exception.DatasetException;
import com.hand.hap.dataset.service.IDatasetService;
import hbi.core.grid.service.IGridDemoService;
import com.hand.hap.mybatis.common.Criteria;
import com.hand.hap.system.service.impl.BaseServiceImpl;
import hbi.core.grid.dto.GridDemo;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

import static com.hand.hap.system.dto.DTOStatus.*;

@Service
@Transactional(rollbackFor = Exception.class)
@Dataset("gridDemo")
public class GridDemoServiceImpl extends BaseServiceImpl<GridDemo> implements IGridDemoService, IDatasetService<GridDemo> {

    @Override
    public List<?> queries(Map<String, Object> body, int page, int pageSize, String sortname, boolean isDesc) {
        try {
            GridDemo gridDemo = new GridDemo();
            BeanUtils.populate(gridDemo, body);
            gridDemo.setSortname(sortname);
            gridDemo.setSortorder(isDesc ? "desc" : "asc");
            Criteria criteria = new Criteria(gridDemo);
            return super.selectOptions(null, gridDemo, criteria, page, pageSize);
        } catch (Exception e) {
            throw new DatasetException("dataset.error", e);
        }
    }

    @Override
    public List<GridDemo> mutations(List<GridDemo> list) {
        for (GridDemo demo : list) {
            switch (demo.get__status()) {
                case ADD:
                    super.insertSelective(null, demo);
                    break;
                case DELETE:
                    super.deleteByPrimaryKey(demo);
                    break;
                case UPDATE:
                    super.updateByPrimaryKey(null, demo);
                    break;
                default:
                    break;
            }
        }
        return list;
    }
}
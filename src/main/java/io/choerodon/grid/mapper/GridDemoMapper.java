package io.choerodon.grid.mapper;

import io.choerodon.mybatis.common.Mapper;
import io.choerodon.grid.dto.GridDemo;

import java.util.List;

public interface GridDemoMapper extends Mapper<GridDemo> {
    List<GridDemo> selectGrid(GridDemo gridDemo);
}
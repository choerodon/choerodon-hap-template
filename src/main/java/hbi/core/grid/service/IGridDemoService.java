package hbi.core.grid.service;

import com.hand.hap.core.IRequest;
import com.hand.hap.core.ProxySelf;
import com.hand.hap.system.service.IBaseService;
import hbi.core.grid.dto.GridDemo;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IGridDemoService extends IBaseService<hbi.core.grid.dto.GridDemo>, ProxySelf<hbi.core.grid.service.IGridDemoService> {

    @Transactional(propagation = Propagation.SUPPORTS)
    List<GridDemo> selectUsers(IRequest request, hbi.core.grid.dto.GridDemo gridDemo, int pageNum, int pageSize);
}
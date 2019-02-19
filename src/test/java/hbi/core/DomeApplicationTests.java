package hbi.core;

import com.hand.hap.boot.MainApplication;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author vista
 * @time 19-2-19 下午2:22
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = MainApplication.class)
public class DomeApplicationTests {
    @Test
    public void contextLoads() {
        System.out.println("\nTESTING\n");
    }
}

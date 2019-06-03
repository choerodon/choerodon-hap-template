package io.choerodon;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import tk.mybatis.spring.annotation.MapperScan;

@Configuration
@ComponentScan
@MapperScan(basePackages = "io.choerodon.**.mapper")
@ConditionalOnProperty(matchIfMissing = true, havingValue = "false", prefix = "hap", name = "liquibase")
public class TemplateAutoConfiguration {

}
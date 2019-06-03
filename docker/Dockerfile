FROM registry.cn-hangzhou.aliyuncs.com/choerodon-tools/javabase:0.8.0
RUN echo "Asia/shanghai" > /etc/timezone;
COPY {{service.code}}.jar /{{service.code}}.jar
CMD java $JAVA_OPTS $SKYWALKING_OPTS -jar /{{service.code}}.jar

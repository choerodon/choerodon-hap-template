package hbi.core.db

import com.hand.hap.liquibase.MigrationHelper

def mhi = MigrationHelper.getInstance()

databaseChangeLog(logicalFilePath:"hap-boot-new-core-init-table-migration.groovy"){

    changeSet(author: "qiang.zeng", id: "2018-11-02-hap_grid_demo") {

        if (mhi.getDbType().isSupportSequence()){
            createSequence(sequenceName: 'HAP_GRID_DEMO_S', startValue: "10001")
        }
        createTable(tableName: "HAP_GRID_DEMO_B", remarks: "HAP4.0表格演示") {
            if (mhi.getDbType().isSuppportAutoIncrement()){
                column(name: "ID", type: "BIGINT", autoIncrement: "true", startWith: "10001", remarks: "PK") {
                    constraints(nullable: "false", primaryKey: "true", primaryKeyName: "HAP_GRID_DEMO_PK")
                }
            } else {
                column(name: "ID", type: "BIGINT", remarks: "PK") {
                    constraints(nullable: "false", primaryKey: "true", primaryKeyName: "HAP_GRID_DEMO_PK")
                }
            }
            column(name: "NAME", type: "VARCHAR(50)", remarks: "姓名") {
                constraints(nullable: "false")
            }
            column(name: "AGE", type: "BIGINT", remarks: "年龄") {
                constraints(nullable: "false")
            }
            column(name: "POSITION_ID", type: "VARCHAR(50)", remarks: "岗位ID") {
                constraints(nullable: "false")
            }
            column(name: "POSITION_NAME", type: "VARCHAR(50)", remarks: "岗位名称") {
                constraints(nullable: "false")
            }
            column(name: "SEX", type: "VARCHAR(50)", remarks: "性别") {
                constraints(nullable: "false")
            }
            column(name: "BIRTH", type: "DATETIME", remarks: "出生日期") {
                constraints(nullable: "false")
            }
            column(name:"OBJECT_VERSION_NUMBER",type:"BIGINT",defaultValue: "1")
            column(name: "REQUEST_ID", type: "bigint", defaultValue : "-1")
            column(name: "PROGRAM_ID", type: "bigint", defaultValue : "-1")
            column(name: "CREATED_BY", type: "bigint", defaultValue : "-1")
            column(name: "CREATION_DATE", type: "datetime", defaultValueComputed : "CURRENT_TIMESTAMP")
            column(name: "LAST_UPDATED_BY", type: "bigint", defaultValue : "-1")
            column(name: "LAST_UPDATE_DATE", type: "datetime", defaultValueComputed : "CURRENT_TIMESTAMP")
            column(name: "LAST_UPDATE_LOGIN", type: "bigint", defaultValue : "-1")
        }
        createTable(tableName: "HAP_GRID_DEMO_TL") {
            column(name: "ID", type: "BIGINT", remarks: "岗位ID") {constraints(nullable: "false", primaryKey: "true")}
            column(name: "LANG", remarks: "语言", type: "VARCHAR(50)") {constraints(nullable: "false", primaryKey: "true")}
            column(name: "NAME", remarks: "名称", type: "VARCHAR(100)")
            column(name: "DESCRIPTION", remarks: "组织描述", type: "VARCHAR(255)")

            column(name: "OBJECT_VERSION_NUMBER", type: "BIGINT", defaultValue : "1")
            column(name: "REQUEST_ID", type: "BIGINT", defaultValue : "-1")
            column(name: "PROGRAM_ID", type: "BIGINT", defaultValue : "-1")
            column(name: "CREATED_BY", type: "BIGINT", defaultValue : "-1")
            column(name: "CREATION_DATE", type: "DATETIME", defaultValueComputed : "CURRENT_TIMESTAMP")
            column(name: "LAST_UPDATED_BY", type: "BIGINT", defaultValue : "-1")
            column(name: "LAST_UPDATE_DATE", type: "DATETIME", defaultValueComputed : "CURRENT_TIMESTAMP")
            column(name: "LAST_UPDATE_LOGIN", type: "BIGINT", defaultValue : "-1")

        }
        if(!mhi.isDbType('postgresql')){
            addUniqueConstraint(columnNames: "NAME", tableName: "HAP_GRID_DEMO_B", constraintName: "FHAP_GRID_DEMO_U1")
        }else {
            addUniqueConstraint(columnNames: "ID,NAME", tableName: "HAP_GRID_DEMO_B", constraintName: "HAP_GRID_DEMO_U1")
        }
    }
}
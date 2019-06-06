package script.db

databaseChangeLog(logicalFilePath: "{{service.code}}-core-init-table-migration.groovy") {

    changeSet(author: "qiang.zeng", id: "2018-11-02-hap_grid_demo") {
        if (helper.dbType().isSupportSequence()) {
            createSequence(sequenceName: 'HAP_GRID_DEMO_S', startValue: "10001")
        }
        createTable(tableName: "HAP_GRID_DEMO_B", remarks: "HAP4.0表格演示") {
            if (helper.dbType().isSupportAutoIncrement()) {
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
            column(name: "SEX", type: "VARCHAR(1)", remarks: "性别") {
                constraints(nullable: "false")
            }
            column(name: "DESCRIPTION", type: "VARCHAR(255)", remarks: "描述")
            column(name: "POSITION_ID", type: "BIGINT", remarks: "岗位ID")
            column(name: "BIRTH", type: "DATETIME", remarks: "出生日期")

            column(name: "OBJECT_VERSION_NUMBER", type: "BIGINT", defaultValue: "1")
            column(name: "REQUEST_ID", type: "bigint", defaultValue: "-1")
            column(name: "PROGRAM_ID", type: "bigint", defaultValue: "-1")
            column(name: "CREATED_BY", type: "bigint", defaultValue: "-1")
            column(name: "CREATION_DATE", type: "datetime", defaultValueComputed: "CURRENT_TIMESTAMP")
            column(name: "LAST_UPDATED_BY", type: "bigint", defaultValue: "-1")
            column(name: "LAST_UPDATE_DATE", type: "datetime", defaultValueComputed: "CURRENT_TIMESTAMP")
            column(name: "LAST_UPDATE_LOGIN", type: "bigint", defaultValue: "-1")

            column(name: "ATTRIBUTE_CATEGORY", type: "varchar(30)")
            column(name: "ATTRIBUTE1", type: "varchar(240)")
            column(name: "ATTRIBUTE2", type: "varchar(240)")
            column(name: "ATTRIBUTE3", type: "varchar(240)")
            column(name: "ATTRIBUTE4", type: "varchar(240)")
            column(name: "ATTRIBUTE5", type: "varchar(240)")
            column(name: "ATTRIBUTE6", type: "varchar(240)")
            column(name: "ATTRIBUTE7", type: "varchar(240)")
            column(name: "ATTRIBUTE8", type: "varchar(240)")
            column(name: "ATTRIBUTE9", type: "varchar(240)")
            column(name: "ATTRIBUTE10", type: "varchar(240)")
            column(name: "ATTRIBUTE11", type: "varchar(240)")
            column(name: "ATTRIBUTE12", type: "varchar(240)")
            column(name: "ATTRIBUTE13", type: "varchar(240)")
            column(name: "ATTRIBUTE14", type: "varchar(240)")
            column(name: "ATTRIBUTE15", type: "varchar(240)")
        }
        createTable(tableName: "HAP_GRID_DEMO_TL") {
            column(name: "ID", type: "BIGINT", remarks: "主键ID") {
                constraints(nullable: "false", primaryKey: "true")
            }
            column(name: "LANG", type: "VARCHAR(10)" , remarks: "语言") {
                constraints(nullable: "false", primaryKey: "true")
            }
            column(name: "NAME", type: "VARCHAR(50)", remarks: "名称")
            column(name: "DESCRIPTION", type: "VARCHAR(255)", remarks: "组织描述")

            column(name: "OBJECT_VERSION_NUMBER", type: "BIGINT", defaultValue: "1")
            column(name: "REQUEST_ID", type: "BIGINT", defaultValue: "-1")
            column(name: "PROGRAM_ID", type: "BIGINT", defaultValue: "-1")
            column(name: "CREATED_BY", type: "BIGINT", defaultValue: "-1")
            column(name: "CREATION_DATE", type: "DATETIME", defaultValueComputed: "CURRENT_TIMESTAMP")
            column(name: "LAST_UPDATED_BY", type: "BIGINT", defaultValue: "-1")
            column(name: "LAST_UPDATE_DATE", type: "DATETIME", defaultValueComputed: "CURRENT_TIMESTAMP")
            column(name: "LAST_UPDATE_LOGIN", type: "BIGINT", defaultValue: "-1")

            column(name: "ATTRIBUTE_CATEGORY", type: "varchar(30)")
            column(name: "ATTRIBUTE1", type: "varchar(240)")
            column(name: "ATTRIBUTE2", type: "varchar(240)")
            column(name: "ATTRIBUTE3", type: "varchar(240)")
            column(name: "ATTRIBUTE4", type: "varchar(240)")
            column(name: "ATTRIBUTE5", type: "varchar(240)")
            column(name: "ATTRIBUTE6", type: "varchar(240)")
            column(name: "ATTRIBUTE7", type: "varchar(240)")
            column(name: "ATTRIBUTE8", type: "varchar(240)")
            column(name: "ATTRIBUTE9", type: "varchar(240)")
            column(name: "ATTRIBUTE10", type: "varchar(240)")
            column(name: "ATTRIBUTE11", type: "varchar(240)")
            column(name: "ATTRIBUTE12", type: "varchar(240)")
            column(name: "ATTRIBUTE13", type: "varchar(240)")
            column(name: "ATTRIBUTE14", type: "varchar(240)")
            column(name: "ATTRIBUTE15", type: "varchar(240)")
        }
        if (!helper.isPostgresql()) {
            addUniqueConstraint(columnNames: "NAME", tableName: "HAP_GRID_DEMO_B", constraintName: "FHAP_GRID_DEMO_U1")
        } else {
            addUniqueConstraint(columnNames: "ID,NAME", tableName: "HAP_GRID_DEMO_B", constraintName: "HAP_GRID_DEMO_U1")
        }
    }
}
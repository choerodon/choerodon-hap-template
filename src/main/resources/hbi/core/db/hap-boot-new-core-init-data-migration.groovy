package hbi.core.db
import com.hand.hap.db.excel.ExcelDataLoader
import com.hand.hap.liquibase.MigrationHelper

databaseChangeLog(logicalFilePath: "hap-boot-new-core-init-data-migration.groovy") {

    //Milestone , excel data, runAlways=true
    changeSet(author: "jessen", id: "20181102-init-data-xlsx", runAlways: "true") {
        customChange(class: ExcelDataLoader.class.name) {
            param(name: "filePath", value: MigrationHelper.getInstance().dataPath("hbi/core/db/data/hap-boot-new-core-init-data.xlsx"))
        }
    }
}

package hbi.core.db
import com.hand.hap.db.excel.ExcelDataLoader
import com.hand.hap.liquibase.MigrationHelper

databaseChangeLog(logicalFilePath: "hbi-core-init-data-migration.groovy") {

    changeSet(author: "jessen", id: "20181102-init-data-xlsx", runAlways: "true") {
        customChange(class: ExcelDataLoader.class.name) {
            param(name: "filePath", value: MigrationHelper.getInstance().dataPath("hbi.core".replace(".", "/")+"/db/data/hbi-core-init-data.xlsx"))
        }
    }
}

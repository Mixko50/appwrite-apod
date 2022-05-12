const config = require("./config");
const { JOB_SCHEDULE } = config;
const cron = require("node-cron");
const { createDocment } = require("./create_document");

cron.schedule(JOB_SCHEDULE, () => {
    createDocment();
    console.log("Add document successfully");
});

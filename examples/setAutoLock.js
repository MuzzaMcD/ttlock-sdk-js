'use strict';

const { TTLockClient, sleep, PassageModeType } = require('../dist');
const settingsFile = "lockData.json";
require('log-timestamp')(function() { return new Date().toLocaleTimeString()+" | " });

async function doStuff() {
  let lockData = await require("./common/loadData")(settingsFile);
  let options = require("./common/options")(lockData);

  const client = new TTLockClient(options);
  await client.prepareBTService();
  client.startScanLock();
  console.log("Scan started");
  client.on("foundLock", async (lock) => {
    console.log();

    if (lock.isInitialized() && lock.isPaired()) {
      await lock.connect();
      console.log();
      console.log("Trying to SET auto-lock TIME 240 ...");
      const result = await lock.setAutoLockTime(240);
      console.log("Result:", result);

      await lock.disconnect();
      console.log("###");

      process.exit(0);
    }
  });
}

doStuff();
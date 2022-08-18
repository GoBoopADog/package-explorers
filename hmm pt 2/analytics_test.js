const fs = require("fs");
const readline = require("readline");

readline
  .createInterface({
    input: fs.createReadStream(
      "../data/package_discord/activity/analytics/events-2021-00000-of-00001.json"
    )
  })
  .on("line", line => {
    const event = JSON.parse(line);
    if (event.event_type === "af_dm_visited") console.log(event);
  });
console.log("Done!");
"forever --no-warnings --minUptime 1000 --spinSleepTime 1000 bun run Log.js";
"forever --minUptime 1000 --spinSleepTime 1000 bun run --no-warnings Log.js";
"bun run --no-warnings forever --minUptime 1000 --spinSleepTime 1000 Log.js";
var Path_To_Static_FFmpeg = require("ffmpeg-static");
console.log(Path_To_Static_FFmpeg);

const { exec } = require("child_process");
exec("ffmpeg", (error, stdout, stderr) => {
if (error) {
console.error(`exec error: ${error}`);
return;
}
console.log(`stdout: No. of directories = ${stdout}`);
if (stderr != "") console.error(`stderr: ${stderr}`);
});

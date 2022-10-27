var Path_To_Static_FFmpeg = require("ffmpeg-static");
console.log(Path_To_Static_FFmpeg);
const { exec } = require("child_process");
exec(Path_To_Static_FFmpeg + " -i Hug.gif -pix_fmt yuv420p -c:v libx264 -movflags +faststart -filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2' Hug.mp4", (error, stdout, stderr) => {
if (error) {
console.error(`exec error: ${error}`);
return;
}
console.log(`stdout: No. of directories = ${stdout}`);
if (stderr != "") console.error(`stderr: ${stderr}`);
});

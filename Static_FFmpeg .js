var Path_To_Static_FFmpeg = require("ffmpeg-static");
console.log(Path_To_Static_FFmpeg);
const { exec } = require("child_process");
exec("ffmpeg -i bite_0q507e8l3p2.gif Bite.mp4", (error, stdout, stderr) => {
if (error) {
console.error(`exec error: ${error}`);
return;
}
console.log(`stdout: No. of directories = ${stdout}`);
if (stderr != "") console.error(`stderr: ${stderr}`);
});

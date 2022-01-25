try {
  const spawn = require(`child_process`).spawn;
  const pythonProcess = spawn(`python3`, [`py.py`]);
  pythonProcess.stdout.on(`data`, (data) => {
    mystr = data.toString();
    myjson = JSON.parse(mystr);
    console.log(`Json is : ${mystr}`);
    console.log(myjson.Data);
  });
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}

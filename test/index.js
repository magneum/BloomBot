setInterval(async () => {
  var _Type = [
    "🎭designer",
    "🌏inventor",
    "🎨creator",
    "🎉founder",
    "🐞innovator",
    "🏗️builder",
    "🖊️author",
    "💡maker",
  ];
  var __Feeling = _Type[Math.floor(Math.random() * _Type.length)];
  console.log("Feeling: " + __Feeling + "  :vlkyre by magneum");
}, 1000);

const _FILTERS = [
  {
    bassboost: "-af 'bass=g=10,dynaudnorm=f=150'",
    echo: "-af 'aecho=0.8:0.9:1000:0.3'",
    flanger: "-af 'flanger'",
    nightcore: "-af 'aresample=48000,asetrate=48000*1.25'",
    panning: "-af 'apulsator=hz=0.08'",
    phaser: "-af 'aphaser=in_gain=0.4'",
    reverse: "-filter_complex 'areverse'",
    slow: "-af 'atempo=0.8'",
    speed: "-af 'atempo=2'",
    subboost: "-af 'asubboost'",
    superslow: "-af 'atempo=0.5'",
    superspeed: "-af 'atempo=3'",
    surround: "-af 'surround'",
    vaporwave: "-af'aresample=48000,asetrate=48000*0.8'",
    vibrato: "-af 'vibrato=f=6.5'",
  },
];

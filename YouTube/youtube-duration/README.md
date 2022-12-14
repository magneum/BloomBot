## youtube-duration

Format video duration from Youtube Api V3

## How to Use

    npm i youtube-duration


**Format Duration**

    const ytDuration = require('youtube-duration')
    ytDuration.format('PT3M11S') // 3:11
    ytDuration.format('P1DT1M27S') // 24:01:27

**Convert to Second**

    const ytDuration = require('youtube-duration')
    ytDuration.toSecond('PT3M11S') // 191
    ytDuration.toSecond('P1DT1M27S') // 1527

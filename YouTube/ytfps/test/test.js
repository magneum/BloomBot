const ytfps = require('../out/index');
const fs = require('fs');
const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;

const privatePlaylist = 'PLXJzeXpFb-pA-qXwgH2JdpYIx8lg8y4FW';
const top500Playlist = 'PLAbeRqyTx1rIGWY13HgPyh0VF0LdoTQFp';
const myTestList = 'PLXJzeXpFb-pDFQSy6EK7JEFRM1b8I1TTW';
const prophecyTestList = 'OLAK5uy_mPFpBY7OwJ9mFvKxWKzSDJUXNKY9YXjOA';

const playlistResult = JSON.parse(fs.readFileSync('test/misc/playlistOutput.json'));
const albumResult = JSON.parse(fs.readFileSync('test/misc/albumOutput.json'));

describe("ytfps", function() {
    this.timeout(30000);
    this.slow(99999999);

    it('should return proper results for playlists', async () => {
        let playlist = await ytfps(myTestList);
        for(let prop in playlistResult)
            expect(playlist[prop]).to.deep.eq(playlistResult[prop]);
    });

    it('should return proper results for albums', async () => {
        let playlist = await ytfps(prophecyTestList);
        for(let prop in albumResult)
            expect(playlist[prop]).to.deep.eq(albumResult[prop]);
    });

    it('should scrap >200 videos', async () => {
        expect((await ytfps(top500Playlist)).videos.length).to.be.gt(200);
    });

    it('should throw private playlist error', async () => {
        await expect(ytfps(privatePlaylist)).to.be.rejectedWith('This playlist is private');
    });

    it("should return 12 results", async () => {
        let res = await ytfps(top500Playlist, { limit: 12 });
        expect(res.videos.length).to.be.equal(12);
    });

    it("should return 232 results", async () => {
        let res = await ytfps(top500Playlist, { limit: 232 });
        expect(res.videos.length).to.be.equal(232);
    });
});

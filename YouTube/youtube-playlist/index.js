'use strict';

const got = require('got');
const cheerio = require('cheerio');

const url = 'https://youtube.com/watch?v=';

const tag = {
	name: 'data-title',
	url: 'data-video-id',
	id: 'data-video-id'
};

const splitCurrentPlay = str => {
	return str.indexOf('watch') === -1 ? `${str}&disable_polymer=1` : `https://www.youtube.com/playlist?list=${str.split('&list=')[1].split('&t=')[0]}&disable_polymer=1`;
};

const isPrivateVideo = tr => {
	const isOwnerFieldExist = Boolean(cheerio('.pl-video-owner', tr).length);
	return !isOwnerFieldExist;
};

module.exports = (data, opt) => {
	return got(splitCurrentPlay(data)).then(res => {
		const $ = cheerio.load(res.body);
		const thumb = $('tr');
		const arr = {
			name: $('.pl-header-title').text().trim(),
			playlist: []
		};

		if (!opt) {
			opt = Object.keys(tag);
		}

		const prefixUrl = (holder, marks) => holder === 'url' ? `${url}${marks}` : marks;
		const getDuration = el => {
			const raw = $(el).find('.timestamp').text().split(':');
			return (parseInt(raw[0], 10) * 60) + parseInt(raw[1], 10);
		};

		const multipleDetails = Array.isArray(opt);

		arr.playlist = thumb.map((index, el) => {
			if (multipleDetails) {
				return opt.reduce((prev, holder) => {
					prev[holder] = prefixUrl(holder, holder === 'duration' ? getDuration(el) : el.attribs[tag[holder]]);
					return prev;
				}, {
					isPrivate: isPrivateVideo(el)
				});
			}
			if (opt === 'duration') {
				return getDuration(el);
			}
			return prefixUrl(opt, el.attribs[tag[opt]]);
		}).get();

		return {
			data: arr
		};
	});
};

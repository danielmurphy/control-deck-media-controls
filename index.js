const robot = require('robotjs');
const path = require('path');

class ControlDeckMediaControls {
	constructor(streamDeck, buttonId, options) {
		let key = '';
		let icon = '';

		switch (options.type) {
		case 'play/pause':
			key = 'audio_play';
			icon = 'play.png';
			break;
		case 'volume-up':
			key = 'audio_vol_up';
			icon = 'volume_up.png';
			break;
		case 'volume-down':
			key = 'audio_vol_down';
			icon = 'volume_down.png';
			break;
		case 'mute':
			key = 'audio_mute';
			icon = 'mute.png';
			break;
		}

		streamDeck.fillImageFromFile(
			buttonId,
			path.resolve(__dirname, 'icons/' + icon)
		);

		streamDeck.on('up', keyIndex => {
			if (keyIndex === buttonId) {
				console.log(`pressing ${key}`);
				robot.keyTap(key);
			}
		});
	}
}

module.exports = ControlDeckMediaControls;

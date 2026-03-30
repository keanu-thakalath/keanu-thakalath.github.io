export default {
	id: 4,
	title: 'Efficiency and Melody',
	levelFocus: 'Level 2 open quotient + intonation',
	overview:
		'This week adds softness control (open quotient) and melodic phrasing to reduce pressed quality and monotone delivery.',
	outcomes: [
		'Shift between whisper, soft voice, and normal voice smoothly.',
		'Use expressive pitch movement without sounding forced.',
		'Maintain brightness while softening vocal fold collision.'
	],
	lessons: [
		{
			id: 'open-quotient',
			title: 'Open Quotient and Softness Control',
			difficulty: 'easy',
			duration: '20-25 min/day',
			summary: 'Develop lighter, less pressed phonation with control over breathiness and clarity.',
			sections: [
				{
					heading: 'Breathe a Sigh of Relief',
					body: [
						'Go ahead and breathe a sigh of relief, because it is time for something a little easier! Feminine voices generally sound softer and more breathy than masculine voices. Marilyn Monroe is an iconic example of this, as you can hear in this video (https://youtu.be/ikUjhv4iT58).',
						'When you try to speak in the upper range of your modal register without going into a falsetto, the natural tendency is to strain to reach those higher notes, which makes your voice sound harder, not softer, and not particularly feminine. This is because you put a lot of compression on your vocal folds, squeezing them together more tightly. You want to learn to use less compression for a softer sound, where your vocal folds stay open more (open quotient) while vibrating.',
						'With high compression (closed quotient), adding breathiness will just result in a strained sound like Ash Ketchum from Pokemon, as in this video (https://youtu.be/s-0DuYcWeBE).'
					]
				},
				{
					heading: 'Learning to Control Compression',
					body: [
						'To learn to control the compression in your voice, start by watching this video (https://youtu.be/J9K74QEzntA?t=240) and trying the "ah-ha" exercise and the vowel slides.',
						'Then download the Android app Spectroid (https://play.google.com/store/apps/details?id=org.intoorbit.spectrum&hl=en_US) (or Spectrogram Pro (https://apps.apple.com/us/app/spectrogram-pro-with-super-smooth-60hz-update/id415301721) on iOS), and in the audio settings, change the Desired transform interval to 10 ms (100 Hz) and check the box to Stay awake in the display settings.'
					]
				},
				{
					heading: 'Using the Spectrogram to See Your Open Quotient',
					body: [
						'With the app running, start by saying "ahh" for a few seconds in your normal speaking voice. In the scrolling display, you should see a bunch of bright yellow lines showing up against the purple and pink background noise. Then whisper "ahh" for a few seconds, just with your breath. You should see some faint pink smudges, but no yellow lines.',
						'Now, heave a big, breathy sigh while saying "ahh..." in a soft, relaxed voice. Ideally, you will see faint yellow lines melding into a background of pink smudges. This is what it looks like when your voice has a high open quotient. It is somewhere in between a normal voice and a whisper.'
					]
				},
				{
					heading: 'Sliding Between Whisper and Voice',
					body: [
						'Your main exercise is to slide between a whisper and your normal speaking voice. Start with one long, whispered "ahh" that you gradually turn into a spoken "ahh" and then back to a whisper, just by changing the compression. Do this with the Spectroid app running, so you can see the change as well as hear it.',
						'For a bit more of a challenge, try smoothly changing from a whisper, to a soft voice, to a normal voice while speaking or reading out loud. You can also play with this during your daily speaking practice. See if you can make your voice a little softer, or really breathy, or change from one extreme to another while still maintaining the feminine aspects of pitch and resonance that you have been working on.'
					]
				}
			],
			practice: [
				'10 minutes whisper-soft-normal slides.',
				'3-5 minutes straw phonation cooldown.',
				'5 minutes sentence drills at three softness levels.'
			],
			homework: [
				{
					id: 'slides',
					text: 'Complete daily softness transition drills.',
					type: 'check'
				},
				{
					id: 'sovt',
					text: 'Add SOVT cooldown after intense sessions.',
					type: 'check'
				},
				{
					id: 'symptom-check',
					text: 'Track hoarseness/fatigue and adjust load.',
					type: 'check'
				}
			],
			workflow: [
				{
					id: 'slides',
					type: 'timer',
					text: 'Whisper-soft-normal slides.',
					timerSeconds: 600,
					detail:
						'Start with a long whispered "ahh" and gradually turn it into a spoken "ahh," then back to a whisper, just by changing compression. Use the Spectroid app (https://play.google.com/store/apps/details?id=org.intoorbit.spectrum&hl=en_US) to watch the yellow lines appear and fade as you slide between whisper and voice. Watch this video (https://youtu.be/J9K74QEzntA?t=240) for the "ah-ha" exercise and vowel slides.'
				},
				{
					id: 'sentence-drills',
					type: 'timer',
					text: 'Sentence drills at three softness levels.',
					timerSeconds: 300,
					detail:
						'Read a sentence in a whisper, then in a soft breathy voice, then in your normal speaking voice. Try to smoothly change between the three levels while speaking or reading out loud, maintaining your feminine pitch and resonance throughout.'
				},
				{
					id: 'sovt-cooldown',
					type: 'timer',
					text: 'Straw phonation cooldown.',
					timerSeconds: 240,
					detail:
						'Use straw phonation or lip trills to cool down after intense practice. This reduces phonatory impact stress and helps your voice recover for the next session.'
				},
				{
					id: 'symptom-check',
					type: 'text',
					text: 'Track hoarseness or fatigue and note any adjustments.',
					prompt: 'Any hoarseness, fatigue, or discomfort? What did you adjust?',
					detail:
						'Note any hoarseness, fatigue, or discomfort. If hoarseness accumulates, lower intensity and add more recovery time before the next session.'
				},
				{
					id: 'progress-check',
					type: 'recording',
					text: 'Record a progress clip and compare to last week.',
					detail:
						"Read your baseline script with your softest, most controlled voice. Listen back and compare to last week's clip.",
					compareWith: {
						lessonId: 'resonance-layering',
						dayIndex: 4,
						taskId: 'progress-check',
						slotId: 'default',
						label: 'Last week (Week 3)'
					}
				}
			],
			schedule: [
				['slides', 'sentence-drills', 'sovt-cooldown'],
				['slides', 'sovt-cooldown', 'symptom-check'],
				['slides', 'sentence-drills', 'sovt-cooldown', 'symptom-check', 'progress-check']
			]
		},
		{
			id: 'intonation',
			title: 'Intonation and Expressiveness',
			difficulty: 'medium',
			duration: '20-30 min/day',
			summary:
				'Increase pitch movement and stress patterns for a more dynamic conversational style.',
			sections: [
				{
					heading: 'Time to Start Imitating Voices',
					body: [
						'All right. It is time to start imitating some voices! Intonation is the rise and fall of pitch as you speak. Masculine voices tend to be very monotone, where the pitch changes very slightly and infrequently from word to word, and important words are spoken louder for emphasis.',
						'Feminine voices tend to vary a lot in pitch, across a wider range, and big pitch changes are used to draw attention to the important words. Oftentimes, every word is spoken at a different pitch than the one before, and sometimes the pitch will change multiple times within a single word!'
					]
				},
				{
					heading: 'The Disney Princess Model',
					body: [
						'The clearest example of this can be found in that great figurehead of exaggerated femininity, the Disney princess. Watch this video (https://youtu.be/O5zntdPGd00?t=223) for a virtuosic vocal tour through a diversity of Disney princess voices, and try closing your eyes and listening to the rise and fall of pitch in each one. You can even pull out your Vocal Pitch Monitor app and watch the pitch rise and fall on the screen!'
					]
				},
				{
					heading: 'Parroting Practice',
					body: [
						'Your main exercise is to spend some time every day trying to talk like a Disney princess, in addition to all your other exercises. Listen to this clip (https://soundcloud.com/princessvoiceover/about-princess-voice-over) with Vocal Pitch Monitor open, watching the pitch rise and fall, and pause every sentence to try parroting back what you just heard, with the same rise and fall in your pitch.',
						'Do not worry about sounding good, and do not worry about your larynx or resonance either. Just focus on the pitch, and go ahead and use your falsetto to go high if you can. It will sound fake and silly, and that is okay - enjoy it!'
					]
				},
				{
					heading: 'Lip Shape and Extra Resources',
					body: [
						'The only thing that you should try to do, other than match the pitch, is to smile while you speak, stretching your lips across your teeth, and make your mouth opening a little smaller, like you are saying "ooh" (just pretend you are a dainty princess). This will also brighten your resonance a tiny bit, and make your voice sound that much more feminine. Use this for your princess voice practice, but also for your resonance practice as well, tightening your lips in addition to raising your larynx and tongue.',
						'If you get bored of using that clip or just want to find something in your own accent, feel free to practice with other example voices, like in this video (https://youtu.be/G4pLz-_CImE). Or make up your own princess voice if you can - the sillier the better. Delight in the ridiculousness of it all, and just have fun with it!'
					]
				}
			],
			practice: [
				'10 minutes imitation/parroting.',
				'10 minutes marked-stress reading.',
				'Optional: 5 minutes spontaneous speech with intentional emphasis.'
			],
			homework: [
				{
					id: 'daily-imitate',
					text: 'Imitate one short clip each day.',
					type: 'check'
				},
				{
					id: 'stress-marking',
					text: 'Mark stress before at least 3 reading passages.',
					type: 'check'
				},
				{
					id: 'mono-vs-expressive',
					text: 'Record monotone vs expressive comparison.',
					type: 'check'
				}
			],
			workflow: [
				{
					id: 'imitation',
					type: 'timer',
					text: 'Imitation and parroting practice.',
					timerSeconds: 600,
					detail:
						'Listen to this princess voice clip (https://soundcloud.com/princessvoiceover/about-princess-voice-over) with Vocal Pitch Monitor open. Pause after each sentence and parrot it back, matching the rise and fall of pitch. Do not worry about resonance or sounding good - just focus on the pitch contour, and use falsetto if needed.'
				},
				{
					id: 'stress-reading',
					type: 'timer',
					text: 'Marked-stress reading practice.',
					timerSeconds: 600,
					detail:
						'Pick a passage, mark the words you want to emphasize, then read it aloud using big pitch changes on those words, like a Disney princess would. Smile while you speak and keep your mouth opening small, like you are saying "ooh." Watch this video (https://youtu.be/O5zntdPGd00?t=223) for inspiration.'
				},
				{
					id: 'spontaneous-speech',
					type: 'timer',
					text: 'Spontaneous speech with intentional emphasis.',
					timerSeconds: 300,
					detail:
						'Speak freely about anything, but keep the exaggerated Disney princess intonation going. If you want more variety, try imitating voices from this video (https://youtu.be/G4pLz-_CImE) or make up your own princess voice - the sillier the better!'
				},
				{
					id: 'mono-vs-expressive',
					type: 'recording',
					text: 'Record a monotone vs expressive comparison.',
					detail:
						'Read the same short passage twice: once in a flat, monotone delivery, and once with exaggerated princess-style intonation. Listen back and notice how much the pitch movement changes the perceived femininity.',
					slots: [
						{ id: 'monotone', label: 'Monotone delivery' },
						{ id: 'expressive', label: 'Expressive (princess-style)' }
					]
				}
			],
			schedule: [
				['imitation', 'stress-reading'],
				['imitation', 'stress-reading', 'spontaneous-speech'],
				['imitation', 'stress-reading'],
				['imitation', 'stress-reading', 'spontaneous-speech', 'mono-vs-expressive']
			]
		}
	]
};

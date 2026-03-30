export default {
	id: 2,
	title: 'Pitch and Register Control',
	levelFocus: 'Level 1 pitch work',
	overview:
		'This week isolates pitch targets and register stability so you can stay in range without flipping into unstable falsetto or pressing too hard.',
	outcomes: [
		'Find a sustainable speaking range for daily use.',
		'Track pitch with biofeedback without over-fixating on numbers.',
		'Maintain comfort and reduce strain while increasing consistency.'
	],
	lessons: [
		{
			id: 'pitch-fundamentals',
			title: 'Pitch Fundamentals and Register Stability',
			difficulty: 'medium',
			duration: '30 min/day',
			summary:
				'Use pitch feedback tools to improve range control while staying in comfortable phonation.',
			sections: [
				{
					heading: 'Pitch Is One Piece of the Puzzle',
					body: [
						'Keep doing your previous exercises every day, but when you are ready for something more, you can start working on pitch - how high or low your voice is. Pitch is just one of many elements, and not even the most important, but it is probably the most well-known difference between the average male and female voice.',
						'Aim for stable conversational pitch in the female range, not exaggerated highs that force strain. Resonance, articulation, and intonation are equally important, so treat pitch as one dial in a larger system.'
					]
				},
				{
					heading: 'Registers: Chest, Falsetto, and Mix',
					body: [
						'In addition to pitch, your voice locks into different registers at different points in your range, each with a different sound quality. Watch this video (https://youtu.be/CYEsGuldIQY) to hear the differences between chest voice, falsetto, and mix voice (which is technically part of your modal register, same as chest).',
						'Follow along with the warmups in this video (https://youtu.be/9-1Padxsmio?t=281), then try switching between registers a few times, both singing and speaking.',
						'You might find that you start in modal register in the male range but flip into falsetto to reach the female range. Or you might have to strain and shout to get that high. If either happens, go back down to the pitch where you can still speak comfortably in modal register and do not worry about going higher for now.'
					]
				},
				{
					heading: 'Using a Pitch Monitor',
					body: [
						'Download Vocal Pitch Monitor on Android (https://play.google.com/store/apps/details?id=com.tadaoyamaoka.vocalpitchmonitor&hl=en_US) or iOS (https://apps.apple.com/us/app/vocal-pitch-monitor/id842218231). In the settings, change the Scale to F Major and check the box to display frequency in Hz.',
						'With the app running, talk in your starting voice and see where your pitch falls naturally. A typical male speaking voice stays between F2 and F3 (marked by horizontal lines since we set the scale to F Major). Now try talking higher until your voice is in the female range, around F3 and above. Do not go higher than F4 though, or you will sound like a cartoon character.',
						'Observe trends across days instead of chasing perfect values every sentence. If your voice flips or tightens, lower the target slightly and rebuild consistency in modal production.'
					]
				},
				{
					heading: 'Daily Speaking Practice',
					body: [
						'Set aside some time every day - say half an hour - to warm up with the register video above and then practice speaking in the female range (between F3 and F4), or as close as you can get without straining or going into falsetto. You can say random things, recite lines from memory, or read a book or comments out loud while keeping an eye on Vocal Pitch Monitor.',
						'It might sound terrible, and that is okay. The important thing is to get used to speaking in that range. Drink water throughout and take a break if you feel your voice getting strained or hoarse.'
					]
				}
			],
			practice: [
				'Warmup, then 20 minutes monitored speaking practice.',
				'5 minutes register transitions at comfortable intensity.',
				'Record one short clip every other day for comparison.'
			],
			homework: [
				{
					id: 'monitoring',
					text: 'Complete monitored practice at least 5 days.',
					type: 'check'
				},
				{
					id: 'range-log',
					text: 'Log daily comfortable pitch range.',
					type: 'check'
				},
				{
					id: 'weekly-clip',
					text: 'Save one "best effort" clip this week.',
					type: 'check'
				}
			],
			workflow: [
				{
					id: 'monitored-speaking',
					type: 'timer',
					text: 'Warmup, then monitored speaking practice (20 minutes).',
					timerSeconds: 1200,
					detail:
						'Warm up with the register exercises in this video (https://youtu.be/9-1Padxsmio?t=281), then open Vocal Pitch Monitor and practice speaking between F3 and F4. Read aloud, talk spontaneously, or recite from memory - just keep an eye on the app and stay in range without straining.'
				},
				{
					id: 'register-transitions',
					type: 'timer',
					text: 'Register transitions at comfortable intensity.',
					timerSeconds: 300,
					detail:
						'Practice switching between chest voice and falsetto, both singing and speaking. Notice where your voice wants to flip and work on smoothing that transition. Stay at a comfortable intensity - do not push through strain.'
				},
				{
					id: 'range-log',
					type: 'text',
					text: 'Log your comfortable pitch range today.',
					prompt: 'What range felt stable? Any flipping or strain?',
					detail:
						'Note the highest pitch you could sustain in modal register without flipping into falsetto, and whether that range felt easier or harder than yesterday.'
				},
				{
					id: 'recording',
					type: 'recording',
					text: 'Record a short comparison clip.',
					detail:
						'Record a short clip of you speaking in your target range so you can compare it to your baseline and track how your pitch stability is improving over time.',
					compareWith: {
						lessonId: 'inspiration-baseline',
						dayIndex: 1,
						taskId: 'baseline-recording',
						slotId: 'reading',
						label: 'Your baseline (reading)'
					}
				},
				{
					id: 'weekly-clip',
					type: 'recording',
					text: 'Record your best effort clip from this week.',
					detail:
						'Record a clip where your pitch is most stable and natural-sounding in the F3-F4 range. This is your weekly progress snapshot.',
					compareWith: {
						lessonId: 'inspiration-baseline',
						dayIndex: 1,
						taskId: 'baseline-recording',
						slotId: 'reading',
						label: 'Your baseline (reading)'
					}
				}
			],
			schedule: [
				['monitored-speaking', 'register-transitions', 'range-log'],
				['monitored-speaking', 'recording'],
				['monitored-speaking', 'register-transitions', 'range-log'],
				['monitored-speaking', 'recording'],
				['monitored-speaking', 'register-transitions', 'range-log', 'weekly-clip']
			]
		}
	]
};

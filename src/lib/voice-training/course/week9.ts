export default {
	id: 9,
	title: 'Performance Transition',
	levelFocus: 'Level 4 performance (part 1)',
	overview:
		'This week shifts from private practice to controlled real interactions using graded exposure and launch routines.',
	outcomes: [
		'Improve ability to launch target voice without long warmups.',
		'Use graded social exposure to reduce anxiety.',
		'Keep target voice stable longer in live interaction.'
	],
	lessons: [
		{
			id: 'performance-prep',
			title: 'Performance Preparation and Launch Training',
			difficulty: 'hard',
			duration: '20-30 min/day + short live reps',
			summary: 'Build reliable start-up and transition into real conversational use.',
			sections: [
				{
					heading: 'From Practice to Performance',
					body: [
						'Eventually, there will come a time when you are pretty happy with your voice, and you want to be able to start using it in front of other people. It might not be perfect, but you feel compelled to tackle what may be the most challenging step of all: going from practice to performance.',
						'There are two parts to this. One is learning to launch into your feminine voice whenever you choose, even when you have not warmed up. And the other is getting over the performance anxiety of using your voice in front of other people - which is totally normal! You just have to take it one step at a time.'
					]
				},
				{
					heading: 'Bookending Your Day',
					body: [
						'To start with, you want to train your brain to experience your feminine voice as the default, not the exception. One way to do this is by bookending your day with your voice, by practicing a few mantra phrases in your feminine voice immediately after waking up, before using your voice for anything else, and then again as the last thing you do before going to sleep.',
						'The morning is often the hardest time to feminize your voice, so this will allow you to practice that worst-case scenario right away and prime the rest of your day with the voice you want. Also, whatever you practice just before sleeping will be given higher priority when your experiences are consolidated into long-term memory.'
					]
				},
				{
					heading: 'Alternating Voices and Stealth Mantras',
					body: [
						'Take some time every day to practice alternating between your masculine starting voice and your feminine voice. Read a book out loud and switch voices on every paragraph, or read reddit comment threads and use one voice for the original poster and another for the replies. If you tend to drift from your feminine voice into a more androgynous voice over time, you can also practice alternating between your feminine and androgynous voices to help differentiate them in your mind.',
						'To make it easier to shift into your feminine voice, you can start with a mantra phrase to help you lock in the sound. This is something you can even do in front of other people, if you whisper it or practice a stealth mantra phrase, like "ummm, let\'s see..." or "ummm, so..." You can use the "ummm" to find the pitch, sliding upward until you reach the right range, and then use the "let\'s see..." or "so..." to find your resonance. Sneaky!'
					]
				},
				{
					heading: 'The Exposure Ladder',
					body: [
						'First, find a supportive friend or two, and tell them that you would like their help in practicing your voice. If you do not feel comfortable asking anyone you know, you can try finding an anonymous friend on the TransVoice Discord (https://discord.gg/FAmXNEJ) or the Scinguistics Discord (https://discord.gg/RjatswF). Tell them that you would like to be able to call them up and have a conversation in your feminine voice, without having to explain yourself, and without them commenting on whether your voice is good or bad. You just need them to listen and be patient with you.',
						'Then, when you have warmed up by practicing your voice in private, call your friend and speak to them in your feminine voice. If all you can do is say a mantra phrase before lapsing into your starting voice, that is awesome! You have overcome the biggest hurdle. Next time you feel up for it, you can try speaking a little longer, whether you are just reading out loud, or having an entire conversation. And do not worry about whether your voice sounds perfect or not - you can work on that by yourself. Just focus on getting comfortable using your voice with another person.',
						'Once you feel comfortable calling your friend from the middle of a practice session, start challenging yourself a little more. Try meeting up with your friend in person and then, with your backs turned to each other, say a mantra phrase in your feminine voice. Then try doing it while facing each other. Eventually, you can work your way up to having an entire conversation in person, not only in private, but in a public place like a restaurant!'
					]
				}
			],
			practice: [
				'Morning/evening 3-minute activation.',
				'10 minutes alternating-voice paragraph drills.',
				'One short live interaction attempt.'
			],
			homework: [
				{
					id: 'bookend',
					text: 'Complete morning + evening activation daily.',
					type: 'check'
				},
				{
					id: 'alternating',
					text: 'Do alternating-voice reading every day.',
					type: 'check'
				},
				{
					id: 'live-rep',
					text: 'Complete one live target-voice interaction.',
					type: 'check'
				}
			],
			workflow: [
				{
					id: 'activation',
					type: 'timer',
					text: 'Morning/evening 3-minute activation drill.',
					timerSeconds: 180,
					detail:
						'Do this step twice daily: once immediately after waking up and once before going to sleep. Practice a few mantra phrases in your feminine voice each time. The morning is the hardest time, so this primes your day. Whatever you practice before sleeping gets higher priority in long-term memory consolidation.'
				},
				{
					id: 'alternating-voice',
					type: 'timer',
					text: 'Alternating-voice paragraph drills.',
					timerSeconds: 600,
					detail:
						'Read a book aloud and switch between your masculine and feminine voices on every paragraph, or use one voice for original posts and another for replies on a reddit thread. This builds intentional switching and reduces drift between voices.'
				},
				{
					id: 'live-rep',
					type: 'check',
					text: 'Complete one short live target-voice interaction.',
					detail:
						'Find a supportive friend, or an anonymous friend on the TransVoice Discord (https://discord.gg/FAmXNEJ) or Scinguistics Discord (https://discord.gg/RjatswF). Call them after warming up and speak in your feminine voice. Even a single mantra phrase counts - you have overcome the biggest hurdle just by starting.'
				},
				{
					id: 'progress-check',
					type: 'recording',
					text: 'Record a progress clip and compare to last week.',
					detail:
						"Read your baseline script in your feminine voice without warming up first. Compare to last week's clip to hear your incremental progress.",
					compareWith: {
						lessonId: 'polishing-feedback',
						dayIndex: 4,
						taskId: 'retakes',
						slotId: 'default',
						label: 'Last week (Week 8)'
					}
				}
			],
			schedule: [
				['activation', 'alternating-voice'],
				['activation', 'alternating-voice'],
				['activation', 'alternating-voice', 'live-rep'],
				['activation', 'alternating-voice'],
				['activation', 'alternating-voice', 'progress-check']
			]
		}
	]
};

export default {
	id: 8,
	title: 'Polishing and Ear Training',
	levelFocus: 'Level 4 polishing',
	overview:
		'This week is focused comparison work: targeted self-analysis, iterative retakes, and listening skill development.',
	outcomes: [
		'Perform structured self-analysis instead of vague self-critique.',
		'Prioritize changes by impact (pitch/resonance first).',
		'Build objective listening habits.'
	],
	lessons: [
		{
			id: 'polishing-feedback',
			title: 'Polishing Through Structured Feedback',
			difficulty: 'medium',
			duration: '25-35 min/day',
			summary:
				'Compare your recordings against references and iterate with specific adjustment goals.',
			sections: [
				{
					heading: 'Time to Polish Your Voice',
					body: [
						'Once you feel comfortable playing with the many possibilities of your voice, you can start honing in on the feminine voice that you actually want! It is time to polish your voice.',
						'Remember that voice clip you chose in the beginning as the female voice you would like to imitate? Hopefully you have been listening to it regularly this whole time, but if not, now is the time to start!'
					]
				},
				{
					heading: 'Reference Comparison: Record, Listen, Adjust',
					body: [
						'Find that clip and play back a sentence or two. Then use the recording step in your practice to record yourself saying the same sentence. Listen to the reference clip and then your own recording, and without judging it as good or bad, try going through each element of your voice and noticing where it is similar or different. How does the pitch compare? The resonance? The intonation? And so on.',
						'If an element is different, try playing around with it a few times and then record yourself again, doing your best to match the reference clip. Do that for each element. It is not going to be perfect in one pass, but it is the polishing process that counts. And of course, you do not have to sound exactly like your inspiration voice - it is just a beacon that can help you find your way to the voice you want.'
					]
				},
				{
					heading: 'Train Your Ear on r/transvoice',
					body: [
						'You might find that it is difficult to deconstruct the differences in a voice clip just by listening to it. But do not worry! It is a skill you can practice, just like anything else. And fortunately, there is a great way to practice it...',
						'Every day, people post voice clips on r/transvoice, looking for feedback. And you are going to train your ear by listening to those clips, analyzing them, and responding with your kind and honest feedback. First, create an account on reddit.com (https://reddit.com) if you have not already.',
						'Then go to r/transvoice and find a voice clip that someone has recently posted. Listen to the clip and think about pitch - does it sound like the pitch is in the male range, or the female range, or somewhere in between? Open up Vocal Pitch Monitor and play the clip again, and see where the pitch actually falls. Then listen again while focusing on the resonance, the timbre of the voice. Does it sound hollow and masculine, or bright and feminine, or more ambiguously androgynous? You can watch this video (https://youtu.be/21ZfGPp-Ves) for reference - where would you place the sound on the diagram?'
					]
				},
				{
					heading: 'Giving Detailed Feedback',
					body: [
						'Once you have established the pitch and resonance, listen again for the other elements of the voice. Listen for intonation - is it monotone or musical? Listen for open quotient - is the voice soft, or hard and strained? Listen for vocal twang - is there a bright, piercing edge, and is it too little or too much? How is the articulation? Does the resonance drop or sound fake on certain vowels or consonants? Is there too much nasal resonance? Would it sound better with a little pharyngeal constriction?',
						'Make note of all your observations in a comment on the post. You do not have to say whether the voice sounds good or bad - just describe what you hear, starting with pitch and resonance, and then any other details you notice. If you are not sure about something, you do not have to say anything about it. Be kind and honest, and the community as a whole will benefit.',
						'Your homework is to find a new voice clip on r/transvoice every day (ideally one with no comments yet, or very few) and leave a comment with your analysis and suggestions. If you do this daily, not only will you develop a very discerning ear over time, you will also help the community thrive!'
					]
				},
				{
					heading: 'Sharing Your Own Voice',
					body: [
						'Also, spend some time every day listening to and imitating your female voice reference, along with all your other exercises. Record and play back your attempts, and analyze them just like you analyze the clips on r/transvoice. You may find that a voice that seems too exaggerated in your head actually sounds naturally feminine in a recording - and to other people. Be kind to yourself, and trust the process. Polishing takes time.',
						'When you are ready to share a clip of your own voice with the world, create a free account on clyp.it (https://clyp.it) and record yourself speaking at least a few sentences in your feminine voice, and perhaps a mantra phrase or two. If you are up for it, record the same thing in your starting voice as well, for comparison. Make sure to set the clip to Public, then post the link on r/transvoice and ask for feedback!',
						'Regardless of what people say, the important thing is to craft a voice that you are happy with. And you are the only one who gets to decide what that means for you.'
					]
				}
			],
			practice: [
				'Reference-vs-self comparison each day.',
				'At least two targeted retakes per session.',
				'Short written review after each session.'
			],
			homework: [
				{
					id: 'daily-analysis',
					text: 'Complete one daily analysis + retake cycle.',
					type: 'check'
				},
				{
					id: 'feedback',
					text: 'Give one technical feedback response (optional).',
					type: 'check'
				},
				{
					id: 'weekly-review',
					text: 'Write weekly review: 2 wins + 1 focus area.',
					type: 'check'
				}
			],
			workflow: [
				{
					id: 'comparison',
					type: 'recording',
					text: 'Record yourself and compare to your reference voice.',
					detail:
						'Play back a sentence or two from your reference voice, then record yourself saying the same sentence. Listen back and compare element by element: pitch, resonance, intonation, softness, articulation. See this video (https://youtu.be/21ZfGPp-Ves) for a resonance reference diagram.'
				},
				{
					id: 'retakes',
					type: 'recording',
					text: 'Record at least two targeted retakes.',
					detail:
						'If an element differs from your reference, adjust it, re-record, and compare again. Change only one or two variables per retake so you can attribute improvement to a specific action. It will not be perfect in one pass - the polishing process is what counts.',
					compareWith: {
						lessonId: 'exploration-mantras',
						dayIndex: 4,
						taskId: 'progress-check',
						slotId: 'default',
						label: 'Last week (Week 7)'
					}
				},
				{
					id: 'session-review',
					type: 'text',
					text: 'Short written review after this session.',
					prompt: 'What improved? What to adjust in the next retake?',
					detail:
						'Also try analyzing a voice clip on r/transvoice today. Listen for pitch, resonance, intonation, open quotient, twang, articulation, and nasality. Leave a kind and honest comment describing what you hear.'
				},
				{
					id: 'community-feedback',
					type: 'check',
					text: 'Analyze a voice clip on r/transvoice.',
					detail:
						'Find a recent voice clip on r/transvoice (ideally one with few comments). Listen and analyze it element by element: pitch, resonance, intonation, open quotient, twang, articulation, nasality. Leave a kind, honest comment describing what you hear. This trains your ear to notice the same things in your own voice. See this video (https://youtu.be/21ZfGPp-Ves) for a resonance reference diagram.'
				},
				{
					id: 'weekly-review',
					type: 'text',
					text: 'Weekly review: 2 wins and 1 focus area.',
					prompt: 'List 2 things that improved this week and 1 bottleneck to address next.',
					detail:
						'When you are ready, create a free account on clyp.it (https://clyp.it) and record a few sentences in your feminine voice. Post the link on r/transvoice and ask for feedback. The important thing is to craft a voice that you are happy with.'
				}
			],
			schedule: [
				['comparison', 'retakes', 'session-review', 'community-feedback'],
				['comparison', 'retakes', 'community-feedback'],
				['comparison', 'retakes', 'session-review', 'community-feedback'],
				['comparison', 'retakes', 'community-feedback'],
				['comparison', 'retakes', 'session-review', 'community-feedback', 'weekly-review']
			]
		}
	]
};

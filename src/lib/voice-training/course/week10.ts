export default {
	id: 10,
	title: 'Real-World Carryover',
	levelFocus: 'Level 4 performance (part 2)',
	overview:
		'Final week focuses on durability in noisy/public settings and long-term maintenance with vocal health safeguards.',
	outcomes: [
		'Maintain intelligibility in noise without pressing.',
		'Use twang strategically for projection efficiency.',
		'Create a 30-day maintenance plan.'
	],
	lessons: [
		{
			id: 'public-carryover',
			title: 'Public Use, Durability, and Maintenance',
			difficulty: 'hard',
			duration: 'variable (2+ field sessions)',
			summary:
				'Transition target voice into everyday contexts while preserving long-term vocal health.',
			sections: [
				{
					heading: 'Speaking Over Noise Without Straining',
					body: [
						'When you are out in the real world, it is often difficult to be heard over all the background noise. The important thing is to use more vocal twang instead of straining, while keeping your voice soft with open quotient. Pressed loudness increases fatigue and instability, so lean on efficient clarity - light twang plus clear articulation - rather than shouting.',
						'You can practice this on your own by playing this video (https://youtu.be/jAg6tyC9Xxc) and trying to speak over it. Run short field sessions first, then extend duration as consistency improves.'
					]
				},
				{
					heading: 'Expanding Into Everyday Life',
					body: [
						'As you get more confident, you can start using your feminine voice more and more throughout your life - even while coughing and laughing, as in this video (https://youtu.be/_DP6KB5j2qQ) or this video (https://youtu.be/IP-mRByleSc). Love yourself, and enjoy the journey!',
						'If you need ongoing support, the TransVoice Discord (https://discord.gg/FAmXNEJ) and the Scinguistics Discord (https://discord.gg/RjatswF) are great communities where you can find practice partners, get feedback, and share your progress.'
					]
				},
				{
					heading: 'Vocal Health and Recovery',
					body: [
						'Hydration, voice rest when symptomatic, and avoiding extended misuse during hoarseness are essential. Drink water throughout your practice and daily life.',
						'If persistent hoarseness, pain, or vocal loss appears, reduce load and consider evaluation with a qualified voice clinician. Individualized support is recommended for recurring symptoms.'
					]
				},
				{
					heading: 'Your 30-Day Maintenance Plan',
					body: [
						'Define weekly minimums: warmup frequency, speaking reps, recording check-ins, and recovery days. Maintenance prevents regression. A good starting point is a short warmup most days, one or two longer practice sessions per week, a recording comparison once a week, and at least one rest day.',
						'Keep listening to your reference voice regularly, and keep analyzing clips on r/transvoice to maintain your ear. Regardless of what anyone else says, the important thing is to craft a voice that you are happy with. And you are the only one who gets to decide what that means for you.'
					]
				}
			],
			practice: [
				'Two public-context reps this week (5-15 min each).',
				'Post-session cooldown + symptom check each time.',
				'Weekly planning session for next 30 days.'
			],
			homework: [
				{
					id: 'public-reps',
					text: 'Complete 2 public practice sessions.',
					type: 'check'
				},
				{
					id: 'health-checklist',
					text: 'Complete vocal health checklist this week.',
					type: 'check'
				},
				{
					id: 'maintenance-plan',
					text: 'Write your 30-day maintenance plan.',
					type: 'check'
				}
			],
			workflow: [
				{
					id: 'health-checklist',
					type: 'check',
					text: 'Complete vocal health checklist.',
					detail:
						'Check in on hydration, any hoarseness or fatigue, and whether you need a recovery day. If persistent hoarseness, pain, or vocal loss appears, reduce load and consider evaluation with a qualified voice clinician.'
				},
				{
					id: 'public-rep',
					type: 'check',
					text: 'Complete a public-context practice session (5-15 minutes).',
					detail:
						'Use your feminine voice in a real-world setting. Use vocal twang for projection instead of straining. You can practice speaking over background noise with this video (https://youtu.be/jAg6tyC9Xxc). Try extending to coughing and laughing in voice, as in this video (https://youtu.be/_DP6KB5j2qQ) or this video (https://youtu.be/IP-mRByleSc).'
				},
				{
					id: 'cooldown-check',
					type: 'text',
					text: 'Post-session cooldown and symptom check.',
					prompt: 'How did it go? Any fatigue, strain, or voice breaks? What worked well?',
					detail:
						'Note what worked and what did not. If you need support or practice partners, check out the TransVoice Discord (https://discord.gg/FAmXNEJ) or the Scinguistics Discord (https://discord.gg/RjatswF).'
				},
				{
					id: 'maintenance-plan',
					type: 'text',
					text: 'Write your 30-day maintenance plan.',
					prompt:
						'Weekly minimums: warmup frequency, speaking reps, recording check-ins, recovery days.',
					detail:
						'Plan a short warmup most days, one or two longer practice sessions per week, a recording comparison once a week, and at least one rest day. Keep listening to your reference voice and analyzing clips on r/transvoice to maintain your ear.'
				},
				{
					id: 'final-recording',
					type: 'recording',
					text: 'Record your final progress clip and compare to your baseline.',
					detail:
						'Read the same baseline script you recorded in Week 1. This is your before-and-after. Listen to both and note every element that has changed: pitch, resonance, intonation, softness, articulation, twang, and throat closure.',
					compareWith: {
						lessonId: 'inspiration-baseline',
						dayIndex: 1,
						taskId: 'baseline-recording',
						slotId: 'reading',
						label: 'Your baseline (reading)'
					},
					slots: [
						{ id: 'intro', label: 'Casual self-introduction' },
						{ id: 'reading', label: 'Reading paragraph' },
						{ id: 'spontaneous', label: 'Spontaneous speech' }
					]
				}
			],
			schedule: [
				['health-checklist'],
				['public-rep', 'cooldown-check'],
				['public-rep', 'cooldown-check'],
				['maintenance-plan', 'final-recording']
			]
		}
	]
};

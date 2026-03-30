export default {
	id: 1,
	title: 'Foundations and Setup',
	levelFocus: 'Level 1 foundations',
	overview:
		'This week builds your baseline: choosing a target reference voice, creating a recording habit, and learning the first physical control (larynx height) without strain.',
	outcomes: [
		'Choose one or two realistic voice references and define target qualities.',
		'Create a daily listening and recording baseline routine.',
		'Develop first-pass larynx control with low tension.'
	],
	lessons: [
		{
			id: 'inspiration-baseline',
			title: 'Inspiration and Baseline',
			difficulty: 'easy',
			duration: '30-40 min + daily listening',
			summary:
				'Pick reference voices and establish measurable starting data before intensive training.',
			sections: [
				{
					heading: 'Welcome to Voice Feminization',
					body: [
						'In this first lesson you will orient yourself to the voice feminization process, pick a reference voice to guide your training, and record your starting baseline so you can measure real progress over time.',
						'Start by watching this quick overview of voice feminization (https://youtu.be/dZKzuVfUv3E). If you want to understand the acoustic theory behind why these techniques work, this deeper dive is a great companion (https://youtu.be/ynFqjE2AEGk). Then watch this anatomy breakdown (https://youtu.be/xVAVi11kzbM?t=133) to see the vocal structures you will be learning to control.',
						'To hear what is possible, listen to this demo of the eight core elements combined (https://drive.google.com/file/d/1qJe6GwCVQkoGO8Cc1WCusTsTG_EIMdB4/view), and then hear each element isolated (https://drive.google.com/file/d/1YlXaj-P0rmaBWFdeX7Ffwi8kC4vxPtiO/view). These clips show how separate skills layer together into a convincing voice.'
					]
				},
				{
					heading: 'Choosing a Reference Voice',
					body: [
						'Voice training improves much faster when you imitate a concrete target rather than chasing a vague idea of "feminine." Your job now is to find a recording of a female speaking voice that you would like to be able to imitate - something that feels pleasant, relatable, and achievable.',
						'It does not have to be the one perfect, ultimate voice. Just pick one or two examples that sound good to you. Think of female actresses, characters, YouTubers, or podcast hosts you enjoy. If you need a starting point, search for "female youtubers" or "female podcast hosts" for ideas.',
						'For a concrete example, here is a podcast interview with Keon Saghari that works well as a reference (https://drive.google.com/open?id=1pIUvhv59np_tDRK7w0s75IQ3ByIoG6bs). Feel free to use that if you cannot decide on one right now.',
						'Once you have your reference, start listening to it a little bit every day. This helps you internalize the sounds and speech patterns of the voice you like. And stay on the lookout - if you find a voice you like better later, switch to that one instead.'
					]
				},
				{
					heading: 'Recording Your Baseline',
					body: [
						'Your baseline recording is not for judging yourself - it is your calibration point. You will compare later clips against this to track real progress, so it is important to capture it before any intensive training begins.',
						'Record three short samples: a casual self-introduction, a reading of a set paragraph, and a minute of spontaneous speech. Keep the same script each week so comparisons are valid.',
						'After recording, document three target attributes you want to work toward, such as "brighter resonance," "softer attack," or "more melodic intonation." These give your listening practice direction.'
					]
				}
			],
			practice: [
				'Daily: 10-15 minutes listening to your primary reference.',
				'3x this week: record and replay your baseline script.',
				'After playback: write one thing that matched your target and one thing to improve.'
			],
			homework: [
				{
					id: 'collect-references',
					text: 'Save links to 1-2 reference voices you will imitate.',
					type: 'links'
				},
				{
					id: 'baseline-clip',
					text: 'Record and label your Week 1 baseline clip.',
					type: 'check'
				},
				{
					id: 'daily-listening',
					text: 'Complete listening practice at least 5 days this week.',
					type: 'check'
				}
			],
			workflow: [
				{
					id: 'collect-references',
					type: 'links',
					text: 'Save links to 1-2 reference voices you will imitate.',
					detail:
						'Pick a female speaking voice you find pleasant and relatable - an actress, YouTuber, or podcast host. The Keon Saghari podcast interview (https://drive.google.com/open?id=1pIUvhv59np_tDRK7w0s75IQ3ByIoG6bs) is a solid default if you need one.'
				},
				{
					id: 'daily-listening',
					type: 'timer',
					text: 'Listen to your primary reference voice for 10-15 minutes.',
					timerSeconds: 600,
					detail:
						'Put on your reference voice and pay attention to pitch patterns, rhythm, and tone quality. Daily listening helps you internalize the target so your ear guides your practice.'
				},
				{
					id: 'baseline-recording',
					type: 'recording',
					text: 'Record your baseline script (casual intro, reading paragraph, spontaneous speech).',
					detail:
						'Record three clips in your current voice: a casual self-introduction, a reading of a set paragraph, and about a minute of spontaneous speech. Use the same script each week so you can compare directly.',
					slots: [
						{ id: 'intro', label: 'Casual self-introduction' },
						{ id: 'reading', label: 'Reading paragraph' },
						{ id: 'spontaneous', label: 'Spontaneous speech' }
					]
				},
				{
					id: 'playback-reflection',
					type: 'text',
					text: 'Write one thing that matched your target and one thing to improve.',
					prompt: 'What matched your target voice? What still needs work?',
					detail:
						'Listen back to your baseline and compare it to your reference voice. Note one quality that already matches and one specific thing you want to change first.'
				}
			],
			schedule: [
				['collect-references', 'daily-listening'],
				['daily-listening', 'baseline-recording', 'playback-reflection'],
				['daily-listening']
			]
		},
		{
			id: 'vocal-tract-length',
			title: 'Vocal Tract Length and Larynx Control',
			difficulty: 'hard',
			duration: '20-30 min/day',
			summary:
				'Build controllable larynx elevation for brighter resonance while minimizing neck and jaw tension.',
			sections: [
				{
					heading: 'Why Larynx Control Comes First',
					body: [
						'Your next goal is to strengthen and learn to control the muscles that raise your larynx (voice box). Raising the larynx shortens the length of your vocal tract - from larynx to lips - to match the proportions of a typical female vocal tract. This is one of the biggest cues that listeners perceive as more feminine.',
						'Building these muscles takes time, so we start here and let them develop in the background while you work on other skills in parallel.'
					]
				},
				{
					heading: 'Swallow-and-Hold and Big Dog, Small Dog',
					body: [
						"Watch this video (https://youtu.be/aWWevU4A5mU) and try the swallow-and-hold exercise. Touch your larynx (Adam's apple) lightly with your finger, then yawn and feel it move down, then swallow and feel it move up.",
						'Once you have felt this a few times, watch this video (https://youtu.be/mx4dPWKVt9o) and try the "big dog, small dog" exercise. If the small dog is tricky, start by yawning to bring the larynx down, then begin to swallow to bring it up, then stick your tongue out like a panting dog and say "ahh" in a whisper - this makes sure you are not closing off your throat.'
					]
				},
				{
					heading: 'The Whisper Siren',
					body: [
						'Watch this video (https://youtu.be/F6Noi2qERus) and try the whisper siren exercise. You want to smoothly slide from a big dog "uhh" to a small dog "ehh" as your larynx glides upward. Place a finger or two lightly on your throat to feel your larynx move up and down.',
						'Practice the whisper siren for a few minutes whenever you remember throughout the day - say, whenever you go to the bathroom. It is almost silent, so you can do it anywhere. Hold your muscles in place at the top (the high end of the siren, the small dog position) to build strength.',
						'Control matters more than force. Eventually you want to lift your larynx easily, without straining the muscles in your jaw and neck. As you get more comfortable, try to relax your neck a little more each time, until you can do it without tension.'
					]
				},
				{
					heading: 'Vocal Health and Recovery',
					body: [
						'Hydration and recovery are non-negotiable. Drink water frequently and avoid extended strain when you feel hoarse.',
						'Stop and rest if pain appears. Mild fatigue is normal when building new muscles; pain and persistent hoarseness are signs to back off and recover.'
					]
				}
			],
			practice: [
				'5 short siren sets spaced through the day (1-2 minutes each).',
				'Track perceived tension before and after each set (0-10).',
				'End sessions with 2 minutes of relaxed breathing and yawn-sigh release.'
			],
			homework: [
				{
					id: 'siren-sets',
					text: 'Complete at least 5 whisper-siren sets daily.',
					type: 'check'
				},
				{
					id: 'tension-log',
					text: 'Log neck/jaw tension for each practice day.',
					type: 'check'
				},
				{
					id: 'cooldown',
					text: 'Add cooldown to every session this week.',
					type: 'check'
				}
			],
			workflow: [
				{
					id: 'siren-sets',
					type: 'timer',
					text: 'Complete a set of whisper sirens (1-2 minutes).',
					timerSeconds: 120,
					detail:
						'Smoothly slide from a big dog "uhh" to a small dog "ehh" in a whisper, feeling your larynx rise with a finger on your throat. Hold briefly at the top, then release. This is one of five daily sets -- do four more throughout the day whenever you have a private moment (they are almost silent). See the whisper siren video (https://youtu.be/F6Noi2qERus) for a demonstration.'
				},
				{
					id: 'tension-log',
					type: 'text',
					text: 'Log your neck/jaw tension before and after this session.',
					prompt: 'Rate tension 0-10 before and after. Any specific areas of tightness?',
					detail:
						'Notice whether tension is showing up in your jaw, the sides of your neck, or under your chin. Over time, you want the larynx lift to feel easy and isolated from these surrounding muscles.'
				},
				{
					id: 'cooldown',
					type: 'timer',
					text: 'Relaxed breathing and yawn-sigh release.',
					timerSeconds: 120,
					detail:
						'Do a slow, relaxed yawn to bring your larynx all the way down, then sigh gently on the exhale. Repeat two or three times, letting your neck and jaw go completely slack between each one.'
				}
			],
			schedule: [
				['siren-sets', 'tension-log', 'cooldown'],
				['siren-sets', 'cooldown'],
				['siren-sets', 'tension-log', 'cooldown'],
				['siren-sets', 'cooldown']
			]
		}
	]
};

export const recurring = [
	{
		id: 'daily-maintenance',
		title: 'Daily Maintenance',
		startAfterLesson: 'vocal-tract-length',
		recurring: true,
		workflow: [
			{
				id: 'siren-maintenance',
				type: 'timer',
				text: 'Whisper siren maintenance (2 minutes).',
				timerSeconds: 120,
				detail:
					'Continue building larynx control with whisper sirens. Smoothly slide from a big dog "uhh" to a small dog "ehh" in a whisper, feeling your larynx rise. Hold briefly at the top, then release. Do additional sets throughout the day whenever you have a private moment. See the whisper siren video (https://youtu.be/F6Noi2qERus) for a refresher.'
			},
			{
				id: 'health-check',
				type: 'text',
				text: 'Quick vocal health check.',
				prompt: 'Any hoarseness, fatigue, strain, or pain? Rate 0-10.',
				detail:
					'Check in on your vocal health. Mild fatigue is normal when building new muscles; pain and persistent hoarseness are signs to back off and recover. Drink water and note any adjustments you need to make.'
			}
		],
		schedule: [['siren-maintenance', 'health-check']]
	}
];

export default {
	id: 5,
	title: 'Speech Detail Control',
	levelFocus: 'Level 3 articulation + twang',
	overview:
		'This week sharpens vowel/consonant shaping and introduces controlled twang for clarity in noisy environments.',
	outcomes: [
		'Use brighter articulation intentionally.',
		'Produce controlled twang without nasal substitution.',
		'Apply detail work to connected phrases.'
	],
	lessons: [
		{
			id: 'articulation',
			title: 'Articulation and Vowel/Consonant Brightness',
			difficulty: 'medium',
			duration: '25-35 min/day',
			summary: 'Refine oral shaping so resonance stays consistent across vowels and consonants.',
			sections: [
				{
					heading: 'Ready to Talk Like a Valley Girl?',
					body: [
						'Ready to refine your resonance with another round of voice impressions? Like, totally! So far, you have been working to brighten the timbre of your voice by raising your larynx and tongue to shrink the size of your vocal tract. But that does not always translate into sounding more feminine. If you want to sound feminine, you are going to have to get really specific with the way your tongue moves inside your mouth, to hone your oral resonance. That is, you will have to fine-tune the way you say all your vowels and consonants - your articulation.',
						'Fortunately, there is a fun way to do this! To put it simply, you want to talk like a Valley girl. Watch this video (https://youtu.be/XPv5vradEw8) to hear what a stereotypical Valley girl sounds like. Not only do they rival Disney princesses in terms of their extreme intonation, they also brighten their vowels to a much greater degree than you will hear in any other American accent (and if you have a British accent, try imitating the brighter vowels of an Australian accent instead, as in this video (https://youtu.be/mIBg-w6TNLE)).'
					]
				},
				{
					heading: 'Vowel Mods: Brightening Every Sound',
					body: [
						'Some vowels are naturally dark in resonance (like "uh") because your tongue is low and there is more space in your mouth. Some vowels are naturally bright (like "ee") because your tongue is high, leaving a small amount of space in the back of your mouth. What Valley girls do, and what you want to learn to do yourself, is to replace each vowel sound in your speech with a slightly brighter vowel. Your "oh" becomes "uh", your "uh" becomes "eh", your "eh" becomes "ih", your "ih" becomes "ee" and so on, as in this video (https://youtu.be/dZKzuVfUv3E?t=62). These are called vowel mods.',
						'For a Valley girl, "ummm..." becomes "emmm..." and "lah-eek, toh-duh-lee" becomes "lih-eek, teh-dih-lee" - try saying each one! Then see if you can say them with vowels that are in between the two extremes - that is the sweet spot. Whatever your accent, the key is to push your tongue up and forward and just use the front for articulation. It helps to close your jaw so your teeth are almost touching, to make it impossible for your tongue to drop too low.'
					]
				},
				{
					heading: 'Consonant Mods: Lighter Touches',
					body: [
						'There are also consonant mods, because consonants can be brighter or darker too. Consonants interrupt the flow of air from your lungs, by temporarily blocking your vocal tract with your lips, tongue, or soft palate. A heavier, more intense interruption will generally come across as more masculine, while a lighter, more subtle articulation will come across as more feminine.',
						'For example, if you explosively say "bah!" in disgust, it will sound more masculine. If you quickly say "bababababa" it will sound more feminine, especially if you tighten your lips together to minimize the movement. If you say "arr!" like a pirate, it will sound more masculine. If you stop your tongue halfway through saying that heavy "r" sound, it will sound more feminine, especially if you also raise the back of your tongue at the same time to shrink the space in your mouth. Watch this video (https://youtu.be/pgzIsnPjGbY?t=164) to hear the difference between a masculine and feminine "r" and "s" sound.'
					]
				},
				{
					heading: 'Practicing with Lumpy Space Princess and Beyond',
					body: [
						'Start with Lumpy Space Princess in this video (https://youtu.be/hnFcLGwgNSc?t=86). Pause after each line she says and try to repeat it with the same vowel mods - "to get it" becomes "teh get eht" in her accent. Then try it again with a whisper. Do the same with this video (https://www.youtube.com/watch?v=fETaoJBhY9g), this video (https://youtu.be/l2OhyLfrogI), and the Valley girl video above.',
						'Do not worry too much about pitch, but pay close attention to the sounds of each vowel and consonant. When you start to feel comfortable with these vowel and consonant mods, try incorporating them into your other voice exercises as well. You do not have to go to such an extreme that you sound like a Valley girl, of course, but play around with them to see how they change the sound!',
						'At the same time, focus on clenching your tongue (like "key") to brighten each vowel and consonant as much as possible, while keeping your lips tight and your jaw almost closed to minimize the space inside.'
					]
				}
			],
			practice: [
				'15 minutes targeted vowel/consonant drills.',
				'5-10 minutes phrase imitation.',
				'5 minutes free conversation recording.'
			],
			homework: [
				{
					id: 'artic-drills',
					text: 'Complete articulation drills at least 5 days.',
					type: 'check'
				},
				{
					id: 'word-list',
					text: 'Build and practice a 10-word challenge list.',
					type: 'check'
				},
				{
					id: 'carryover-record',
					text: 'Save one conversational carryover sample.',
					type: 'check'
				}
			],
			workflow: [
				{
					id: 'artic-drills',
					type: 'timer',
					text: 'Targeted vowel/consonant drills.',
					timerSeconds: 900,
					detail:
						'Practice replacing each vowel with a slightly brighter one: "oh" to "uh," "uh" to "eh," "eh" to "ih," "ih" to "ee." Close your jaw so your teeth are almost touching and push your tongue up and forward. Watch this video (https://youtu.be/dZKzuVfUv3E?t=62) for the vowel mod pattern, and this video (https://youtu.be/pgzIsnPjGbY?t=164) for lighter consonant articulation.'
				},
				{
					id: 'phrase-imitation',
					type: 'timer',
					text: 'Phrase imitation practice.',
					timerSeconds: 420,
					detail:
						'Imitate Lumpy Space Princess (https://youtu.be/hnFcLGwgNSc?t=86) - pause after each line and repeat with the same vowel mods. Then try the same with this video (https://www.youtube.com/watch?v=fETaoJBhY9g) and this video (https://youtu.be/l2OhyLfrogI). Try each line voiced, then whispered.'
				},
				{
					id: 'word-list',
					type: 'text',
					text: 'Build and practice a 10-word challenge list.',
					prompt: 'Which words lose your target resonance? List 10 to practice.',
					detail:
						'Identify words where your vowels or consonants slip back to a darker, more masculine sound. Practice each one with the Valley girl vowel mods, clenching your tongue like "key" and keeping your lips tight. See the Valley girl video (https://youtu.be/XPv5vradEw8) for reference.'
				},
				{
					id: 'carryover-record',
					type: 'recording',
					text: 'Record a conversational carryover sample.',
					detail:
						'Speak freely for a minute or two, incorporating the vowel and consonant mods you have been practicing. If your targets vanish in spontaneous speech, reduce the number of things you are tracking and reintroduce them one at a time.',
					compareWith: {
						lessonId: 'open-quotient',
						dayIndex: 2,
						taskId: 'progress-check',
						slotId: 'default',
						label: 'Last week (Week 4)'
					}
				}
			],
			schedule: [
				['artic-drills', 'phrase-imitation'],
				['artic-drills', 'word-list'],
				['artic-drills', 'phrase-imitation'],
				['artic-drills', 'word-list', 'carryover-record']
			]
		},
		{
			id: 'vocal-twang',
			title: 'Vocal Twang for Clarity and Projection',
			difficulty: 'easy',
			duration: '15-25 min/day',
			summary: 'Add adjustable vocal twang to improve clarity while avoiding excessive strain.',
			sections: [
				{
					heading: 'Piercing Brightness for Power and Clarity',
					body: [
						'Now, if you want to be heard above a lot of background noise, without relying on the booming strength of a masculine voice, you will need to add a piercing brightness that will give your voice more power and clarity while also making it more feminine at the same time.',
						'The secret is a singing technique known as vocal twang. It sounds almost like nasal resonance, where the sound goes through your nose, but it is not. Instead, vocal twang is created by squeezing what is known as the aryepiglottic sphincter (or AES), which is right at the top of your larynx, above the vocal folds. You can see and hear the difference dramatically in this video (https://youtu.be/ERAFQic5A-4), showing the throat of a female singer as she first hums (nasal resonance), then sings normally, then sings with a very pronounced twang.'
					]
				},
				{
					heading: 'Learning Twang Through Imitation',
					body: [
						'The best way to learn this is through imitation. Quack like a duck, cry like a newborn baby, or say "I AM A ROBOT" in your best robot voice. They may not be pretty, much less feminine, but all of these are great examples of vocal twang pushed to an extreme. And you want to learn the extreme and then dial it back from there - it is a lot easier that way.',
						'So take a moment to try a few quacks, to cry like a newborn, and talk like a robot. Then watch this video (https://youtu.be/1BLVrYKmwvc) and follow along with the singing exercise at the end.'
					]
				},
				{
					heading: 'Seeing Twang on the Spectrogram',
					body: [
						'Open up the Spectroid app, and say "uhh" in a relaxed voice. Notice where the yellow lines appear on the scrolling spectrograph. Then try saying "quack" like a duck or "I AM A ROBOT" in a robot voice - something with a lot of vocal twang. If you have done it correctly, you will see a bright yellow band of lines appear past the 1000 Hz mark. The more you constrict the AES, the brighter the yellow band will be and the more you will hear a harsh edge to your sound.',
						'Watch this video (https://youtu.be/xAvCrxaLRvI) for a great example of this, starting with a dark "uhh" and gradually raising the larynx, raising the tongue, and then adding the vocal twang for maximum brightness.'
					]
				},
				{
					heading: 'Twang Practice and the Nose-Pinch Test',
					body: [
						'With Spectroid running, try to imitate the video and say "uhh" in a relaxed voice and then gradually slide into a harsh, twangy "ehh" like a duck quacking, and back down to a relaxed voice again. Watch the spectrograph and try to get that yellow band as bright as possible when you add the vocal twang.',
						'Then pinch your nose shut too, so you do not accidentally cheat by using nasal resonance instead of twang! You should be able to do this just as easily with your nose pinched shut - otherwise you will end up sounding like Squidward, as in this video (https://youtu.be/E5BzhG_sKUw?t=43).',
						'Then try adding different degrees of twang to your speaking practice, to see how it feels and sounds. You could go all the way and sound like SpongeBob SquarePants, take it out completely like his friend Patrick, or add just a hint of it and sound, well, more feminine. See what you like!'
					]
				},
				{
					heading: 'Twang for Singing',
					body: [
						"Vocal twang is also really great for feminizing your singing, if you are into that. Skillful use of vocal twang can turn a weak falsetto into a powerful head voice, and increase your upper range by an octave or more. It is also the secret behind CeeLo Green's distinctive singing voice, combining a dark oral resonance with a lot of bright vocal twang and a bit of nasal resonance, as you can hear in this video (https://youtu.be/bKxodgpyGec). If you start there and then brighten your oral resonance with a raised larynx and tongue, you can sound like a female singer. Seriously."
					]
				}
			],
			practice: [
				'5-10 minutes twang glides.',
				'3-level twang sentence sets.',
				'Nose-pinch verification during drills.'
			],
			homework: [
				{
					id: 'twang-glides',
					text: 'Practice twang glides daily.',
					type: 'check'
				},
				{
					id: 'nose-check',
					text: 'Use nose-pinch checks in each session.',
					type: 'check'
				},
				{
					id: 'three-levels',
					text: 'Record none/light/strong twang comparison.',
					type: 'check'
				}
			],
			workflow: [
				{
					id: 'twang-glides',
					type: 'timer',
					text: 'Twang glides practice.',
					timerSeconds: 420,
					detail:
						'With Spectroid (https://play.google.com/store/apps/details?id=org.intoorbit.spectrum&hl=en_US) on Android or Spectrogram Pro (https://apps.apple.com/us/app/spectrogram-pro-with-super-smooth-60hz-update/id415301721) on iOS running, say "uhh" in a relaxed voice and gradually slide into a harsh, twangy "ehh" like a duck quacking, then back down. Watch for the bright yellow band past 1000 Hz. Try quacking, crying like a newborn, or saying "I AM A ROBOT" to find the extreme, then dial it back. Watch this video (https://youtu.be/1BLVrYKmwvc) for a guided exercise, and this video (https://youtu.be/xAvCrxaLRvI) to see the spectrogram in action.'
				},
				{
					id: 'sentence-sets',
					type: 'timer',
					text: '3-level twang sentence sets with nose-pinch checks.',
					timerSeconds: 300,
					detail:
						'Read a sentence with no twang, then light twang, then strong twang. Pinch your nose shut during each one - if the sound collapses, you are using nasal resonance instead of true AES twang. You should be able to do it just as easily with your nose pinched. See this video (https://youtu.be/ERAFQic5A-4) for the difference between nasal resonance and twang, and this video (https://youtu.be/E5BzhG_sKUw?t=43) for what to avoid.'
				},
				{
					id: 'three-levels',
					type: 'recording',
					text: 'Record a none/light/strong twang comparison.',
					detail:
						'Record yourself saying the same sentence at three twang levels: none (like Patrick), light (natural feminine), and strong (like SpongeBob). Listen back and note which level sounds most natural and feminine to your ear.',
					slots: [
						{ id: 'none', label: 'No twang (like Patrick)' },
						{ id: 'light', label: 'Light twang (natural feminine)' },
						{ id: 'strong', label: 'Strong twang (like SpongeBob)' }
					]
				}
			],
			schedule: [
				['twang-glides', 'sentence-sets'],
				['twang-glides'],
				['twang-glides', 'sentence-sets'],
				['twang-glides', 'sentence-sets', 'three-levels']
			]
		}
	]
};

export const course = {
  title: "Ruten",
  subtitle: "Weekly overviews, full lesson writeups, and trackable homework.",
  weeks: [
    {
      id: 1,
      title: "Foundations and Setup",
      levelFocus: "Level 1 foundations",
      overview:
        "This week builds your baseline: choosing a target reference voice, creating a recording habit, and learning the first physical control (larynx height) without strain.",
      outcomes: [
        "Choose one or two realistic voice references and define target qualities.",
        "Create a daily listening and recording baseline routine.",
        "Develop first-pass larynx control with low tension.",
      ],
      lessons: [
        {
          id: "inspiration-baseline",
          title: "Inspiration and Baseline",
          difficulty: "easy",
          duration: "30-40 min + daily listening",
          summary:
            "Pick reference voices and establish measurable starting data before intensive training.",
          sections: [
            {
              heading: "Welcome to Voice Feminization",
              body: [
                "In this first lesson you will orient yourself to the voice feminization process, pick a reference voice to guide your training, and record your starting baseline so you can measure real progress over time.",
                "Start by watching this quick overview of voice feminization (https://youtu.be/dZKzuVfUv3E). If you want to understand the acoustic theory behind why these techniques work, this deeper dive is a great companion (https://youtu.be/ynFqjE2AEGk). Then watch this anatomy breakdown (https://youtu.be/xVAVi11kzbM?t=133) to see the vocal structures you will be learning to control.",
                "To hear what is possible, listen to this demo of the eight core elements combined (https://drive.google.com/file/d/1qJe6GwCVQkoGO8Cc1WCusTsTG_EIMdB4/view), and then hear each element isolated (https://drive.google.com/file/d/1YlXaj-P0rmaBWFdeX7Ffwi8kC4vxPtiO/view). These clips show how separate skills layer together into a convincing voice.",
              ],
            },
            {
              heading: "Choosing a Reference Voice",
              body: [
                'Voice training improves much faster when you imitate a concrete target rather than chasing a vague idea of "feminine." Your job now is to find a recording of a female speaking voice that you would like to be able to imitate - something that feels pleasant, relatable, and achievable.',
                'It does not have to be the one perfect, ultimate voice. Just pick one or two examples that sound good to you. Think of female actresses, characters, YouTubers, or podcast hosts you enjoy. If you need a starting point, search for "female youtubers" or "female podcast hosts" for ideas.',
                "For a concrete example, here is a podcast interview with Keon Saghari that works well as a reference (https://drive.google.com/open?id=1pIUvhv59np_tDRK7w0s75IQ3ByIoG6bs). Feel free to use that if you cannot decide on one right now.",
                "Once you have your reference, start listening to it a little bit every day. This helps you internalize the sounds and speech patterns of the voice you like. And stay on the lookout - if you find a voice you like better later, switch to that one instead.",
              ],
            },
            {
              heading: "Recording Your Baseline",
              body: [
                "Your baseline recording is not for judging yourself - it is your calibration point. You will compare later clips against this to track real progress, so it is important to capture it before any intensive training begins.",
                "Record three short samples: a casual self-introduction, a reading of a set paragraph, and a minute of spontaneous speech. Keep the same script each week so comparisons are valid.",
                'After recording, document three target attributes you want to work toward, such as "brighter resonance," "softer attack," or "more melodic intonation." These give your listening practice direction.',
              ],
            },
          ],
          practice: [
            "Daily: 10-15 minutes listening to your primary reference.",
            "3x this week: record and replay your baseline script.",
            "After playback: write one thing that matched your target and one thing to improve.",
          ],
          homework: [
            {
              id: "collect-references",
              text: "Save links to 1-2 reference voices you will imitate.",
              type: "links",
            },
            {
              id: "baseline-clip",
              text: "Record and label your Week 1 baseline clip.",
              type: "check",
            },
            {
              id: "daily-listening",
              text: "Complete listening practice at least 5 days this week.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "collect-references",
              type: "links",
              text: "Save links to 1-2 reference voices you will imitate.",
              detail:
                "Pick a female speaking voice you find pleasant and relatable - an actress, YouTuber, or podcast host. The Keon Saghari podcast interview (https://drive.google.com/open?id=1pIUvhv59np_tDRK7w0s75IQ3ByIoG6bs) is a solid default if you need one.",
            },
            {
              id: "daily-listening",
              type: "timer",
              text: "Listen to your primary reference voice for 10-15 minutes.",
              timerSeconds: 600,
              detail:
                "Put on your reference voice and pay attention to pitch patterns, rhythm, and tone quality. Daily listening helps you internalize the target so your ear guides your practice.",
            },
            {
              id: "baseline-recording",
              type: "recording",
              text: "Record your baseline script (casual intro, reading paragraph, spontaneous speech).",
              detail:
                "Record three clips in your current voice: a casual self-introduction, a reading of a set paragraph, and about a minute of spontaneous speech. Use the same script each week so you can compare directly.",
              slots: [
                { id: "intro", label: "Casual self-introduction" },
                { id: "reading", label: "Reading paragraph" },
                { id: "spontaneous", label: "Spontaneous speech" },
              ],
            },
            {
              id: "playback-reflection",
              type: "text",
              text: "Write one thing that matched your target and one thing to improve.",
              prompt: "What matched your target voice? What still needs work?",
              detail:
                "Listen back to your baseline and compare it to your reference voice. Note one quality that already matches and one specific thing you want to change first.",
            },
          ],
          schedule: [
            ["collect-references", "daily-listening"],
            ["daily-listening", "baseline-recording", "playback-reflection"],
            ["daily-listening"],
          ],
        },
        {
          id: "vocal-tract-length",
          title: "Vocal Tract Length and Larynx Control",
          difficulty: "hard",
          duration: "20-30 min/day",
          summary:
            "Build controllable larynx elevation for brighter resonance while minimizing neck and jaw tension.",
          sections: [
            {
              heading: "Why Larynx Control Comes First",
              body: [
                "Your next goal is to strengthen and learn to control the muscles that raise your larynx (voice box). Raising the larynx shortens the length of your vocal tract - from larynx to lips - to match the proportions of a typical female vocal tract. This is one of the biggest cues that listeners perceive as more feminine.",
                "Building these muscles takes time, so we start here and let them develop in the background while you work on other skills in parallel.",
              ],
            },
            {
              heading: "Swallow-and-Hold and Big Dog, Small Dog",
              body: [
                "Watch this video (https://youtu.be/aWWevU4A5mU) and try the swallow-and-hold exercise. Touch your larynx (Adam's apple) lightly with your finger, then yawn and feel it move down, then swallow and feel it move up.",
                'Once you have felt this a few times, watch this video (https://youtu.be/mx4dPWKVt9o) and try the "big dog, small dog" exercise. If the small dog is tricky, start by yawning to bring the larynx down, then begin to swallow to bring it up, then stick your tongue out like a panting dog and say "ahh" in a whisper - this makes sure you are not closing off your throat.',
              ],
            },
            {
              heading: "The Whisper Siren",
              body: [
                'Watch this video (https://youtu.be/F6Noi2qERus) and try the whisper siren exercise. You want to smoothly slide from a big dog "uhh" to a small dog "ehh" as your larynx glides upward. Place a finger or two lightly on your throat to feel your larynx move up and down.',
                "Practice the whisper siren for a few minutes whenever you remember throughout the day - say, whenever you go to the bathroom. It is almost silent, so you can do it anywhere. Hold your muscles in place at the top (the high end of the siren, the small dog position) to build strength.",
                "Control matters more than force. Eventually you want to lift your larynx easily, without straining the muscles in your jaw and neck. As you get more comfortable, try to relax your neck a little more each time, until you can do it without tension.",
              ],
            },
            {
              heading: "Vocal Health and Recovery",
              body: [
                "Hydration and recovery are non-negotiable. Drink water frequently and avoid extended strain when you feel hoarse.",
                "Stop and rest if pain appears. Mild fatigue is normal when building new muscles; pain and persistent hoarseness are signs to back off and recover.",
              ],
            },
          ],
          practice: [
            "5 short siren sets spaced through the day (1-2 minutes each).",
            "Track perceived tension before and after each set (0-10).",
            "End sessions with 2 minutes of relaxed breathing and yawn-sigh release.",
          ],
          homework: [
            {
              id: "siren-sets",
              text: "Complete at least 5 whisper-siren sets daily.",
              type: "check",
            },
            {
              id: "tension-log",
              text: "Log neck/jaw tension for each practice day.",
              type: "check",
            },
            {
              id: "cooldown",
              text: "Add cooldown to every session this week.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "siren-sets",
              type: "timer",
              text: "Complete a set of whisper sirens (1-2 minutes).",
              timerSeconds: 120,
              detail:
                'Smoothly slide from a big dog "uhh" to a small dog "ehh" in a whisper, feeling your larynx rise with a finger on your throat. Hold briefly at the top, then release. This is one of five daily sets -- do four more throughout the day whenever you have a private moment (they are almost silent). See the whisper siren video (https://youtu.be/F6Noi2qERus) for a demonstration.',
            },
            {
              id: "tension-log",
              type: "text",
              text: "Log your neck/jaw tension before and after this session.",
              prompt:
                "Rate tension 0-10 before and after. Any specific areas of tightness?",
              detail:
                "Notice whether tension is showing up in your jaw, the sides of your neck, or under your chin. Over time, you want the larynx lift to feel easy and isolated from these surrounding muscles.",
            },
            {
              id: "cooldown",
              type: "timer",
              text: "Relaxed breathing and yawn-sigh release.",
              timerSeconds: 120,
              detail:
                "Do a slow, relaxed yawn to bring your larynx all the way down, then sigh gently on the exhale. Repeat two or three times, letting your neck and jaw go completely slack between each one.",
            },
          ],
          schedule: [
            ["siren-sets", "tension-log", "cooldown"],
            ["siren-sets", "cooldown"],
            ["siren-sets", "tension-log", "cooldown"],
            ["siren-sets", "cooldown"],
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Pitch and Register Control",
      levelFocus: "Level 1 pitch work",
      overview:
        "This week isolates pitch targets and register stability so you can stay in range without flipping into unstable falsetto or pressing too hard.",
      outcomes: [
        "Find a sustainable speaking range for daily use.",
        "Track pitch with biofeedback without over-fixating on numbers.",
        "Maintain comfort and reduce strain while increasing consistency.",
      ],
      lessons: [
        {
          id: "pitch-fundamentals",
          title: "Pitch Fundamentals and Register Stability",
          difficulty: "medium",
          duration: "30 min/day",
          summary:
            "Use pitch feedback tools to improve range control while staying in comfortable phonation.",
          sections: [
            {
              heading: "Pitch Is One Piece of the Puzzle",
              body: [
                "Keep doing your previous exercises every day, but when you are ready for something more, you can start working on pitch - how high or low your voice is. Pitch is just one of many elements, and not even the most important, but it is probably the most well-known difference between the average male and female voice.",
                "Aim for stable conversational pitch in the female range, not exaggerated highs that force strain. Resonance, articulation, and intonation are equally important, so treat pitch as one dial in a larger system.",
              ],
            },
            {
              heading: "Registers: Chest, Falsetto, and Mix",
              body: [
                "In addition to pitch, your voice locks into different registers at different points in your range, each with a different sound quality. Watch this video (https://youtu.be/CYEsGuldIQY) to hear the differences between chest voice, falsetto, and mix voice (which is technically part of your modal register, same as chest).",
                "Follow along with the warmups in this video (https://youtu.be/9-1Padxsmio?t=281), then try switching between registers a few times, both singing and speaking.",
                "You might find that you start in modal register in the male range but flip into falsetto to reach the female range. Or you might have to strain and shout to get that high. If either happens, go back down to the pitch where you can still speak comfortably in modal register and do not worry about going higher for now.",
              ],
            },
            {
              heading: "Using a Pitch Monitor",
              body: [
                "Download Vocal Pitch Monitor on Android (https://play.google.com/store/apps/details?id=com.tadaoyamaoka.vocalpitchmonitor&hl=en_US) or iOS (https://apps.apple.com/us/app/vocal-pitch-monitor/id842218231). In the settings, change the Scale to F Major and check the box to display frequency in Hz.",
                "With the app running, talk in your starting voice and see where your pitch falls naturally. A typical male speaking voice stays between F2 and F3 (marked by horizontal lines since we set the scale to F Major). Now try talking higher until your voice is in the female range, around F3 and above. Do not go higher than F4 though, or you will sound like a cartoon character.",
                "Observe trends across days instead of chasing perfect values every sentence. If your voice flips or tightens, lower the target slightly and rebuild consistency in modal production.",
              ],
            },
            {
              heading: "Daily Speaking Practice",
              body: [
                "Set aside some time every day - say half an hour - to warm up with the register video above and then practice speaking in the female range (between F3 and F4), or as close as you can get without straining or going into falsetto. You can say random things, recite lines from memory, or read a book or comments out loud while keeping an eye on Vocal Pitch Monitor.",
                "It might sound terrible, and that is okay. The important thing is to get used to speaking in that range. Drink water throughout and take a break if you feel your voice getting strained or hoarse.",
              ],
            },
          ],
          practice: [
            "Warmup, then 20 minutes monitored speaking practice.",
            "5 minutes register transitions at comfortable intensity.",
            "Record one short clip every other day for comparison.",
          ],
          homework: [
            {
              id: "monitoring",
              text: "Complete monitored practice at least 5 days.",
              type: "check",
            },
            {
              id: "range-log",
              text: "Log daily comfortable pitch range.",
              type: "check",
            },
            {
              id: "weekly-clip",
              text: 'Save one "best effort" clip this week.',
              type: "check",
            },
          ],
          workflow: [
            {
              id: "monitored-speaking",
              type: "timer",
              text: "Warmup, then monitored speaking practice (20 minutes).",
              timerSeconds: 1200,
              detail:
                "Warm up with the register exercises in this video (https://youtu.be/9-1Padxsmio?t=281), then open Vocal Pitch Monitor and practice speaking between F3 and F4. Read aloud, talk spontaneously, or recite from memory - just keep an eye on the app and stay in range without straining.",
            },
            {
              id: "register-transitions",
              type: "timer",
              text: "Register transitions at comfortable intensity.",
              timerSeconds: 300,
              detail:
                "Practice switching between chest voice and falsetto, both singing and speaking. Notice where your voice wants to flip and work on smoothing that transition. Stay at a comfortable intensity - do not push through strain.",
            },
            {
              id: "range-log",
              type: "text",
              text: "Log your comfortable pitch range today.",
              prompt: "What range felt stable? Any flipping or strain?",
              detail:
                "Note the highest pitch you could sustain in modal register without flipping into falsetto, and whether that range felt easier or harder than yesterday.",
            },
            {
              id: "recording",
              type: "recording",
              text: "Record a short comparison clip.",
              detail:
                "Record a short clip of you speaking in your target range so you can compare it to your baseline and track how your pitch stability is improving over time.",
              compareWith: { lessonId: "inspiration-baseline", dayIndex: 1, taskId: "baseline-recording", slotId: "reading", label: "Your baseline (reading)" },
            },
            {
              id: "weekly-clip",
              type: "recording",
              text: "Record your best effort clip from this week.",
              detail:
                "Record a clip where your pitch is most stable and natural-sounding in the F3-F4 range. This is your weekly progress snapshot.",
              compareWith: { lessonId: "inspiration-baseline", dayIndex: 1, taskId: "baseline-recording", slotId: "reading", label: "Your baseline (reading)" },
            },
          ],
          schedule: [
            ["monitored-speaking", "register-transitions", "range-log"],
            ["monitored-speaking", "recording"],
            ["monitored-speaking", "register-transitions", "range-log"],
            ["monitored-speaking", "recording"],
            [
              "monitored-speaking",
              "register-transitions",
              "range-log",
              "weekly-clip",
            ],
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Resonance Layering",
      levelFocus: "Level 1 resonance",
      overview:
        "This week combines pitch with resonance shaping: raised larynx plus forward tongue posture to create brighter timbre in connected speech.",
      outcomes: [
        "Identify and produce dark vs bright resonance on command.",
        "Layer pitch + larynx + tongue posture with less tension.",
        "Use contrast drills to build reliable control.",
      ],
      lessons: [
        {
          id: "resonance-layering",
          title: "Resonance Layering With Tongue Posture",
          difficulty: "hard",
          duration: "30 min/day",
          summary:
            "Build brighter resonance through coordinated larynx and tongue adjustments.",
          sections: [
            {
              heading: "Combining Pitch and Larynx Height",
              body: [
                "Once you are comfortable manipulating your larynx and your pitch separately, you can try doing them at the same time. That means, while you are speaking in the female range, you also raise your larynx to reduce your vocal tract length. Start by following along with the exercises in this video (https://youtu.be/iTViDd0QPEI).",
                "It will probably sound pretty bad at first, and that is fine. Your goal at this stage is not to sound feminine, but to keep your pitch in your target feminine range, ideally between F3 and F4, and keep your larynx raised while talking (which you can feel by holding a finger lightly to your throat). If that feels strained while you are learning resonance, it is fine to work a little lower until the coordination becomes easier.",
                "Your voice should sound more buzzy and brassy - a bright resonance (or bright timbre) - as opposed to the dark, hollow resonance of more masculine voices. That is a good thing! Watch this video (https://youtu.be/21ZfGPp-Ves) to hear a great demonstration of this effect. You want your voice to be in the upper-right quadrant of the diagram.",
              ],
            },
            {
              heading: "Tongue Posture and Oral Resonance",
              body: [
                'On top of larynx height, you want to learn to arch your tongue up and push it forward to reduce the space in your mouth where sound resonates. To get the feeling, whisper "kee" (as in "key") and keep pushing the middle of your tongue up high for the "ee" - just below where it touches the roof of your mouth to make the "k" sound. Say it a few times while keeping your tongue clenched, pushing it a little higher each time. This is the smallest space you can make inside your mouth, the bright extreme of your oral resonance, opposite a yawn.',
                'When feminizing other vowels, your tongue will be lower than for "ee" but still higher and more forward than in your masculine voice. You still want to feel a bit of that clench throughout. Essentially, you want to talk with a small space at the front of your mouth, which makes it sound like you have a smaller mouth than you actually do.',
                "Gaining mastery over your tongue is one of the trickiest skills of voice feminization, but arguably one of the most important. Get started by practicing the exercises in this video (https://youtu.be/yFot-l2iVHw). Then watch this video (https://web.archive.org/web/20200321191952id_/https://r3---sn-n4v7knl6.googlevideo.com/videoplayback?expire=1584839985&ei=0Wh2XuSxINKRkwbR-57gDw&ip=207.241.231.174&id=o-AJ2vUafZ5cvQMSRctQhBdx7uRwDMacXX4n6ybMQCzGcq&itag=18&source=youtube&requiressl=yes&mh=TB&mm=31%2C26&mn=sn-n4v7knl6%2Csn-a5mekn7r&ms=au%2Conr&mv=m&mvi=2&pl=20&initcwndbps=4528750&vprv=1&mime=video%2Fmp4&gir=yes&clen=33578688&ratebypass=yes&dur=750.190&lmt=1471833091508857&mt=1584818254&fvip=3&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ADKhkGMwRAIgJX3PLOf8KyyLDYEmw4hTsdPP2iBsp-I-vzAbnBvyMZsCIHBKe5A_0AujHzZR0zgtwGZc_q2DFrA_vD7W2JDiqBFJ&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=ABSNjpQwRAIgDsql_8uDbpP9xDY2HwGgc-QtHDY8Sg_PAK-BpcIKS_oCIDD_1XsV7XJu8ALOoxL-3WQXO_LWyaMxcgOGRi0oD0Y5&video_id=biZN6zcBpVo) and try some sirens and trills across your range while raising your larynx and tongue.",
              ],
            },
            {
              heading: "Layered Practice and Whisper Sirens",
              body: [
                "Take your daily speaking practice and spend at least half that time talking with your larynx raised for a bright, buzzy sound. Then, as best you can, add in the tongue clench too, pushing it up and forward to brighten the sound even more. Experiment with your larynx raised or lowered, your tongue arched or relaxed, and your pitch high or low, as well as in a whisper.",
                'Also keep practicing whisper sirens multiple times a day, but add a whispered "kee" at the end of each one to bring your tongue up. This lets you go even higher with the siren and make a really tiny dog sound. Hold those muscles in place at the top and really clench your tongue. At the same time, try to relax as much tension as you can in your jaw and neck while still holding the same shape.',
              ],
            },
            {
              heading: "Managing Tension and Recovery",
              body: [
                "This combination is likely to cause a lot of tension in your neck and throat at first, so do trills and yawn every so often to help the muscles relax again. You can even try lying on your back while practicing to force your body to relax.",
                "If the jaw locks or your tongue roots hard, back off intensity and rebuild from smaller movements. Smooth control beats extreme posture. Sip water throughout your practice session and take a break when your voice gets too tired or hoarse.",
              ],
            },
          ],
          practice: [
            "15 minutes contrast drills: dark vs bright phrases.",
            "10 minutes bright-resonance reading with periodic resets.",
            "5 minutes whisper-only resonance practice.",
          ],
          homework: [
            {
              id: "contrast-rounds",
              text: "Complete 3 contrast rounds daily.",
              type: "check",
            },
            {
              id: "bright-reading",
              text: "Do 10 minutes/day bright-resonance reading.",
              type: "check",
            },
            {
              id: "compare-clips",
              text: "Record before/after and write differences.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "contrast-drills",
              type: "timer",
              text: "Contrast drills: dark vs bright phrases.",
              timerSeconds: 900,
              detail:
                "Say a short phrase with your larynx low and tongue relaxed (dark, hollow sound), then repeat the same phrase with your larynx raised and tongue arched forward (bright, buzzy sound). Alternate back and forth so your ear and muscles learn the difference quickly. See the resonance demonstration video (https://youtu.be/21ZfGPp-Ves) to calibrate your bright target.",
            },
            {
              id: "bright-reading",
              type: "timer",
              text: "Bright-resonance reading with periodic resets.",
              timerSeconds: 600,
              detail:
                "Read aloud with your larynx raised and tongue pushed forward for a bright, buzzy resonance. Keep pitch in your target feminine range, ideally between F3 and F4, and go a little lower temporarily if needed to avoid strain while learning the coordination. Every minute or two, pause for a yawn-sigh or lip trill to release tension before continuing.",
            },
            {
              id: "whisper-practice",
              type: "timer",
              text: "Whisper-only resonance practice.",
              timerSeconds: 300,
              detail:
                "Whisper phrases while focusing only on larynx height and tongue posture. Removing pitch from the equation isolates resonance coordination so you can feel the shape changes more clearly without worrying about your voice flipping or straining.",
            },
            {
              id: "compare-clips",
              type: "recording",
              text: "Record dark vs bright comparison clips.",
              detail:
                "Record yourself speaking in dark mode (larynx low, tongue relaxed) and bright mode (larynx high, tongue forward). Listen back and note what changed in tone, buzziness, and perceived size.",
              slots: [
                { id: "dark", label: "Dark mode (larynx low, tongue relaxed)" },
                { id: "bright", label: "Bright mode (larynx high, tongue forward)" },
              ],
            },
            {
              id: "progress-check",
              type: "recording",
              text: "Record a progress clip and compare to last week.",
              detail:
                "Read your baseline script in your best current voice. Listen back and compare to last week's clip to hear how your resonance has changed.",
              compareWith: { lessonId: "pitch-fundamentals", dayIndex: 4, taskId: "weekly-clip", slotId: "default", label: "Last week (Week 2)" },
            },
          ],
          schedule: [
            ["contrast-drills", "bright-reading", "whisper-practice"],
            ["contrast-drills", "bright-reading", "compare-clips"],
            ["contrast-drills", "bright-reading", "whisper-practice"],
            ["contrast-drills", "bright-reading", "compare-clips"],
            [
              "contrast-drills",
              "bright-reading",
              "whisper-practice",
              "compare-clips",
              "progress-check",
            ],
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Efficiency and Melody",
      levelFocus: "Level 2 open quotient + intonation",
      overview:
        "This week adds softness control (open quotient) and melodic phrasing to reduce pressed quality and monotone delivery.",
      outcomes: [
        "Shift between whisper, soft voice, and normal voice smoothly.",
        "Use expressive pitch movement without sounding forced.",
        "Maintain brightness while softening vocal fold collision.",
      ],
      lessons: [
        {
          id: "open-quotient",
          title: "Open Quotient and Softness Control",
          difficulty: "easy",
          duration: "20-25 min/day",
          summary:
            "Develop lighter, less pressed phonation with control over breathiness and clarity.",
          sections: [
            {
              heading: "Breathe a Sigh of Relief",
              body: [
                "Go ahead and breathe a sigh of relief, because it is time for something a little easier! Feminine voices generally sound softer and more breathy than masculine voices. Marilyn Monroe is an iconic example of this, as you can hear in this video (https://youtu.be/ikUjhv4iT58).",
                "When you try to speak in the upper range of your modal register without going into a falsetto, the natural tendency is to strain to reach those higher notes, which makes your voice sound harder, not softer, and not particularly feminine. This is because you put a lot of compression on your vocal folds, squeezing them together more tightly. You want to learn to use less compression for a softer sound, where your vocal folds stay open more (open quotient) while vibrating.",
                "With high compression (closed quotient), adding breathiness will just result in a strained sound like Ash Ketchum from Pokemon, as in this video (https://youtu.be/s-0DuYcWeBE).",
              ],
            },
            {
              heading: "Learning to Control Compression",
              body: [
                'To learn to control the compression in your voice, start by watching this video (https://youtu.be/J9K74QEzntA?t=240) and trying the "ah-ha" exercise and the vowel slides.',
                "Then download the Android app Spectroid (https://play.google.com/store/apps/details?id=org.intoorbit.spectrum&hl=en_US) (or Spectrogram Pro (https://apps.apple.com/us/app/spectrogram-pro-with-super-smooth-60hz-update/id415301721) on iOS), and in the audio settings, change the Desired transform interval to 10 ms (100 Hz) and check the box to Stay awake in the display settings.",
              ],
            },
            {
              heading: "Using the Spectrogram to See Your Open Quotient",
              body: [
                'With the app running, start by saying "ahh" for a few seconds in your normal speaking voice. In the scrolling display, you should see a bunch of bright yellow lines showing up against the purple and pink background noise. Then whisper "ahh" for a few seconds, just with your breath. You should see some faint pink smudges, but no yellow lines.',
                'Now, heave a big, breathy sigh while saying "ahh..." in a soft, relaxed voice. Ideally, you will see faint yellow lines melding into a background of pink smudges. This is what it looks like when your voice has a high open quotient. It is somewhere in between a normal voice and a whisper.',
              ],
            },
            {
              heading: "Sliding Between Whisper and Voice",
              body: [
                'Your main exercise is to slide between a whisper and your normal speaking voice. Start with one long, whispered "ahh" that you gradually turn into a spoken "ahh" and then back to a whisper, just by changing the compression. Do this with the Spectroid app running, so you can see the change as well as hear it.',
                "For a bit more of a challenge, try smoothly changing from a whisper, to a soft voice, to a normal voice while speaking or reading out loud. You can also play with this during your daily speaking practice. See if you can make your voice a little softer, or really breathy, or change from one extreme to another while still maintaining the feminine aspects of pitch and resonance that you have been working on.",
              ],
            },
          ],
          practice: [
            "10 minutes whisper-soft-normal slides.",
            "3-5 minutes straw phonation cooldown.",
            "5 minutes sentence drills at three softness levels.",
          ],
          homework: [
            {
              id: "slides",
              text: "Complete daily softness transition drills.",
              type: "check",
            },
            {
              id: "sovt",
              text: "Add SOVT cooldown after intense sessions.",
              type: "check",
            },
            {
              id: "symptom-check",
              text: "Track hoarseness/fatigue and adjust load.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "slides",
              type: "timer",
              text: "Whisper-soft-normal slides.",
              timerSeconds: 600,
              detail:
                'Start with a long whispered "ahh" and gradually turn it into a spoken "ahh," then back to a whisper, just by changing compression. Use the Spectroid app (https://play.google.com/store/apps/details?id=org.intoorbit.spectrum&hl=en_US) to watch the yellow lines appear and fade as you slide between whisper and voice. Watch this video (https://youtu.be/J9K74QEzntA?t=240) for the "ah-ha" exercise and vowel slides.',
            },
            {
              id: "sentence-drills",
              type: "timer",
              text: "Sentence drills at three softness levels.",
              timerSeconds: 300,
              detail:
                "Read a sentence in a whisper, then in a soft breathy voice, then in your normal speaking voice. Try to smoothly change between the three levels while speaking or reading out loud, maintaining your feminine pitch and resonance throughout.",
            },
            {
              id: "sovt-cooldown",
              type: "timer",
              text: "Straw phonation cooldown.",
              timerSeconds: 240,
              detail:
                "Use straw phonation or lip trills to cool down after intense practice. This reduces phonatory impact stress and helps your voice recover for the next session.",
            },
            {
              id: "symptom-check",
              type: "text",
              text: "Track hoarseness or fatigue and note any adjustments.",
              prompt:
                "Any hoarseness, fatigue, or discomfort? What did you adjust?",
              detail:
                "Note any hoarseness, fatigue, or discomfort. If hoarseness accumulates, lower intensity and add more recovery time before the next session.",
            },
            {
              id: "progress-check",
              type: "recording",
              text: "Record a progress clip and compare to last week.",
              detail:
                "Read your baseline script with your softest, most controlled voice. Listen back and compare to last week's clip.",
              compareWith: { lessonId: "resonance-layering", dayIndex: 4, taskId: "progress-check", slotId: "default", label: "Last week (Week 3)" },
            },
          ],
          schedule: [
            ["slides", "sentence-drills", "sovt-cooldown"],
            ["slides", "sovt-cooldown", "symptom-check"],
            ["slides", "sentence-drills", "sovt-cooldown", "symptom-check", "progress-check"],
          ],
        },
        {
          id: "intonation",
          title: "Intonation and Expressiveness",
          difficulty: "medium",
          duration: "20-30 min/day",
          summary:
            "Increase pitch movement and stress patterns for a more dynamic conversational style.",
          sections: [
            {
              heading: "Time to Start Imitating Voices",
              body: [
                "All right. It is time to start imitating some voices! Intonation is the rise and fall of pitch as you speak. Masculine voices tend to be very monotone, where the pitch changes very slightly and infrequently from word to word, and important words are spoken louder for emphasis.",
                "Feminine voices tend to vary a lot in pitch, across a wider range, and big pitch changes are used to draw attention to the important words. Oftentimes, every word is spoken at a different pitch than the one before, and sometimes the pitch will change multiple times within a single word!",
              ],
            },
            {
              heading: "The Disney Princess Model",
              body: [
                "The clearest example of this can be found in that great figurehead of exaggerated femininity, the Disney princess. Watch this video (https://youtu.be/O5zntdPGd00?t=223) for a virtuosic vocal tour through a diversity of Disney princess voices, and try closing your eyes and listening to the rise and fall of pitch in each one. You can even pull out your Vocal Pitch Monitor app and watch the pitch rise and fall on the screen!",
              ],
            },
            {
              heading: "Parroting Practice",
              body: [
                "Your main exercise is to spend some time every day trying to talk like a Disney princess, in addition to all your other exercises. Listen to this clip (https://soundcloud.com/princessvoiceover/about-princess-voice-over) with Vocal Pitch Monitor open, watching the pitch rise and fall, and pause every sentence to try parroting back what you just heard, with the same rise and fall in your pitch.",
                "Do not worry about sounding good, and do not worry about your larynx or resonance either. Just focus on the pitch, and go ahead and use your falsetto to go high if you can. It will sound fake and silly, and that is okay - enjoy it!",
              ],
            },
            {
              heading: "Lip Shape and Extra Resources",
              body: [
                'The only thing that you should try to do, other than match the pitch, is to smile while you speak, stretching your lips across your teeth, and make your mouth opening a little smaller, like you are saying "ooh" (just pretend you are a dainty princess). This will also brighten your resonance a tiny bit, and make your voice sound that much more feminine. Use this for your princess voice practice, but also for your resonance practice as well, tightening your lips in addition to raising your larynx and tongue.',
                "If you get bored of using that clip or just want to find something in your own accent, feel free to practice with other example voices, like in this video (https://youtu.be/G4pLz-_CImE). Or make up your own princess voice if you can - the sillier the better. Delight in the ridiculousness of it all, and just have fun with it!",
              ],
            },
          ],
          practice: [
            "10 minutes imitation/parroting.",
            "10 minutes marked-stress reading.",
            "Optional: 5 minutes spontaneous speech with intentional emphasis.",
          ],
          homework: [
            {
              id: "daily-imitate",
              text: "Imitate one short clip each day.",
              type: "check",
            },
            {
              id: "stress-marking",
              text: "Mark stress before at least 3 reading passages.",
              type: "check",
            },
            {
              id: "mono-vs-expressive",
              text: "Record monotone vs expressive comparison.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "imitation",
              type: "timer",
              text: "Imitation and parroting practice.",
              timerSeconds: 600,
              detail:
                "Listen to this princess voice clip (https://soundcloud.com/princessvoiceover/about-princess-voice-over) with Vocal Pitch Monitor open. Pause after each sentence and parrot it back, matching the rise and fall of pitch. Do not worry about resonance or sounding good - just focus on the pitch contour, and use falsetto if needed.",
            },
            {
              id: "stress-reading",
              type: "timer",
              text: "Marked-stress reading practice.",
              timerSeconds: 600,
              detail:
                'Pick a passage, mark the words you want to emphasize, then read it aloud using big pitch changes on those words, like a Disney princess would. Smile while you speak and keep your mouth opening small, like you are saying "ooh." Watch this video (https://youtu.be/O5zntdPGd00?t=223) for inspiration.',
            },
            {
              id: "spontaneous-speech",
              type: "timer",
              text: "Spontaneous speech with intentional emphasis.",
              timerSeconds: 300,
              detail:
                "Speak freely about anything, but keep the exaggerated Disney princess intonation going. If you want more variety, try imitating voices from this video (https://youtu.be/G4pLz-_CImE) or make up your own princess voice - the sillier the better!",
            },
            {
              id: "mono-vs-expressive",
              type: "recording",
              text: "Record a monotone vs expressive comparison.",
              detail:
                "Read the same short passage twice: once in a flat, monotone delivery, and once with exaggerated princess-style intonation. Listen back and notice how much the pitch movement changes the perceived femininity.",
              slots: [
                { id: "monotone", label: "Monotone delivery" },
                { id: "expressive", label: "Expressive (princess-style)" },
              ],
            },
          ],
          schedule: [
            ["imitation", "stress-reading"],
            ["imitation", "stress-reading", "spontaneous-speech"],
            ["imitation", "stress-reading"],
            [
              "imitation",
              "stress-reading",
              "spontaneous-speech",
              "mono-vs-expressive",
            ],
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Speech Detail Control",
      levelFocus: "Level 3 articulation + twang",
      overview:
        "This week sharpens vowel/consonant shaping and introduces controlled twang for clarity in noisy environments.",
      outcomes: [
        "Use brighter articulation intentionally.",
        "Produce controlled twang without nasal substitution.",
        "Apply detail work to connected phrases.",
      ],
      lessons: [
        {
          id: "articulation",
          title: "Articulation and Vowel/Consonant Brightness",
          difficulty: "medium",
          duration: "25-35 min/day",
          summary:
            "Refine oral shaping so resonance stays consistent across vowels and consonants.",
          sections: [
            {
              heading: "Ready to Talk Like a Valley Girl?",
              body: [
                "Ready to refine your resonance with another round of voice impressions? Like, totally! So far, you have been working to brighten the timbre of your voice by raising your larynx and tongue to shrink the size of your vocal tract. But that does not always translate into sounding more feminine. If you want to sound feminine, you are going to have to get really specific with the way your tongue moves inside your mouth, to hone your oral resonance. That is, you will have to fine-tune the way you say all your vowels and consonants - your articulation.",
                "Fortunately, there is a fun way to do this! To put it simply, you want to talk like a Valley girl. Watch this video (https://youtu.be/XPv5vradEw8) to hear what a stereotypical Valley girl sounds like. Not only do they rival Disney princesses in terms of their extreme intonation, they also brighten their vowels to a much greater degree than you will hear in any other American accent (and if you have a British accent, try imitating the brighter vowels of an Australian accent instead, as in this video (https://youtu.be/mIBg-w6TNLE)).",
              ],
            },
            {
              heading: "Vowel Mods: Brightening Every Sound",
              body: [
                'Some vowels are naturally dark in resonance (like "uh") because your tongue is low and there is more space in your mouth. Some vowels are naturally bright (like "ee") because your tongue is high, leaving a small amount of space in the back of your mouth. What Valley girls do, and what you want to learn to do yourself, is to replace each vowel sound in your speech with a slightly brighter vowel. Your "oh" becomes "uh", your "uh" becomes "eh", your "eh" becomes "ih", your "ih" becomes "ee" and so on, as in this video (https://youtu.be/dZKzuVfUv3E?t=62). These are called vowel mods.',
                'For a Valley girl, "ummm..." becomes "emmm..." and "lah-eek, toh-duh-lee" becomes "lih-eek, teh-dih-lee" - try saying each one! Then see if you can say them with vowels that are in between the two extremes - that is the sweet spot. Whatever your accent, the key is to push your tongue up and forward and just use the front for articulation. It helps to close your jaw so your teeth are almost touching, to make it impossible for your tongue to drop too low.',
              ],
            },
            {
              heading: "Consonant Mods: Lighter Touches",
              body: [
                "There are also consonant mods, because consonants can be brighter or darker too. Consonants interrupt the flow of air from your lungs, by temporarily blocking your vocal tract with your lips, tongue, or soft palate. A heavier, more intense interruption will generally come across as more masculine, while a lighter, more subtle articulation will come across as more feminine.",
                'For example, if you explosively say "bah!" in disgust, it will sound more masculine. If you quickly say "bababababa" it will sound more feminine, especially if you tighten your lips together to minimize the movement. If you say "arr!" like a pirate, it will sound more masculine. If you stop your tongue halfway through saying that heavy "r" sound, it will sound more feminine, especially if you also raise the back of your tongue at the same time to shrink the space in your mouth. Watch this video (https://youtu.be/pgzIsnPjGbY?t=164) to hear the difference between a masculine and feminine "r" and "s" sound.',
              ],
            },
            {
              heading: "Practicing with Lumpy Space Princess and Beyond",
              body: [
                'Start with Lumpy Space Princess in this video (https://youtu.be/hnFcLGwgNSc?t=86). Pause after each line she says and try to repeat it with the same vowel mods - "to get it" becomes "teh get eht" in her accent. Then try it again with a whisper. Do the same with this video (https://www.youtube.com/watch?v=fETaoJBhY9g), this video (https://youtu.be/l2OhyLfrogI), and the Valley girl video above.',
                "Do not worry too much about pitch, but pay close attention to the sounds of each vowel and consonant. When you start to feel comfortable with these vowel and consonant mods, try incorporating them into your other voice exercises as well. You do not have to go to such an extreme that you sound like a Valley girl, of course, but play around with them to see how they change the sound!",
                'At the same time, focus on clenching your tongue (like "key") to brighten each vowel and consonant as much as possible, while keeping your lips tight and your jaw almost closed to minimize the space inside.',
              ],
            },
          ],
          practice: [
            "15 minutes targeted vowel/consonant drills.",
            "5-10 minutes phrase imitation.",
            "5 minutes free conversation recording.",
          ],
          homework: [
            {
              id: "artic-drills",
              text: "Complete articulation drills at least 5 days.",
              type: "check",
            },
            {
              id: "word-list",
              text: "Build and practice a 10-word challenge list.",
              type: "check",
            },
            {
              id: "carryover-record",
              text: "Save one conversational carryover sample.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "artic-drills",
              type: "timer",
              text: "Targeted vowel/consonant drills.",
              timerSeconds: 900,
              detail:
                'Practice replacing each vowel with a slightly brighter one: "oh" to "uh," "uh" to "eh," "eh" to "ih," "ih" to "ee." Close your jaw so your teeth are almost touching and push your tongue up and forward. Watch this video (https://youtu.be/dZKzuVfUv3E?t=62) for the vowel mod pattern, and this video (https://youtu.be/pgzIsnPjGbY?t=164) for lighter consonant articulation.',
            },
            {
              id: "phrase-imitation",
              type: "timer",
              text: "Phrase imitation practice.",
              timerSeconds: 420,
              detail:
                "Imitate Lumpy Space Princess (https://youtu.be/hnFcLGwgNSc?t=86) - pause after each line and repeat with the same vowel mods. Then try the same with this video (https://www.youtube.com/watch?v=fETaoJBhY9g) and this video (https://youtu.be/l2OhyLfrogI). Try each line voiced, then whispered.",
            },
            {
              id: "word-list",
              type: "text",
              text: "Build and practice a 10-word challenge list.",
              prompt:
                "Which words lose your target resonance? List 10 to practice.",
              detail:
                'Identify words where your vowels or consonants slip back to a darker, more masculine sound. Practice each one with the Valley girl vowel mods, clenching your tongue like "key" and keeping your lips tight. See the Valley girl video (https://youtu.be/XPv5vradEw8) for reference.',
            },
            {
              id: "carryover-record",
              type: "recording",
              text: "Record a conversational carryover sample.",
              detail:
                "Speak freely for a minute or two, incorporating the vowel and consonant mods you have been practicing. If your targets vanish in spontaneous speech, reduce the number of things you are tracking and reintroduce them one at a time.",
              compareWith: { lessonId: "open-quotient", dayIndex: 2, taskId: "progress-check", slotId: "default", label: "Last week (Week 4)" },
            },
          ],
          schedule: [
            ["artic-drills", "phrase-imitation"],
            ["artic-drills", "word-list"],
            ["artic-drills", "phrase-imitation"],
            ["artic-drills", "word-list", "carryover-record"],
          ],
        },
        {
          id: "vocal-twang",
          title: "Vocal Twang for Clarity and Projection",
          difficulty: "easy",
          duration: "15-25 min/day",
          summary:
            "Add adjustable vocal twang to improve clarity while avoiding excessive strain.",
          sections: [
            {
              heading: "Piercing Brightness for Power and Clarity",
              body: [
                "Now, if you want to be heard above a lot of background noise, without relying on the booming strength of a masculine voice, you will need to add a piercing brightness that will give your voice more power and clarity while also making it more feminine at the same time.",
                "The secret is a singing technique known as vocal twang. It sounds almost like nasal resonance, where the sound goes through your nose, but it is not. Instead, vocal twang is created by squeezing what is known as the aryepiglottic sphincter (or AES), which is right at the top of your larynx, above the vocal folds. You can see and hear the difference dramatically in this video (https://youtu.be/ERAFQic5A-4), showing the throat of a female singer as she first hums (nasal resonance), then sings normally, then sings with a very pronounced twang.",
              ],
            },
            {
              heading: "Learning Twang Through Imitation",
              body: [
                'The best way to learn this is through imitation. Quack like a duck, cry like a newborn baby, or say "I AM A ROBOT" in your best robot voice. They may not be pretty, much less feminine, but all of these are great examples of vocal twang pushed to an extreme. And you want to learn the extreme and then dial it back from there - it is a lot easier that way.',
                "So take a moment to try a few quacks, to cry like a newborn, and talk like a robot. Then watch this video (https://youtu.be/1BLVrYKmwvc) and follow along with the singing exercise at the end.",
              ],
            },
            {
              heading: "Seeing Twang on the Spectrogram",
              body: [
                'Open up the Spectroid app, and say "uhh" in a relaxed voice. Notice where the yellow lines appear on the scrolling spectrograph. Then try saying "quack" like a duck or "I AM A ROBOT" in a robot voice - something with a lot of vocal twang. If you have done it correctly, you will see a bright yellow band of lines appear past the 1000 Hz mark. The more you constrict the AES, the brighter the yellow band will be and the more you will hear a harsh edge to your sound.',
                'Watch this video (https://youtu.be/xAvCrxaLRvI) for a great example of this, starting with a dark "uhh" and gradually raising the larynx, raising the tongue, and then adding the vocal twang for maximum brightness.',
              ],
            },
            {
              heading: "Twang Practice and the Nose-Pinch Test",
              body: [
                'With Spectroid running, try to imitate the video and say "uhh" in a relaxed voice and then gradually slide into a harsh, twangy "ehh" like a duck quacking, and back down to a relaxed voice again. Watch the spectrograph and try to get that yellow band as bright as possible when you add the vocal twang.',
                "Then pinch your nose shut too, so you do not accidentally cheat by using nasal resonance instead of twang! You should be able to do this just as easily with your nose pinched shut - otherwise you will end up sounding like Squidward, as in this video (https://youtu.be/E5BzhG_sKUw?t=43).",
                "Then try adding different degrees of twang to your speaking practice, to see how it feels and sounds. You could go all the way and sound like SpongeBob SquarePants, take it out completely like his friend Patrick, or add just a hint of it and sound, well, more feminine. See what you like!",
              ],
            },
            {
              heading: "Twang for Singing",
              body: [
                "Vocal twang is also really great for feminizing your singing, if you are into that. Skillful use of vocal twang can turn a weak falsetto into a powerful head voice, and increase your upper range by an octave or more. It is also the secret behind CeeLo Green's distinctive singing voice, combining a dark oral resonance with a lot of bright vocal twang and a bit of nasal resonance, as you can hear in this video (https://youtu.be/bKxodgpyGec). If you start there and then brighten your oral resonance with a raised larynx and tongue, you can sound like a female singer. Seriously.",
              ],
            },
          ],
          practice: [
            "5-10 minutes twang glides.",
            "3-level twang sentence sets.",
            "Nose-pinch verification during drills.",
          ],
          homework: [
            {
              id: "twang-glides",
              text: "Practice twang glides daily.",
              type: "check",
            },
            {
              id: "nose-check",
              text: "Use nose-pinch checks in each session.",
              type: "check",
            },
            {
              id: "three-levels",
              text: "Record none/light/strong twang comparison.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "twang-glides",
              type: "timer",
              text: "Twang glides practice.",
              timerSeconds: 420,
              detail:
                'With Spectroid (https://play.google.com/store/apps/details?id=org.intoorbit.spectrum&hl=en_US) on Android or Spectrogram Pro (https://apps.apple.com/us/app/spectrogram-pro-with-super-smooth-60hz-update/id415301721) on iOS running, say "uhh" in a relaxed voice and gradually slide into a harsh, twangy "ehh" like a duck quacking, then back down. Watch for the bright yellow band past 1000 Hz. Try quacking, crying like a newborn, or saying "I AM A ROBOT" to find the extreme, then dial it back. Watch this video (https://youtu.be/1BLVrYKmwvc) for a guided exercise, and this video (https://youtu.be/xAvCrxaLRvI) to see the spectrogram in action.',
            },
            {
              id: "sentence-sets",
              type: "timer",
              text: "3-level twang sentence sets with nose-pinch checks.",
              timerSeconds: 300,
              detail:
                "Read a sentence with no twang, then light twang, then strong twang. Pinch your nose shut during each one - if the sound collapses, you are using nasal resonance instead of true AES twang. You should be able to do it just as easily with your nose pinched. See this video (https://youtu.be/ERAFQic5A-4) for the difference between nasal resonance and twang, and this video (https://youtu.be/E5BzhG_sKUw?t=43) for what to avoid.",
            },
            {
              id: "three-levels",
              type: "recording",
              text: "Record a none/light/strong twang comparison.",
              detail:
                "Record yourself saying the same sentence at three twang levels: none (like Patrick), light (natural feminine), and strong (like SpongeBob). Listen back and note which level sounds most natural and feminine to your ear.",
              slots: [
                { id: "none", label: "No twang (like Patrick)" },
                { id: "light", label: "Light twang (natural feminine)" },
                { id: "strong", label: "Strong twang (like SpongeBob)" },
              ],
            },
          ],
          schedule: [
            ["twang-glides", "sentence-sets"],
            ["twang-glides"],
            ["twang-glides", "sentence-sets"],
            ["twang-glides", "sentence-sets", "three-levels"],
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Back-of-Throat Shaping",
      levelFocus: "Level 3 throat closure",
      overview:
        "This week explores soft palate and pharyngeal shaping to reduce unwanted nasality and fine-tune timbre.",
      outcomes: [
        "Differentiate oral vs nasal resonance reliably.",
        "Experiment with subtle pharyngeal shaping safely.",
        "Apply only minimal closure needed for natural quality.",
      ],
      lessons: [
        {
          id: "throat-closure",
          title: "Throat Closure and Nasality Control",
          difficulty: "hard",
          duration: "20-30 min/day",
          summary:
            "Use soft-palate and pharyngeal control for subtle timbre adjustments without over-constriction.",
          sections: [
            {
              heading: "The Last Levers: Soft Palate and Pharynx",
              body: [
                "So far you have learned almost all of the little levers you can use to change the sound of your voice. But there are one or two more at the back of the throat. You want to learn to move your soft palate and your pharynx to shrink the space in your throat, just like you have used your tongue and lips to shrink the space in your mouth. The effect is subtle, but it can often make the difference between an authentically feminine voice and one that just sounds... off, somehow.",
                'You can see a very brief overview of the technique in this video (https://youtu.be/fcetsAEBSrc). But to make it easier, start with just the soft palate. Look in a mirror and say "ahh" and then "ung" and watch how the back of your tongue comes up while the very back of the roof of your mouth (the soft palate) comes down slightly to meet it. When they touch, the air is blocked off from your mouth and forced through your nose instead, creating a hypernasal sound.',
                "Try the exercises in this video (https://youtu.be/phuaeXjWpSQ) to learn to control your soft palate, and by extension, your nasal resonance. Generally, you want to reduce this nasality for a more feminine sound.",
              ],
            },
            {
              heading: "Pharyngeal Constriction: Gargling and Beyond",
              body: [
                "The next thing you want to learn is how to constrict your pharynx, or close your pharyngeal wall. Doing this will bring in the sides of your throat just below the soft palate (oropharynx), pushing your tonsils against the back of your tongue.",
                'How do you do it? Gargling. Say "ahh" while you tilt your head back and gargle, then tilt your head upright again and try to keep the sound going. Or say "ahh" from the top of a swallow-and-hold, or even a whisper siren. Eventually, you want to be able to say "ung" while sticking your tongue way out - the only way you can do that is to push in the walls of your oropharynx, because your soft palate cannot reach the back of your tongue while it is stretched out of your mouth.',
                "If you talk at the same time, you will sound like Meatwad, as in this video (https://youtu.be/TrWF6z8t3JI).",
              ],
            },
            {
              heading: "Character Voices: Elmo, Smeagol, and the Loli Voice",
              body: [
                "If you start with a Meatwad voice and bring your pitch up into a falsetto with a fair amount of nasal resonance, vocal twang, and a lot of open quotient, what do you get? You get an Elmo voice, as in this video (https://youtu.be/l2ppLtHbag4?t=23s). The reduced space in the back of the mouth and throat is what gives Elmo's voice its child-like quality.",
                "If you take that Elmo voice and bring the pitch down while constricting your pharynx as much as possible, you get a Smeagol or Gollum voice, as in this video (https://www.youtube.com/watch?v=64mWOoj68qo&t=252). For Smeagol, you want to constrict not only the oropharynx but also the hypopharynx, further down the throat, to create a dampened sound like a sob or an old man.",
                'You do not have to take it that far, but if you add just a hint of oropharyngeal throat closure, you can make your voice sound younger and more feminine. This is most clearly demonstrated with a "loli" voice, as in this video (https://youtu.be/pzgqke3uNxE). If you whisper with a feminine vocal posture and then squeeze in the back of your mouth and throat a little, you can sound like a cute anime girl. Try it!',
              ],
            },
            {
              heading: "Singing Application: The Britney Spears Sound",
              body: [
                "These are also important elements for singing feminization, especially for a voice like Britney Spears, which combines a fair amount of oropharyngeal constriction with a very hyponasal sound, as if from a stuffy nose. You can hear it exaggerated in this video (https://youtu.be/je-UHCniqnk). Imitating that sound is a great way to learn to achieve throat closure while simultaneously eliminating nasal resonance.",
              ],
            },
            {
              heading: "Practice and Safety",
              body: [
                "Your homework is to spend some time every day trying to talk like Meatwad and the other characters, by playing with your soft palate and pharynx position. Be sure to try whispering too, especially for the loli voice. Use the recording steps in your practice to capture and play back your character voices, to hear how they actually sound. Do not worry about whether they match a specific character exactly, just see what sort of funny voices you can make!",
                "Then try adding a hint of throat closure to your speaking practice, to see if you can use it to sound more feminine. Record and play back your feminine voice experiments to help guide your practice.",
                "If throat discomfort appears, stop and recover. Sustainable coordination is the goal, not maximal constriction.",
              ],
            },
          ],
          practice: [
            "10 minutes oral vs nasal contrast.",
            "5 minutes subtle closure phrase drills.",
            "5 minutes natural speech transfer.",
          ],
          homework: [
            {
              id: "contrast",
              text: "Do oral-vs-nasal contrast daily.",
              type: "check",
            },
            {
              id: "character-lab",
              text: 'Record 3 exploratory "character" voice trials.',
              type: "check",
            },
            {
              id: "natural-pass",
              text: "Record one natural speech pass with subtle closure.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "oral-nasal-contrast",
              type: "timer",
              text: "Oral vs nasal contrast drills.",
              timerSeconds: 600,
              detail:
                'Say "ahh" then "ung" and feel your soft palate move. Practice the soft palate exercises in this video (https://youtu.be/phuaeXjWpSQ) and alternate between oral and nasal sounds with nose-pinch checks to build awareness of your palate position.',
            },
            {
              id: "closure-phrases",
              type: "timer",
              text: "Subtle closure phrase drills.",
              timerSeconds: 300,
              detail:
                'Gargle on "ahh," then tilt your head upright and try to keep the constricted sound going. Practice short phrases with a hint of oropharyngeal closure, aiming for a slightly younger, more feminine quality without overdoing it. See this overview (https://youtu.be/fcetsAEBSrc).',
            },
            {
              id: "natural-speech",
              type: "timer",
              text: "Natural speech transfer practice.",
              timerSeconds: 300,
              detail:
                "Speak naturally for a few minutes and try adding just a hint of throat closure to your feminine voice. You will have a chance to record and compare in the next steps.",
            },
            {
              id: "character-lab",
              type: "recording",
              text: "Record an exploratory character voice trial.",
              detail:
                "Try talking like Meatwad (https://youtu.be/TrWF6z8t3JI), Elmo (https://youtu.be/l2ppLtHbag4?t=23s), or Smeagol (https://www.youtube.com/watch?v=64mWOoj68qo&t=252). Record your attempts and listen back - do not worry about matching exactly, just explore what your throat can do.",
            },
            {
              id: "natural-pass",
              type: "recording",
              text: "Record one natural speech pass with subtle closure.",
              detail:
                "Speak a few sentences in your feminine voice with just a hint of oropharyngeal closure. Record it, listen back, and compare to a version without closure. The loli voice demo (https://youtu.be/pzgqke3uNxE) shows the effect at a more extreme level for reference.",
              compareWith: { lessonId: "articulation", dayIndex: 3, taskId: "carryover-record", slotId: "default", label: "Last week (Week 5)" },
            },
          ],
          schedule: [
            ["oral-nasal-contrast", "closure-phrases", "natural-speech"],
            ["oral-nasal-contrast", "character-lab"],
            ["oral-nasal-contrast", "closure-phrases", "natural-speech"],
            ["oral-nasal-contrast", "character-lab"],
            [
              "oral-nasal-contrast",
              "closure-phrases",
              "natural-speech",
              "character-lab",
              "natural-pass",
            ],
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Integration and Mantra Work",
      levelFocus: "Level 4 exploration",
      overview:
        "This week uses repeatable mantra phrases as quick-reset anchors for integrating multiple vocal dimensions at once.",
      outcomes: [
        "Build one reliable cue phrase for voice entry.",
        "Explore multiple voice configurations intentionally.",
        "Develop fast reset capability during conversation.",
      ],
      lessons: [
        {
          id: "exploration-mantras",
          title: "Exploration With Mantra Phrases",
          difficulty: "easy",
          duration: "15-25 min/day",
          summary:
            "Use repeated phrases to compare settings and lock in your preferred target.",
          sections: [
            {
              heading: "Time to Explore Your Voice",
              body: [
                "Congratulations. You have learned to manipulate every single element involved in vocal feminization! Now for the fun part - you get to play around with all these knobs and dials on the control panel of your voice, and find the configuration that you like best. You get to explore the possibility space of your voice!",
                "A great way to do this is with a mantra phrase. The idea is to say the same phrase over and over again while tweaking different aspects of your voice, so you can easily compare the sound without thinking about what you are going to say. Watch this video (https://youtu.be/XNPPSd3AVwM) for an overview of the concept and some great example phrases that you can use yourself.",
              ],
            },
            {
              heading: 'The "Keep It Cutesy" Mantra',
              body: [
                'Try one of my own mantra phrases, designed specifically to help you practice and get a feel for your brightest, most feminine sound: "Keep it cutesy!"',
                'Try saying it a few times in a feminine voice, then whisper it a few times. If you break it down and stretch it out, it sounds like "keee-p ihhh-t keee-yooo-tsss-seee!" Try it.',
                'When you say "k" the top of your tongue presses against the roof of your mouth to block off the air, and when you say "ee" your tongue drops down to let the air through. Try whispering "kee" while keeping your tongue pushed up toward the "k" position, so it moves as little as possible to get to the "ee" instead of dropping down so much. That will create your brightest possible "ee" sound.',
                'Try saying "keep" with that bright sound - your tongue should hardly move at all. Then try saying "cute" by starting with that "kee" sound and then pushing your tongue slightly down into a "yoo" sound. Whisper it first, and then say it, moving your tongue as little as possible, so the brightness of the "kee" carries into the "yoo" because your tongue is still pushing up toward that "k" position.',
              ],
            },
            {
              heading: "Brightening Your Sibilants and Labials",
              body: [
                'Whisper "tsss" and try to move your tongue as little as possible from the "t" to the "s" sound. That will create a brighter, sharper "s" which will come across as more feminine. At the same time, keep pushing the back of your tongue up toward the "k" position to brighten it further. This applies to all your sibilants - "s", "z", "sh", "zh", "ch", "j" and so on! Then try whispering "see" - sliding from the "s" back to the brightest possible "ee" that you can make.',
                'Now put it together. Say "cutesy" - stretch it out like "keee-yooo-tsss-seee" - first in a whisper and then spoken in a feminine voice. Say "keep" and for the "p" sound, really tighten your lips into a small but narrow opening, and keep them tight as you touch your lips together briefly for a subtle, unobtrusive "p" sound. This applies to all your labial consonants - "p", "b", "m", "w", "f", "v" and so on - and you want to keep your lips somewhat tight even for your other consonants and vowels, because it will make them brighter.',
              ],
            },
            {
              heading: "Putting It All Together",
              body: [
                'Whisper and then say the whole thing, at a pitch that is about as high as you can comfortably speak without going into your falsetto. "Keep it cutesy!" You can stretch out all the sounds to really get a feel for them and find that brightest position. As you say the vowels, practice pushing the brightness to a buzzy, brassy extreme, raising your larynx, pushing the back of your tongue up, and layering on the vocal twang to find that harsh edge.',
                "The only thing you want to avoid is nasal resonance. So also try saying it while pinching your nose shut - it should sound almost the same, whether you pinch your nose or not. Practicing this will help you access and lock in your brightest, cutest vocal posture and pitch, just by saying the phrase!",
              ],
            },
            {
              heading: "More Mantra Phrases",
              body: [
                'Once you get comfortable with "Keep it cutesy," you can also try some other mantra phrases:',
                '"Keep calm and carry on." This mantra phrase is similar, but with some darker vowel sounds like "ahh" in "calm" which you can practice saying while still clenching your tongue up toward that initial "k" position. There are also "r" and "l" sounds to practice brightening, again, by pushing your tongue up at the same time. Practice whispering it, stretching it out, and saying it with the brightest sound you can make.',
                '"We\'re beautiful creatures." This one gives you a chance to practice bright vowels and consonants across a wider variety of sounds.',
                "Use your selected mantra before calls, meetings, or social interactions to quickly lock in your voice and improve consistency of voice launch.",
              ],
            },
          ],
          practice: [
            "5 minutes mantra warmup.",
            "10 minutes one-variable-at-a-time experimentation.",
            "5 minutes carryover speaking with mantra resets.",
          ],
          homework: [
            {
              id: "daily-mantras",
              text: "Use 2-3 mantra phrases daily before speaking drills.",
              type: "check",
            },
            {
              id: "stealth-phrase",
              text: "Create and practice one stealth reset phrase.",
              type: "check",
            },
            {
              id: "explore-log",
              text: "Log one successful configuration each day.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "mantra-warmup",
              type: "timer",
              text: "Mantra phrase warmup.",
              timerSeconds: 300,
              detail:
                'Say "Keep it cutesy!" several times, first in a whisper, then voiced. Stretch it out like "keee-p ihhh-t keee-yooo-tsss-seee" and focus on keeping your tongue pushed up toward the "k" position for maximum brightness. Watch this video (https://youtu.be/XNPPSd3AVwM) for the mantra phrase concept.',
            },
            {
              id: "experimentation",
              type: "timer",
              text: "One-variable-at-a-time experimentation.",
              timerSeconds: 600,
              detail:
                "Repeat your mantra phrase while adjusting one variable at a time: pitch, resonance, softness, twang, or articulation. Push the brightness to a buzzy extreme, then dial it back. Try pinching your nose shut - it should sound almost the same. Save the variant that sounds closest to your goal.",
            },
            {
              id: "carryover-speaking",
              type: "timer",
              text: "Carryover speaking with mantra resets.",
              timerSeconds: 300,
              detail:
                'Speak freely for a few minutes, then reset with your mantra phrase whenever you drift. Try the other mantras too: "Keep calm and carry on" for darker vowels, or "We\'re beautiful creatures" for a wider variety of sounds.',
            },
            {
              id: "stealth-phrase",
              type: "text",
              text: "Create and practice one stealth reset phrase.",
              prompt:
                "What short phrase can you use to reset your voice quickly in public?",
              detail:
                'Pick something you can say naturally in conversation, like "ummm, let\'s see..." or "ummm, so..." Use the "ummm" to find your pitch by sliding upward, then use "let\'s see" or "so" to find your resonance. Practice it until it feels automatic.',
            },
            {
              id: "explore-log",
              type: "text",
              text: "Log one successful voice configuration.",
              prompt:
                "What settings worked today? (pitch, resonance, softness, twang, articulation)",
              detail:
                "Note the specific combination of pitch, resonance, softness, twang, and articulation that felt sustainable and sounded closest to your target. You are building a map of your voice's possibility space.",
            },
            {
              id: "progress-check",
              type: "recording",
              text: "Record a progress clip and compare to last week.",
              detail:
                "Read your baseline script in your best current voice, using everything you have learned so far. Listen back and compare to last week's clip.",
              compareWith: { lessonId: "throat-closure", dayIndex: 4, taskId: "natural-pass", slotId: "default", label: "Last week (Week 6)" },
            },
          ],
          schedule: [
            ["mantra-warmup", "experimentation", "carryover-speaking"],
            ["mantra-warmup", "experimentation", "stealth-phrase"],
            [
              "mantra-warmup",
              "experimentation",
              "carryover-speaking",
              "explore-log",
            ],
            ["mantra-warmup", "experimentation"],
            [
              "mantra-warmup",
              "experimentation",
              "carryover-speaking",
              "explore-log",
              "progress-check",
            ],
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Polishing and Ear Training",
      levelFocus: "Level 4 polishing",
      overview:
        "This week is focused comparison work: targeted self-analysis, iterative retakes, and listening skill development.",
      outcomes: [
        "Perform structured self-analysis instead of vague self-critique.",
        "Prioritize changes by impact (pitch/resonance first).",
        "Build objective listening habits.",
      ],
      lessons: [
        {
          id: "polishing-feedback",
          title: "Polishing Through Structured Feedback",
          difficulty: "medium",
          duration: "25-35 min/day",
          summary:
            "Compare your recordings against references and iterate with specific adjustment goals.",
          sections: [
            {
              heading: "Time to Polish Your Voice",
              body: [
                "Once you feel comfortable playing with the many possibilities of your voice, you can start honing in on the feminine voice that you actually want! It is time to polish your voice.",
                "Remember that voice clip you chose in the beginning as the female voice you would like to imitate? Hopefully you have been listening to it regularly this whole time, but if not, now is the time to start!",
              ],
            },
            {
              heading: "Reference Comparison: Record, Listen, Adjust",
              body: [
                "Find that clip and play back a sentence or two. Then use the recording step in your practice to record yourself saying the same sentence. Listen to the reference clip and then your own recording, and without judging it as good or bad, try going through each element of your voice and noticing where it is similar or different. How does the pitch compare? The resonance? The intonation? And so on.",
                "If an element is different, try playing around with it a few times and then record yourself again, doing your best to match the reference clip. Do that for each element. It is not going to be perfect in one pass, but it is the polishing process that counts. And of course, you do not have to sound exactly like your inspiration voice - it is just a beacon that can help you find your way to the voice you want.",
              ],
            },
            {
              heading: "Train Your Ear on r/transvoice",
              body: [
                "You might find that it is difficult to deconstruct the differences in a voice clip just by listening to it. But do not worry! It is a skill you can practice, just like anything else. And fortunately, there is a great way to practice it...",
                "Every day, people post voice clips on r/transvoice, looking for feedback. And you are going to train your ear by listening to those clips, analyzing them, and responding with your kind and honest feedback. First, create an account on reddit.com (https://reddit.com) if you have not already.",
                "Then go to r/transvoice and find a voice clip that someone has recently posted. Listen to the clip and think about pitch - does it sound like the pitch is in the male range, or the female range, or somewhere in between? Open up Vocal Pitch Monitor and play the clip again, and see where the pitch actually falls. Then listen again while focusing on the resonance, the timbre of the voice. Does it sound hollow and masculine, or bright and feminine, or more ambiguously androgynous? You can watch this video (https://youtu.be/21ZfGPp-Ves) for reference - where would you place the sound on the diagram?",
              ],
            },
            {
              heading: "Giving Detailed Feedback",
              body: [
                "Once you have established the pitch and resonance, listen again for the other elements of the voice. Listen for intonation - is it monotone or musical? Listen for open quotient - is the voice soft, or hard and strained? Listen for vocal twang - is there a bright, piercing edge, and is it too little or too much? How is the articulation? Does the resonance drop or sound fake on certain vowels or consonants? Is there too much nasal resonance? Would it sound better with a little pharyngeal constriction?",
                "Make note of all your observations in a comment on the post. You do not have to say whether the voice sounds good or bad - just describe what you hear, starting with pitch and resonance, and then any other details you notice. If you are not sure about something, you do not have to say anything about it. Be kind and honest, and the community as a whole will benefit.",
                "Your homework is to find a new voice clip on r/transvoice every day (ideally one with no comments yet, or very few) and leave a comment with your analysis and suggestions. If you do this daily, not only will you develop a very discerning ear over time, you will also help the community thrive!",
              ],
            },
            {
              heading: "Sharing Your Own Voice",
              body: [
                "Also, spend some time every day listening to and imitating your female voice reference, along with all your other exercises. Record and play back your attempts, and analyze them just like you analyze the clips on r/transvoice. You may find that a voice that seems too exaggerated in your head actually sounds naturally feminine in a recording - and to other people. Be kind to yourself, and trust the process. Polishing takes time.",
                "When you are ready to share a clip of your own voice with the world, create a free account on clyp.it (https://clyp.it) and record yourself speaking at least a few sentences in your feminine voice, and perhaps a mantra phrase or two. If you are up for it, record the same thing in your starting voice as well, for comparison. Make sure to set the clip to Public, then post the link on r/transvoice and ask for feedback!",
                "Regardless of what people say, the important thing is to craft a voice that you are happy with. And you are the only one who gets to decide what that means for you.",
              ],
            },
          ],
          practice: [
            "Reference-vs-self comparison each day.",
            "At least two targeted retakes per session.",
            "Short written review after each session.",
          ],
          homework: [
            {
              id: "daily-analysis",
              text: "Complete one daily analysis + retake cycle.",
              type: "check",
            },
            {
              id: "feedback",
              text: "Give one technical feedback response (optional).",
              type: "check",
            },
            {
              id: "weekly-review",
              text: "Write weekly review: 2 wins + 1 focus area.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "comparison",
              type: "recording",
              text: "Record yourself and compare to your reference voice.",
              detail:
                "Play back a sentence or two from your reference voice, then record yourself saying the same sentence. Listen back and compare element by element: pitch, resonance, intonation, softness, articulation. See this video (https://youtu.be/21ZfGPp-Ves) for a resonance reference diagram.",
            },
            {
              id: "retakes",
              type: "recording",
              text: "Record at least two targeted retakes.",
              detail:
                "If an element differs from your reference, adjust it, re-record, and compare again. Change only one or two variables per retake so you can attribute improvement to a specific action. It will not be perfect in one pass - the polishing process is what counts.",
              compareWith: { lessonId: "exploration-mantras", dayIndex: 4, taskId: "progress-check", slotId: "default", label: "Last week (Week 7)" },
            },
            {
              id: "session-review",
              type: "text",
              text: "Short written review after this session.",
              prompt: "What improved? What to adjust in the next retake?",
              detail:
                "Also try analyzing a voice clip on r/transvoice today. Listen for pitch, resonance, intonation, open quotient, twang, articulation, and nasality. Leave a kind and honest comment describing what you hear.",
            },
            {
              id: "community-feedback",
              type: "check",
              text: "Analyze a voice clip on r/transvoice.",
              detail:
                "Find a recent voice clip on r/transvoice (ideally one with few comments). Listen and analyze it element by element: pitch, resonance, intonation, open quotient, twang, articulation, nasality. Leave a kind, honest comment describing what you hear. This trains your ear to notice the same things in your own voice. See this video (https://youtu.be/21ZfGPp-Ves) for a resonance reference diagram.",
            },
            {
              id: "weekly-review",
              type: "text",
              text: "Weekly review: 2 wins and 1 focus area.",
              prompt:
                "List 2 things that improved this week and 1 bottleneck to address next.",
              detail:
                "When you are ready, create a free account on clyp.it (https://clyp.it) and record a few sentences in your feminine voice. Post the link on r/transvoice and ask for feedback. The important thing is to craft a voice that you are happy with.",
            },
          ],
          schedule: [
            ["comparison", "retakes", "session-review", "community-feedback"],
            ["comparison", "retakes", "community-feedback"],
            ["comparison", "retakes", "session-review", "community-feedback"],
            ["comparison", "retakes", "community-feedback"],
            [
              "comparison",
              "retakes",
              "session-review",
              "community-feedback",
              "weekly-review",
            ],
          ],
        },
      ],
    },
    {
      id: 9,
      title: "Performance Transition",
      levelFocus: "Level 4 performance (part 1)",
      overview:
        "This week shifts from private practice to controlled real interactions using graded exposure and launch routines.",
      outcomes: [
        "Improve ability to launch target voice without long warmups.",
        "Use graded social exposure to reduce anxiety.",
        "Keep target voice stable longer in live interaction.",
      ],
      lessons: [
        {
          id: "performance-prep",
          title: "Performance Preparation and Launch Training",
          difficulty: "hard",
          duration: "20-30 min/day + short live reps",
          summary:
            "Build reliable start-up and transition into real conversational use.",
          sections: [
            {
              heading: "From Practice to Performance",
              body: [
                "Eventually, there will come a time when you are pretty happy with your voice, and you want to be able to start using it in front of other people. It might not be perfect, but you feel compelled to tackle what may be the most challenging step of all: going from practice to performance.",
                "There are two parts to this. One is learning to launch into your feminine voice whenever you choose, even when you have not warmed up. And the other is getting over the performance anxiety of using your voice in front of other people - which is totally normal! You just have to take it one step at a time.",
              ],
            },
            {
              heading: "Bookending Your Day",
              body: [
                "To start with, you want to train your brain to experience your feminine voice as the default, not the exception. One way to do this is by bookending your day with your voice, by practicing a few mantra phrases in your feminine voice immediately after waking up, before using your voice for anything else, and then again as the last thing you do before going to sleep.",
                "The morning is often the hardest time to feminize your voice, so this will allow you to practice that worst-case scenario right away and prime the rest of your day with the voice you want. Also, whatever you practice just before sleeping will be given higher priority when your experiences are consolidated into long-term memory.",
              ],
            },
            {
              heading: "Alternating Voices and Stealth Mantras",
              body: [
                "Take some time every day to practice alternating between your masculine starting voice and your feminine voice. Read a book out loud and switch voices on every paragraph, or read reddit comment threads and use one voice for the original poster and another for the replies. If you tend to drift from your feminine voice into a more androgynous voice over time, you can also practice alternating between your feminine and androgynous voices to help differentiate them in your mind.",
                'To make it easier to shift into your feminine voice, you can start with a mantra phrase to help you lock in the sound. This is something you can even do in front of other people, if you whisper it or practice a stealth mantra phrase, like "ummm, let\'s see..." or "ummm, so..." You can use the "ummm" to find the pitch, sliding upward until you reach the right range, and then use the "let\'s see..." or "so..." to find your resonance. Sneaky!',
              ],
            },
            {
              heading: "The Exposure Ladder",
              body: [
                "First, find a supportive friend or two, and tell them that you would like their help in practicing your voice. If you do not feel comfortable asking anyone you know, you can try finding an anonymous friend on the TransVoice Discord (https://discord.gg/FAmXNEJ) or the Scinguistics Discord (https://discord.gg/RjatswF). Tell them that you would like to be able to call them up and have a conversation in your feminine voice, without having to explain yourself, and without them commenting on whether your voice is good or bad. You just need them to listen and be patient with you.",
                "Then, when you have warmed up by practicing your voice in private, call your friend and speak to them in your feminine voice. If all you can do is say a mantra phrase before lapsing into your starting voice, that is awesome! You have overcome the biggest hurdle. Next time you feel up for it, you can try speaking a little longer, whether you are just reading out loud, or having an entire conversation. And do not worry about whether your voice sounds perfect or not - you can work on that by yourself. Just focus on getting comfortable using your voice with another person.",
                "Once you feel comfortable calling your friend from the middle of a practice session, start challenging yourself a little more. Try meeting up with your friend in person and then, with your backs turned to each other, say a mantra phrase in your feminine voice. Then try doing it while facing each other. Eventually, you can work your way up to having an entire conversation in person, not only in private, but in a public place like a restaurant!",
              ],
            },
          ],
          practice: [
            "Morning/evening 3-minute activation.",
            "10 minutes alternating-voice paragraph drills.",
            "One short live interaction attempt.",
          ],
          homework: [
            {
              id: "bookend",
              text: "Complete morning + evening activation daily.",
              type: "check",
            },
            {
              id: "alternating",
              text: "Do alternating-voice reading every day.",
              type: "check",
            },
            {
              id: "live-rep",
              text: "Complete one live target-voice interaction.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "activation",
              type: "timer",
              text: "Morning/evening 3-minute activation drill.",
              timerSeconds: 180,
              detail:
                "Do this step twice daily: once immediately after waking up and once before going to sleep. Practice a few mantra phrases in your feminine voice each time. The morning is the hardest time, so this primes your day. Whatever you practice before sleeping gets higher priority in long-term memory consolidation.",
            },
            {
              id: "alternating-voice",
              type: "timer",
              text: "Alternating-voice paragraph drills.",
              timerSeconds: 600,
              detail:
                "Read a book aloud and switch between your masculine and feminine voices on every paragraph, or use one voice for original posts and another for replies on a reddit thread. This builds intentional switching and reduces drift between voices.",
            },
            {
              id: "live-rep",
              type: "check",
              text: "Complete one short live target-voice interaction.",
              detail:
                "Find a supportive friend, or an anonymous friend on the TransVoice Discord (https://discord.gg/FAmXNEJ) or Scinguistics Discord (https://discord.gg/RjatswF). Call them after warming up and speak in your feminine voice. Even a single mantra phrase counts - you have overcome the biggest hurdle just by starting.",
            },
            {
              id: "progress-check",
              type: "recording",
              text: "Record a progress clip and compare to last week.",
              detail:
                "Read your baseline script in your feminine voice without warming up first. Compare to last week's clip to hear your incremental progress.",
              compareWith: { lessonId: "polishing-feedback", dayIndex: 4, taskId: "retakes", slotId: "default", label: "Last week (Week 8)" },
            },
          ],
          schedule: [
            ["activation", "alternating-voice"],
            ["activation", "alternating-voice"],
            ["activation", "alternating-voice", "live-rep"],
            ["activation", "alternating-voice"],
            ["activation", "alternating-voice", "progress-check"],
          ],
        },
      ],
    },
    {
      id: 10,
      title: "Real-World Carryover",
      levelFocus: "Level 4 performance (part 2)",
      overview:
        "Final week focuses on durability in noisy/public settings and long-term maintenance with vocal health safeguards.",
      outcomes: [
        "Maintain intelligibility in noise without pressing.",
        "Use twang strategically for projection efficiency.",
        "Create a 30-day maintenance plan.",
      ],
      lessons: [
        {
          id: "public-carryover",
          title: "Public Use, Durability, and Maintenance",
          difficulty: "hard",
          duration: "variable (2+ field sessions)",
          summary:
            "Transition target voice into everyday contexts while preserving long-term vocal health.",
          sections: [
            {
              heading: "Speaking Over Noise Without Straining",
              body: [
                "When you are out in the real world, it is often difficult to be heard over all the background noise. The important thing is to use more vocal twang instead of straining, while keeping your voice soft with open quotient. Pressed loudness increases fatigue and instability, so lean on efficient clarity - light twang plus clear articulation - rather than shouting.",
                "You can practice this on your own by playing this video (https://youtu.be/jAg6tyC9Xxc) and trying to speak over it. Run short field sessions first, then extend duration as consistency improves.",
              ],
            },
            {
              heading: "Expanding Into Everyday Life",
              body: [
                "As you get more confident, you can start using your feminine voice more and more throughout your life - even while coughing and laughing, as in this video (https://youtu.be/_DP6KB5j2qQ) or this video (https://youtu.be/IP-mRByleSc). Love yourself, and enjoy the journey!",
                "If you need ongoing support, the TransVoice Discord (https://discord.gg/FAmXNEJ) and the Scinguistics Discord (https://discord.gg/RjatswF) are great communities where you can find practice partners, get feedback, and share your progress.",
              ],
            },
            {
              heading: "Vocal Health and Recovery",
              body: [
                "Hydration, voice rest when symptomatic, and avoiding extended misuse during hoarseness are essential. Drink water throughout your practice and daily life.",
                "If persistent hoarseness, pain, or vocal loss appears, reduce load and consider evaluation with a qualified voice clinician. Individualized support is recommended for recurring symptoms.",
              ],
            },
            {
              heading: "Your 30-Day Maintenance Plan",
              body: [
                "Define weekly minimums: warmup frequency, speaking reps, recording check-ins, and recovery days. Maintenance prevents regression. A good starting point is a short warmup most days, one or two longer practice sessions per week, a recording comparison once a week, and at least one rest day.",
                "Keep listening to your reference voice regularly, and keep analyzing clips on r/transvoice to maintain your ear. Regardless of what anyone else says, the important thing is to craft a voice that you are happy with. And you are the only one who gets to decide what that means for you.",
              ],
            },
          ],
          practice: [
            "Two public-context reps this week (5-15 min each).",
            "Post-session cooldown + symptom check each time.",
            "Weekly planning session for next 30 days.",
          ],
          homework: [
            {
              id: "public-reps",
              text: "Complete 2 public practice sessions.",
              type: "check",
            },
            {
              id: "health-checklist",
              text: "Complete vocal health checklist this week.",
              type: "check",
            },
            {
              id: "maintenance-plan",
              text: "Write your 30-day maintenance plan.",
              type: "check",
            },
          ],
          workflow: [
            {
              id: "health-checklist",
              type: "check",
              text: "Complete vocal health checklist.",
              detail:
                "Check in on hydration, any hoarseness or fatigue, and whether you need a recovery day. If persistent hoarseness, pain, or vocal loss appears, reduce load and consider evaluation with a qualified voice clinician.",
            },
            {
              id: "public-rep",
              type: "check",
              text: "Complete a public-context practice session (5-15 minutes).",
              detail:
                "Use your feminine voice in a real-world setting. Use vocal twang for projection instead of straining. You can practice speaking over background noise with this video (https://youtu.be/jAg6tyC9Xxc). Try extending to coughing and laughing in voice, as in this video (https://youtu.be/_DP6KB5j2qQ) or this video (https://youtu.be/IP-mRByleSc).",
            },
            {
              id: "cooldown-check",
              type: "text",
              text: "Post-session cooldown and symptom check.",
              prompt:
                "How did it go? Any fatigue, strain, or voice breaks? What worked well?",
              detail:
                "Note what worked and what did not. If you need support or practice partners, check out the TransVoice Discord (https://discord.gg/FAmXNEJ) or the Scinguistics Discord (https://discord.gg/RjatswF).",
            },
            {
              id: "maintenance-plan",
              type: "text",
              text: "Write your 30-day maintenance plan.",
              prompt:
                "Weekly minimums: warmup frequency, speaking reps, recording check-ins, recovery days.",
              detail:
                "Plan a short warmup most days, one or two longer practice sessions per week, a recording comparison once a week, and at least one rest day. Keep listening to your reference voice and analyzing clips on r/transvoice to maintain your ear.",
            },
            {
              id: "final-recording",
              type: "recording",
              text: "Record your final progress clip and compare to your baseline.",
              detail:
                "Read the same baseline script you recorded in Week 1. This is your before-and-after. Listen to both and note every element that has changed: pitch, resonance, intonation, softness, articulation, twang, and throat closure.",
              compareWith: { lessonId: "inspiration-baseline", dayIndex: 1, taskId: "baseline-recording", slotId: "reading", label: "Your baseline (reading)" },
              slots: [
                { id: "intro", label: "Casual self-introduction" },
                { id: "reading", label: "Reading paragraph" },
                { id: "spontaneous", label: "Spontaneous speech" },
              ],
            },
          ],
          schedule: [
            ["health-checklist"],
            ["public-rep", "cooldown-check"],
            ["public-rep", "cooldown-check"],
            ["maintenance-plan", "final-recording"],
          ],
        },
      ],
    },
  ],
  recurring: [
    {
      id: "daily-maintenance",
      title: "Daily Maintenance",
      startAfterLesson: "vocal-tract-length",
      recurring: true,
      workflow: [
        {
          id: "siren-maintenance",
          type: "timer",
          text: "Whisper siren maintenance (2 minutes).",
          timerSeconds: 120,
          detail:
            'Continue building larynx control with whisper sirens. Smoothly slide from a big dog "uhh" to a small dog "ehh" in a whisper, feeling your larynx rise. Hold briefly at the top, then release. Do additional sets throughout the day whenever you have a private moment. See the whisper siren video (https://youtu.be/F6Noi2qERus) for a refresher.',
        },
        {
          id: "health-check",
          type: "text",
          text: "Quick vocal health check.",
          prompt:
            "Any hoarseness, fatigue, strain, or pain? Rate 0-10.",
          detail:
            "Check in on your vocal health. Mild fatigue is normal when building new muscles; pain and persistent hoarseness are signs to back off and recover. Drink water and note any adjustments you need to make.",
        },
      ],
      schedule: [["siren-maintenance", "health-check"]],
    },
  ],
};

export function getAllLessons() {
  const lessons = course.weeks.flatMap((week) =>
    week.lessons.map((lesson, index) => ({
      ...lesson,
      weekId: week.id,
      weekTitle: week.title,
      lessonNumber: index + 1,
    })),
  );

  for (const rec of course.recurring ?? []) {
    lessons.push({
      ...rec,
      weekId: null,
      weekTitle: null,
      lessonNumber: null,
    });
  }

  return lessons;
}

export function getWeek(weekId) {
  return course.weeks.find((week) => String(week.id) === String(weekId));
}

export function getLesson(weekId, lessonId) {
  const rec = (course.recurring ?? []).find((r) => r.id === lessonId);
  if (rec) return { ...rec, weekId: null, weekTitle: null };

  const week = getWeek(weekId);
  if (!week) return null;
  const lesson = week.lessons.find((item) => item.id === lessonId);
  if (!lesson) return null;

  return {
    ...lesson,
    weekId: week.id,
    weekTitle: week.title,
  };
}

function toId(text, prefix) {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 48);
  return `${prefix}-${slug || "item"}`;
}

function firstNumber(text) {
  const match = text.match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

function inferHomeworkTarget(item) {
  if (typeof item.target === "number") return item.target;
  const text = item.text.toLowerCase();
  if (item.type === "links") return 2;
  if (text.includes("at least 5 days") || text.includes("5 days")) return 5;
  if (text.includes("daily") || text.includes("every day")) return 5;
  if (
    text.includes("weekly") ||
    text.includes("one") ||
    text.includes("baseline clip") ||
    text.includes("best effort") ||
    text.includes("maintenance plan")
  )
    return 1;
  if (text.includes("3 ") || text.includes("three")) return 3;
  if (text.includes("2 ") || text.includes("two")) return 2;
  return 3;
}

function inferPracticeTarget(text) {
  const value = firstNumber(text);
  if (
    text.toLowerCase().includes("daily") ||
    text.toLowerCase().includes("every day")
  )
    return 5;
  if (value && value <= 7) return value;
  return 1;
}

function inferPracticeDurationSeconds(text) {
  const lower = text.toLowerCase();
  const range = lower.match(/(\d+)\s*-\s*(\d+)\s*min/);
  if (range) return Number(range[1]) * 60;
  const minuteMatch = lower.match(/(\d+)\s*min/);
  if (minuteMatch) return Number(minuteMatch[1]) * 60;
  return 300;
}

export function getWorkflowItems(lesson) {
  const schedule = lesson.schedule ?? [];
  return (lesson.workflow ?? []).map((task) => ({
    ...task,
    target: schedule.filter((day) => day.includes(task.id)).length,
    ...(task.type === "recording" && !task.slots
      ? { slots: [{ id: "default", label: "Recording" }] }
      : {}),
  }));
}

/**
 * Returns the tasks for a given lesson day, handling recurring lessons
 * that cycle through the same schedule indefinitely.
 */
export function getScheduleForDay(lesson, lessonDay) {
  const schedule = lesson.schedule ?? [];
  if (schedule.length === 0) return [];
  if (lesson.recurring) return schedule[lessonDay % schedule.length] ?? [];
  return lessonDay < schedule.length ? schedule[lessonDay] : [];
}

/**
 * Returns the full course day schedule. Each entry represents one calendar day:
 * { weekId, newReads: [lessonId], sessions: [{lessonId, lessonDay}] }
 *
 * Within a week, lesson i starts on offset i (one new lesson per day).
 * Practice sessions run in parallel after that.
 * Recurring task groups are injected starting the day after their source
 * lesson's practice ends.
 */
export function getCourseDays() {
  const days = [];
  const readSoFar = [];

  for (const week of course.weeks) {
    const metas = week.lessons.map((lesson, i) => ({
      id: lesson.id,
      startOffset: i,
      scheduleLength: (lesson.schedule ?? []).length,
    }));

    const weekLength = Math.max(
      ...metas.map((m) => m.startOffset + m.scheduleLength),
    );

    for (let d = 0; d < weekLength; d++) {
      const newReads = [];
      const sessions = [];

      for (const m of metas) {
        if (d === m.startOffset) {
          newReads.push(m.id);
          readSoFar.push(m.id);
        }
        const lessonDay = d - m.startOffset;
        if (lessonDay >= 0 && lessonDay < m.scheduleLength) {
          sessions.push({ lessonId: m.id, lessonDay });
        }
      }

      days.push({
        weekId: week.id,
        readLessons: [...readSoFar],
        newReads,
        sessions,
      });
    }
  }

  // Inject recurring sessions after source lesson practice ends
  for (const rec of course.recurring ?? []) {
    let lastPracticeDay = -1;
    for (let i = 0; i < days.length; i++) {
      if (days[i].sessions.some((s) => s.lessonId === rec.startAfterLesson)) {
        lastPracticeDay = i;
      }
    }

    let recurringDay = 0;
    for (let i = lastPracticeDay + 1; i < days.length; i++) {
      days[i].sessions.push({
        lessonId: rec.id,
        lessonDay: recurringDay++,
      });
    }
  }

  return days;
}

export function getHomeworkItems(lesson) {
  return lesson.homework.map((item) => ({
    ...item,
    target: inferHomeworkTarget(item),
  }));
}

export function getPracticeItems(lesson) {
  return lesson.practice.map((text) => ({
    id: toId(text, "drill"),
    text,
    target: inferPracticeTarget(text),
    timerSeconds: inferPracticeDurationSeconds(text),
  }));
}

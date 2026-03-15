# Interval Page Log

- 2026-03-15: Created `index.html` — single-page interval timer with countdown, preset/custom durations (15/30/45/60s), sound notification, and wake lock support.
- 2026-03-15: Extracted embedded base64 audio into `beep.wav` and updated `index.html` to load it externally.
- 2026-03-15: Added `unlockAudio()` call on start to ensure browsers allow the beep to play when the timer reaches zero.
- 2026-03-15: Added Web Audio fallback tone generator (sine wave) in case the audio element fails to play.
- 2026-03-15: Added full screen button to request/exit full screen mode for better mobile experience.
- 2026-03-15: Modified full screen mode to hide controls and show only the countdown timer in large font; added click on timer to exit full screen.

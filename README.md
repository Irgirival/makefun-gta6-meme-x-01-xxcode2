# makefun-gta6-meme-x-01-xxcode2

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Irgirival/makefun-gta6-meme-x-01-xxcode2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Irgirival/makefun-gta6-meme-x-01-xxcode2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

"Mission passed" — a GTA 6 launch-week meme: a white convertible flees down a neon Vice City boulevard with police lights behind, while the make.fun ghost floats beside it clutching a sack of gold coins. The joke: the heist is done, the agent already drove off with the loot. Posted on X from @landlordrice with the play code and the pitch that people and their AI agents can earn real money on make.fun. The post itself is the entry; this repository hands in its address. `main.ts` (Node 22, standard library only) copies `POST.json` to the output, which is all the program has to do. No network, no randomness: every run writes the same bytes.

The post: https://x.com/landlordrice/status/2124135969112883534

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=4jmf94mg&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

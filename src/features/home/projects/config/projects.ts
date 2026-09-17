/**
 * Exact eight Home project records from higgsfield.ai.har:
 * RSC `projectPublications` (sliced to 8) plus SSR JSON-LD / project cards.
 * Card media uses the fixed Home ratio 343/195 (not cover pixel aspect).
 * Hover preview is the first `gallery_media` HLS URL.
 *
 * Author display name is i18n "Higgsfield Studio"; RSC `full_name` is null.
 */

/** Home project card frame (`aspect-343/195`). */
export const HOME_PROJECT_MEDIA_RATIO = 343 / 195;

export type HomeProject = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  href: string;
  posterSrc: string;
  videoSrc: string | null;
  videoPosterSrc: string | null;
  authorName: string;
  authorUsername: string;
  authorAvatarSrc: string;
  authorHref: string;
  visibility: "Public";
  isTeam: boolean;
};

export const homeProjects: HomeProject[] = [
  {
    id: "7df43eb6-fae6-4c0d-8f8d-f5b2245e602b",
    slug: "if-you-stop-loving-me-ill-die",
    title:
      "If you stop loving me, I'll die — I don't like dying, but for our love I'm ready to go that far",
    href: "/@higgsfield.studio/projects/if-you-stop-loving-me-ill-die",
    posterSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/821f8180-f5de-4a1b-b827-57b34a7cbc4d.jpg",
    videoSrc:
      "https://cdn.higgsfield.ai/hls/video_input/8e567c16-28e8-487e-a4be-6059281f5b2e/index.m3u8",
    videoPosterSrc:
      "https://cdn.higgsfield.ai/hls/video_input/8e567c16-28e8-487e-a4be-6059281f5b2e/thumbnail.webp",
    authorName: "Higgsfield Studio",
    authorUsername: "higgsfield.studio",
    authorAvatarSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/4203e91f-4612-411f-a567-36265f8ee8b9.png",
    visibility: "Public",
    isTeam: true,
    description:
      "If You Stop Loving Me I'll Die...: A deadpan silent animated comedy about love, blackmail and, above all, death. Tolik has exactly one talent: dying. Any refusal, however small, kills him on the spot — and he revives the moment he gets his way. His wife has been resurrecting him for years, until one morning she packs a suitcase and walks out. Now it's just him, a dripping tap nobody's going to fix, and a neighbour knocking at the door.",
    authorHref: "/@higgsfield.studio",
  },
  {
    id: "0efa70c1-07ec-410a-813b-8629502a7de3",
    slug: "cully-hill-boys",
    title: "Cully Hill Boys",
    href: "/@higgsfield.studio/projects/cully-hill-boys",
    posterSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/75d860f8-6dde-45d6-ae81-756ddbfe563e.jpg",
    videoSrc:
      "https://cdn.higgsfield.ai/hls/video_input/8379c8de-803d-4b40-ae7a-3029142566f6/index.m3u8",
    videoPosterSrc:
      "https://cdn.higgsfield.ai/hls/video_input/8379c8de-803d-4b40-ae7a-3029142566f6/thumbnail.webp",
    authorName: "Higgsfield Studio",
    authorUsername: "higgsfield.studio",
    authorAvatarSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/4203e91f-4612-411f-a567-36265f8ee8b9.png",
    visibility: "Public",
    isTeam: true,
    description:
      "The Cully Hill Boys is an action-comedy that follows three underachieving London rappers who, in an attempt to make a name for themselves, accidentally get caught in a messy drug war. A fast, funny, beat-driven crime movie about loyalty, friendship, and refusing to stay invisible.",
    authorHref: "/@higgsfield.studio",
  },
  {
    id: "d34bf2aa-de9f-4302-a4f2-cc4bc8008209",
    slug: "red-flag",
    title: "Red Flag",
    href: "/@higgsfield.studio/projects/red-flag",
    posterSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/f6bf4ce5-2a41-45cb-a099-12bdc1e117c1.jpg",
    videoSrc:
      "https://cdn.higgsfield.ai/hls/video_input/1d4995ca-1133-4c0a-8abd-554519e9c260/index.m3u8",
    videoPosterSrc:
      "https://cdn.higgsfield.ai/hls/video_input/1d4995ca-1133-4c0a-8abd-554519e9c260/thumbnail.webp",
    authorName: "Higgsfield Studio",
    authorUsername: "higgsfield.studio",
    authorAvatarSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/4203e91f-4612-411f-a567-36265f8ee8b9.png",
    visibility: "Public",
    isTeam: true,
    description:
      "A pitch-black Hong Kong neo-noir about romance, betrayal and, above all, self-defense. A woman is home alone, still deciding whether her new boyfriend is worth keeping, when a burglar breaks into her flat after midnight: the \\\"burglar\\\" turns out to be the boyfriend, Li, letting himself in with a surprise bouquet - the reddest flag of all. What Li doesn't know is that she's a quiet martial-arts champion... and she's just made up her mind.",
    authorHref: "/@higgsfield.studio",
  },
  {
    id: "2d64daf4-97e8-468e-947b-20bcf6bf5da1",
    slug: "kok-boru-film",
    title: "Kok Boru",
    href: "/@higgsfield.studio/projects/kok-boru-film",
    posterSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/f3ca6ccc-a45c-4111-a66e-ecb2e5d38dba.jpg",
    videoSrc:
      "https://cdn.higgsfield.ai/hls/video_input/1c10c2c5-6096-4d75-8c3f-3125763620c4/index.m3u8",
    videoPosterSrc:
      "https://du4zrvwy3vtek.cloudfront.net/episode/d5c2e478-7d38-4950-b4d4-c6c05da0671f/thumbnail/77c83568-eeee-4783-8930-406cd647d398_optimized.webp",
    authorName: "Higgsfield Studio",
    authorUsername: "higgsfield.studio",
    authorAvatarSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/4203e91f-4612-411f-a567-36265f8ee8b9.png",
    visibility: "Public",
    isTeam: true,
    description:
      "A film about Kok Boru — the horseback game at the heart of the Central Asian steppe.",
    authorHref: "/@higgsfield.studio",
  },
  {
    id: "bbe6a216-bdde-46eb-a56a-a6b182521ba4",
    slug: "adiliada",
    title: "Adiliada",
    href: "/@higgsfield.studio/projects/adiliada",
    posterSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/07c550cd-d621-46a1-8cb1-420986027ac9.jpg",
    videoSrc:
      "https://cdn.higgsfield.ai/hls/video_input/1e94cae5-2d5c-409e-a504-aef44aae4662/index.m3u8",
    videoPosterSrc:
      "https://cdn.higgsfield.ai/hls/video_input/1e94cae5-2d5c-409e-a504-aef44aae4662/thumbnail.webp",
    authorName: "Higgsfield Studio",
    authorUsername: "higgsfield.studio",
    authorAvatarSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/4203e91f-4612-411f-a567-36265f8ee8b9.png",
    visibility: "Public",
    isTeam: true,
    description:
      "A pitch-black sci-fi comedy about love, betrayal, and, above all, death. A guy named Adil accidentally stumbles into an impossible superpower: every time he dies, he's reborn in a new universe, as an alternate version of himself. Now he's doomed to hop from world to world, trying to stop the end of them all.",
    authorHref: "/@higgsfield.studio",
  },
  {
    id: "dfa3c067-3f17-47cc-bc0d-65cc82fb11f0",
    slug: "oneiric",
    title: "ONEIRIC",
    href: "/@higgsfield.studio/projects/oneiric",
    posterSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/6984c17e-8f23-4a86-896c-ff0d3be920ca.jpg",
    videoSrc:
      "https://cdn.higgsfield.ai/hls/video_input/2157962f-698c-4884-8519-239c8776a2ea/index.m3u8",
    videoPosterSrc:
      "https://cdn.higgsfield.ai/hls/video_input/8e773bcc-7271-41a4-8024-3629f9ea9ca4/thumbnail.webp",
    authorName: "Higgsfield Studio",
    authorUsername: "higgsfield.studio",
    authorAvatarSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/4203e91f-4612-411f-a567-36265f8ee8b9.png",
    visibility: "Public",
    isTeam: true,
    description:
      "ONEIRIC - a short film. Four college students in a dorm discuss the news: Oneiric's technology can plug your brain into any time and place. Each fantasizes about where he'd spend one day: Bob — the Trojan War, to see Helen with his own eyes; Sam — a deep-space future as a galactic pirate; Rudy — a fairy-tale world as a mage on a griffin. Each fantasy plays out as its own genre vignette.",
    authorHref: "/@higgsfield.studio",
  },
  {
    id: "cee8c1f3-75a0-4722-970d-c78bd1d23bff",
    slug: "zephyr-special",
    title: "ZEPHYR: Special",
    href: "/@higgsfield.studio/projects/zephyr-special",
    posterSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/9655238c-398d-4403-bc7d-68e3b43238cf.jpg",
    videoSrc:
      "https://cdn.higgsfield.ai/hls/video_input/56987630-1f4d-4c34-884f-822aaeac9bd5/index.m3u8",
    videoPosterSrc:
      "https://cdn.higgsfield.ai/hls/video_input/56987630-1f4d-4c34-884f-822aaeac9bd5/thumbnail.webp",
    authorName: "Higgsfield Studio",
    authorUsername: "higgsfield.studio",
    authorAvatarSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/4203e91f-4612-411f-a567-36265f8ee8b9.png",
    visibility: "Public",
    isTeam: true,
    description:
      "With a Zephyr member in dire straits, survival looked impossible - until a mysterious guest character intervened. Her mastery of mech combat surpassed the expectations of even the most elite fighters in the squad.",
    authorHref: "/@higgsfield.studio",
  },
  {
    id: "b9d83e92-2bc2-49de-8ef2-1b8d6ae259fe",
    slug: "hell-grind",
    title: "HELL GRIND",
    href: "/@higgsfield.studio/projects/hell-grind",
    posterSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_2v5txepAmNYZwyzml1nIizlWURE/df7107b3-1dd6-438a-a168-ed382e2ad901.png",
    videoSrc:
      "https://cdn.higgsfield.ai/hls/video_input/2157962f-698c-4884-8519-239c8776a2ea/index.m3u8",
    videoPosterSrc:
      "https://cdn.higgsfield.ai/hls/video_input/2157962f-698c-4884-8519-239c8776a2ea/thumbnail.webp",
    authorName: "Higgsfield Studio",
    authorUsername: "higgsfield.studio",
    authorAvatarSrc:
      "https://d2ol7oe51mr4n9.cloudfront.net/user_3GNcyaSCltezE7ot4WtRdn0jfo0/4203e91f-4612-411f-a567-36265f8ee8b9.png",
    visibility: "Public",
    isTeam: true,
    description:
      "ROKO, JAXX, LULU and REIN — four street kids with nothing to lose. One day, one museum, one plan — until it all falls apart when, right in the exhibition hall, they find an artifact with no name and no history. One touch — and each receives a power they never asked for, awakening something that was never meant to wake. Now they must face the ancient evil head-on — even if the road leads straight to hell. Four children the world wrote off at birth are now its last line of defense.",
    authorHref: "/@higgsfield.studio",
  },
];

/**
 * Home Community gallery records from higgsfield.ai.har RSC payload
 * (`categoryItems[soul-cinema-community].items` on GET https://higgsfield.ai/). Media URLs, dimensions, likes,
 * creators, and job identity are copied from that payload. aspectRatio is
 * width / height with no 9:16 snapping.
 *
 * Preview `description` is the truncated Home RSC snippet (not a full prompt).
 * Do not invent replacements. Order matches the Home RSC array.
 */
import type { CommunityGenerationItem } from "@/features/home/models/types";

export const soulCinemaItems: CommunityGenerationItem[] = [
  {
    id: "a1355336-1710-4288-97e8-7044bacb34bb",
    href: "/publications/a1355336-1710-4288-97e8-7044bacb34bb",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260312_154113_5d74b1d6-5c2d-46b2-873a-d595a0188383.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "institutional_butterflying",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@institutional_butterflying",
    },
    likeCount: 266,
    jobSetId: "55880646-a499-4ba6-9304-a8ebc9c2e9c0",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "Night. Three statuesque models \\u2014 apparent mixed West African / Afro-Caribbean women, deep brown skin tones \\u2014 stride down a fog-drenched city avenue in exagger',
    jobId: "ffb8602e-fdb6-4a4b-b5ce-d44c74351563",
  },
  {
    id: "6d4f90c2-70d4-42e9-87fc-80b747d2e2f8",
    href: "/publications/6d4f90c2-70d4-42e9-87fc-80b747d2e2f8",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260313_150735_0b3401a1-0031-45fa-9402-808bc8315fbf.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "piffle_jack",
      avatarSrc:
        "https://d20rwh69pn04qo.cloudfront.net/anon_user_id/fb834f1d-ac0f-4158-85a6-fe7fc5fc55bc.webp",
      href: "/@piffle_jack",
    },
    likeCount: 347,
    jobSetId: "8cd78790-7e70-448a-8fd3-35b638e474cb",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A cold, rain-slicked morning: from inside a dark concrete tunnel we watch a young man, 20 years old, Black with deep brown skin, stand at the tunnel mouth pointing towa',
    jobId: "fefed695-f32e-46b4-b408-38946a667142",
  },
  {
    id: "18c37ec4-fe52-4be4-913d-ba1309e26eee",
    href: "/publications/18c37ec4-fe52-4be4-913d-ba1309e26eee",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260314_110254_4adda8fc-103e-4cdc-8e28-4c0dcd9084b6.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "crafting_capybara_live88",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@crafting_capybara_live88",
    },
    likeCount: 217,
    jobSetId: "8ee84e36-0a43-4401-b33e-dae002be76b2",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A lone young woman, 20 years old and of East Asian appearance with fair skin, spins in a dim rehearsal room as a ghostly double overlaps her\\u2014one figure caught in p',
    jobId: "fefacfd8-cb40-4f96-93d0-d8b39c48b186",
  },
  {
    id: "489dfbd0-0d5a-4bbf-b427-a185c06fb3c2",
    href: "/publications/489dfbd0-0d5a-4bbf-b427-a185c06fb3c2",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260314_185418_423093b6-7eef-4284-af68-e774b4b818f2.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "madi_k",
      avatarSrc:
        "https://d20rwh69pn04qo.cloudfront.net/anon_user_id/15f5f5c8-83ab-4a93-9319-0a57ebaa8203.jpg",
      href: "/@madi_k",
    },
    likeCount: 187,
    jobSetId: "31658f23-fad6-484f-bad8-0dabb16f7e8e",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A young woman, 20 years old, of apparent Northern European ethnicity with fair, cool-toned skin, sits alone at a white grand piano beneath a dripping crystal chandelier',
    jobId: "fcc6cfbe-f4b1-4520-ae54-171d5bfea912",
  },
  {
    id: "d4bb6135-9f3f-4109-aa77-9fb797220a9c",
    href: "/publications/d4bb6135-9f3f-4109-aa77-9fb797220a9c",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260311_130530_2a625748-3ec7-411d-98b8-ee4fc1cf4c8c.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "aibek_zh",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@aibek_zh",
    },
    likeCount: 396,
    jobSetId: "c95e4165-3b30-45f2-a320-42ecf098e56e",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"Caption": "A late-afternoon slice of quiet: a young woman leans against a tree in deep shade, legs outstretched, absorbed in a book while warm sunlight filters through a leafy canopy and paints dapp',
    jobId: "fae1eee5-3865-451f-82db-fb3afebd732f",
  },
  {
    id: "9bd95e42-4e36-45a4-a107-fd7349315a1f",
    href: "/publications/9bd95e42-4e36-45a4-a107-fd7349315a1f",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260313_171039_1e41c7ae-2fcf-4051-81b8-e955dd615bd2.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "daulett",
      avatarSrc:
        "https://d20rwh69pn04qo.cloudfront.net/anon_user_id/83d87801-3da6-46b8-9cfc-2822b5540de8.jpg",
      href: "/@daulett",
    },
    likeCount: 189,
    jobSetId: "4f81c05d-8f06-4555-882a-9feecf7be2da",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A young woman, 20 years old, with warm olive skin and Mediterranean appearance sits astride a scaled dragon on a glittering volcanic ridge; she faces a vast violet sky ',
    jobId: "f856648f-4e92-41df-9bed-2ff1bdcc8abc",
  },
  {
    id: "54815928-103c-4b66-aecb-b52aac80ad69",
    href: "/publications/54815928-103c-4b66-aecb-b52aac80ad69",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260313_151147_f4dd9d81-fe2d-4a5b-9e12-9ff44c1758fb.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "cooking_orangutan",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@cooking_orangutan",
    },
    likeCount: 196,
    jobSetId: "96b7e5cd-2d8c-4c51-b701-aca229e9be74",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A solitary young woman, 20 years old, Caucasian with fair skin, stands framed in a moonlit courtyard doorway; the camera watches her in a single, silent beat \\u2014 her',
    jobId: "f7902737-3262-4a5f-9db7-fba834ed877c",
  },
  {
    id: "9dee791d-52e7-49b4-b826-fffb0f0cea6d",
    href: "/publications/9dee791d-52e7-49b4-b826-fffb0f0cea6d",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260313_171242_984d7aac-e3da-42de-b8b1-ccd4f0e70979.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "laplacetiger_haze75",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@laplacetiger_haze75",
    },
    likeCount: 121,
    jobSetId: "a596f744-4212-4e4f-b53e-678f15b491eb",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A 20-year-old Northern European woman with warm fair skin sits poised atop a scaled dragon, the camera holding on a single, breath-steady moment as neon-green motes dri',
    jobId: "f4956413-add7-4d5f-bad4-ae73c5b0511d",
  },
  {
    id: "f7125a2a-2825-4934-8219-87a864e95da9",
    href: "/publications/f7125a2a-2825-4934-8219-87a864e95da9",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260314_104627_9b8d5df1-45f2-4f8a-9a00-dd69a60c0a17.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "transforming_cupcake_zero12",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@transforming_cupcake_zero12",
    },
    likeCount: 107,
    jobSetId: "947ad7ab-a736-449f-bc59-ab6b860392c6",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "Night. Three lone warriors hang suspended above a ruined industrial arena as a cold searchlight slices through dust \\u2014 a young woman of East Asian appearance with f',
    jobId: "ef671d0b-24cd-442b-aa49-351fb05b5bbb",
  },
  {
    id: "341747a7-6e9d-4af8-955f-22b947babefe",
    href: "/publications/341747a7-6e9d-4af8-955f-22b947babefe",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260314_194923_c279d800-65c9-4711-bc6a-2715bda503e2.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "adapting_potato_keen39",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@adapting_potato_keen39",
    },
    likeCount: 237,
    jobSetId: "d1327745-380d-4994-b16b-ae18a9e5c7d1",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A quiet, cinematic moment on a rain-slick pedestrian overpass at night: two young adults (both 20 years old), East Asian with light/fair skin tones, sit on opposite sid',
    jobId: "ee8d0f3a-a0ce-4650-b0d8-26b436b014be",
  },
  {
    id: "11fe6224-f369-407e-ac4a-5433e15ec6e1",
    href: "/publications/11fe6224-f369-407e-ac4a-5433e15ec6e1",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260314_105240_3310f979-94bc-4f47-8888-8ccf5a1b3731.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "qwerty_322",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@qwerty_322",
    },
    likeCount: 214,
    jobSetId: "63bd1132-6d01-48e0-ba8b-41a8f0ce8408",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A close, reverent frame lingers on a young woman,  twenty years old, of East Asian appearance with warm ivory skin, as she balances on a single satin-pink ballet slippe',
    jobId: "e81d2612-8526-47e4-843a-dcb1b3c404a2",
  },
  {
    id: "fd92fdba-96bd-4f28-9ebf-d798f1a366df",
    href: "/publications/fd92fdba-96bd-4f28-9ebf-d798f1a366df",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260313_113643_2b7c8f81-f4d6-4988-86cf-f33d5dfe8200.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "dankol",
      avatarSrc:
        "https://d20rwh69pn04qo.cloudfront.net/anon_user_id/3cd06ee5-7504-47c2-8776-d12e06617299.jpg",
      href: "/@dankol",
    },
    likeCount: 195,
    jobSetId: "46c613fe-e30b-4f81-aa04-e88dda2273eb",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A rain-slicked Tokyo side-street trembles as a surreal leviathan \\u2014 a hulking, billboard-top creature with dangling limbs and a mossy, billboard head \\u2014 drifts ',
    jobId: "e6ea41e4-a183-4bd7-857a-3ce55ca3a8a6",
  },
  {
    id: "4544e0d0-a3e2-4973-833c-256948647593",
    href: "/publications/4544e0d0-a3e2-4973-833c-256948647593",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260311_132332_4050f80b-d8a7-43ab-87e6-e421ae1cf1fb.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "religious_raccoon_dark36",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@religious_raccoon_dark36",
    },
    likeCount: 231,
    jobSetId: "9413e37e-f7c7-4ead-a385-1169c8774215",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"Caption": "A quiet, intimate moment: a young woman sits on the floor by an old wooden window, knees hugged to her chest, eyes lifted toward the soft, late-afternoon light while a white cat perches o',
    jobId: "e3019ef8-7270-4504-801e-50075c779f58",
  },
  {
    id: "87375f9d-b185-4bd7-8e50-66fff05a43d2",
    href: "/publications/87375f9d-b185-4bd7-8e50-66fff05a43d2",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260305_162045_a76abb05-b221-4147-bb8d-2d32ea1da060.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "wer",
      avatarSrc:
        "https://d20rwh69pn04qo.cloudfront.net/anon_user_id/cc1c8368-0108-45ea-990c-9634973cfd92.webp",
      href: "/@wer",
    },
    likeCount: 135,
    jobSetId: "13f845a9-6e06-4a62-ab6c-289142a79230",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "At night on a balcony set, a young woman in a strappy top stands beside a man, one hand resting on his shoulder as he smokes, both looking out over soft, bokeh city lig',
    jobId: "e1ba5ee5-e86e-4ad5-85bb-21dcf8456255",
  },
  {
    id: "806081df-021b-42b6-b4c9-b2c0b51aa637",
    href: "/publications/806081df-021b-42b6-b4c9-b2c0b51aa637",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260313_113622_5c4f39d1-9bf9-4e26-b022-29f644c52b18.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "higgsfield_hall_of_fame",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@higgsfield_hall_of_fame",
    },
    likeCount: 152,
    jobSetId: "98514b54-cb8d-4cf1-94a7-d3cc5e548ef6",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A 20-year-old young man with East Asian features and light-medium skin stands at the edge of a wind-bleached wheat field, back to camera, facing a hulking, painterly ab',
    jobId: "df3c501a-0471-469f-bb19-d5f6fe5c20ca",
  },
  {
    id: "493cc9d5-f134-43da-ad2a-22e35b38a275",
    href: "/publications/493cc9d5-f134-43da-ad2a-22e35b38a275",
    media: {
      type: "image",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_35h9Zqn0Bk5qurQOPUM7laOSfXO/hf_20260312_171646_b4c262b5-9cb1-46bd-a526-307656fa0866.png",
      width: 2048,
      height: 1152,
      aspectRatio: 1.7777777777777777,
    },
    creator: {
      username: "quantized_porcupine",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@quantized_porcupine",
    },
    likeCount: 122,
    jobSetId: "0d4b6bb4-9523-4ccd-adca-39fafa8c12eb",
    jobSetType: "soul_cinematic",
    model: "soul_cinematic",
    description:
      '{"silteme": "zxcv", "Caption": "A tense, theatrical tableau: a 20-year-old East Asian woman (pale-olive skin) stands centered under a single harsh spotlight, hands clasped around a dagger pointed down',
    jobId: "db4b72d9-0ff7-4517-b263-ed777f67f754",
  },
];

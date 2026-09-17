/**
 * Home Community gallery records from higgsfield.ai.har RSC payload
 * (`gptImage2Items` on GET https://higgsfield.ai/). Media URLs, dimensions, likes,
 * creators, and job identity are copied from that payload. aspectRatio is
 * width / height with no 9:16 snapping.
 *
 * Preview `description` is the truncated Home RSC snippet (not a full prompt).
 * Do not invent replacements. Order matches the Home RSC array.
 */
import type { CommunityGenerationItem } from "./community.types";

export const gptImage2Items: CommunityGenerationItem[] = [
  {
    "id": "0bbfc974-900c-4a1e-8561-3d9ada80177a",
    "href": "/publications/0bbfc974-900c-4a1e-8561-3d9ada80177a",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CgVhvaX3mV5mOxcjBTK96F6n03/hf_20260422_215626_8f188629-c5bb-441a-a0fe-a0be4d976fc6.png",
      "width": 1520,
      "height": 2688,
      "aspectRatio": 0.5654761904761905
    },
    "creator": {
      "username": "cezanne_cupcake_haze12",
      "avatarSrc": "https://static.higgsfield.ai/profile/avatar.png",
      "href": "/@cezanne_cupcake_haze12"
    },
    "likeCount": 963,
    "jobSetId": "b6c3177f-ef6d-4b0f-855d-e40a0f791021",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Vertical mobile-first landing page for a fictional streetwear brand called \"LOUD KIDS CLUB\" (placeholder). Full-page poster-as-landing-page aesthetic in the spirit of Y2K skate-surf streetwear culture",
    "jobId": "8f188629-c5bb-441a-a0fe-a0be4d976fc6"
  },
  {
    "id": "71043f63-c69a-41ea-ac83-4910ec239a06",
    "href": "/publications/71043f63-c69a-41ea-ac83-4910ec239a06",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260422_211323_4cc2cdec-06a1-4d10-93b9-a63a44ae5d93.png",
      "width": 3840,
      "height": 2160,
      "aspectRatio": 1.7777777777777777
    },
    "creator": {
      "username": "modular_pufferfish_swift82",
      "avatarSrc": "https://static.higgsfield.ai/profile/avatar.png",
      "href": "/@modular_pufferfish_swift82"
    },
    "likeCount": 278,
    "jobSetId": "4ca88da9-257d-4d72-89c3-6201e5af0be0",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Here's the updated prompt — same surreal coastal Mediterranean composition and dreamy mood, now featuring a young man instead of a boy:\n\nSurreal cinematic portrait photograph, shot on medium-format fi",
    "jobId": "4cc2cdec-06a1-4d10-93b9-a63a44ae5d93"
  },
  {
    "id": "eb7d386e-25ca-46af-96b6-3b9dbe38027a",
    "href": "/publications/eb7d386e-25ca-46af-96b6-3b9dbe38027a",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CgVhvaX3mV5mOxcjBTK96F6n03/hf_20260422_201904_0d9cf28b-bbb3-452f-9ef9-6caf994c02f7.png",
      "width": 1744,
      "height": 2336,
      "aspectRatio": 0.7465753424657534
    },
    "creator": {
      "username": "prompt_beetlez",
      "avatarSrc": "https://static.higgsfield.ai/profile/avatar.png",
      "href": "/@prompt_beetlez"
    },
    "likeCount": 702,
    "jobSetId": "46461cfd-0ca8-45cc-ab81-186687b7aab4",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "A vertical exhibition invitation poster in the aesthetic of 1970s–80s punk silkscreen print design. Gritty, graphic, high-contrast, DIY zine energy with halftone grain and limited screen-printed color",
    "jobId": "0d9cf28b-bbb3-452f-9ef9-6caf994c02f7"
  },
  {
    "id": "f2c2463c-e029-498b-a87d-af60389e369e",
    "href": "/publications/f2c2463c-e029-498b-a87d-af60389e369e",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CgVhvaX3mV5mOxcjBTK96F6n03/hf_20260422_200634_8bb59f51-35d3-4639-b5a9-673f64940854.png",
      "width": 2688,
      "height": 1520,
      "aspectRatio": 1.768421052631579
    },
    "creator": {
      "username": "folk_rainbow_wise28",
      "avatarSrc": "https://static.higgsfield.ai/profile/avatar.png",
      "href": "/@folk_rainbow_wise28"
    },
    "likeCount": 402,
    "jobSetId": "3d446f92-745b-45d2-8571-db8be516b270",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Vertical 90s manga-style poster with a clean pure white paper background and subtle grain. Massive arched bold slanted italic display wordmark \"AKAI\" in deep midnight-blue across the top, partially ob",
    "jobId": "8bb59f51-35d3-4639-b5a9-673f64940854"
  },
  {
    "id": "29cb4ad5-b3bd-40c4-8731-cbd015e2b27f",
    "href": "/publications/29cb4ad5-b3bd-40c4-8731-cbd015e2b27f",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CgVhvaX3mV5mOxcjBTK96F6n03/hf_20260422_202551_baf580a8-979d-486e-b0a0-b0b09ee83d6d.png",
      "width": 1744,
      "height": 2336,
      "aspectRatio": 0.7465753424657534
    },
    "creator": {
      "username": "piffle_jack",
      "avatarSrc": "https://d20rwh69pn04qo.cloudfront.net/anon_user_id/fb834f1d-ac0f-4158-85a6-fe7fc5fc55bc.webp",
      "href": "/@piffle_jack"
    },
    "likeCount": 672,
    "jobSetId": "48c5881e-49ed-43cb-9ec9-e2f1c63b135f",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Vertical editorial poster in the style of a premium design magazine spread. Clean paper-textured background with a duotone photo-collage subject, refined serif typography, and multi-column editorial b",
    "jobId": "baf580a8-979d-486e-b0a0-b0b09ee83d6d"
  },
  {
    "id": "2f589a2f-cc4e-422c-9285-97d65fd49540",
    "href": "/publications/2f589a2f-cc4e-422c-9285-97d65fd49540",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CgVhvaX3mV5mOxcjBTK96F6n03/hf_20260422_212125_23fa9b40-6c58-4bb9-a831-ca4cf02c861c.png",
      "width": 2688,
      "height": 1520,
      "aspectRatio": 1.768421052631579
    },
    "creator": {
      "username": "impressionist_cookie_haze96",
      "avatarSrc": "https://static.higgsfield.ai/profile/avatar.png",
      "href": "/@impressionist_cookie_haze96"
    },
    "likeCount": 551,
    "jobSetId": "9e24b22a-0778-4788-af10-42eb6aa7e55b",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Horizontal desktop landing page hero section for a fictional playful homeware store called \"kiln & co.\" (placeholder). Minimalist editorial layout combined with whimsical character-driven ceramic prod",
    "jobId": "23fa9b40-6c58-4bb9-a831-ca4cf02c861c"
  },
  {
    "id": "bf3260f9-7da3-4eda-a8b4-04ca42bed096",
    "href": "/publications/bf3260f9-7da3-4eda-a8b4-04ca42bed096",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CgVhvaX3mV5mOxcjBTK96F6n03/hf_20260422_212327_3e910da2-86aa-4fac-adbe-4215fe2110a5.png",
      "width": 1744,
      "height": 2336,
      "aspectRatio": 0.7465753424657534
    },
    "creator": {
      "username": "wer",
      "avatarSrc": "https://d20rwh69pn04qo.cloudfront.net/anon_user_id/cc1c8368-0108-45ea-990c-9634973cfd92.webp",
      "href": "/@wer"
    },
    "likeCount": 573,
    "jobSetId": "6e105e85-e91d-4455-b713-c830a21fd176",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Vertical advertising poster with a surreal playful concept, photorealistic rendering. The entire composition is shot from a first-person POV from inside a cardboard moving box looking straight up — th",
    "jobId": "3e910da2-86aa-4fac-adbe-4215fe2110a5"
  },
  {
    "id": "fb624032-7cc1-47b5-8df4-d8a8cfc5823e",
    "href": "/publications/fb624032-7cc1-47b5-8df4-d8a8cfc5823e",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CgVhvaX3mV5mOxcjBTK96F6n03/hf_20260422_213610_8f9804a3-5fce-48c0-94e0-5147ab7cf3fd.png",
      "width": 2688,
      "height": 1520,
      "aspectRatio": 1.768421052631579
    },
    "creator": {
      "username": "steampunk_donut_jade65",
      "avatarSrc": "https://static.higgsfield.ai/profile/avatar.png",
      "href": "/@steampunk_donut_jade65"
    },
    "likeCount": 246,
    "jobSetId": "20e0b99a-1a2d-418c-b190-3af7354e3a30",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Horizontal desktop landing page for a fictional virtual outfit try-on service called \"DRESSR\" (placeholder). Full Y2K / PS2-era video game character select screen aesthetic. Low-poly 3D models, glossy",
    "jobId": "8f9804a3-5fce-48c0-94e0-5147ab7cf3fd"
  },
  {
    "id": "c7cef56f-0362-4599-bb32-b9bd5cf93473",
    "href": "/publications/c7cef56f-0362-4599-bb32-b9bd5cf93473",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CgVhvaX3mV5mOxcjBTK96F6n03/hf_20260422_144420_5f74e1a3-ff9e-4f59-b8f8-799982bdd36b.png",
      "width": 1520,
      "height": 2688,
      "aspectRatio": 0.5654761904761905
    },
    "creator": {
      "username": "adapting_potato_keen39",
      "avatarSrc": "https://static.higgsfield.ai/profile/avatar.png",
      "href": "/@adapting_potato_keen39"
    },
    "likeCount": 178,
    "jobSetId": "5715c7fc-8cc6-4835-a29a-42e4e9c06838",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Contemporary commercial lifestyle photograph, luxury snow-sports campaign aesthetic, Moncler × Prada Linea Rossa × Arc'teryx × Jacquemus Ski campaign style, authentic iPhone 16 Pro aesthetic — looks l",
    "jobId": "5f74e1a3-ff9e-4f59-b8f8-799982bdd36b"
  },
  {
    "id": "0a69afb4-50d7-4ed7-aa39-48b16353f4e2",
    "href": "/publications/0a69afb4-50d7-4ed7-aa39-48b16353f4e2",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CgVhvaX3mV5mOxcjBTK96F6n03/hf_20260422_215112_09f9313d-4c93-40d5-8d5b-e6a502fa93c1.png",
      "width": 2688,
      "height": 1520,
      "aspectRatio": 1.768421052631579
    },
    "creator": {
      "username": "surreal_pencil_sage24",
      "avatarSrc": "https://static.higgsfield.ai/profile/avatar.png",
      "href": "/@surreal_pencil_sage24"
    },
    "likeCount": 322,
    "jobSetId": "fc4a0ea7-6ec2-4f37-81e5-2a671012cc5b",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Horizontal desktop landing page hero section for a fictional snowboard eyewear and mountain gear store called \"APEX & SUMMIT\" (placeholder). Cinematic sports-tech advertising aesthetic with extreme cl",
    "jobId": "09f9313d-4c93-40d5-8d5b-e6a502fa93c1"
  },
  {
    "id": "4ca41020-ddce-4ddb-90b5-6e0aa5e91bc7",
    "href": "/publications/4ca41020-ddce-4ddb-90b5-6e0aa5e91bc7",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CgVhvaX3mV5mOxcjBTK96F6n03/hf_20260422_134519_6fed7b56-35c6-4f75-a58a-7ba86674d801.png",
      "width": 1744,
      "height": 2336,
      "aspectRatio": 0.7465753424657534
    },
    "creator": {
      "username": "gaziziz",
      "avatarSrc": "https://static.higgsfield.ai/profile/avatar.png",
      "href": "/@gaziziz"
    },
    "likeCount": 132,
    "jobSetId": "3f84cb24-c8fd-4b35-a6c8-cd8d78baa411",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Cinematic urban photograph, contemporary Tokyo street photography aesthetic, hyperreal 3D billboard phenomenon captured during magic hour. Iconic Shibuya Scramble Crossing scene at blue hour (early ev",
    "jobId": "6fed7b56-35c6-4f75-a58a-7ba86674d801"
  },
  {
    "id": "2992422f-092a-49fd-801d-b172c0ee97ed",
    "href": "/publications/2992422f-092a-49fd-801d-b172c0ee97ed",
    "media": {
      "type": "image",
      "src": "https://dqv0cqkoy5oj7.cloudfront.net/user_3CIjqzTsrKEUr8OzFBaYO4ux3nG/hf_20260421_144013_38e67ed5-cd38-4509-9855-9c4cc9b32fe6.png",
      "width": 2048,
      "height": 1360,
      "aspectRatio": 1.5058823529411764
    },
    "creator": {
      "username": "singing_pencillin",
      "avatarSrc": "https://static.higgsfield.ai/profile/avatar.png",
      "href": "/@singing_pencillin"
    },
    "likeCount": 229,
    "jobSetId": "1cb9c3c0-89ec-4b0a-b076-3fe238f6a037",
    "jobSetType": "imagegen_2_0",
    "model": "imagegen_2_0",
    "description": "Bold graphic illustration poster design, Japanese street art meets vintage propaganda aesthetic, centered powerful roaring giant panda head snarling aggressively with teeth bared, pink tongue visible,",
    "jobId": "38e67ed5-cd38-4509-9855-9c4cc9b32fe6"
  }
];

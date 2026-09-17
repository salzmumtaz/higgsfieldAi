/**
 * Home Community gallery records from higgsfield.ai.har RSC payload
 * (`seedance25Items` on GET https://higgsfield.ai/). Media URLs, dimensions, likes,
 * creators, and job identity are copied from that payload. aspectRatio is
 * width / height with no 9:16 snapping.
 *
 * Preview `description` is the truncated Home RSC snippet (not a full prompt).
 * Do not invent replacements. Order matches the Home RSC array.
 */
import type { CommunityGenerationItem } from "@/features/home/models/types";

export const seedance25Items: CommunityGenerationItem[] = [
  {
    id: "32865b02-2730-45c1-831c-32039b702198",
    href: "/publications/32865b02-2730-45c1-831c-32039b702198",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260828_133607_f265c973-82fe-4f27-83a9-42d913a2289c.mp4",
      width: 1080,
      height: 1920,
      aspectRatio: 0.5625,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260828_133607_f265c973-82fe-4f27-83a9-42d913a2289c_thumbnail.webp",
    },
    creator: {
      username: "yernaz",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@yernaz",
    },
    likeCount: 44,
    jobSetId: "4f8c0421-5b89-4e61-b68c-67a9152033d0",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "SCENE CONTEXT\nA surreal scale-play performance film: on a miniature racing arena floating in an infinite field of soft MAGENTA-PINK light, a tiny race car drifts screaming circles around a giant perfo",
    jobId: "f265c973-82fe-4f27-83a9-42d913a2289c",
  },
  {
    id: "e435dee0-092e-40e6-b9bd-38e227a8d659",
    href: "/publications/e435dee0-092e-40e6-b9bd-38e227a8d659",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260828_132351_79618fbd-cc98-4ee0-ae44-cb79da5349f3.mp4",
      width: 1440,
      height: 1080,
      aspectRatio: 1.3333333333333333,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260828_132351_79618fbd-cc98-4ee0-ae44-cb79da5349f3_thumbnail.webp",
    },
    creator: {
      username: "yernaz",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@yernaz",
    },
    likeCount: 52,
    jobSetId: "426f9547-ba73-4d30-aa93-5a87fae88473",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "SCENE CONTEXT\nA surreal scale-play performance film: on a miniature racing arena floating in an infinite field of deep COBALT-BLUE light, a tiny race car drifts screaming circles around a giant perfor",
    jobId: "79618fbd-cc98-4ee0-ae44-cb79da5349f3",
  },
  {
    id: "69bb6480-4fa2-460d-93f8-03317dc7d45c",
    href: "/publications/69bb6480-4fa2-460d-93f8-03317dc7d45c",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_041544_b5f84d9d-a9db-472c-9ece-fed23857b096_wm3.mp4",
      width: 1920,
      height: 1080,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_041544_b5f84d9d-a9db-472c-9ece-fed23857b096_thumbnail.webp",
    },
    creator: {
      username: "higgsfield_hall_of_fame",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@higgsfield_hall_of_fame",
    },
    likeCount: 187,
    jobSetId: "4e3ab5f0-2551-46e4-b1cd-25cb95b1b136",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "ONE UNBROKEN 15-SECOND TAKE, 16:9, no cuts — ONE camera, ONE location, ONE continuous movement from the first frame to the last.\\n\\n\\x3C\\x3C\\x3Cimage_1>>> = the location: an empty studio room with deep dusty-RED",
    jobId: "b5f84d9d-a9db-472c-9ece-fed23857b096",
  },
  {
    id: "06f9721a-592b-4f83-ba01-093c804d6610",
    href: "/publications/06f9721a-592b-4f83-ba01-093c804d6610",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_041459_e02ab22b-6d8e-46bd-874e-8090a8f00799_wm3.mp4",
      width: 1920,
      height: 1080,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_041459_e02ab22b-6d8e-46bd-874e-8090a8f00799_thumbnail.webp",
    },
    creator: {
      username: "bourgeois_mean",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@bourgeois_mean",
    },
    likeCount: 153,
    jobSetId: "cc62a4bc-d0cb-4ad8-bcc7-46e53d749a3e",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "\\x3C\\x3C\\x3Cimage_1>>> — Ines\\n\\nCamera Settings: shot on 35mm film, anamorphic 2x squeeze, 2.39:1, oval bokeh, heavy grain,\\nhalation on the bulbs. Focal length: 35mm. Aperture: f/2.0. Camera Style: handheld ins",
    jobId: "e02ab22b-6d8e-46bd-874e-8090a8f00799",
  },
  {
    id: "2756232f-9134-4c43-ae5d-02938bbeaa4b",
    href: "/publications/2756232f-9134-4c43-ae5d-02938bbeaa4b",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_040632_12ff4cdd-bba8-4a6d-bff5-312d4a2cbb23_wm3.mp4",
      width: 1920,
      height: 1080,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_040632_12ff4cdd-bba8-4a6d-bff5-312d4a2cbb23_thumbnail.webp",
    },
    creator: {
      username: "jennifer_lopez",
      avatarSrc:
        "https://d20rwh69pn04qo.cloudfront.net/anon_user_id/0925f9d5-cc71-459f-9ec0-98c2758f06e1.png",
      href: "/@jennifer_lopez",
    },
    likeCount: 183,
    jobSetId: "d5aedb97-0313-43eb-a2fc-1866afed198c",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "ONE UNBROKEN 15-SECOND TAKE, 16:9, no cuts — ONE camera, ONE location, one continuous scene.\n\n = the girl: early twenties, pale skin with real texture, long straight strawberry-blonde hair parted in t",
    jobId: "12ff4cdd-bba8-4a6d-bff5-312d4a2cbb23",
  },
  {
    id: "61c93124-57cd-46b5-8162-eee579f0e644",
    href: "/publications/61c93124-57cd-46b5-8162-eee579f0e644",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_040418_e674bc76-e8c5-4099-bd5c-f871a9345cda_wm3.mp4",
      width: 1920,
      height: 1080,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_040418_e674bc76-e8c5-4099-bd5c-f871a9345cda_thumbnail.webp",
    },
    creator: {
      username: "artificial_penguin",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@artificial_penguin",
    },
    likeCount: 77,
    jobSetId: "ab646bf3-8bd0-4c99-8ee0-e0ca56830094",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "CAMERA: slow tracking shot moving backwards, holding a constant medium framing (waist-up) as she walks toward the lens down the middle of a Tokyo street. Smooth gimbal glide, one unbroken take, no cut",
    jobId: "e674bc76-e8c5-4099-bd5c-f871a9345cda",
  },
  {
    id: "f08408d7-e8f9-4919-a514-c8412770bf9c",
    href: "/publications/f08408d7-e8f9-4919-a514-c8412770bf9c",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_035550_51b6328c-1648-411a-917a-1d8cecbd166c_wm3.mp4",
      width: 1920,
      height: 1080,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_035550_51b6328c-1648-411a-917a-1d8cecbd166c_thumbnail.webp",
    },
    creator: {
      username: "jighit",
      avatarSrc:
        "https://d20rwh69pn04qo.cloudfront.net/anon_user_id/e77d75f0-5fc9-4c57-95bc-82b637fdb5f7.png",
      href: "/@jighit",
    },
    likeCount: 136,
    jobSetId: "5bf8d565-10bc-4a5f-96d0-629b39e4c8e9",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "Cinematic 15-second single continuous handheld shot, no cuts. A fictional young East Asian woman in her early twenties, entirely original character resembling no real person, model or existing film ch",
    jobId: "51b6328c-1648-411a-917a-1d8cecbd166c",
  },
  {
    id: "451f6330-2bff-416f-88b1-d469519cea59",
    href: "/publications/451f6330-2bff-416f-88b1-d469519cea59",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_034505_9389c8eb-ce22-45df-8755-addfb794552f_wm3.mp4",
      width: 1920,
      height: 1080,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_034505_9389c8eb-ce22-45df-8755-addfb794552f_thumbnail.webp",
    },
    creator: {
      username: "zhanay",
      avatarSrc:
        "https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/1ffde5a6-9413-45f2-8729-9792d1864ed6.png",
      href: "/@zhanay",
    },
    likeCount: 227,
    jobSetId: "ec7c6b8b-dea4-434e-acc9-192d5be51faf",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "\\x3C\\x3C\\x3Cimage_1>>> — the woman in the reference.\\nCamera Settings: anamorphic, 2.39:1, oval bokeh. Focal length: 40mm. Aperture: f/2.0.\\nCamera Style: locked static three-quarter framing from the passenger s",
    jobId: "9389c8eb-ce22-45df-8755-addfb794552f",
  },
  {
    id: "099ee2c0-3c13-4e3d-971f-d78d59a9a9a9",
    href: "/publications/099ee2c0-3c13-4e3d-971f-d78d59a9a9a9",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3Btsg1RieQOoYK6o6x65C3UYqNH/hf_20260814_024423_23e78b00-c455-420b-b72f-fc8e9b14244c_wm3.mp4",
      width: 1920,
      height: 1080,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3Btsg1RieQOoYK6o6x65C3UYqNH/hf_20260814_024423_23e78b00-c455-420b-b72f-fc8e9b14244c_thumbnail.webp",
    },
    creator: {
      username: "religious_raccoon_dark36",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@religious_raccoon_dark36",
    },
    likeCount: 443,
    jobSetId: "762e9688-2e7b-48e7-b696-479df34ddc7c",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "SCENE CONTEXT\n\nA premium 30-second Japanese commercial for SIPPO Cherry: playful, surreal, fashion-forward and highly polished. Energetic pacing, wide-angle intimacy, colorful Japanese advertising lan",
    jobId: "23e78b00-c455-420b-b72f-fc8e9b14244c",
  },
  {
    id: "a20099f2-7bae-4900-8edc-b6708c26a85c",
    href: "/publications/a20099f2-7bae-4900-8edc-b6708c26a85c",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3Btsg1RieQOoYK6o6x65C3UYqNH/hf_20260814_013039_5cf05b01-4cea-4c9e-8af5-1b9122611c9b_wm3.mp4",
      width: 1920,
      height: 1080,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3Btsg1RieQOoYK6o6x65C3UYqNH/hf_20260814_013039_5cf05b01-4cea-4c9e-8af5-1b9122611c9b_thumbnail.webp",
    },
    creator: {
      username: "radiating_crystal_deep60",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@radiating_crystal_deep60",
    },
    likeCount: 296,
    jobSetId: "a4cdc947-8394-4e59-ae1c-85a902d2438f",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "SCENE CONTEXT\n\nA 30-second premium beauty commercial for Bounce Vita Tinol Bounce Balloon Lip Serum SPF 35. Four adult Korean women form a bold, playful creative team inside a vibrant Y2K beauty studi",
    jobId: "5cf05b01-4cea-4c9e-8af5-1b9122611c9b",
  },
  {
    id: "fe59d13c-8118-4d70-9545-0be82ceb2f55",
    href: "/publications/fe59d13c-8118-4d70-9545-0be82ceb2f55",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_002238_83054aec-92b9-4efe-b015-6c33e4bd7ba3_wm3.mp4",
      width: 1920,
      height: 1080,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3HrUZEqvogBOowmw1C0BIb3oNDN/hf_20260814_002238_83054aec-92b9-4efe-b015-6c33e4bd7ba3_thumbnail.webp",
    },
    creator: {
      username: "banksy_pancake_gold22",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@banksy_pancake_gold22",
    },
    likeCount: 254,
    jobSetId: "d6911f57-6554-43b7-8008-d502de8df247",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "[14.08.2026 04:16] Али Kimsfield: Prompt:\nMain subject: beautiful slim young Korean woman, early 20s, natural appearance, realistic skin, minimal makeup, warm face. Black wavy hair in a loose low pony",
    jobId: "83054aec-92b9-4efe-b015-6c33e4bd7ba3",
  },
  {
    id: "6cef1baf-a179-45c9-8a55-f6ae7f0fc1fa",
    href: "/publications/6cef1baf-a179-45c9-8a55-f6ae7f0fc1fa",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3Btsg1RieQOoYK6o6x65C3UYqNH/hf_20260813_235221_7969f2f0-4868-4639-b8f2-85ca915bdd6e_wm3.mp4",
      width: 1920,
      height: 1080,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3Btsg1RieQOoYK6o6x65C3UYqNH/hf_20260813_235221_7969f2f0-4868-4639-b8f2-85ca915bdd6e_thumbnail.webp",
    },
    creator: {
      username: "gaziziz",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@gaziziz",
    },
    likeCount: 230,
    jobSetId: "9e67a6b0-d10b-4608-b310-492f14a85f67",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "SCENE CONTEXT\n\nA 30-second high-energy commercial for CRUNCHO sour cream & onion chips, inspired by the rapid pacing, playful absurdism, practical miniatures, retro Japanese television energy and mixe",
    jobId: "7969f2f0-4868-4639-b8f2-85ca915bdd6e",
  },
  {
    id: "37d1961f-d4ca-4af1-83d0-21bce4f11bf0",
    href: "/publications/37d1961f-d4ca-4af1-83d0-21bce4f11bf0",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_2urRVI1bCfxGUsP28tBUphocCbh/507bc86d-a335-48fb-8732-06695a749350_hs_wm.mp4",
      width: 1280,
      height: 720,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3H8EAjd4lvlOfCDCxt4J3ZVPr1c/hf_20260807_105454_a60ef591-46a4-49a2-b01a-607dad928ede_thumbnail.webp",
    },
    creator: {
      username: "land_art_pencil",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@land_art_pencil",
    },
    likeCount: 193,
    jobSetId: "b615d30f-0827-4f2e-b3a7-d6f06a6e91a9",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "Cinematic shot in continuous motion, captured in ONE unbroken take — no cuts, no transitions, no editing whatsoever, a single continuous camera from start to finish.\\n\\nThe girl from \\x3C\\x3C\\x3C5cbfc1ae-3348-41",
    jobId: "a60ef591-46a4-49a2-b01a-607dad928ede",
  },
  {
    id: "fcbcd586-fe49-43ec-a1b0-881b0b0f8aa6",
    href: "/publications/fcbcd586-fe49-43ec-a1b0-881b0b0f8aa6",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3FRnqOjr7P4vUmrsWyEzZbKAqVU/77406d67-d5db-4b1d-81e2-9e0139b39249_hs_wm.mp4",
      width: 1280,
      height: 720,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3Bu4J9LdRqhDHpwVUmDuiPIuIy0/hf_20260807_115856_816bc5fd-ea64-42ed-9c0c-d70e666a148f_thumbnail.webp",
    },
    creator: {
      username: "smartbeetle1651",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@smartbeetle1651",
    },
    likeCount: 162,
    jobSetId: "2d8d1274-99d3-4e86-b7df-c1513c6de05c",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "A dynamic street fight unfolds in daylight, against a backdrop of a typical Japanese alleyway—low-rise houses, hedges, and light-colored asphalt. A man in a white shirt and loose tie faces a group of ",
    jobId: "816bc5fd-ea64-42ed-9c0c-d70e666a148f",
  },
  {
    id: "3c8bcc07-a10d-4c57-a27b-6d4506ebf112",
    href: "/publications/3c8bcc07-a10d-4c57-a27b-6d4506ebf112",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3CN3NlActPxxUfaXfH903u7EnPq/468db48f-512d-4ca0-b475-8011acc1e8eb_hs_wm.mp4",
      width: 1280,
      height: 720,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3Bu4J9LdRqhDHpwVUmDuiPIuIy0/hf_20260807_100920_bc5eed39-89b5-449c-925f-933727ac4c07_thumbnail.webp",
    },
    creator: {
      username: "folkemerald1346",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@folkemerald1346",
    },
    likeCount: 411,
    jobSetId: "8eb59ba1-d965-4f08-a298-66bbd2e65adc",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "Close-up of an emotional monologue. The woman in @image_1 sits at a wooden dining table in the dimly lit, warm wooden kitchen of @image_2—wooden cabinets, deeply blurred bowls, plates, and storage she",
    jobId: "bc5eed39-89b5-449c-925f-933727ac4c07",
  },
  {
    id: "7c8ba736-dc97-4de8-b643-c86f12d109c6",
    href: "/publications/7c8ba736-dc97-4de8-b643-c86f12d109c6",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_2urnL94WJ71YKcCUCm8E5tfhGy9/437a80c2-3e11-4650-8777-c06e7ca567c5_hs_wm.mp4",
      width: 1280,
      height: 720,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3Bu4J9LdRqhDHpwVUmDuiPIuIy0/hf_20260807_101838_4b30080f-2172-46dd-add5-b813276d04f9_thumbnail.webp",
    },
    creator: {
      username: "arpanetus",
      avatarSrc:
        "https://d2ol7oe51mr4n9.cloudfront.net/user_2urnL94WJ71YKcCUCm8E5tfhGy9/ad100ab0-a45b-4058-9bbe-ff92eece371f.jpg",
      href: "/@arpanetus",
    },
    likeCount: 189,
    jobSetId: "cf3cafec-cecb-40c6-9bba-b4cf3c90bbd1",
    jobSetType: "seedance_2_5",
    model: "seedance_2_5",
    description:
      "A dynamic nighttime street race in a Japanese city, as shown in the reference image—the lights of skyscrapers are blurred into streaks of light due to motion, and a full moon casts long shadows of car",
    jobId: "4b30080f-2172-46dd-add5-b813276d04f9",
  },
];

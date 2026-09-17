/**
 * Home Community gallery records from higgsfield.ai.har RSC payload
 * (`marketingStudioItems` on GET https://higgsfield.ai/). Media URLs, dimensions, likes,
 * creators, and job identity are copied from that payload. aspectRatio is
 * width / height with no 9:16 snapping.
 *
 * Preview `description` is the truncated Home RSC snippet (not a full prompt).
 * Do not invent replacements. Order matches the Home RSC array.
 */
import type { CommunityGenerationItem } from "@/features/home/models/types";

export const marketingStudioItems: CommunityGenerationItem[] = [
  {
    id: "ffa3da9e-feec-447d-9277-266c81ee27c7",
    href: "/publications/ffa3da9e-feec-447d-9277-266c81ee27c7",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3Bu8kApHUBmQcoBNUYoyCcOGJne/hf_20260414_170749_3474b08b-9dc4-49e6-b6e2-4af862eff61d.mp4",
      width: 1280,
      height: 720,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3Bu8kApHUBmQcoBNUYoyCcOGJne/hf_20260414_170749_3474b08b-9dc4-49e6-b6e2-4af862eff61d_thumbnail.webp",
    },
    creator: {
      username: "byzantinetiger1459",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@byzantinetiger1459",
    },
    likeCount: 466,
    jobSetId: "77f9befe-3c72-4191-b4a1-c273deaaf961",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "chocolate japanese style commercial, with chocolate crunching, pieces breaking, hands passing chocolate to each other, japanese happy people smiling while biting, and these little characters animated ",
    jobId: "1fb8253c-0338-4648-933d-c1e53e84eeb7",
  },
  {
    id: "19f9c5f8-9ca4-4369-937b-16baa3ace52f",
    href: "/publications/19f9c5f8-9ca4-4369-937b-16baa3ace52f",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3CIjqzTsrKEUr8OzFBaYO4ux3nG/hf_20260413_121933_7dfa9582-a536-4a83-9041-ee5aa102ff8c.mp4",
      width: 720,
      height: 960,
      aspectRatio: 0.75,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3CIjqzTsrKEUr8OzFBaYO4ux3nG/hf_20260413_121933_7dfa9582-a536-4a83-9041-ee5aa102ff8c_thumbnail.webp",
    },
    creator: {
      username: "byzantinetiger1459",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@byzantinetiger1459",
    },
    likeCount: 577,
    jobSetId: "170f8d54-d913-4397-9727-9f7f536761a9",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "A young stylish female influencer \\x3C\\x3C\\x3Cavatar:cd6fb78c-e1a2-42f1-8b1e-902c15511877>>> s in a cozy modern apartment with soft natural daylight. She records herself using the front camera of her phone (se",
    jobId: "70de35cc-8a02-43d3-be72-27547d78ff94",
  },
  {
    id: "bbbc4150-f6fb-488f-8e45-0842c7bdfb86",
    href: "/publications/bbbc4150-f6fb-488f-8e45-0842c7bdfb86",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3BuPFKmNsBjkEgZ5LeOvNlL8ShO/hf_20260415_014636_4873f538-b114-48c3-b604-05e32945d184.mp4",
      width: 720,
      height: 1280,
      aspectRatio: 0.5625,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3BuPFKmNsBjkEgZ5LeOvNlL8ShO/hf_20260415_014636_4873f538-b114-48c3-b604-05e32945d184_thumbnail.webp",
    },
    creator: {
      username: "byzantinetiger1459",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@byzantinetiger1459",
    },
    likeCount: 420,
    jobSetId: "201fd2ca-81b0-4c44-b123-1c75260ddd8a",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "Style: UGC, get ready with me, iPhone front camera, fashion vlog, playful energy\nPrompt:\nA stylish young girl is filming herself in her room while getting dressed. The room is aesthetic — mirror, clot",
    jobId: "356a3954-be05-4036-98ea-c933634e351a",
  },
  {
    id: "18d5e4b4-723d-4b26-9fb7-91d23c7819aa",
    href: "/publications/18d5e4b4-723d-4b26-9fb7-91d23c7819aa",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_39acLUpaKDzX3Ox7Ekzzl7vlQ67/hf_20260413_132040_3db6758b-7eef-4046-87e1-ec81097c126e.mp4",
      width: 720,
      height: 960,
      aspectRatio: 0.75,
      posterSrc:
        "https://cdn.higgsfield.ai/user_39acLUpaKDzX3Ox7Ekzzl7vlQ67/hf_20260413_132040_3db6758b-7eef-4046-87e1-ec81097c126e_thumbnail.webp",
    },
    creator: {
      username: "byzantinetiger1459",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@byzantinetiger1459",
    },
    likeCount: 320,
    jobSetId: "ff911e19-4d0d-4610-a0a1-15ddb8fd33f0",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "\\x3C\\x3C\\x3Cavatar:bcd9e6ee-c000-48e6-9f4b-a20fc2a674f7>>>Промт:\\nA 15-second vertical (9:16) UGC try-on video filmed on a smartphone. A young East Asian woman with a short black bob haircut stands in front of ",
    jobId: "d583f9aa-f200-4ead-8aec-aa20c2ece44d",
  },
  {
    id: "d17686cd-fbf2-4e0d-9837-a12133ba56cd",
    href: "/publications/d17686cd-fbf2-4e0d-9837-a12133ba56cd",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260415_012608_2c21b2ad-368a-4199-bde3-e2c648d78186.mp4",
      width: 720,
      height: 1280,
      aspectRatio: 0.5625,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260415_012608_2c21b2ad-368a-4199-bde3-e2c648d78186_thumbnail.webp",
    },
    creator: {
      username: "byzantinetiger1459",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@byzantinetiger1459",
    },
    likeCount: 175,
    jobSetId: "5659439e-d96d-4c8e-9f6c-0876676aa274",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "Vertical 9:16 UGC sneaker unboxing and review, shot on iPhone front and back camera mix, bright natural daylight from a window, casual bedroom energy, handheld selfie perspective, real skin tones, no ",
    jobId: "e3d48b09-9c73-431b-9ec3-82da18e3133d",
  },
  {
    id: "782a8e9b-cd1b-48b0-acd7-7390a6f578e3",
    href: "/publications/782a8e9b-cd1b-48b0-acd7-7390a6f578e3",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260421_221116_5e4782a0-5148-4832-9362-d17ba238b58b.mp4",
      width: 1080,
      height: 1920,
      aspectRatio: 0.5625,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260421_221116_5e4782a0-5148-4832-9362-d17ba238b58b_thumbnail.webp",
    },
    creator: {
      username: "chapman",
      avatarSrc:
        "https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/2aba3cab-9d9d-4c65-b219-50030c90bb70.jpg",
      href: "/@chapman",
    },
    likeCount: 182,
    jobSetId: "04564de6-67ab-4a6e-87f8-a35a9ae21b95",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "10-sec TikTok UGC, 9:16, iPhone\n0:00–0:02 | Selfie close-up, front camera, young Asian woman mid-twenties with messy short black pixie haircut and choppy fringe, small silver hoop nose ring, no-makeup",
    jobId: "5e4782a0-5148-4832-9362-d17ba238b58b",
  },
  {
    id: "5a051576-9976-4a00-89e1-fb96721a6045",
    href: "/publications/5a051576-9976-4a00-89e1-fb96721a6045",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260422_011129_528f4835-f2b2-4b35-90a0-e4471af95636.mp4",
      width: 1440,
      height: 1080,
      aspectRatio: 1.3333333333333333,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260422_011129_528f4835-f2b2-4b35-90a0-e4471af95636_thumbnail.webp",
    },
    creator: {
      username: "chapman",
      avatarSrc:
        "https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/2aba3cab-9d9d-4c65-b219-50030c90bb70.jpg",
      href: "/@chapman",
    },
    likeCount: 181,
    jobSetId: "8707416f-4c59-4e2c-88d8-f5e2e098934f",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "15-sec TikTok UGC, 9:16, iPhone\n0:00–0:03 | Wide handheld shot, phone propped on a bench across the gym floor, young man mid-twenties named Adam, Black, clean low fade haircut, sharp jawline, sweat gl",
    jobId: "528f4835-f2b2-4b35-90a0-e4471af95636",
  },
  {
    id: "f37010a0-467f-4db6-9843-0d9782aeacd3",
    href: "/publications/f37010a0-467f-4db6-9843-0d9782aeacd3",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3BtuMjeO56IlCCzTiD419c4NiyM/hf_20260415_011357_9dd4f822-d35c-4a43-9102-61ad0bb14331.mp4",
      width: 720,
      height: 960,
      aspectRatio: 0.75,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3BtuMjeO56IlCCzTiD419c4NiyM/hf_20260415_011357_9dd4f822-d35c-4a43-9102-61ad0bb14331_thumbnail.webp",
    },
    creator: {
      username: "byzantinetiger1459",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@byzantinetiger1459",
    },
    likeCount: 65,
    jobSetId: "22509f9c-0276-4f62-9039-44c3b87c6f3d",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "6-second vertical video ad (9:16), cinematic, dark pirate-ship interior lit by candlelight.\nSec 0–2: Close-up of an old treasure chest with red velvet lining being opened. Inside — gold coins and two ",
    jobId: "7f34c12c-4350-4c4a-abc9-4ada664e181b",
  },
  {
    id: "2d65f04b-e2f6-4a1e-80a8-5e9c3fa17873",
    href: "/publications/2d65f04b-e2f6-4a1e-80a8-5e9c3fa17873",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3Bu8kApHUBmQcoBNUYoyCcOGJne/hf_20260414_232148_e856f696-c60e-4c40-921e-3fc3ac60224f.mp4",
      width: 1280,
      height: 720,
      aspectRatio: 1.7777777777777777,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3Bu8kApHUBmQcoBNUYoyCcOGJne/hf_20260414_232148_e856f696-c60e-4c40-921e-3fc3ac60224f_thumbnail.webp",
    },
    creator: {
      username: "byzantinetiger1459",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@byzantinetiger1459",
    },
    likeCount: 59,
    jobSetId: "89ab1d07-773d-4aa6-9004-4c0480d2d5d1",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "High-energy cinematic product commercial. Molten liquid silver flows and swirls elegantly in mid-air, pouring into a sleek silver chrome sneaker. The liquid chrome ripples across the shoe's surface, f",
    jobId: "5e122601-8f0a-4990-838a-0c0c284df6a2",
  },
  {
    id: "5f39e443-2945-4d91-aa2a-fb80265c21ee",
    href: "/publications/5f39e443-2945-4d91-aa2a-fb80265c21ee",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/hf_20260413_124545_9ae0acdc-4d0e-4c03-a065-b572bf9c66cf.mp4",
      width: 720,
      height: 960,
      aspectRatio: 0.75,
      posterSrc:
        "https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/hf_20260413_124545_9ae0acdc-4d0e-4c03-a065-b572bf9c66cf_thumbnail.webp",
    },
    creator: {
      username: "byzantinetiger1459",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@byzantinetiger1459",
    },
    likeCount: 136,
    jobSetId: "a84a0f42-fc06-4ae6-a0bf-e72df300d691",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "dynamic \\x3C\\x3C\\x3Cproduct:7c12cfc3-2c23-454f-9592-0bc0dc286153>>>",
    jobId: "50b6f2e9-7b3b-41fd-9a6e-0c237de4a96f",
  },
  {
    id: "f6fb55b3-756d-4329-9190-ee77f44b116f",
    href: "/publications/f6fb55b3-756d-4329-9190-ee77f44b116f",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_3B9ysSkvPFs8NnELOqJwjcodGpA/hf_20260410_200105_6b9142b4-9ac9-4c42-9206-84b70c939e52.mp4",
      width: 720,
      height: 960,
      aspectRatio: 0.75,
      posterSrc:
        "https://cdn.higgsfield.ai/user_3B9ysSkvPFs8NnELOqJwjcodGpA/hf_20260410_200105_6b9142b4-9ac9-4c42-9206-84b70c939e52_thumbnail.webp",
    },
    creator: {
      username: "byzantinetiger1459",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@byzantinetiger1459",
    },
    likeCount: 176,
    jobSetId: "a5ead5b1-d6da-4813-bb83-f39a5ec9389b",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      "\\x3C\\x3C\\x3Cproduct:2e29530a-6f74-4086-aa82-42aa73b5bf14>>> \\n\\nAuthentic amateur-style UGC in a bright bathroom: white tiles, soft natural daylight from a window, real-life details (folded towel, small plant, s",
    jobId: "a74e9198-2be2-447e-ae6e-00b5fc7907de",
  },
  {
    id: "c5cf0e53-7b2b-48f9-bd0d-2b459e6a5ca9",
    href: "/publications/c5cf0e53-7b2b-48f9-bd0d-2b459e6a5ca9",
    media: {
      type: "video",
      src: "https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/hf_20260410_231619_0c2814a2-9a87-48f8-a18f-811265d90dca.mp4",
      width: 720,
      height: 960,
      aspectRatio: 0.75,
      posterSrc:
        "https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/hf_20260410_231619_0c2814a2-9a87-48f8-a18f-811265d90dca_thumbnail.webp",
    },
    creator: {
      username: "byzantinetiger1459",
      avatarSrc: "https://static.higgsfield.ai/profile/avatar.png",
      href: "/@byzantinetiger1459",
    },
    likeCount: 109,
    jobSetId: "59bfb685-077e-47c7-bd96-83c848e4d476",
    jobSetType: "marketing_studio_video",
    model: "marketing_studio_video",
    description:
      'HOOK (0–2 sec) POV handheld shot, slightly shaky. A bright red shopping bag with gold text "MAISON BRUNÉ" gets tossed onto a white unmade bed from above — lands with a satisfying thud, tissue paper ru',
    jobId: "4202353a-b01a-42bb-85c2-8e4635da1890",
  },
];

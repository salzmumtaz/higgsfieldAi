/**
 * Home Higgsfield Genjutsu presets from HAR runtime:
 * GET https://cms.higgsfield.ai/higgsfield-multiplier/video-explore/v2?lang=en&source=higgsfield&size=20&cursor=1
 *
 * SSR Home HTML ships empty masonry skeletons. This is the hydrated page-1
 * payload (20 of 35 total; later cursors were not in the HAR). Variants stay
 * nested per preset. aspect is the Home bucket from source width/height:
 * n<=0.72 → 9/16, n<1.6 → 3/2, else 16/9. Mode labels are i18n
 * "Objects swap" / "Motion transfer".
 *
 * Open preset is a Home modal keyed by `openPresetId` (the preset id);
 * the page URL stays `/`. Generate CTA is `/ai/video?model=genjutsu`.
 */

export const GENJUTSU_EXPLORE_URL =
  "https://cms.higgsfield.ai/higgsfield-multiplier/video-explore/v2?lang=en&source=higgsfield&size=20&cursor=1";

export type GenjutsuAspectBucket = "16/9" | "9/16" | "3/2";
export type GenjutsuMode = "replace-objects" | "motion-control";
export type GenjutsuModeLabel = "Objects swap" | "Motion transfer";
export type GenjutsuVariantKind = "source" | "edit" | "generation";

export type GenjutsuRecreate = {
  prompt: string | null;
  params: Record<string, unknown>;
  variantId: string;
};

export type GenjutsuMedia = {
  id: string;
  kind: GenjutsuVariantKind;
  posterSrc: string;
  videoSrc: string;
  importUrl?: string;
  width: number;
  height: number;
  duration?: number;
  mediaId?: string | null;
  recreate?: GenjutsuRecreate;
};

export type GenjutsuPresetBase = {
  id: string;
  name: string;
  description: string;
  mode: GenjutsuMode;
  modeLabel: GenjutsuModeLabel;
  presetSource: string;
};

export type GenjutsuPreset = GenjutsuPresetBase & {
  jobSetType: string;
  aspect: GenjutsuAspectBucket;
  width: number;
  height: number;
  priority: number;
  /** Identifier required to open the Home preset modal. URL stays `/`. */
  openPresetId: string;
  source: GenjutsuMedia;
  variants: GenjutsuMedia[];
  generatedVariants: GenjutsuMedia[];
  activeGeneratedVariantId: string | null;
};

export const genjutsuPresets: GenjutsuPreset[] = [
  {
    "id": "27182599-2cee-4b27-be1a-d13e9d713d37",
    "name": "Countryside Duo",
    "description": "Explore this object replacement preset.",
    "mode": "replace-objects",
    "modeLabel": "Objects swap",
    "jobSetType": "hf_mult_replace_object",
    "aspect": "16/9",
    "width": 1276,
    "height": 718,
    "presetSource": "higgsfield",
    "priority": 2,
    "openPresetId": "27182599-2cee-4b27-be1a-d13e9d713d37",
    "source": {
      "id": "fcb01b90-aa23-4d54-8861-9dbe50479a5a",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/c13b5559-6f19-5e97-bef5-bd5846e7d05d.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/baed0aeb-20d0-54f8-99c5-b4b0cb3a2f66.mp4",
      "width": 1276,
      "height": 718,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/baed0aeb-20d0-54f8-99c5-b4b0cb3a2f66.mp4",
      "duration": 14.133333,
      "mediaId": "baed0aeb-20d0-54f8-99c5-b4b0cb3a2f66"
    },
    "variants": [
      {
        "id": "c482de2c-1644-5faa-9271-9290bcf8eb2e",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/54b6f52b-08b2-5acf-9557-2e599560acd8.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/47e7f67c-9036-5716-b9c7-fee8bc56d0d6.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/47e7f67c-9036-5716-b9c7-fee8bc56d0d6.mp4",
        "duration": 14.041667,
        "mediaId": null
      },
      {
        "id": "fcb01b90-aa23-4d54-8861-9dbe50479a5a",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/c13b5559-6f19-5e97-bef5-bd5846e7d05d.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/baed0aeb-20d0-54f8-99c5-b4b0cb3a2f66.mp4",
        "width": 1276,
        "height": 718,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/baed0aeb-20d0-54f8-99c5-b4b0cb3a2f66.mp4",
        "duration": 14.133333,
        "mediaId": "baed0aeb-20d0-54f8-99c5-b4b0cb3a2f66"
      },
      {
        "id": "5446eb08-8686-4d4a-9155-64e8ad1f5896",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/c131016c-ab63-5bc9-a27a-44feffacd621.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/8459f2e9-c287-50e6-9d75-75ae25a467fc.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/8459f2e9-c287-50e6-9d75-75ae25a467fc.mp4",
        "duration": 14.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the scene location with the environment from my references and change the characters",
          "params": {},
          "variantId": "5446eb08-8686-4d4a-9155-64e8ad1f5896"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "5446eb08-8686-4d4a-9155-64e8ad1f5896",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/c131016c-ab63-5bc9-a27a-44feffacd621.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/8459f2e9-c287-50e6-9d75-75ae25a467fc.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/8459f2e9-c287-50e6-9d75-75ae25a467fc.mp4",
        "duration": 14.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the scene location with the environment from my references and change the characters",
          "params": {},
          "variantId": "5446eb08-8686-4d4a-9155-64e8ad1f5896"
        }
      }
    ],
    "activeGeneratedVariantId": "5446eb08-8686-4d4a-9155-64e8ad1f5896"
  },
  {
    "id": "735fdf1a-e36a-4f2c-be5e-eb3064f53ede",
    "name": "Orange Jacket",
    "description": "Explore this object replacement preset.",
    "mode": "replace-objects",
    "modeLabel": "Objects swap",
    "jobSetType": "hf_mult_replace_object",
    "aspect": "16/9",
    "width": 1280,
    "height": 720,
    "presetSource": "higgsfield",
    "priority": 3,
    "openPresetId": "735fdf1a-e36a-4f2c-be5e-eb3064f53ede",
    "source": {
      "id": "27ff9986-b857-4284-b8a2-dd7a9492aa67",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/000f949b-2131-4fd7-b64e-d6547b9bb722.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/000f949b-2131-4fd7-b64e-d6547b9bb722.mp4",
      "width": 1280,
      "height": 720,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/000f949b-2131-4fd7-b64e-d6547b9bb722.mp4",
      "duration": 9.866667,
      "mediaId": "000f949b-2131-4fd7-b64e-d6547b9bb722"
    },
    "variants": [
      {
        "id": "b24239b1-755b-592b-8a10-2d23b778df1a",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/c045b52b-ab93-5d96-8e2b-72115697cb50.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/8d95f4bf-551f-5606-a72b-54bdb2c20312.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/8d95f4bf-551f-5606-a72b-54bdb2c20312.mp4",
        "duration": 9.5,
        "mediaId": null
      },
      {
        "id": "27ff9986-b857-4284-b8a2-dd7a9492aa67",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/000f949b-2131-4fd7-b64e-d6547b9bb722.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/000f949b-2131-4fd7-b64e-d6547b9bb722.mp4",
        "width": 1280,
        "height": 720,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/000f949b-2131-4fd7-b64e-d6547b9bb722.mp4",
        "duration": 9.866667,
        "mediaId": "000f949b-2131-4fd7-b64e-d6547b9bb722"
      },
      {
        "id": "620b55ba-807a-4cfe-84b6-469061f8c583",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/32379b92-292b-55e0-a4a6-70a875aa2edc.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/9349e2ab-a532-5620-bb87-0e3c4a3cba8d.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/9349e2ab-a532-5620-bb87-0e3c4a3cba8d.mp4",
        "duration": 9.708333,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main character with the character from my references.",
          "params": {},
          "variantId": "620b55ba-807a-4cfe-84b6-469061f8c583"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "620b55ba-807a-4cfe-84b6-469061f8c583",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/32379b92-292b-55e0-a4a6-70a875aa2edc.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/9349e2ab-a532-5620-bb87-0e3c4a3cba8d.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/9349e2ab-a532-5620-bb87-0e3c4a3cba8d.mp4",
        "duration": 9.708333,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main character with the character from my references.",
          "params": {},
          "variantId": "620b55ba-807a-4cfe-84b6-469061f8c583"
        }
      }
    ],
    "activeGeneratedVariantId": "620b55ba-807a-4cfe-84b6-469061f8c583"
  },
  {
    "id": "f8112d7a-5f01-4752-bba7-dfffd3c5ef09",
    "name": "Dance Duo",
    "description": "Explore this object replacement preset.",
    "mode": "replace-objects",
    "modeLabel": "Objects swap",
    "jobSetType": "hf_mult_replace_object",
    "aspect": "9/16",
    "width": 1080,
    "height": 1920,
    "presetSource": "higgsfield",
    "priority": 4,
    "openPresetId": "f8112d7a-5f01-4752-bba7-dfffd3c5ef09",
    "source": {
      "id": "b4509765-5dd9-4386-ad84-c30ab1b9f6d4",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/8dc45a03-aa96-5723-baff-1b8a0b47c9bd.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/fa1bacd5-1229-5dd4-bdc2-181573b7d922.mp4",
      "width": 1080,
      "height": 1920,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/fa1bacd5-1229-5dd4-bdc2-181573b7d922.mp4",
      "duration": 12.866667,
      "mediaId": "fa1bacd5-1229-5dd4-bdc2-181573b7d922"
    },
    "variants": [
      {
        "id": "be9feaea-3ec8-583e-92fb-5499469056b8",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/9650072f-7ed8-5c91-bc2f-edc3a30ba02e.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/62737c89-a414-52a5-9cf2-9dc7fd77deb0.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/62737c89-a414-52a5-9cf2-9dc7fd77deb0.mp4",
        "duration": 12.625,
        "mediaId": null
      },
      {
        "id": "b4509765-5dd9-4386-ad84-c30ab1b9f6d4",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/8dc45a03-aa96-5723-baff-1b8a0b47c9bd.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/fa1bacd5-1229-5dd4-bdc2-181573b7d922.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/fa1bacd5-1229-5dd4-bdc2-181573b7d922.mp4",
        "duration": 12.866667,
        "mediaId": "fa1bacd5-1229-5dd4-bdc2-181573b7d922"
      },
      {
        "id": "14b5fb5c-a7b2-4346-b255-c8dcad9a354a",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/375c1bce-19c7-5e0d-950b-e23c994966f9.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/019d0569-a1a3-55b5-b39a-eee845d0ee84.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/019d0569-a1a3-55b5-b39a-eee845d0ee84.mp4",
        "duration": 12.708333,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main characters with the characters from my references.",
          "params": {},
          "variantId": "14b5fb5c-a7b2-4346-b255-c8dcad9a354a"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "14b5fb5c-a7b2-4346-b255-c8dcad9a354a",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/375c1bce-19c7-5e0d-950b-e23c994966f9.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/019d0569-a1a3-55b5-b39a-eee845d0ee84.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/019d0569-a1a3-55b5-b39a-eee845d0ee84.mp4",
        "duration": 12.708333,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main characters with the characters from my references.",
          "params": {},
          "variantId": "14b5fb5c-a7b2-4346-b255-c8dcad9a354a"
        }
      }
    ],
    "activeGeneratedVariantId": "14b5fb5c-a7b2-4346-b255-c8dcad9a354a"
  },
  {
    "id": "93e97a97-d364-4682-816d-7e11697bb289",
    "name": "Umbrella Transformation",
    "description": "Explore this motion preset.",
    "mode": "motion-control",
    "modeLabel": "Motion transfer",
    "jobSetType": "hf_mult_motion_control",
    "aspect": "9/16",
    "width": 1014,
    "height": 1804,
    "presetSource": "higgsfield",
    "priority": 5,
    "openPresetId": "93e97a97-d364-4682-816d-7e11697bb289",
    "source": {
      "id": "a1590a7f-c049-438e-82bf-259417277a22",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/1d29c69f-d4c2-5153-a339-34e0e3dcc893.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/4380f3a5-c5a9-5876-bd0b-a6415108fc05.mp4",
      "width": 1014,
      "height": 1804,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/4380f3a5-c5a9-5876-bd0b-a6415108fc05.mp4",
      "duration": 10.099999,
      "mediaId": "4380f3a5-c5a9-5876-bd0b-a6415108fc05"
    },
    "variants": [
      {
        "id": "316f6588-1b99-5b22-b2ed-7bbf88b75396",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/e1db4f4b-3101-5151-91bf-a06be7a8a316.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/3a5875b4-b107-5fba-b2ca-7cd5f1a129dc.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/3a5875b4-b107-5fba-b2ca-7cd5f1a129dc.mp4",
        "duration": 9.875,
        "mediaId": null
      },
      {
        "id": "a1590a7f-c049-438e-82bf-259417277a22",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/1d29c69f-d4c2-5153-a339-34e0e3dcc893.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/4380f3a5-c5a9-5876-bd0b-a6415108fc05.mp4",
        "width": 1014,
        "height": 1804,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/4380f3a5-c5a9-5876-bd0b-a6415108fc05.mp4",
        "duration": 10.099999,
        "mediaId": "4380f3a5-c5a9-5876-bd0b-a6415108fc05"
      },
      {
        "id": "1341d910-60b0-4a99-931b-a27a43c9cbc5",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/f42bdaa4-241e-5f7f-84d5-dee05f00dec7.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/8e9bed91-594a-500f-8503-ba8bef23fec3.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/8e9bed91-594a-500f-8503-ba8bef23fec3.mp4",
        "duration": 10.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Swap a location and the character \n<<<image_2>>> - location \n<<<image_1>>> - actor\n<<<image_3>>>  - second look",
          "params": {},
          "variantId": "1341d910-60b0-4a99-931b-a27a43c9cbc5"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "1341d910-60b0-4a99-931b-a27a43c9cbc5",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/f42bdaa4-241e-5f7f-84d5-dee05f00dec7.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/8e9bed91-594a-500f-8503-ba8bef23fec3.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/8e9bed91-594a-500f-8503-ba8bef23fec3.mp4",
        "duration": 10.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Swap a location and the character \n<<<image_2>>> - location \n<<<image_1>>> - actor\n<<<image_3>>>  - second look",
          "params": {},
          "variantId": "1341d910-60b0-4a99-931b-a27a43c9cbc5"
        }
      }
    ],
    "activeGeneratedVariantId": "1341d910-60b0-4a99-931b-a27a43c9cbc5"
  },
  {
    "id": "5fcd3deb-8a52-4a31-b660-14df5408b54a",
    "name": "Selfie Walk",
    "description": "Explore this motion preset.",
    "mode": "motion-control",
    "modeLabel": "Motion transfer",
    "jobSetType": "hf_mult_motion_control",
    "aspect": "16/9",
    "width": 720,
    "height": 404,
    "presetSource": "higgsfield",
    "priority": 6,
    "openPresetId": "5fcd3deb-8a52-4a31-b660-14df5408b54a",
    "source": {
      "id": "4c1c0ae8-169b-479f-9394-7a63ee19f919",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/fcffb22c-cbf8-43d0-b9b6-351815063c73.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/fcffb22c-cbf8-43d0-b9b6-351815063c73.mp4",
      "width": 720,
      "height": 404,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/fcffb22c-cbf8-43d0-b9b6-351815063c73.mp4",
      "duration": 7.3,
      "mediaId": "fcffb22c-cbf8-43d0-b9b6-351815063c73"
    },
    "variants": [
      {
        "id": "2189c8cd-1f57-54fb-bc76-d52543ec0da5",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/1bc47dfd-2af0-509b-bd76-3896ec07bf3d.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/3d0c8832-4fcc-50a7-b65c-e480f0a25742.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/3d0c8832-4fcc-50a7-b65c-e480f0a25742.mp4",
        "duration": 7.166667,
        "mediaId": null
      },
      {
        "id": "4c1c0ae8-169b-479f-9394-7a63ee19f919",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/fcffb22c-cbf8-43d0-b9b6-351815063c73.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/fcffb22c-cbf8-43d0-b9b6-351815063c73.mp4",
        "width": 720,
        "height": 404,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/fcffb22c-cbf8-43d0-b9b6-351815063c73.mp4",
        "duration": 7.3,
        "mediaId": "fcffb22c-cbf8-43d0-b9b6-351815063c73"
      },
      {
        "id": "cc09e5f4-b403-48fd-b97c-e92a774a9c95",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/9db1a6a1-53c4-507a-a4dc-b8f5fdcebaaf.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/4d05185e-528c-5459-a9f6-f3ee3f9e884b.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/4d05185e-528c-5459-a9f6-f3ee3f9e884b.mp4",
        "duration": 7.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the video's main character",
          "params": {},
          "variantId": "cc09e5f4-b403-48fd-b97c-e92a774a9c95"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "cc09e5f4-b403-48fd-b97c-e92a774a9c95",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/9db1a6a1-53c4-507a-a4dc-b8f5fdcebaaf.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/4d05185e-528c-5459-a9f6-f3ee3f9e884b.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/4d05185e-528c-5459-a9f6-f3ee3f9e884b.mp4",
        "duration": 7.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the video's main character",
          "params": {},
          "variantId": "cc09e5f4-b403-48fd-b97c-e92a774a9c95"
        }
      }
    ],
    "activeGeneratedVariantId": "cc09e5f4-b403-48fd-b97c-e92a774a9c95"
  },
  {
    "id": "c0709c7a-e057-401f-8a0f-ee9cfec4d8ed",
    "name": "Anime Times Square",
    "description": "Explore this object replacement preset.",
    "mode": "replace-objects",
    "modeLabel": "Objects swap",
    "jobSetType": "hf_mult_replace_object",
    "aspect": "9/16",
    "width": 1080,
    "height": 1920,
    "presetSource": "higgsfield",
    "priority": 7,
    "openPresetId": "c0709c7a-e057-401f-8a0f-ee9cfec4d8ed",
    "source": {
      "id": "42f0157c-cd4c-431f-9dbf-899e2735d986",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/5be8a0b9-d085-5bc0-b603-a156d20fb97d.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/e00d85ab-fd35-52a6-80fd-bac7b262b408.mp4",
      "width": 1080,
      "height": 1920,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/e00d85ab-fd35-52a6-80fd-bac7b262b408.mp4",
      "duration": 5.739067,
      "mediaId": "e00d85ab-fd35-52a6-80fd-bac7b262b408"
    },
    "variants": [
      {
        "id": "555e736e-9536-527c-9f00-aaf761a11348",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/067a9f92-94b2-5e63-accf-2c57fe1a0cdf.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d5fa99e5-4267-548f-8ced-cdf69c477346.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d5fa99e5-4267-548f-8ced-cdf69c477346.mp4",
        "duration": 5.708333,
        "mediaId": null
      },
      {
        "id": "42f0157c-cd4c-431f-9dbf-899e2735d986",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/5be8a0b9-d085-5bc0-b603-a156d20fb97d.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/e00d85ab-fd35-52a6-80fd-bac7b262b408.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/e00d85ab-fd35-52a6-80fd-bac7b262b408.mp4",
        "duration": 5.739067,
        "mediaId": "e00d85ab-fd35-52a6-80fd-bac7b262b408"
      },
      {
        "id": "a87d3c22-3145-4a79-8ed9-09d909382693",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/edb8ae49-e88e-5f96-a394-de737bcc2895.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/fedc369f-110d-54ea-9d0a-a65a4479f715.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/fedc369f-110d-54ea-9d0a-a65a4479f715.mp4",
        "duration": 5.708333,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main character with the character from my references.",
          "params": {},
          "variantId": "a87d3c22-3145-4a79-8ed9-09d909382693"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "a87d3c22-3145-4a79-8ed9-09d909382693",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/edb8ae49-e88e-5f96-a394-de737bcc2895.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/fedc369f-110d-54ea-9d0a-a65a4479f715.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/fedc369f-110d-54ea-9d0a-a65a4479f715.mp4",
        "duration": 5.708333,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main character with the character from my references.",
          "params": {},
          "variantId": "a87d3c22-3145-4a79-8ed9-09d909382693"
        }
      }
    ],
    "activeGeneratedVariantId": "a87d3c22-3145-4a79-8ed9-09d909382693"
  },
  {
    "id": "ea73209c-6010-41fd-b368-be9b515b47a6",
    "name": "Couple Recast",
    "description": "Explore this object replacement preset.",
    "mode": "replace-objects",
    "modeLabel": "Objects swap",
    "jobSetType": "hf_mult_replace_object",
    "aspect": "16/9",
    "width": 1920,
    "height": 1080,
    "presetSource": "higgsfield",
    "priority": 8,
    "openPresetId": "ea73209c-6010-41fd-b368-be9b515b47a6",
    "source": {
      "id": "9c7bdf40-78bc-4ed8-81b7-2167c5302777",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/25ceeee8-95da-5ca4-9b1f-860e742b7130.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/11a42a29-a28d-53c4-be16-11b10e0115cb.mp4",
      "width": 1920,
      "height": 1080,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/11a42a29-a28d-53c4-be16-11b10e0115cb.mp4",
      "duration": 11.281,
      "mediaId": "11a42a29-a28d-53c4-be16-11b10e0115cb"
    },
    "variants": [
      {
        "id": "fa15931a-ec6f-5b22-b93b-01690a6f2a72",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/f0ad452c-2254-54cb-932e-d85d0b06dca7.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/99957f6f-745c-5d1f-bc76-0d8de5c67d6a.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/99957f6f-745c-5d1f-bc76-0d8de5c67d6a.mp4",
        "duration": 9.375,
        "mediaId": null
      },
      {
        "id": "9c7bdf40-78bc-4ed8-81b7-2167c5302777",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/25ceeee8-95da-5ca4-9b1f-860e742b7130.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/11a42a29-a28d-53c4-be16-11b10e0115cb.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/11a42a29-a28d-53c4-be16-11b10e0115cb.mp4",
        "duration": 11.281,
        "mediaId": "11a42a29-a28d-53c4-be16-11b10e0115cb"
      },
      {
        "id": "86ae1c28-9f27-4699-90cf-fd8a2a400062",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/83ba7e95-28e6-59db-804d-68939b9ad371.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/cdf4755e-54a1-5233-802a-4f304e28e82d.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/cdf4755e-54a1-5233-802a-4f304e28e82d.mp4",
        "duration": 11.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main characters with the characters from my references.",
          "params": {},
          "variantId": "86ae1c28-9f27-4699-90cf-fd8a2a400062"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "86ae1c28-9f27-4699-90cf-fd8a2a400062",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/83ba7e95-28e6-59db-804d-68939b9ad371.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/cdf4755e-54a1-5233-802a-4f304e28e82d.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/cdf4755e-54a1-5233-802a-4f304e28e82d.mp4",
        "duration": 11.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main characters with the characters from my references.",
          "params": {},
          "variantId": "86ae1c28-9f27-4699-90cf-fd8a2a400062"
        }
      }
    ],
    "activeGeneratedVariantId": "86ae1c28-9f27-4699-90cf-fd8a2a400062"
  },
  {
    "id": "b4e5ab10-b5fa-469b-a7f9-4c8b17ad58a8",
    "name": "Magenta Routine",
    "description": "Explore this motion preset.",
    "mode": "motion-control",
    "modeLabel": "Motion transfer",
    "jobSetType": "hf_mult_motion_control",
    "aspect": "9/16",
    "width": 1080,
    "height": 1920,
    "presetSource": "higgsfield",
    "priority": 9,
    "openPresetId": "b4e5ab10-b5fa-469b-a7f9-4c8b17ad58a8",
    "source": {
      "id": "6df7e32b-ae5a-458b-ad6b-b39a2f8c6c31",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/f59bd1a0-8422-58cd-8b27-f4c791c09213.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/bc92d258-1b65-5ff0-9c1c-ab73bde1ba58.mp4",
      "width": 1080,
      "height": 1920,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/bc92d258-1b65-5ff0-9c1c-ab73bde1ba58.mp4",
      "duration": 22.041667,
      "mediaId": "bc92d258-1b65-5ff0-9c1c-ab73bde1ba58"
    },
    "variants": [
      {
        "id": "b2b43132-8b41-5694-a87e-ec594ffe3875",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d34e684b-0ed7-50fa-befb-d550e7a43881.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/038006dd-02ba-5bc5-9825-e9b27bf32373.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/038006dd-02ba-5bc5-9825-e9b27bf32373.mp4",
        "duration": 20.125,
        "mediaId": null
      },
      {
        "id": "6df7e32b-ae5a-458b-ad6b-b39a2f8c6c31",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/f59bd1a0-8422-58cd-8b27-f4c791c09213.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/bc92d258-1b65-5ff0-9c1c-ab73bde1ba58.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/bc92d258-1b65-5ff0-9c1c-ab73bde1ba58.mp4",
        "duration": 22.041667,
        "mediaId": "bc92d258-1b65-5ff0-9c1c-ab73bde1ba58"
      },
      {
        "id": "fc0f2b70-b08f-40bb-99b5-0d87cbb08477",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/042a285e-0c04-5f29-b861-6481aaa18ca9.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/7db21a0d-bf36-567e-bead-e9ad382ac80f.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/7db21a0d-bf36-567e-bead-e9ad382ac80f.mp4",
        "duration": 22.041667,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "fc0f2b70-b08f-40bb-99b5-0d87cbb08477"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "fc0f2b70-b08f-40bb-99b5-0d87cbb08477",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/042a285e-0c04-5f29-b861-6481aaa18ca9.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/7db21a0d-bf36-567e-bead-e9ad382ac80f.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/7db21a0d-bf36-567e-bead-e9ad382ac80f.mp4",
        "duration": 22.041667,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "fc0f2b70-b08f-40bb-99b5-0d87cbb08477"
        }
      }
    ],
    "activeGeneratedVariantId": "fc0f2b70-b08f-40bb-99b5-0d87cbb08477"
  },
  {
    "id": "24d7ae76-1bd8-46ff-b637-e1bb5b31d6b6",
    "name": "Clone Recast",
    "description": "Explore this motion preset.",
    "mode": "motion-control",
    "modeLabel": "Motion transfer",
    "jobSetType": "hf_mult_motion_control",
    "aspect": "3/2",
    "width": 1440,
    "height": 1080,
    "presetSource": "higgsfield",
    "priority": 10,
    "openPresetId": "24d7ae76-1bd8-46ff-b637-e1bb5b31d6b6",
    "source": {
      "id": "96bb6de1-4bd0-49b9-811c-97de0fc1d8bd",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/ab54c68a-9916-5ddf-975a-c741e9870d55.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/baa09269-dfe6-50eb-a7f6-af306a0130a6.mp4",
      "width": 1440,
      "height": 1080,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/baa09269-dfe6-50eb-a7f6-af306a0130a6.mp4",
      "duration": 16.891875,
      "mediaId": "baa09269-dfe6-50eb-a7f6-af306a0130a6"
    },
    "variants": [
      {
        "id": "444321b1-c914-5a22-b778-3c2c785907a1",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/24daa737-06d4-530d-b2ff-18f0eeb2c289.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/5e090e59-854d-5f0b-87de-dd84d9177049.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/5e090e59-854d-5f0b-87de-dd84d9177049.mp4",
        "duration": 16.708333,
        "mediaId": null
      },
      {
        "id": "96bb6de1-4bd0-49b9-811c-97de0fc1d8bd",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/ab54c68a-9916-5ddf-975a-c741e9870d55.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/baa09269-dfe6-50eb-a7f6-af306a0130a6.mp4",
        "width": 1440,
        "height": 1080,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/baa09269-dfe6-50eb-a7f6-af306a0130a6.mp4",
        "duration": 16.891875,
        "mediaId": "baa09269-dfe6-50eb-a7f6-af306a0130a6"
      },
      {
        "id": "2eaad175-2669-4477-9ce7-007d179e464a",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d47f5b85-234a-54d6-87ad-377371e44d82.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/54982d1d-5762-5e8c-b83d-e27d6761aeee.mp4",
        "width": 1664,
        "height": 1248,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/54982d1d-5762-5e8c-b83d-e27d6761aeee.mp4",
        "duration": 17.041667,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "2eaad175-2669-4477-9ce7-007d179e464a"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "2eaad175-2669-4477-9ce7-007d179e464a",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d47f5b85-234a-54d6-87ad-377371e44d82.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/54982d1d-5762-5e8c-b83d-e27d6761aeee.mp4",
        "width": 1664,
        "height": 1248,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/54982d1d-5762-5e8c-b83d-e27d6761aeee.mp4",
        "duration": 17.041667,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "2eaad175-2669-4477-9ce7-007d179e464a"
        }
      }
    ],
    "activeGeneratedVariantId": "2eaad175-2669-4477-9ce7-007d179e464a"
  },
  {
    "id": "14aeef88-284f-4a50-83b3-979893207ab6",
    "name": "Desert Duo",
    "description": "Explore this object replacement preset.",
    "mode": "replace-objects",
    "modeLabel": "Objects swap",
    "jobSetType": "hf_mult_replace_object",
    "aspect": "3/2",
    "width": 1350,
    "height": 1080,
    "presetSource": "higgsfield",
    "priority": 11,
    "openPresetId": "14aeef88-284f-4a50-83b3-979893207ab6",
    "source": {
      "id": "c871c935-18c5-4988-b168-0064667368fc",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/97d77601-5e22-5fe1-bc28-c055ab7aeed7.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/b865cef0-0fb4-543b-bb53-a7f81b97f24d.mp4",
      "width": 1350,
      "height": 1080,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/b865cef0-0fb4-543b-bb53-a7f81b97f24d.mp4",
      "duration": 10.0,
      "mediaId": "b865cef0-0fb4-543b-bb53-a7f81b97f24d"
    },
    "variants": [
      {
        "id": "a1def639-747d-5fe8-b1cd-7689fa4468e7",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/08edcef0-2205-5490-a4e3-014f32e77587.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d7a9c7c4-e7b6-58aa-9e64-be88eb8a1ca4.mp4",
        "width": 1350,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d7a9c7c4-e7b6-58aa-9e64-be88eb8a1ca4.mp4",
        "duration": 9.833333,
        "mediaId": null
      },
      {
        "id": "c871c935-18c5-4988-b168-0064667368fc",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/97d77601-5e22-5fe1-bc28-c055ab7aeed7.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/b865cef0-0fb4-543b-bb53-a7f81b97f24d.mp4",
        "width": 1350,
        "height": 1080,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/b865cef0-0fb4-543b-bb53-a7f81b97f24d.mp4",
        "duration": 10.0,
        "mediaId": "b865cef0-0fb4-543b-bb53-a7f81b97f24d"
      },
      {
        "id": "fa224ac8-3c52-4aff-bbce-d04768761aa5",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d8317043-0d8e-5e56-8461-ce675f5a6727.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/55e656fb-4b00-5b62-bc1f-8098221211a8.mp4",
        "width": 1610,
        "height": 1288,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/55e656fb-4b00-5b62-bc1f-8098221211a8.mp4",
        "duration": 9.708333,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main characters with the characters from my references.",
          "params": {},
          "variantId": "fa224ac8-3c52-4aff-bbce-d04768761aa5"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "fa224ac8-3c52-4aff-bbce-d04768761aa5",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d8317043-0d8e-5e56-8461-ce675f5a6727.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/55e656fb-4b00-5b62-bc1f-8098221211a8.mp4",
        "width": 1610,
        "height": 1288,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/55e656fb-4b00-5b62-bc1f-8098221211a8.mp4",
        "duration": 9.708333,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main characters with the characters from my references.",
          "params": {},
          "variantId": "fa224ac8-3c52-4aff-bbce-d04768761aa5"
        }
      }
    ],
    "activeGeneratedVariantId": "fa224ac8-3c52-4aff-bbce-d04768761aa5"
  },
  {
    "id": "0086596a-f988-4aa7-9dcf-b4eb09ff4891",
    "name": "Handbag Slide",
    "description": "Explore this motion preset.",
    "mode": "motion-control",
    "modeLabel": "Motion transfer",
    "jobSetType": "hf_mult_motion_control",
    "aspect": "9/16",
    "width": 1080,
    "height": 1920,
    "presetSource": "higgsfield",
    "priority": 12,
    "openPresetId": "0086596a-f988-4aa7-9dcf-b4eb09ff4891",
    "source": {
      "id": "32357e21-afe2-4aae-8b23-c85a2b072a38",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/749885be-de71-5106-b5ca-48322a94ce27.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/138dfbfc-e5fd-5393-be7f-8e337590ce28.mp4",
      "width": 1080,
      "height": 1920,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/138dfbfc-e5fd-5393-be7f-8e337590ce28.mp4",
      "duration": 7.2,
      "mediaId": "138dfbfc-e5fd-5393-be7f-8e337590ce28"
    },
    "variants": [
      {
        "id": "7cf2f608-3d8b-5a50-92f2-6c9ad95d8ade",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/f32779dd-b4be-5f1d-ac1f-71f59b92d476.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/4e37f6d2-f6e9-58ef-80c4-0cd77cc84d6d.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/4e37f6d2-f6e9-58ef-80c4-0cd77cc84d6d.mp4",
        "duration": 6.791667,
        "mediaId": null
      },
      {
        "id": "32357e21-afe2-4aae-8b23-c85a2b072a38",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/749885be-de71-5106-b5ca-48322a94ce27.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/138dfbfc-e5fd-5393-be7f-8e337590ce28.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/138dfbfc-e5fd-5393-be7f-8e337590ce28.mp4",
        "duration": 7.2,
        "mediaId": "138dfbfc-e5fd-5393-be7f-8e337590ce28"
      },
      {
        "id": "9d56d9d7-a872-4190-9a08-7a0b3a8ab80e",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/9ca1d619-e69e-5f9c-add3-362796b83f7e.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d3cd9d39-926a-5b4b-943f-89de1e34a066.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d3cd9d39-926a-5b4b-943f-89de1e34a066.mp4",
        "duration": 7.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the video's main character",
          "params": {},
          "variantId": "9d56d9d7-a872-4190-9a08-7a0b3a8ab80e"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "9d56d9d7-a872-4190-9a08-7a0b3a8ab80e",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/9ca1d619-e69e-5f9c-add3-362796b83f7e.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d3cd9d39-926a-5b4b-943f-89de1e34a066.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/d3cd9d39-926a-5b4b-943f-89de1e34a066.mp4",
        "duration": 7.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the video's main character",
          "params": {},
          "variantId": "9d56d9d7-a872-4190-9a08-7a0b3a8ab80e"
        }
      }
    ],
    "activeGeneratedVariantId": "9d56d9d7-a872-4190-9a08-7a0b3a8ab80e"
  },
  {
    "id": "2749d6b3-863a-46cb-8ea2-24cb81357974",
    "name": "Golden Gown",
    "description": "Explore this object replacement preset.",
    "mode": "replace-objects",
    "modeLabel": "Objects swap",
    "jobSetType": "hf_mult_replace_object",
    "aspect": "16/9",
    "width": 1920,
    "height": 1080,
    "presetSource": "higgsfield",
    "priority": 13,
    "openPresetId": "2749d6b3-863a-46cb-8ea2-24cb81357974",
    "source": {
      "id": "28a1f02a-2a36-444b-b875-0fe8abb26084",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/992b5105-b759-564b-9262-be08c76ecee3.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/042ca354-7a8e-583c-889e-472b65ea6a39.mp4",
      "width": 1920,
      "height": 1080,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/042ca354-7a8e-583c-889e-472b65ea6a39.mp4",
      "duration": 9.5095,
      "mediaId": "042ca354-7a8e-583c-889e-472b65ea6a39"
    },
    "variants": [
      {
        "id": "9563abef-0d87-5cbc-bf98-10e2beca364e",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/167113f5-32ca-5c5f-ae3f-7f8e7599e964.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/84a16914-67fa-544b-b1f4-d36bd9309c3a.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/84a16914-67fa-544b-b1f4-d36bd9309c3a.mp4",
        "duration": 9.375,
        "mediaId": null
      },
      {
        "id": "28a1f02a-2a36-444b-b875-0fe8abb26084",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/992b5105-b759-564b-9262-be08c76ecee3.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/042ca354-7a8e-583c-889e-472b65ea6a39.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/042ca354-7a8e-583c-889e-472b65ea6a39.mp4",
        "duration": 9.5095,
        "mediaId": "042ca354-7a8e-583c-889e-472b65ea6a39"
      },
      {
        "id": "c3063fc4-af05-4285-83d8-ac26a51d1e77",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/349bd107-3270-56da-9e06-495c15264a31.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/6ee88449-0be8-5853-800e-11efed2d316b.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/6ee88449-0be8-5853-800e-11efed2d316b.mp4",
        "duration": 9.375,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "c3063fc4-af05-4285-83d8-ac26a51d1e77"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "c3063fc4-af05-4285-83d8-ac26a51d1e77",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/349bd107-3270-56da-9e06-495c15264a31.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/6ee88449-0be8-5853-800e-11efed2d316b.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/6ee88449-0be8-5853-800e-11efed2d316b.mp4",
        "duration": 9.375,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "c3063fc4-af05-4285-83d8-ac26a51d1e77"
        }
      }
    ],
    "activeGeneratedVariantId": "c3063fc4-af05-4285-83d8-ac26a51d1e77"
  },
  {
    "id": "09331738-7cbf-4231-a64c-c56ee80b16e7",
    "name": "Patchwork Runway",
    "description": "Explore this motion preset.",
    "mode": "motion-control",
    "modeLabel": "Motion transfer",
    "jobSetType": "hf_mult_motion_control",
    "aspect": "9/16",
    "width": 1080,
    "height": 1920,
    "presetSource": "higgsfield",
    "priority": 14,
    "openPresetId": "09331738-7cbf-4231-a64c-c56ee80b16e7",
    "source": {
      "id": "ee7ae071-a651-454f-a7f9-e5acf0eeaf0f",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/b69571e4-0b3d-5296-a050-5c9abab4966a.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/188a7a57-3e17-5313-9c1a-95f12e0ff2a3.mp4",
      "width": 1080,
      "height": 1920,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/188a7a57-3e17-5313-9c1a-95f12e0ff2a3.mp4",
      "duration": 13.44,
      "mediaId": "188a7a57-3e17-5313-9c1a-95f12e0ff2a3"
    },
    "variants": [
      {
        "id": "a09f2982-686c-5b08-9230-72314492a075",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/80918ab3-d0cf-5c86-af99-29d53184edf0.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/a78dde84-999e-5507-99cd-4ffd160451f1.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/a78dde84-999e-5507-99cd-4ffd160451f1.mp4",
        "duration": 13.125,
        "mediaId": null
      },
      {
        "id": "ee7ae071-a651-454f-a7f9-e5acf0eeaf0f",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/b69571e4-0b3d-5296-a050-5c9abab4966a.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/188a7a57-3e17-5313-9c1a-95f12e0ff2a3.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/188a7a57-3e17-5313-9c1a-95f12e0ff2a3.mp4",
        "duration": 13.44,
        "mediaId": "188a7a57-3e17-5313-9c1a-95f12e0ff2a3"
      },
      {
        "id": "a2e6a5f6-eb64-49a5-b7e6-401bf613f664",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/b918933c-d471-5ff4-8f07-9032dd2f8741.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/094dcaea-bdc4-5e26-b705-7c9a64b60ae5.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/094dcaea-bdc4-5e26-b705-7c9a64b60ae5.mp4",
        "duration": 13.041667,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "a2e6a5f6-eb64-49a5-b7e6-401bf613f664"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "a2e6a5f6-eb64-49a5-b7e6-401bf613f664",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/b918933c-d471-5ff4-8f07-9032dd2f8741.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/094dcaea-bdc4-5e26-b705-7c9a64b60ae5.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/094dcaea-bdc4-5e26-b705-7c9a64b60ae5.mp4",
        "duration": 13.041667,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "a2e6a5f6-eb64-49a5-b7e6-401bf613f664"
        }
      }
    ],
    "activeGeneratedVariantId": "a2e6a5f6-eb64-49a5-b7e6-401bf613f664"
  },
  {
    "id": "35533f73-a948-416a-8c40-9bcfc047bbe3",
    "name": "Pink Street Runway",
    "description": "Explore this motion preset.",
    "mode": "motion-control",
    "modeLabel": "Motion transfer",
    "jobSetType": "hf_mult_motion_control",
    "aspect": "9/16",
    "width": 1080,
    "height": 1920,
    "presetSource": "higgsfield",
    "priority": 15,
    "openPresetId": "35533f73-a948-416a-8c40-9bcfc047bbe3",
    "source": {
      "id": "ada7f2a0-d0e5-45d1-8ff3-488a97337293",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/1ff8d415-349b-5d54-8759-a3aa379ef4a4.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/53792492-24fe-5e9b-83e8-6a05946b9236.mp4",
      "width": 1080,
      "height": 1920,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/53792492-24fe-5e9b-83e8-6a05946b9236.mp4",
      "duration": 12.4,
      "mediaId": "53792492-24fe-5e9b-83e8-6a05946b9236"
    },
    "variants": [
      {
        "id": "b1d8a195-db18-5b35-8a88-329de820c3b3",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/33ab59ac-cee3-57eb-95ce-5e754de9f021.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/cb1d7534-51a1-5545-8b0e-6c093ff05133.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/cb1d7534-51a1-5545-8b0e-6c093ff05133.mp4",
        "duration": 11.75,
        "mediaId": null
      },
      {
        "id": "ada7f2a0-d0e5-45d1-8ff3-488a97337293",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/1ff8d415-349b-5d54-8759-a3aa379ef4a4.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/53792492-24fe-5e9b-83e8-6a05946b9236.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/53792492-24fe-5e9b-83e8-6a05946b9236.mp4",
        "duration": 12.4,
        "mediaId": "53792492-24fe-5e9b-83e8-6a05946b9236"
      },
      {
        "id": "e4f471db-28d3-43cb-b6ce-8d128b9a585a",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/00cbd34b-9fee-55e7-833a-2c4bbda17516.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/081ff335-d7d1-569c-a07c-cc53a6d38609.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/081ff335-d7d1-569c-a07c-cc53a6d38609.mp4",
        "duration": 12.041667,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "e4f471db-28d3-43cb-b6ce-8d128b9a585a"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "e4f471db-28d3-43cb-b6ce-8d128b9a585a",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/00cbd34b-9fee-55e7-833a-2c4bbda17516.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/081ff335-d7d1-569c-a07c-cc53a6d38609.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/081ff335-d7d1-569c-a07c-cc53a6d38609.mp4",
        "duration": 12.041667,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "e4f471db-28d3-43cb-b6ce-8d128b9a585a"
        }
      }
    ],
    "activeGeneratedVariantId": "e4f471db-28d3-43cb-b6ce-8d128b9a585a"
  },
  {
    "id": "132dfd2f-e05a-4643-9eae-df7bf5530b88",
    "name": "Toronto Recast",
    "description": "Explore this object replacement preset.",
    "mode": "replace-objects",
    "modeLabel": "Objects swap",
    "jobSetType": "hf_mult_replace_object",
    "aspect": "16/9",
    "width": 1024,
    "height": 576,
    "presetSource": "higgsfield",
    "priority": 16,
    "openPresetId": "132dfd2f-e05a-4643-9eae-df7bf5530b88",
    "source": {
      "id": "192c7a05-cee3-4495-9ea5-7e5ab562355e",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/b7a05e95-653c-5ff7-ae9b-b76f3ec88a1b.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/dbc43364-fbef-528a-8511-20e3ddc46057.mp4",
      "width": 1024,
      "height": 576,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/dbc43364-fbef-528a-8511-20e3ddc46057.mp4",
      "duration": 14.208333,
      "mediaId": "dbc43364-fbef-528a-8511-20e3ddc46057"
    },
    "variants": [
      {
        "id": "c8138862-88f7-594b-8cee-29343fc793a4",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/06aaeffd-33c0-5add-a61c-eacf299154fa.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/e4b7cb16-15e3-54cd-af92-4746d3a5c26d.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/e4b7cb16-15e3-54cd-af92-4746d3a5c26d.mp4",
        "duration": 14.041667,
        "mediaId": null
      },
      {
        "id": "192c7a05-cee3-4495-9ea5-7e5ab562355e",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/b7a05e95-653c-5ff7-ae9b-b76f3ec88a1b.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/dbc43364-fbef-528a-8511-20e3ddc46057.mp4",
        "width": 1024,
        "height": 576,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/dbc43364-fbef-528a-8511-20e3ddc46057.mp4",
        "duration": 14.208333,
        "mediaId": "dbc43364-fbef-528a-8511-20e3ddc46057"
      },
      {
        "id": "0d2bf623-bf59-4d7e-8114-37b133e57451",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/b1f14d8c-0c7c-54f8-8938-2a57ce3476b4.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/e0f17a1d-ae68-5e09-8eeb-ce33aee786d7.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/e0f17a1d-ae68-5e09-8eeb-ce33aee786d7.mp4",
        "duration": 14.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main character with the character from my references.",
          "params": {},
          "variantId": "0d2bf623-bf59-4d7e-8114-37b133e57451"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "0d2bf623-bf59-4d7e-8114-37b133e57451",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/b1f14d8c-0c7c-54f8-8938-2a57ce3476b4.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/e0f17a1d-ae68-5e09-8eeb-ce33aee786d7.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/e0f17a1d-ae68-5e09-8eeb-ce33aee786d7.mp4",
        "duration": 14.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main character with the character from my references.",
          "params": {},
          "variantId": "0d2bf623-bf59-4d7e-8114-37b133e57451"
        }
      }
    ],
    "activeGeneratedVariantId": "0d2bf623-bf59-4d7e-8114-37b133e57451"
  },
  {
    "id": "c3bbb1b7-1e34-4210-a7fa-b03600a77543",
    "name": "Cat Performer",
    "description": "Explore this motion preset.",
    "mode": "motion-control",
    "modeLabel": "Motion transfer",
    "jobSetType": "hf_mult_motion_control",
    "aspect": "3/2",
    "width": 1664,
    "height": 1248,
    "presetSource": "higgsfield",
    "priority": 17,
    "openPresetId": "c3bbb1b7-1e34-4210-a7fa-b03600a77543",
    "source": {
      "id": "93ed1b21-45b8-4741-aa6f-332b74e50cd4",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/80455f8f-ea9d-50ae-a0d4-e13b35c3c013.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/01075d0b-ce45-5a53-853c-6bf1feb96635.mp4",
      "width": 1664,
      "height": 1248,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/01075d0b-ce45-5a53-853c-6bf1feb96635.mp4",
      "duration": 17.041667,
      "mediaId": "01075d0b-ce45-5a53-853c-6bf1feb96635"
    },
    "variants": [
      {
        "id": "85cbf770-db07-5f25-bcf4-c1dd3a9773db",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/a3177c9f-c068-54bb-96b2-abc85054ef9b.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/11b0e9bc-7942-523e-bda0-13a7a69fdfce.mp4",
        "width": 1350,
        "height": 1080,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/11b0e9bc-7942-523e-bda0-13a7a69fdfce.mp4",
        "duration": 9.833333,
        "mediaId": null
      },
      {
        "id": "93ed1b21-45b8-4741-aa6f-332b74e50cd4",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/80455f8f-ea9d-50ae-a0d4-e13b35c3c013.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/01075d0b-ce45-5a53-853c-6bf1feb96635.mp4",
        "width": 1664,
        "height": 1248,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/01075d0b-ce45-5a53-853c-6bf1feb96635.mp4",
        "duration": 17.041667,
        "mediaId": "01075d0b-ce45-5a53-853c-6bf1feb96635"
      },
      {
        "id": "ee3971f8-0034-48de-b75c-72fc115366f2",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/c9f29f1f-b04b-504f-b620-77096a1fe44e.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/102a33b9-89cf-56ec-87aa-1d38ae1f3e11.mp4",
        "width": 1664,
        "height": 1248,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/102a33b9-89cf-56ec-87aa-1d38ae1f3e11.mp4",
        "duration": 17.041667,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "ee3971f8-0034-48de-b75c-72fc115366f2"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "ee3971f8-0034-48de-b75c-72fc115366f2",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/c9f29f1f-b04b-504f-b620-77096a1fe44e.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/102a33b9-89cf-56ec-87aa-1d38ae1f3e11.mp4",
        "width": 1664,
        "height": 1248,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/102a33b9-89cf-56ec-87aa-1d38ae1f3e11.mp4",
        "duration": 17.041667,
        "mediaId": null,
        "recreate": {
          "prompt": null,
          "params": {},
          "variantId": "ee3971f8-0034-48de-b75c-72fc115366f2"
        }
      }
    ],
    "activeGeneratedVariantId": "ee3971f8-0034-48de-b75c-72fc115366f2"
  },
  {
    "id": "921847b5-ee14-4075-be9a-b3d6de70ba50",
    "name": "Playroom Recast",
    "description": "Explore this object replacement preset.",
    "mode": "replace-objects",
    "modeLabel": "Objects swap",
    "jobSetType": "hf_mult_replace_object",
    "aspect": "9/16",
    "width": 720,
    "height": 1280,
    "presetSource": "higgsfield",
    "priority": 18,
    "openPresetId": "921847b5-ee14-4075-be9a-b3d6de70ba50",
    "source": {
      "id": "70c25a93-a807-4d05-a036-2ce2689705b4",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/7f09219d-ace4-5f5d-be36-184fc660e3c3.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/ef6d5426-400d-5dad-94d0-cd5ba44c3061.mp4",
      "width": 720,
      "height": 1280,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/ef6d5426-400d-5dad-94d0-cd5ba44c3061.mp4",
      "duration": 27.633333,
      "mediaId": "ef6d5426-400d-5dad-94d0-cd5ba44c3061"
    },
    "variants": [
      {
        "id": "3b8ec5ce-81e7-5a4e-95ac-e09feac15fc3",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/56475b81-bfc4-5cf1-ace4-902c5c0797e3.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/290c985f-c3ad-5a0b-84df-07e50797a596.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/290c985f-c3ad-5a0b-84df-07e50797a596.mp4",
        "duration": 25.916667,
        "mediaId": null
      },
      {
        "id": "70c25a93-a807-4d05-a036-2ce2689705b4",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/7f09219d-ace4-5f5d-be36-184fc660e3c3.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/ef6d5426-400d-5dad-94d0-cd5ba44c3061.mp4",
        "width": 720,
        "height": 1280,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/ef6d5426-400d-5dad-94d0-cd5ba44c3061.mp4",
        "duration": 27.633333,
        "mediaId": "ef6d5426-400d-5dad-94d0-cd5ba44c3061"
      },
      {
        "id": "badc467f-c165-472a-b304-f28200a10980",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/2b3c4044-27e4-5628-9f59-0bf08cf49f0e.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/3154ab60-2bc6-5019-8386-c14e9a34afee.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/3154ab60-2bc6-5019-8386-c14e9a34afee.mp4",
        "duration": 27.375,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main character with the character from my references.\n<<<image_1>>> - actor \n<<<image_2>>> - location",
          "params": {},
          "variantId": "badc467f-c165-472a-b304-f28200a10980"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "badc467f-c165-472a-b304-f28200a10980",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/2b3c4044-27e4-5628-9f59-0bf08cf49f0e.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/3154ab60-2bc6-5019-8386-c14e9a34afee.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/3154ab60-2bc6-5019-8386-c14e9a34afee.mp4",
        "duration": 27.375,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main character with the character from my references.\n<<<image_1>>> - actor \n<<<image_2>>> - location",
          "params": {},
          "variantId": "badc467f-c165-472a-b304-f28200a10980"
        }
      }
    ],
    "activeGeneratedVariantId": "badc467f-c165-472a-b304-f28200a10980"
  },
  {
    "id": "2dd8d321-74f8-4ae2-8dcf-5ded711d7299",
    "name": "Streetwear Recast",
    "description": "Explore this object replacement preset.",
    "mode": "replace-objects",
    "modeLabel": "Objects swap",
    "jobSetType": "hf_mult_replace_object",
    "aspect": "9/16",
    "width": 720,
    "height": 1280,
    "presetSource": "higgsfield",
    "priority": 19,
    "openPresetId": "2dd8d321-74f8-4ae2-8dcf-5ded711d7299",
    "source": {
      "id": "7ada6120-0db4-483d-babe-6a09d5046891",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/be2cbcb9-fdac-5092-83d6-fc22a48f1a46.webp",
      "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/ef223cc5-177f-5b15-ba9c-ed62197b3b1f.mp4",
      "width": 720,
      "height": 1280,
      "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/ef223cc5-177f-5b15-ba9c-ed62197b3b1f.mp4",
      "duration": 19.3,
      "mediaId": "ef223cc5-177f-5b15-ba9c-ed62197b3b1f"
    },
    "variants": [
      {
        "id": "a555cd2e-c388-543c-9089-4d556877e4d4",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/03252833-d6bb-5a61-95df-a199d9fe2a5d.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/0e0a7e35-25b7-5582-805a-38410fe512f5.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/0e0a7e35-25b7-5582-805a-38410fe512f5.mp4",
        "duration": 18.416667,
        "mediaId": null
      },
      {
        "id": "7ada6120-0db4-483d-babe-6a09d5046891",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/be2cbcb9-fdac-5092-83d6-fc22a48f1a46.webp",
        "videoSrc": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/ef223cc5-177f-5b15-ba9c-ed62197b3b1f.mp4",
        "width": 720,
        "height": 1280,
        "importUrl": "https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/ef223cc5-177f-5b15-ba9c-ed62197b3b1f.mp4",
        "duration": 19.3,
        "mediaId": "ef223cc5-177f-5b15-ba9c-ed62197b3b1f"
      },
      {
        "id": "1c368656-9b6c-4491-909b-5d928b978a67",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/f31256a4-7d1b-5e60-adad-be96384b97a2.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/904fe693-8118-505c-9d53-7b5cd09ad54a.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/904fe693-8118-505c-9d53-7b5cd09ad54a.mp4",
        "duration": 19.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main character with the character from my references",
          "params": {},
          "variantId": "1c368656-9b6c-4491-909b-5d928b978a67"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "1c368656-9b6c-4491-909b-5d928b978a67",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/f31256a4-7d1b-5e60-adad-be96384b97a2.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/904fe693-8118-505c-9d53-7b5cd09ad54a.mp4",
        "width": 1080,
        "height": 1920,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/904fe693-8118-505c-9d53-7b5cd09ad54a.mp4",
        "duration": 19.041667,
        "mediaId": null,
        "recreate": {
          "prompt": "Replace the main character with the character from my references",
          "params": {},
          "variantId": "1c368656-9b6c-4491-909b-5d928b978a67"
        }
      }
    ],
    "activeGeneratedVariantId": "1c368656-9b6c-4491-909b-5d928b978a67"
  },
  {
    "id": "ffe99d9d-7211-4410-b764-94716a0caaec",
    "name": "Urban Motion",
    "description": "Explore this motion preset.",
    "mode": "motion-control",
    "modeLabel": "Motion transfer",
    "jobSetType": "hf_mult_motion_control",
    "aspect": "16/9",
    "width": 1920,
    "height": 1080,
    "presetSource": "higgsfield",
    "priority": 20,
    "openPresetId": "ffe99d9d-7211-4410-b764-94716a0caaec",
    "source": {
      "id": "5134fa7a-2631-4023-a550-801496462bd4",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/669e3847-eac1-4c3c-bc24-8537b4fc5599_thumb.webp",
      "videoSrc": "https://d20rwh69pn04qo.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/669e3847-eac1-4c3c-bc24-8537b4fc5599.mp4",
      "width": 1920,
      "height": 1080,
      "importUrl": "https://d20rwh69pn04qo.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/669e3847-eac1-4c3c-bc24-8537b4fc5599.mp4",
      "duration": 9.056,
      "mediaId": "24e0af4b-4782-4f44-9163-5a5d50f3188c"
    },
    "variants": [
      {
        "id": "5134fa7a-2631-4023-a550-801496462bd4",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/669e3847-eac1-4c3c-bc24-8537b4fc5599_thumb.webp",
        "videoSrc": "https://d20rwh69pn04qo.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/669e3847-eac1-4c3c-bc24-8537b4fc5599.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://d20rwh69pn04qo.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/669e3847-eac1-4c3c-bc24-8537b4fc5599.mp4",
        "duration": 9.056,
        "mediaId": "24e0af4b-4782-4f44-9163-5a5d50f3188c"
      },
      {
        "id": "1fa4dd97-73e1-4a06-be36-39aa5059c335",
        "kind": "edit",
        "posterSrc": "https://cdn.higgsfield.ai/genjutsu/video-explore/01/edit/c2394654-9775-4512-af95-d60250cfaabf.webp",
        "videoSrc": "https://cdn.higgsfield.ai/genjutsu/video-explore/01/edit/30f4c602-c75f-4370-84d4-0df987e1193c.mp4",
        "width": 600,
        "height": 338,
        "importUrl": "https://cdn.higgsfield.ai/genjutsu/video-explore/01/edit/32586b28-be69-481c-acdd-11027327adad.mp4",
        "duration": 8,
        "mediaId": null
      },
      {
        "id": "23b7b02f-a9b6-4fa3-898e-5a74008c9707",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_211313_833da188-02cb-452a-8725-e17d1aa0ba35_thumbnail.webp",
        "videoSrc": "https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_211313_833da188-02cb-452a-8725-e17d1aa0ba35.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_211313_833da188-02cb-452a-8725-e17d1aa0ba35.mp4",
        "duration": 9,
        "mediaId": null,
        "recreate": {
          "prompt": "TASK\nEdit @video1. Replace the woman driving the jet ski with @image1, using her complete face, platinum-blonde hair with silver hair clips, fair skin tone, slim body build, black rectangular glasses, white long-sleeve top, blue-and-lime life vest, dark shorts over dark leggings, and black ankle boots as shown in @image1. Replace the male passenger with @image3, using his complete face, short dark hair, curled moustache, tattoos, earrings, necklace, muscular build, dark short-sleeve shirt, blue-and-lime life vest, blue shorts, and dark water shoes as shown in @image3. Replace the neon lime green and black source jet ski with the neon lime green and black jet ski in @image2 in every shot, including its handlebars, front bodywork, black windscreen, two-level lime saddle, rear platform, hull, and all reflections. Remove all source jet-ski branding and markings. Replace the complete tropical cove, shoreline, open bay, turquoise water, beach, limestone cliffs, karst islands, cloudy sky, and water spray environment with the supermarket interior in @image4 throughout the entire video. Place the jet ski and both riders at full realistic scale on the supermarket’s broad polished floor, using the clear open checkout and aisle spaces for their movement. Remove all outdoor water, sand, cliffs, islands, vegetation, sky, shoreline, and wake. Everything else stays exactly as in @video1: every body movement, boarding motion, head turn, seated pose sequence, steering action, passenger hold, acceleration timing, screen direction, camera pan, rear chase movement, wide tracking move, hard cut, splash-like foreground occlusion, framing change, and timing.\n\nACTIVE REFERENCES\n@image1 is the complete appearance reference for the woman who drives the jet ski, including her platinum-blonde hair, black glasses, white top, blue-and-lime life vest, dark lower-body clothing, and black boots.\n@image2 is the replacement jet ski for every appearance of the source watercraft.\n@image3 is the complete appearance reference for the male passenger, including his moustache, tattoos, jewelry, dark shirt, blue-and-lime life vest, blue shorts, and dark water shoes.\n@image4 is the mandatory replacement location: a large bright supermarket with polished floors, checkout counters, grocery aisles, carts, shelving, refrigerated cases, high ceilings, white columns, and geometric overhead strip lighting.\n\nSOURCE VIDEO\n@video1 is the source video being edited. Preserve the passenger wading up and hopping onto the rear seat behind the woman driver, briefly touching her waist for balance; the driver looking back and then forward while gripping the handlebars; both riders settling into position; the rapid forward acceleration; the passenger holding the driver’s waist; the high-speed forward ride; the rear pursuit view; the lateral high-speed carve; and the final wide crossing movement. Keep both hard cuts and both source spray-like foreground occlusions exactly in place.\n\nSHOT-BY-SHOT GUIDE\nShot 1 (0.0-4.3s): Keep the medium profile tracking shot and pan as the replacement jet ski travels from screen right toward the left foreground. @image1 is seated at the front in the left-center of the frame, facing forward with both hands firmly gripping the black handlebars of @image2. She briefly turns her head over her shoulder toward @image3, then faces forward again. @image3 begins at center-right beside the rear saddle, steps up, swings onto the rear seat behind her, and settles into a forward-facing seated position. He uses one hand on the rear seat and briefly touches @image1’s waist/back to stabilize himself, then holds her waist as the jet ski accelerates. Both riders remain correctly seated on the lime two-level saddle. Restage the source departure across the supermarket’s wide polished floor between the open checkout area and aisles, with the jet ski gliding clear of shelving, carts, checkout counters, and columns. Remove the beach, shallow water, sand, tropical foliage, cliffs, sky, and all outdoor spray. End with the jet ski surging leftward and a bright blurred foreground occlusion matching the source timing.\n\nShot 2 (4.3-7.3s): Keep the hard cut to the rear tracking chase view. @image1 and @image3 are centered in the midground, riding away from the camera through the open supermarket floor. @image1 sits upright in front, facing away and steering @image2 with both hands on the handlebars. Her long platinum hair trails behind her, and her black glasses stay secure on her face. @image3 sits immediately behind her, leaning slightly forward with both arms around her torso for support and looking ahead past her shoulder. The replacement jet ski travels straight away through the open central aisle, with checkout counters and grocery aisles receding in depth on both sides beneath the geometric white ceiling lights. Keep correct floor contact and scale, with the jet ski passing between visible store fixtures without colliding with them. Remove all ocean water, foam",
          "params": {},
          "variantId": "23b7b02f-a9b6-4fa3-898e-5a74008c9707"
        }
      },
      {
        "id": "5cf996d4-a0d8-4afe-9ae0-4d985426f437",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_212500_73904a35-d295-431f-b6ab-df8a232a03c0_thumbnail.webp",
        "videoSrc": "https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_212500_73904a35-d295-431f-b6ab-df8a232a03c0.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_212500_73904a35-d295-431f-b6ab-df8a232a03c0.mp4",
        "duration": 9,
        "mediaId": null,
        "recreate": {
          "prompt": "TASK\nEdit @video1. Replace the female jet-ski driver with @image4, using her face, center-parted dark braided hair, skin tone, body build, black rectangular glasses, red ribbed zip-neck top, loose brown trousers, and red-and-black shoes as shown. Do not transfer the white shoulder bag from @image4. Replace the male passenger with @image3, using his face, short bleached curly hair, skin tone, body build, blue reflective vest over a white shirt, loose light-blue cargo jeans, and blue-and-white shoes as shown. Replace the lime-green and black jet ski with the lime-green and black jet ski in @image1 in every shot, including its handlebars, front and rear saddle, footrests, rear deck, hull, and wake-facing views. Remove all source jet-ski markings and recreate only the clean lime-green-and-black design in @image1. Replace the complete tropical beach, ocean cove, limestone cliffs, sky, shoreline, and water spray environment with the supermarket in @image2 throughout the video. Remove the sandy beach, all sea water, karst islands, cliffs, and outdoor sky. Stage the jet ski and both riders at correct scale on the clear polished supermarket floor, moving through the open central checkout area and broad aisles without colliding with shelves, checkout counters, carts, or refrigerated cases. Keep the driver and passenger mounted on the jet ski exactly as in the source; where the original water contact is impossible indoors, keep the same launch, acceleration, chase, and turning body performance while the jet ski slides forward along the clear glossy floor instead of floating on water. Everything else stays exactly as in @video1: every body movement, pose sequence, action beat, character position, camera move, framing change, hard cut, and timing.\n\nACTIVE REFERENCES\n@image1 is the replacement jet ski: use its lime-green hull, black trim, black handlebars, black rear deck, and lime-green two-person saddle throughout the video.\n@image2 is the mandatory replacement location: use its bright supermarket interior, white polished floor, checkout lanes, stocked aisles, carts, refrigerated cases, white columns, and geometric ceiling strip lights throughout the video.\n@image3 is the complete appearance and clothing reference for the male passenger.\n@image4 is the complete appearance and clothing reference for the female driver; do not transfer her shoulder bag.\n\nSOURCE VIDEO\n@video1 is the source video being edited. Preserve the driver seated at the front controls, the passenger pushing the jet ski forward and climbing onto the rear saddle, the brief glance and smile toward the passenger, the launch and rapid acceleration, the rear chase view of both riders speeding away, the passenger bracing behind the driver, and the final broad carving turn with both bodies leaning together. Preserve both hard cuts exactly in place.\n\nSHOT-BY-SHOT GUIDE\nShot 1 (0.0-3.8s): Keep the medium-wide side tracking view at low height as the replacement jet ski moves left to right across the supermarket’s open polished floor near the checkout area. @image4 is seated in the center-left foreground on the front saddle, facing forward with a slight forward lean, both hands gripping the handlebars and both feet planted in the footrests. She briefly turns her head back toward @image3 with a small smile, then looks ahead and works the throttle. @image3 begins in the center-right foreground beside the rear deck, pushing the jet ski forward with his hands while stepping forward, then lifts his right leg onto the rear footrest and climbs onto the rear saddle behind her. He settles upright behind @image4 and makes the same brief celebratory hand gesture. Use the clear floor as the support surface for the jet ski and riders. Show checkout counters, carts, aisle ends, and overhead strip lights at believable depth, but keep a wide clear travel corridor ahead. Do not show beach sand, water, rocks, cliffs, outdoor vegetation, or sky. End with both riders seated as the jet ski accelerates out of frame.\n\nShot 2 (3.8-7.2s): Keep the rear-facing chase framing and the hard cut. The replacement jet ski is centered in the midground and moves away through the supermarket’s broad central aisle, with @image4 seated forward at the handlebars and @image3 upright on the rear saddle directly behind her. Both face forward into the store depth; @image4 keeps a focused steering posture while @image3 braces his torso against acceleration and leans subtly with the motion. Preserve the fast forward movement and source timing, but replace the water wake and lens-obscuring sea spray with brief motion blur and floor reflections from the glossy white surface. Keep shelving, checkout stations, carts, columns, and ceiling lights integrated around the clear route, with correct perspective and scale. Do not show open water, islands, cliffs, or overcast sky. End with the riders continuing away into the supermarket depth.\n\nShot 3 (7.2-9.0s): Keep the wide low profile tracking shot and the hard cut",
          "params": {},
          "variantId": "5cf996d4-a0d8-4afe-9ae0-4d985426f437"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "23b7b02f-a9b6-4fa3-898e-5a74008c9707",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_211313_833da188-02cb-452a-8725-e17d1aa0ba35_thumbnail.webp",
        "videoSrc": "https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_211313_833da188-02cb-452a-8725-e17d1aa0ba35.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_211313_833da188-02cb-452a-8725-e17d1aa0ba35.mp4",
        "duration": 9,
        "mediaId": null,
        "recreate": {
          "prompt": "TASK\nEdit @video1. Replace the woman driving the jet ski with @image1, using her complete face, platinum-blonde hair with silver hair clips, fair skin tone, slim body build, black rectangular glasses, white long-sleeve top, blue-and-lime life vest, dark shorts over dark leggings, and black ankle boots as shown in @image1. Replace the male passenger with @image3, using his complete face, short dark hair, curled moustache, tattoos, earrings, necklace, muscular build, dark short-sleeve shirt, blue-and-lime life vest, blue shorts, and dark water shoes as shown in @image3. Replace the neon lime green and black source jet ski with the neon lime green and black jet ski in @image2 in every shot, including its handlebars, front bodywork, black windscreen, two-level lime saddle, rear platform, hull, and all reflections. Remove all source jet-ski branding and markings. Replace the complete tropical cove, shoreline, open bay, turquoise water, beach, limestone cliffs, karst islands, cloudy sky, and water spray environment with the supermarket interior in @image4 throughout the entire video. Place the jet ski and both riders at full realistic scale on the supermarket’s broad polished floor, using the clear open checkout and aisle spaces for their movement. Remove all outdoor water, sand, cliffs, islands, vegetation, sky, shoreline, and wake. Everything else stays exactly as in @video1: every body movement, boarding motion, head turn, seated pose sequence, steering action, passenger hold, acceleration timing, screen direction, camera pan, rear chase movement, wide tracking move, hard cut, splash-like foreground occlusion, framing change, and timing.\n\nACTIVE REFERENCES\n@image1 is the complete appearance reference for the woman who drives the jet ski, including her platinum-blonde hair, black glasses, white top, blue-and-lime life vest, dark lower-body clothing, and black boots.\n@image2 is the replacement jet ski for every appearance of the source watercraft.\n@image3 is the complete appearance reference for the male passenger, including his moustache, tattoos, jewelry, dark shirt, blue-and-lime life vest, blue shorts, and dark water shoes.\n@image4 is the mandatory replacement location: a large bright supermarket with polished floors, checkout counters, grocery aisles, carts, shelving, refrigerated cases, high ceilings, white columns, and geometric overhead strip lighting.\n\nSOURCE VIDEO\n@video1 is the source video being edited. Preserve the passenger wading up and hopping onto the rear seat behind the woman driver, briefly touching her waist for balance; the driver looking back and then forward while gripping the handlebars; both riders settling into position; the rapid forward acceleration; the passenger holding the driver’s waist; the high-speed forward ride; the rear pursuit view; the lateral high-speed carve; and the final wide crossing movement. Keep both hard cuts and both source spray-like foreground occlusions exactly in place.\n\nSHOT-BY-SHOT GUIDE\nShot 1 (0.0-4.3s): Keep the medium profile tracking shot and pan as the replacement jet ski travels from screen right toward the left foreground. @image1 is seated at the front in the left-center of the frame, facing forward with both hands firmly gripping the black handlebars of @image2. She briefly turns her head over her shoulder toward @image3, then faces forward again. @image3 begins at center-right beside the rear saddle, steps up, swings onto the rear seat behind her, and settles into a forward-facing seated position. He uses one hand on the rear seat and briefly touches @image1’s waist/back to stabilize himself, then holds her waist as the jet ski accelerates. Both riders remain correctly seated on the lime two-level saddle. Restage the source departure across the supermarket’s wide polished floor between the open checkout area and aisles, with the jet ski gliding clear of shelving, carts, checkout counters, and columns. Remove the beach, shallow water, sand, tropical foliage, cliffs, sky, and all outdoor spray. End with the jet ski surging leftward and a bright blurred foreground occlusion matching the source timing.\n\nShot 2 (4.3-7.3s): Keep the hard cut to the rear tracking chase view. @image1 and @image3 are centered in the midground, riding away from the camera through the open supermarket floor. @image1 sits upright in front, facing away and steering @image2 with both hands on the handlebars. Her long platinum hair trails behind her, and her black glasses stay secure on her face. @image3 sits immediately behind her, leaning slightly forward with both arms around her torso for support and looking ahead past her shoulder. The replacement jet ski travels straight away through the open central aisle, with checkout counters and grocery aisles receding in depth on both sides beneath the geometric white ceiling lights. Keep correct floor contact and scale, with the jet ski passing between visible store fixtures without colliding with them. Remove all ocean water, foam",
          "params": {},
          "variantId": "23b7b02f-a9b6-4fa3-898e-5a74008c9707"
        }
      },
      {
        "id": "5cf996d4-a0d8-4afe-9ae0-4d985426f437",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_212500_73904a35-d295-431f-b6ab-df8a232a03c0_thumbnail.webp",
        "videoSrc": "https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_212500_73904a35-d295-431f-b6ab-df8a232a03c0.mp4",
        "width": 1920,
        "height": 1080,
        "importUrl": "https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260829_212500_73904a35-d295-431f-b6ab-df8a232a03c0.mp4",
        "duration": 9,
        "mediaId": null,
        "recreate": {
          "prompt": "TASK\nEdit @video1. Replace the female jet-ski driver with @image4, using her face, center-parted dark braided hair, skin tone, body build, black rectangular glasses, red ribbed zip-neck top, loose brown trousers, and red-and-black shoes as shown. Do not transfer the white shoulder bag from @image4. Replace the male passenger with @image3, using his face, short bleached curly hair, skin tone, body build, blue reflective vest over a white shirt, loose light-blue cargo jeans, and blue-and-white shoes as shown. Replace the lime-green and black jet ski with the lime-green and black jet ski in @image1 in every shot, including its handlebars, front and rear saddle, footrests, rear deck, hull, and wake-facing views. Remove all source jet-ski markings and recreate only the clean lime-green-and-black design in @image1. Replace the complete tropical beach, ocean cove, limestone cliffs, sky, shoreline, and water spray environment with the supermarket in @image2 throughout the video. Remove the sandy beach, all sea water, karst islands, cliffs, and outdoor sky. Stage the jet ski and both riders at correct scale on the clear polished supermarket floor, moving through the open central checkout area and broad aisles without colliding with shelves, checkout counters, carts, or refrigerated cases. Keep the driver and passenger mounted on the jet ski exactly as in the source; where the original water contact is impossible indoors, keep the same launch, acceleration, chase, and turning body performance while the jet ski slides forward along the clear glossy floor instead of floating on water. Everything else stays exactly as in @video1: every body movement, pose sequence, action beat, character position, camera move, framing change, hard cut, and timing.\n\nACTIVE REFERENCES\n@image1 is the replacement jet ski: use its lime-green hull, black trim, black handlebars, black rear deck, and lime-green two-person saddle throughout the video.\n@image2 is the mandatory replacement location: use its bright supermarket interior, white polished floor, checkout lanes, stocked aisles, carts, refrigerated cases, white columns, and geometric ceiling strip lights throughout the video.\n@image3 is the complete appearance and clothing reference for the male passenger.\n@image4 is the complete appearance and clothing reference for the female driver; do not transfer her shoulder bag.\n\nSOURCE VIDEO\n@video1 is the source video being edited. Preserve the driver seated at the front controls, the passenger pushing the jet ski forward and climbing onto the rear saddle, the brief glance and smile toward the passenger, the launch and rapid acceleration, the rear chase view of both riders speeding away, the passenger bracing behind the driver, and the final broad carving turn with both bodies leaning together. Preserve both hard cuts exactly in place.\n\nSHOT-BY-SHOT GUIDE\nShot 1 (0.0-3.8s): Keep the medium-wide side tracking view at low height as the replacement jet ski moves left to right across the supermarket’s open polished floor near the checkout area. @image4 is seated in the center-left foreground on the front saddle, facing forward with a slight forward lean, both hands gripping the handlebars and both feet planted in the footrests. She briefly turns her head back toward @image3 with a small smile, then looks ahead and works the throttle. @image3 begins in the center-right foreground beside the rear deck, pushing the jet ski forward with his hands while stepping forward, then lifts his right leg onto the rear footrest and climbs onto the rear saddle behind her. He settles upright behind @image4 and makes the same brief celebratory hand gesture. Use the clear floor as the support surface for the jet ski and riders. Show checkout counters, carts, aisle ends, and overhead strip lights at believable depth, but keep a wide clear travel corridor ahead. Do not show beach sand, water, rocks, cliffs, outdoor vegetation, or sky. End with both riders seated as the jet ski accelerates out of frame.\n\nShot 2 (3.8-7.2s): Keep the rear-facing chase framing and the hard cut. The replacement jet ski is centered in the midground and moves away through the supermarket’s broad central aisle, with @image4 seated forward at the handlebars and @image3 upright on the rear saddle directly behind her. Both face forward into the store depth; @image4 keeps a focused steering posture while @image3 braces his torso against acceleration and leans subtly with the motion. Preserve the fast forward movement and source timing, but replace the water wake and lens-obscuring sea spray with brief motion blur and floor reflections from the glossy white surface. Keep shelving, checkout stations, carts, columns, and ceiling lights integrated around the clear route, with correct perspective and scale. Do not show open water, islands, cliffs, or overcast sky. End with the riders continuing away into the supermarket depth.\n\nShot 3 (7.2-9.0s): Keep the wide low profile tracking shot and the hard cut",
          "params": {},
          "variantId": "5cf996d4-a0d8-4afe-9ae0-4d985426f437"
        }
      }
    ],
    "activeGeneratedVariantId": "23b7b02f-a9b6-4fa3-898e-5a74008c9707"
  },
  {
    "id": "db44da87-362b-48b9-b71a-28aa1b6a144d",
    "name": "Multi-Scene Recast",
    "description": "Explore this motion preset.",
    "mode": "motion-control",
    "modeLabel": "Motion transfer",
    "jobSetType": "hf_mult_motion_control",
    "aspect": "16/9",
    "width": 600,
    "height": 338,
    "presetSource": "higgsfield",
    "priority": 21,
    "openPresetId": "db44da87-362b-48b9-b71a-28aa1b6a144d",
    "source": {
      "id": "c25754df-fcac-4f99-b65b-3240b5c0037a",
      "kind": "source",
      "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/9f4d5a87-5b64-431b-be06-a3d2dcc1eeab.webp",
      "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/fe10e23c-1cf1-4f57-9207-e21708bf5a80.mp4",
      "width": 600,
      "height": 338,
      "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/64da789f-02bf-4554-b357-9f53a1c74126.mp4",
      "duration": 23,
      "mediaId": "6fbd6862-288e-4a90-88c3-5f4a361f9d14"
    },
    "variants": [
      {
        "id": "c25754df-fcac-4f99-b65b-3240b5c0037a",
        "kind": "source",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/9f4d5a87-5b64-431b-be06-a3d2dcc1eeab.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/fe10e23c-1cf1-4f57-9207-e21708bf5a80.mp4",
        "width": 600,
        "height": 338,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_how_it_works_reference/64da789f-02bf-4554-b357-9f53a1c74126.mp4",
        "duration": 23,
        "mediaId": "6fbd6862-288e-4a90-88c3-5f4a361f9d14"
      },
      {
        "id": "1e6cc4d2-2d66-494c-ab74-e714c6dc8ac6",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/4a716a67-a71a-4496-9df6-d6d337b996d1.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/79161b44-0435-41b9-8f80-cb18b0ffbbf4.mp4",
        "width": 600,
        "height": 338,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/34026b77-0433-4e65-999d-45f2159d631d.mp4",
        "duration": 23,
        "mediaId": null,
        "recreate": {
          "prompt": "TASK\r\nEdit @video1. Replace the woman who sprints through the gallery and reunites in the final shot with @image2, using her complete face, blonde hair with bangs, fair skin tone, slim body build, pale green cropped jacket, yellow crop top, distressed green denim midi skirt, light footwear, small lavender shoulder bag, pearl earrings, and nose jewelry as shown in @image2. Do not transfer the lavender bag into the video; it is not part of the source action. Keep her determined escape, backward glance, running, door push, and joyful reunion performance unchanged. Keep the second woman’s original identity and her sleeveless white tiered maxi dress unchanged. Replace every source environment throughout the entire video—the collapsing museum corridor, bronze doors, fantasy garden, stone path, archway, floating islands, and flower meadow—with the grand golden ballroom in @image1. Remove all source paintings, checkered marble, debris, visitors, bronze doors, garden flowers, stone ruins, floating islands, portal, grass, and meadow. Use the ballroom’s polished parquet floor, arched windows, columns, chandeliers, gilded wall details, mirrors, wall lamps, and distant bench as the only environment. Do not add a butterfly or a star, because no butterfly is visible in @video1 and no star reference is supplied. Everything else stays exactly as in @video1: every body movement, pose sequence, running rhythm, handhold, character position, camera move, framing change, hard cut, and timing.\r\n\r\nACTIVE REFERENCES\r\nUse @image1 as the mandatory grand golden ballroom location for the complete video.\r\nUse @image2 for the primary woman’s identity and complete visible wardrobe. Ignore the incidental lavender shoulder bag from @image2.\r\n\r\nSOURCE VIDEO\r\n@video1 is the source video being edited. Preserve the primary woman sprinting toward the camera during the rolling shot, slowing near the exit, looking around and briefly glancing back, turning to push open doors, running away from the camera through the next corridor, and reaching the second woman for a joyful two-handed spin. Preserve all three hard cuts, the full barrel-roll camera movement in the opening sprint, the forward tracking shots, and the final upward crane pullback.\r\n\r\nSHOT-BY-SHOT GUIDE\r\nShot 1 (0-6.8s): Keep the frontal medium-wide tracking shot that rapidly pulls backward and performs the full 360-degree barrel roll. @image2 runs directly toward the camera in the center foreground, front-facing with high knee drive, steady arm pumps, and a focused determined gaze ahead. Her feet land naturally on the ballroom’s polished parquet floor. The ballroom’s tall arched windows, columns, chandeliers, gilded walls, and warm reflections rotate with the source camera move. Remove the collapsing museum walls, framed paintings, checkered floor, visitors, and all flying debris. She slows near the far end of the ballroom before the cut.\r\n\r\nShot 2 (6.8-10.6s): Keep the eye-level medium shot and slight forward camera track. @image2 stands centered at the far end of the ballroom, looks around, briefly glances back toward the camera, turns 180 degrees, then faces the tall white paneled glass doors at the right end of @image1’s ballroom. She raises both arms and pushes the doors outward with both palms at chest height, keeping the same forceful push and timing. Bright daylight floods through the opened doors. Remove the source bronze double doors, alcove, and molding; retain only the target ballroom architecture and its visible doors.\r\n\r\nShot 3 (10.6-18.5s): Keep the medium-wide third-person following shot tracking forward behind @image2. She runs away from the camera along the center of the polished ballroom floor, her blonde hair bouncing with the same cadence. She passes beneath the ballroom’s repeated arched window bays and between the visible columns toward the bright open doors in the distance. Her feet remain grounded on the parquet floor. Remove the stone path, glowing flowers, floating islands, ruins, grass, and stone archway; do not recreate a portal. She reaches the daylight-filled doorway at the end of the shot.\r\n\r\nShot 4 (18.5-23.3s): Keep the medium two-shot that rises smoothly into an extreme high-angle wide crane shot pulling away overhead. In the open central floor area of the ballroom, @image2 stands center-left facing the second woman at center-right. They clasp both hands at waist height, look directly into each other’s faces, smile broadly, lean back slightly, and rotate together in the same joyful circle. Their feet stay planted and step naturally across the parquet floor as the second woman’s white tiered dress flares. The rising view reveals the ballroom’s windows, chandeliers, gilded walls, columns, and floor depth at correct scale. Remove the flower field, grass, blossoms, and horizon haze.\r\n\r\nSETTING\r\nThe entire video takes place inside the grand golden ballroom from @image1. Keep all characters at natural human scale on the polished wooden floor, with correct floor reflections, dept",
          "params": {},
          "variantId": "1e6cc4d2-2d66-494c-ab74-e714c6dc8ac6"
        }
      },
      {
        "id": "8f27ba94-0e22-44c3-a7d2-0c1d5a2d6532",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/1b12fec1-eb0d-44fc-b8e2-4403ef8ecec6.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/13dc3cee-9ccf-4205-b4e6-c231befa1761.mp4",
        "width": 600,
        "height": 338,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/bc5e562b-91c6-4711-8654-d6c5d2bdb0cd.mp4",
        "duration": 23,
        "mediaId": null,
        "recreate": {
          "prompt": "TASK\r\nEdit @video1. Replace the fleeing blonde woman with @image2, using her complete face, blonde hair with bangs, light skin tone, slim body build, mint cropped biker jacket, pale yellow crop top, distressed green denim midi skirt, and visible jewelry exactly as shown in @image2. Do not transfer the purple shoulder bag from @image2; it is not part of the action. Replace any visible butterfly motif with a simple star motif. Keep the second woman’s face, body, long dark hair, and white sleeveless flowing maxi dress exactly as in @video1.\r\n\r\nReplace the complete museum environment from 0-10.6s with the grand sunlit palace hall in @image1. Remove the source checkered marble floor, framed paintings, falling gallery debris, museum visitors, ornate source double doors, and all other source gallery dressing. Use the polished wooden floor for the runner’s foot contact and the visible white French doors on the right side of @image1 for her two-handed door push.\r\n\r\nReplace the complete fantasy garden and stone archway environment from 10.6-18.2s with the flower-filled school garden in @image3. Remove the giant glowing flowers, floating islands, cobblestone path, ruined archway, stone tunnel, distant fantasy hills, and magical portal. Stage the run on the pale stone garden path between the visible bushes and flowerbeds, heading toward the central entrance of the red-roofed school building.\r\n\r\nReplace the complete flower-field environment from 18.2-23.3s with the pink bedroom in @image4. Remove the flower meadow, golden mist, white blossoms, and all outdoor landscape. Place both women at full natural scale on the open floor space beside the round bed and colorful rug, with correct foot contact, room depth, foreground furniture overlap, and warm window light. Everything else stays exactly as in @video1: every sprint, turn, pause, two-handed push, running trajectory, hand clasp, gentle circular spin, body movement, pose sequence, camera move, framing change, hard cut, continuous transition, and timing.\r\n\r\nACTIVE REFERENCES\r\n@image1 is the first replacement location: a grand golden palace hall with polished wood flooring, tall arched windows, chandeliers, mirrors, and white French doors.\r\n@image2 is the complete appearance and wardrobe reference for the fleeing blonde woman. Use the visible mint jacket, yellow crop top, green denim skirt, hair, facial features, physique, and jewelry, but do not add the incidental purple shoulder bag.\r\n@image3 is the second replacement location: a sunny school garden with a pale stone path, dense green shrubs, colorful flowerbeds, a small wooden garden building, and a red-roofed school entrance.\r\n@image4 is the third replacement location: a richly detailed pink bedroom with a round bed, colorful rug, furniture, large arched windows, a tall potted palm, and open floor space.\r\n\r\nSOURCE VIDEO\r\n@video1 is the source video being edited. Preserve the blonde woman’s urgent sprint through the collapsing hall, her arrival at the doors, her pause and turn, her two-handed shove that opens the doors, her continuous run through the garden toward the passage, her sprint through the dark passage into light, and her joyful reunion with the second woman as they take both hands and slowly spin together. Preserve the opening rotating tracking move, the hard cut at 6.8s, the hard cut at 10.6s, the continuous passage into the final reunion, and the final pullback and crane into the high overhead view.\r\n\r\nSHOT-BY-SHOT GUIDE\r\nShot 1 (0-6.8s): Keep the same backward tracking view and full 360-degree camera rotation. @image2 runs straight toward the camera in the center foreground and center frame, facing forward with wide, tense eyes and a determined expression. Her arms pump through the sprint and her loose blonde strands bounce with each stride. Her sneakers strike the polished wooden floor of the grand hall in @image1. The tall arched windows, chandeliers, mirrors, and long warm hall recede behind her with correct depth and motion parallax. Remove the source checkered floor, paintings, collapsing frames, debris, visitors, and museum walls. She reaches the visible French-door area as the shot ends.\r\n\r\nShot 2 (6.8-10.6s): Keep the medium held framing and the source timing. @image2 stands centered in the foreground in front of the visible white French doors in @image1, initially facing the camera while catching her breath. She turns her body away from the camera to face the doors, plants her feet on the polished wood floor, raises both palms, and pushes the two door panels outward. Her gaze shifts toward the opening as bright daylight pours through. End with the doors fully open around her. Remove the source wooden double doors, gallery walls, and checkered floor.\r\n\r\nShot 3 (10.6-16.2s): Keep the following tracking shot directly behind @image2 and her center-frame, forward-running trajectory. She runs away from the camera along the pale stone path in @image3, her mint jacket hem moving with her strides. She remains centered in the mid",
          "params": {},
          "variantId": "8f27ba94-0e22-44c3-a7d2-0c1d5a2d6532"
        }
      }
    ],
    "generatedVariants": [
      {
        "id": "1e6cc4d2-2d66-494c-ab74-e714c6dc8ac6",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/4a716a67-a71a-4496-9df6-d6d337b996d1.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/79161b44-0435-41b9-8f80-cb18b0ffbbf4.mp4",
        "width": 600,
        "height": 338,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/34026b77-0433-4e65-999d-45f2159d631d.mp4",
        "duration": 23,
        "mediaId": null,
        "recreate": {
          "prompt": "TASK\r\nEdit @video1. Replace the woman who sprints through the gallery and reunites in the final shot with @image2, using her complete face, blonde hair with bangs, fair skin tone, slim body build, pale green cropped jacket, yellow crop top, distressed green denim midi skirt, light footwear, small lavender shoulder bag, pearl earrings, and nose jewelry as shown in @image2. Do not transfer the lavender bag into the video; it is not part of the source action. Keep her determined escape, backward glance, running, door push, and joyful reunion performance unchanged. Keep the second woman’s original identity and her sleeveless white tiered maxi dress unchanged. Replace every source environment throughout the entire video—the collapsing museum corridor, bronze doors, fantasy garden, stone path, archway, floating islands, and flower meadow—with the grand golden ballroom in @image1. Remove all source paintings, checkered marble, debris, visitors, bronze doors, garden flowers, stone ruins, floating islands, portal, grass, and meadow. Use the ballroom’s polished parquet floor, arched windows, columns, chandeliers, gilded wall details, mirrors, wall lamps, and distant bench as the only environment. Do not add a butterfly or a star, because no butterfly is visible in @video1 and no star reference is supplied. Everything else stays exactly as in @video1: every body movement, pose sequence, running rhythm, handhold, character position, camera move, framing change, hard cut, and timing.\r\n\r\nACTIVE REFERENCES\r\nUse @image1 as the mandatory grand golden ballroom location for the complete video.\r\nUse @image2 for the primary woman’s identity and complete visible wardrobe. Ignore the incidental lavender shoulder bag from @image2.\r\n\r\nSOURCE VIDEO\r\n@video1 is the source video being edited. Preserve the primary woman sprinting toward the camera during the rolling shot, slowing near the exit, looking around and briefly glancing back, turning to push open doors, running away from the camera through the next corridor, and reaching the second woman for a joyful two-handed spin. Preserve all three hard cuts, the full barrel-roll camera movement in the opening sprint, the forward tracking shots, and the final upward crane pullback.\r\n\r\nSHOT-BY-SHOT GUIDE\r\nShot 1 (0-6.8s): Keep the frontal medium-wide tracking shot that rapidly pulls backward and performs the full 360-degree barrel roll. @image2 runs directly toward the camera in the center foreground, front-facing with high knee drive, steady arm pumps, and a focused determined gaze ahead. Her feet land naturally on the ballroom’s polished parquet floor. The ballroom’s tall arched windows, columns, chandeliers, gilded walls, and warm reflections rotate with the source camera move. Remove the collapsing museum walls, framed paintings, checkered floor, visitors, and all flying debris. She slows near the far end of the ballroom before the cut.\r\n\r\nShot 2 (6.8-10.6s): Keep the eye-level medium shot and slight forward camera track. @image2 stands centered at the far end of the ballroom, looks around, briefly glances back toward the camera, turns 180 degrees, then faces the tall white paneled glass doors at the right end of @image1’s ballroom. She raises both arms and pushes the doors outward with both palms at chest height, keeping the same forceful push and timing. Bright daylight floods through the opened doors. Remove the source bronze double doors, alcove, and molding; retain only the target ballroom architecture and its visible doors.\r\n\r\nShot 3 (10.6-18.5s): Keep the medium-wide third-person following shot tracking forward behind @image2. She runs away from the camera along the center of the polished ballroom floor, her blonde hair bouncing with the same cadence. She passes beneath the ballroom’s repeated arched window bays and between the visible columns toward the bright open doors in the distance. Her feet remain grounded on the parquet floor. Remove the stone path, glowing flowers, floating islands, ruins, grass, and stone archway; do not recreate a portal. She reaches the daylight-filled doorway at the end of the shot.\r\n\r\nShot 4 (18.5-23.3s): Keep the medium two-shot that rises smoothly into an extreme high-angle wide crane shot pulling away overhead. In the open central floor area of the ballroom, @image2 stands center-left facing the second woman at center-right. They clasp both hands at waist height, look directly into each other’s faces, smile broadly, lean back slightly, and rotate together in the same joyful circle. Their feet stay planted and step naturally across the parquet floor as the second woman’s white tiered dress flares. The rising view reveals the ballroom’s windows, chandeliers, gilded walls, columns, and floor depth at correct scale. Remove the flower field, grass, blossoms, and horizon haze.\r\n\r\nSETTING\r\nThe entire video takes place inside the grand golden ballroom from @image1. Keep all characters at natural human scale on the polished wooden floor, with correct floor reflections, dept",
          "params": {},
          "variantId": "1e6cc4d2-2d66-494c-ab74-e714c6dc8ac6"
        }
      },
      {
        "id": "8f27ba94-0e22-44c3-a7d2-0c1d5a2d6532",
        "kind": "generation",
        "posterSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/1b12fec1-eb0d-44fc-b8e2-4403ef8ecec6.webp",
        "videoSrc": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/13dc3cee-9ccf-4205-b4e6-c231befa1761.mp4",
        "width": 600,
        "height": 338,
        "importUrl": "https://cdn.higgsfield.ai/higgsfield_multiplier_video_explore_variant/bc5e562b-91c6-4711-8654-d6c5d2bdb0cd.mp4",
        "duration": 23,
        "mediaId": null,
        "recreate": {
          "prompt": "TASK\r\nEdit @video1. Replace the fleeing blonde woman with @image2, using her complete face, blonde hair with bangs, light skin tone, slim body build, mint cropped biker jacket, pale yellow crop top, distressed green denim midi skirt, and visible jewelry exactly as shown in @image2. Do not transfer the purple shoulder bag from @image2; it is not part of the action. Replace any visible butterfly motif with a simple star motif. Keep the second woman’s face, body, long dark hair, and white sleeveless flowing maxi dress exactly as in @video1.\r\n\r\nReplace the complete museum environment from 0-10.6s with the grand sunlit palace hall in @image1. Remove the source checkered marble floor, framed paintings, falling gallery debris, museum visitors, ornate source double doors, and all other source gallery dressing. Use the polished wooden floor for the runner’s foot contact and the visible white French doors on the right side of @image1 for her two-handed door push.\r\n\r\nReplace the complete fantasy garden and stone archway environment from 10.6-18.2s with the flower-filled school garden in @image3. Remove the giant glowing flowers, floating islands, cobblestone path, ruined archway, stone tunnel, distant fantasy hills, and magical portal. Stage the run on the pale stone garden path between the visible bushes and flowerbeds, heading toward the central entrance of the red-roofed school building.\r\n\r\nReplace the complete flower-field environment from 18.2-23.3s with the pink bedroom in @image4. Remove the flower meadow, golden mist, white blossoms, and all outdoor landscape. Place both women at full natural scale on the open floor space beside the round bed and colorful rug, with correct foot contact, room depth, foreground furniture overlap, and warm window light. Everything else stays exactly as in @video1: every sprint, turn, pause, two-handed push, running trajectory, hand clasp, gentle circular spin, body movement, pose sequence, camera move, framing change, hard cut, continuous transition, and timing.\r\n\r\nACTIVE REFERENCES\r\n@image1 is the first replacement location: a grand golden palace hall with polished wood flooring, tall arched windows, chandeliers, mirrors, and white French doors.\r\n@image2 is the complete appearance and wardrobe reference for the fleeing blonde woman. Use the visible mint jacket, yellow crop top, green denim skirt, hair, facial features, physique, and jewelry, but do not add the incidental purple shoulder bag.\r\n@image3 is the second replacement location: a sunny school garden with a pale stone path, dense green shrubs, colorful flowerbeds, a small wooden garden building, and a red-roofed school entrance.\r\n@image4 is the third replacement location: a richly detailed pink bedroom with a round bed, colorful rug, furniture, large arched windows, a tall potted palm, and open floor space.\r\n\r\nSOURCE VIDEO\r\n@video1 is the source video being edited. Preserve the blonde woman’s urgent sprint through the collapsing hall, her arrival at the doors, her pause and turn, her two-handed shove that opens the doors, her continuous run through the garden toward the passage, her sprint through the dark passage into light, and her joyful reunion with the second woman as they take both hands and slowly spin together. Preserve the opening rotating tracking move, the hard cut at 6.8s, the hard cut at 10.6s, the continuous passage into the final reunion, and the final pullback and crane into the high overhead view.\r\n\r\nSHOT-BY-SHOT GUIDE\r\nShot 1 (0-6.8s): Keep the same backward tracking view and full 360-degree camera rotation. @image2 runs straight toward the camera in the center foreground and center frame, facing forward with wide, tense eyes and a determined expression. Her arms pump through the sprint and her loose blonde strands bounce with each stride. Her sneakers strike the polished wooden floor of the grand hall in @image1. The tall arched windows, chandeliers, mirrors, and long warm hall recede behind her with correct depth and motion parallax. Remove the source checkered floor, paintings, collapsing frames, debris, visitors, and museum walls. She reaches the visible French-door area as the shot ends.\r\n\r\nShot 2 (6.8-10.6s): Keep the medium held framing and the source timing. @image2 stands centered in the foreground in front of the visible white French doors in @image1, initially facing the camera while catching her breath. She turns her body away from the camera to face the doors, plants her feet on the polished wood floor, raises both palms, and pushes the two door panels outward. Her gaze shifts toward the opening as bright daylight pours through. End with the doors fully open around her. Remove the source wooden double doors, gallery walls, and checkered floor.\r\n\r\nShot 3 (10.6-16.2s): Keep the following tracking shot directly behind @image2 and her center-frame, forward-running trajectory. She runs away from the camera along the pale stone path in @image3, her mint jacket hem moving with her strides. She remains centered in the mid",
          "params": {},
          "variantId": "8f27ba94-0e22-44c3-a7d2-0c1d5a2d6532"
        }
      }
    ],
    "activeGeneratedVariantId": "1e6cc4d2-2d66-494c-ab74-e714c6dc8ac6"
  }
];

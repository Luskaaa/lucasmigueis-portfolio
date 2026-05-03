// Translatable fields (category, body) live in messages/{en,pt-PT}.json
// under now.items.{id}. Update both ids and translations together.
export const nowItemIds: ReadonlyArray<string> = ["working-on", "building", "open-to"];

// ISO date (YYYY-MM-DD). Bump when you edit nowItems translations.
export const nowLastUpdated = "2026-05-02";

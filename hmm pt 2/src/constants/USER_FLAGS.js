// https://github.com/LewisTehMinerz/discord-flags/blob/master/flags/user.json
export const USER_FLAGS = Object.entries({
  DISCORD_EMPLOYEE: {
    description: "User is a Discord employee.",
    shift: 0,
    undocumented: false
  },
  DISCORD_PARTNER: {
    description: "User is a Discord partner.",
    shift: 1,
    undocumented: false
  },
  HYPESQUAD_EVENTS: {
    description: "User is a HypeSquad Events member.",
    shift: 2,
    undocumented: false
  },
  BUG_HUNTER_LEVEL_1: {
    description: "User is a Bug Hunter.",
    shift: 3,
    undocumented: false
  },
  MFA_SMS: {
    description: "User has SMS 2FA enabled.",
    shift: 4,
    undocumented: true
  },
  PREMIUM_PROMO_DISMISSED: {
    description:
      "Unknown. Presumably some sort of Discord Nitro promotion that the user dismissed.",
    shift: 5,
    undocumented: true
  },
  HOUSE_BRAVERY: {
    description: "User is part of HypeSquad Bravery.",
    shift: 6,
    undocumented: false
  },
  HOUSE_BRILLIANCE: {
    description: "User is part of HypeSquad Brilliance.",
    shift: 7,
    undocumented: false
  },
  HOUSE_BALANCE: {
    description: "User is a part of HypeSquad Balance.",
    shift: 8,
    undocumented: false
  },
  EARLY_SUPPORTER: {
    description: "User is an Early Supporter.",
    shift: 9,
    undocumented: false
  },
  TEAM_PSEUDO_USER: {
    description: "Account is a Team account.",
    shift: 10,
    undocumented: false
  },
  INTERNAL_APPLICATION: {
    description:
      "An internal flag accidentally leaked to the client's private flags. Relates to partner/verification applications but nothing else is known.",
    shift: 11,
    undocumented: true
  },
  SYSTEM: {
    description: "Account is a Discord system account.",
    shift: 12,
    undocumented: true
  },
  HAS_UNREAD_URGENT_MESSAGES: {
    description: "User has unread messages from Discord.",
    shift: 13,
    undocumented: true
  },
  BUG_HUNTER_LEVEL_2: {
    description: "User has the gold Bug Hunter badge.",
    shift: 14,
    undocumented: false
  },
  UNDERAGE_DELETED: {
    description: "Unused. User was deleted for being underage.",
    shift: 15,
    undocumented: true
  },
  VERIFIED_BOT: {
    description: "User is a verified bot.",
    shift: 16,
    undocumented: false
  },
  VERIFIED_BOT_DEVELOPER: {
    description: "User is a verified bot developer.",
    shift: 17,
    undocumented: false
  },
  CERTIFIED_MODERATOR: {
    description: "User is a Discord certified moderator.",
    shift: 18,
    undocumented: false
  },
  BOT_HTTP_INTERACTIONS: {
    description: "Bot is an HTTP interaction.",
    shift: 19,
    undocumented: false
  },
  SPAMMER: {
    description: "User is marked as a spammer.",
    shift: 20,
    undocumented: true
  },
  DISABLE_PREMIUM: {
    description: "Forcefully disables Nitro features.",
    shift: 21,
    undocumented: true
  },
  PREMIUM_DISCRIMINATOR: {
    description: "User has a premium discriminator",
    shift: 37,
    undocumented: true
  },
  USED_DESKTOP_CLIENT: {
    description: "User has used the desktop client",
    shift: 38,
    undocumented: true
  },
  USED_WEB_CLIENT: {
    description: "User has used the web client",
    shift: 39,
    undocumented: true
  },
  USED_MOBILE_CLIENT: {
    description: "User has used the mobile client",
    shift: 40,
    undocumented: true
  },
  DISABLED: {
    description: "User is currently temporarily or permanently disabled.",
    shift: 41,
    undocumented: true
  },
  VERIFIED_EMAIL: {
    description: "User has a verified email",
    shift: 43,
    undocumented: true
  },
  QUARANTINED: {
    description: "User account is quarantined",
    shift: 44,
    undocumented: true
  }
}).map(([flag, { description, undocumented, shift }]) => ({
  flag,
  description,
  undocumented,
  value: 1n << BigInt(shift)
}));
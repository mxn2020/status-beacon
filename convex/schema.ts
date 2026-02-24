import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  services: defineTable({ name: v.string(), group: v.string(), status: v.union(v.literal("Operational"), v.literal("Degraded"), v.literal("Outage")), uptimePct: v.number() }),
  incidents: defineTable({ title: v.string(), status: v.string(), severity: v.string(), message: v.string(), timestamp: v.string() }),
  subscribers: defineTable({ email: v.string(), isVerified: v.boolean(), subscribedAt: v.string() })
});

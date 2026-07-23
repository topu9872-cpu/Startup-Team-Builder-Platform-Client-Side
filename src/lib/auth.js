import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

const db = client.db("Startup-Team-Builder-Platform");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  user: {
    additionalFields: {
      role: {
        required: false,
        type: "string",
      },
      plan: {
        type: "string",
        defaultValue: "collaborator_free",
      },
      isBlock: {
        type: "boolean",
        defaultValue: false,
      },
      bio: {
        type: "string",
        required: false,
      },
      skills: {
        type: "string",
        required: false,
      },
    },
  },

  emailAndPassword: {
    enabled: true,
  },
    account: {
    accountLinking: {
      enabled: true,
       trustedProviders: ["google", "github"],
    },
  },


  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
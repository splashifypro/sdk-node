# Splashify Pro — Node.js / TypeScript SDK

[![npm](https://img.shields.io/badge/npm-%40splashifypro%2Fsdk-cb3837?logo=npm)](https://www.npmjs.com/package/@splashifypro/sdk)
[![docs](https://img.shields.io/badge/docs-splashifypro.com-1B70FF)](https://docs.splashifypro.com/public-api)
[![license](https://img.shields.io/badge/license-MIT-22c55e)](./LICENSE)

Official TypeScript SDK for the [Splashify Pro](https://splashifypro.com) API —
send WhatsApp messages, transactional emails, manage contacts and
conversations, and fire Meta Conversions events from your Node.js / TypeScript
backend.

## Install

```bash
npm install @splashifypro/sdk
# or
pnpm add @splashifypro/sdk
# or
yarn add @splashifypro/sdk
```

## Get your API key

1. **Sign in** to your Splashify Pro account at
   [app.splashifypro.com](https://app.splashifypro.com).
   No account yet? [Sign up free](https://app.splashifypro.com/auth/signup).

2. Open the **Settings** dialog (gear icon, top right) → click the
   **Developer** tile.
   _Direct link:_ [app.splashifypro.com/settings/developer](https://app.splashifypro.com/settings/developer)

3. Under **API Keys**, click **Generate Secret Key**.

4. Copy the key shown (starts with `sk_live_…`) and store it somewhere
   secure — it's shown **only once**. If you lose it, generate a new one
   and the old one stops working.

5. Use it as the `SPLASHIFY_API_KEY` environment variable in your app.
   **Never commit it to git or paste it into client-side code** — the
   key carries full account access.

> **Tip:** Set up a [webhook URL](https://app.splashifypro.com/settings/developer)
> on the same page to receive delivery / read receipts and inbound message
> events.

## Authentication

The SDK uses HTTP Basic with the API key as the username:

```ts
import { Configuration, MessagesApi } from "@splashifypro/sdk";

const config = new Configuration({
  username: process.env.SPLASHIFY_API_KEY!,
});

const messages = new MessagesApi(config);
```

## Quickstart — send a WhatsApp text

```ts
import { Configuration, MessagesApi } from "@splashifypro/sdk";

const messages = new MessagesApi(
  new Configuration({ username: process.env.SPLASHIFY_API_KEY! })
);

const result = await messages.publicMessagePost({
  body: {
    type: "Text",
    countryCode: "+91",
    phoneNumber: "9999999999",
    data: { message: "Hi! Thanks for reaching out 👋" },
  },
});

console.log(result.id); // message_id — use to poll status / correlate webhooks
```

## Send a WhatsApp template

```ts
await messages.publicMessagePost({
  body: {
    type: "Template",
    countryCode: "+91",
    phoneNumber: "9999999999",
    template: {
      name: "order_confirmation",
      languageCode: "en",
      bodyValues: ["Sayan", "ORD-1042", "₹1,499"],
      buttonValues: { "0": ["https://shop.example.com/orders/1042"] },
    },
  },
});
```

## Send a transactional email

> Requires a verified sender domain. Set up at
> **https://app.splashifypro.com/settings/email-domain**.

```ts
import { Configuration, EmailApi } from "@splashifypro/sdk";

const email = new EmailApi(
  new Configuration({ username: process.env.SPLASHIFY_API_KEY! })
);

await email.publicEmailSendPost({
  body: {
    to: "customer@example.com",
    subject: "Your receipt for Order #1042",
    html: "<h1>Thanks!</h1><p>Order #1042 confirmed.</p>",
    text: "Thanks! Order #1042 confirmed.",
    from_email: "billing@yourdomain.com",
    from_name: "Acme Inc.",
  },
});
```

## Available APIs

| Class                | What it does                                                |
| -------------------- | ----------------------------------------------------------- |
| `MessagesApi`        | Send WhatsApp messages (text, template, media, interactive) |
| `EmailApi`           | Send transactional + templated emails                       |
| `ContactsApi`        | List + filter contacts                                      |
| `ConversationsApi`   | Assign chats to team members                                |
| `MetaConversionsApi` | Fire Meta Pixel / Conversions API events                    |

Full reference, request/response shapes, and per-endpoint examples:
**https://docs.splashifypro.com/public-api**

## Rate limits

Per-key limits depend on your plan tier. Hitting the limit returns HTTP 429 —
the response body includes `Retry-After`. Tier and current consumption are
visible at https://app.splashifypro.com/settings/developer.

## TypeScript

Fully typed. Every endpoint has request + response interfaces; your IDE will
auto-complete payload fields and surface validation errors at compile time.

## Compatibility

Node.js 18+ (uses native `fetch`). Works in Bun, Deno (with the `npm:` prefix),
and Cloudflare Workers / edge runtimes.

## Support

- **Issues / bug reports:** [github.com/splashifypro/sdk-node/issues](https://github.com/splashifypro/sdk-node/issues)
- **Documentation:** [docs.splashifypro.com/public-api](https://docs.splashifypro.com/public-api)
- **Email support:** support@splashifypro.in

## License

[MIT](./LICENSE)

---

This SDK is auto-generated from the official OpenAPI specification. Pull
requests for SDK-side improvements (typing, ergonomic wrappers, etc.) are
welcome; underlying API changes should be filed against the documentation
site.

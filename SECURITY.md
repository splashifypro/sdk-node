# Security Policy

## Reporting a vulnerability

If you've found a security issue in this SDK or the Splashify Pro
Email API it talks to, please **email
[support@splashifypro.in](mailto:support@splashifypro.in)** with:

- A clear description of the issue
- Steps to reproduce
- The first 12 characters of your `pk_live_…` API key (so we can
  correlate without you sharing the full key)
- Any logs, screenshots, or proof-of-concept code

**Do not** open a public GitHub issue, post on social media, or
disclose the vulnerability anywhere else until we've shipped a patch.

## What to expect

| Stage | Target |
| --- | --- |
| First response | within 24 hours |
| Triage + severity assignment | within 72 hours |
| Patch released | within 30 days for high-severity issues |
| Public disclosure | coordinated with you, after fix is live |

## Safe harbor

Good-faith security research conducted under this policy will not
be subject to legal action. We commit to:

- Not pursuing legal action against researchers who follow this
  policy and avoid privacy violations, service disruption, or
  data destruction
- Working with you to understand and validate the issue
- Acknowledging your contribution publicly (if you'd like)

## Out of scope

The following are **not** considered vulnerabilities for this
program:

- Denial-of-service / volumetric attacks against production
- Social engineering of staff or customers
- Physical attacks against company premises
- Issues in third-party services we depend on (Meta, Zoho, etc.) —
  please report those upstream
- Vulnerabilities in older SDK versions where a current version
  is available

## Scope

In scope:

- This SDK package on npm
- The hosted API at `api.splashifypro.com` and `smtp.splashifypro.com`
- Authentication, authorization, and webhook signature handling
- Cryptographic implementations exposed to API consumers

## License

This SDK is published under the [MIT License](./LICENSE) by
EvolvePro Tech Solutions Private Limited.

# GitHub Copilot / AI Agent Instructions for Robaloxs (robaloxs-fe)

Purpose: Give AI coding agents immediate, actionable knowledge to be productive in this Nuxt 4 frontend.

## Quick facts 🔧
- Framework: **Nuxt 4** (TypeScript). Main scripts: `npm run dev`, `npm run build`, `npm run generate`, `npm run preview`. Postinstall runs `nuxt prepare`.
- Styles: **Tailwind CSS** (`@nuxtjs/tailwindcss`).
- State: **Pinia** stores located in `app/stores/`.
- Composables: Reusable logic lives in `app/composables/` (e.g. `app/composables/api/useApi.ts`).
- Plugins: Client-only plugins under `app/plugins/` (e.g. `gsap.client.ts`).
- i18n: `@nuxtjs/i18n`, locales in `i18n/locales/`. Default locale: **`id`**.

## Big-picture architecture & data flow 🧭
- Pages in `app/pages/` are file-based routes. Layouts in `app/layouts/` (`default.vue`, `guest.vue`) are selected via `definePageMeta({ layout: 'guest' })`.
- API calls: central composable `useApi()` (see `app/composables/api/useApi.ts`) which returns a `$fetch` instance. It uses `useRuntimeConfig().public.apiBase` or falls back to `http://127.0.0.1:8000/api/`.
- Authentication: `app/stores/authentication.ts` shows expected API contract and error shape (see `ApiResponse` interface). Endpoints used: `auth/login/`, `auth/register/`, `auth/logout/`.
  - Successful login stores `token` in a cookie named `token` (`useCookie('token')`). Many requests rely on server-side cookie auth rather than an Authorization header.
- UI feedback: Toasts are handled by `useToastStore()` (`app/stores/items/toast.ts`), call `.add({...})` to surface messages.

## Conventions & patterns to follow ✍️
- Prefer the `~/` alias for imports (e.g. `~/stores/authentication`, `~/composables/api/useApi`).
- State modifications and API calls should live in Pinia stores (see `AuthenticationStore`). Keep components thin and call stores from pages/components.
- API error handling: stores expect the response error shape `{ success, message, data?, errors? }`. Map `errors` into `validationErrors` when present (see `authentication.ts`).
- Layouts: use `definePageMeta` to pick layout. Guest pages (auth) use `guest` layout.
- Animations: GSAP is provided via plugin and injected with `useNuxtApp().$gsap` or via provided `gsap` (see `app/plugins/gsap.client.ts`).

## Developer workflows & debugging 💡
- Local dev: `npm run dev` (Nuxt dev server; `devtools` are enabled in `nuxt.config.ts`). Use browser Network tab to inspect $fetch requests.
- Changing API base: set the public runtime config `public.apiBase`. In many hosts this is exposed via env as `NITRO_PUBLIC_API_BASE` (example: `NITRO_PUBLIC_API_BASE='https://api.example.com/'`).
- Linting: `@nuxt/eslint` is configured as a module. Use your editor integration or run build steps to see lint results.
- To debug auth flows, inspect `app/stores/authentication.ts` and look at how `token` cookie is set and how the store updates `user`, `token`, `error`, and `validationErrors`.

## Examples (copy-paste) ✨
- API composable: `app/composables/api/useApi.ts`
- Login flow: `app/stores/authentication.ts` → `login()` posts to `auth/login/` and sets `useCookie('token')`.
- Showing a toast: `const toast = useToastStore(); toast.add({ title: 'OK', message: 'Done', type: 'success' })`.

## What AI agents should _not_ assume ⚠️
- There are no unit tests in the repo; do not add tests without confirming the test strategy.
- Authorization headers are not automatically set; token is stored in a cookie by design. If adding Authorization headers, confirm backend expectations.

## Where to update this doc 📝
- If you add new global configs, API contracts, or change auth mechanics (cookie → header), update this file and point to the affected files (e.g. `app/composables/api/useApi.ts`, `app/stores/authentication.ts`).

---
If anything here is unclear or you want specific examples (e.g. a suggested `useApi()` enhancement to attach tokens), tell me which part to expand and I'll update this file. ✅

# AisleWise — Setup & Testing Notes

## Setup Steps

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with your Supabase credentials (see below):

   ```
   EXPO_PUBLIC_SUPABASE_URL=your-project-url
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-or-publishable-key
   ```

3. Run the database setup SQL once in your Supabase project's SQL Editor (`supabase/schema.sql` — creates `shopping_items`, `price_history`, and `recurring_items` with Row Level Security).

4. Start the app:
   ```bash
   npx expo start
   ```
   Press `w` for web, or scan the QR code with Expo Go on your phone.

## Supabase Project Setup Notes

- Project created at supabase.com, using the free tier.
- **Authentication → Providers → Email** is enabled for email/password sign-up and sign-in.
- Email confirmation setting: "Confirm email" is ON. This means new users need to click a confirmation link first.
- The Project URL and anon/publishable key used in `.env` are from **Project Settings → Data API**. Only the anon/publishable key is used client-side — the service_role key is never exposed in the app.
- Database schema and Row Level Security policies are defined in `supabase/schema.sql`, run once via the Supabase SQL Editor. RLS ensures each user can only read/write their own rows.
- `.env` is excluded from git via `.gitignore` and was never committed.

## Test Accounts

No accounts are hardcoded in the app or codebase — all accounts are created through the Sign Up screen and stored in Supabase Auth.

For grading, a test account was created via the app's Sign Up screen:

- Email: **hexepep115@ittiv.com**
- Password: **testPass@1**

To use a fresh test account, use **Sign Up** on the Welcome screen with any valid email/password (6+ characters). If email confirmation is enabled on the Supabase project, check that inbox for the confirmation link before signing in.

Step-by-step: Add a new article to Genova
1) Pick a title + date

Decide:

Title (what readers see)

Publish date (today’s date is fine)

You’ll use the date in the filename like: YYYY-MM-DD

Example date: 2026-01-15
Example title: AI in Healthcare

2) Upload the article’s cover image (optional but recommended)

Go to your repo on GitHub

Click into: assets/ → images/

Click Add file → Upload files

Upload your image (example):
ai-healthcare.jpg

Click Commit changes

✅ Keep image filenames simple: lowercase, hyphens, no spaces.

3) Create the article file in _posts

Go back to the repo main page

Click Add file → Create new file

In the filename box, type:

_posts/2026-01-15-ai-in-healthcare.md


Rules (important):

Must be inside _posts/

Must start with YYYY-MM-DD-

Must end with .md

Use hyphens, not spaces

4) Paste this template (copy/paste)

Replace the title/image/categories with your own:

---
layout: post
title: "AI in Healthcare"
author: Genova Editorial Team
categories: [AI, Medicine]
image: /assets/images/ai-healthcare.jpg
---

## Quick Summary
(Write 1–2 sentences that explain what this article is about.)

## The Big Idea
Write your main explanation here.

## Real-World Example
Add a real-world example or application.

## Key Takeaways
- Takeaway 1
- Takeaway 2
- Takeaway 3


If you don’t have an image yet, you can remove the image: line entirely:

# just delete this line
image: /assets/images/ai-healthcare.jpg

5) Commit the article

Scroll down

Commit message:
Add article: AI in Healthcare

Click Commit new file

6) Verify it shows up

Wait ~15–60 seconds, then check:

Articles list:

https://suchetmadem.github.io/genova/articles/


Click the article to open the full page.

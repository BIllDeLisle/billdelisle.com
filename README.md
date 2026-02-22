# Bill DeLisle - Personal Website

A Jekyll-powered website for Bill DeLisle, Content Strategist & Brand Storyteller.

## Local Development

To run this site locally:

1. Install Ruby and Jekyll
2. Run `bundle install`
3. Run `bundle exec jekyll serve`
4. Visit `http://localhost:4000`

## Deployment

This site is hosted on GitHub Pages. See `DEPLOYMENT.md` for detailed deployment instructions.

## Structure

- `_layouts/` - Page templates
- `_includes/` - Reusable components (nav, footer, testimonials)
- `_posts/` - Blog posts in Markdown format
- `assets/` - CSS, JavaScript, and images
- Main pages: `index.html`, `about.html`, `services.html`, `blog.html`, `contact.html`

## Adding Blog Posts

Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md` and include the following front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
category: "Category Name"
read_time: 5
---
```

## Contact Form

The contact form uses Formspree. Update the form ID in `contact.html` with your Formspree endpoint.

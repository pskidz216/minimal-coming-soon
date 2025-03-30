# MINIMAL - Coming Soon Page

A clean, modern coming soon page for MINIMAL, a brand focused on natural textile fiber sportswear.

## GitHub Pages Deployment

This project is configured for easy deployment to GitHub Pages.

### Automatic Deployment

The project includes a GitHub Actions workflow that automatically deploys the site to GitHub Pages whenever you push to the main branch.

1. Fork or clone this repository
2. Update the `homepage` field in `package.json` with your GitHub username
3. Push to your GitHub repository
4. GitHub Actions will automatically build and deploy your site
5. Your site will be available at `https://yourusername.github.io/minimal-coming-soon`

### Manual Deployment

You can also deploy manually:

1. Install dependencies: `npm install`
2. Build and export the site: `npm run export`
3. Deploy to GitHub Pages: `npm run deploy`

## Local Development

To run the development server:

```bash
npm run dev


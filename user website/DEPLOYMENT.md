# Groundwale - GitHub Pages Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

## Deployment Setup

### 1. Enable GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save the changes

### 2. Configure Base Path (if needed)

If deploying to `https://username.github.io/repo-name/` (not a root domain):

Edit `next.config.mjs` and uncomment these lines:
```javascript
basePath: '/repo-name',
assetPrefix: '/repo-name/',
```

Replace `repo-name` with your actual repository name.

### 3. Automatic Deployment

The site will automatically deploy when you:
- Push to the `main` branch
- Manually trigger the workflow from the Actions tab

## Build Locally

Test the static export locally:

```bash
npm run build
```

This creates an `out/` directory with static files.

## Manual Deployment

You can manually trigger deployment from:
**Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

## Site URL

After deployment, your site will be available at:
- Root domain: `https://username.github.io/`
- Repository path: `https://username.github.io/repo-name/`

## Troubleshooting

### Images not loading
- Ensure `images.unoptimized: true` is set in `next.config.mjs`
- Check if basePath/assetPrefix are correctly configured

### 404 errors
- Verify GitHub Pages is enabled in repository settings
- Check that the workflow completed successfully in the Actions tab
- Ensure the `out/` directory was created during build

### Build fails
- Check workflow logs in the Actions tab
- Verify all dependencies are in `package.json`
- Test build locally with `npm run build`

# Custom Domain Setup Guide for diassl.com

This guide will walk you through setting up your custom domain `diassl.com` with GitHub Pages.

## Step 1: GitHub Pages Configuration (Done! ✅)

I've already created a `CNAME` file with `diassl.com` and pushed it to your repository. This file tells GitHub Pages that you want to use a custom domain.

## Step 2: Configure DNS Records at Porkbun

You need to add DNS records at your domain registrar (Porkbun) to point your domain to GitHub Pages.

### Option A: Using A Records (Recommended for apex domain)

1. Log in to your Porkbun account: https://porkbun.com/
2. Navigate to your domain `diassl.com`
3. Go to the DNS management section (MANAGE DNS RECORDS)
4. Add the following **A records**:

   ```
   Type: A
   Host: @ (or leave blank for root domain)
   Answer/Value: 185.199.108.153
   TTL: 600
   
   Type: A
   Host: @ (or leave blank for root domain)
   Answer/Value: 185.199.109.153
   TTL: 600
   
   Type: A
   Host: @ (or leave blank for root domain)
   Answer/Value: 185.199.110.153
   TTL: 600
   
   Type: A
   Host: @ (or leave blank for root domain)
   Answer/Value: 185.199.111.153
   TTL: 600
   ```

### Option B: Using CNAME Record (For www subdomain)

If you also want `www.diassl.com` to work:

1. Add a **CNAME record**:

   ```
   Type: CNAME
   Host: www
   Answer/Value: SathsaraDias.github.io
   TTL: 600
   ```

2. Then add another CNAME record for the apex domain (if Porkbun supports it):

   ```
   Type: CNAME
   Host: @ (or leave blank)
   Answer/Value: SathsaraDias.github.io
   TTL: 600
   ```

   **Note:** Some registrars don't support CNAME for the apex domain. If Porkbun doesn't support it, use the A records from Option A above.

## Step 3: Enable Custom Domain in GitHub

1. Go to your GitHub repository: https://github.com/SathsaraDias/SathsaraDias.github.io
2. Click on **Settings** (top navigation bar)
3. Click on **Pages** (left sidebar)
4. Scroll down to the **Custom domain** section
5. Enter `diassl.com` in the text field
6. Click **Save**
7. GitHub will verify your DNS configuration (this may take a few minutes)

## Step 4: Wait for DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate globally. Typically:
- **TTL 600** (10 minutes) means changes should be visible within 10-30 minutes
- Some locations may take longer

## Step 5: Verify Setup

1. Wait 10-30 minutes after adding DNS records
2. Check if GitHub Pages recognizes your domain:
   - Go to Settings → Pages
   - Under "Custom domain", you should see a green checkmark ✓ if DNS is configured correctly
3. Test your website:
   - Visit `http://diassl.com` (should redirect to HTTPS)
   - Visit `https://diassl.com` (should show your site)

## Step 6: Enable HTTPS (Usually Automatic)

Once your DNS is configured and GitHub verifies it:
1. Go to Settings → Pages
2. Make sure "Enforce HTTPS" checkbox is checked ✓
3. GitHub will automatically provision an SSL certificate (may take a few hours)

## Troubleshooting

### If DNS verification fails:
- Double-check that all 4 A records are added correctly
- Ensure TTL is set to 600 or lower for faster propagation
- Wait a bit longer (up to 1 hour) and try again

### If the site doesn't load:
- Clear your browser cache
- Try accessing from a different network/device
- Check DNS propagation status at: https://www.whatsmydns.net/

### Common Issues:
1. **"DNS not configured"**: Wait longer for DNS propagation
2. **"Certificate provisioning in progress"**: This is normal, wait up to 24 hours
3. **Mixed content warnings**: Ensure all resources use HTTPS

## Important Notes

- Keep the `CNAME` file in your repository (don't delete it)
- Only one domain can be set per GitHub Pages site
- Both `diassl.com` and `www.diassl.com` will work if configured properly
- Your site will continue to work at `sathsaradias.github.io` as well

## Current Status

✅ CNAME file created and pushed to GitHub
⏳ Next: Configure DNS records at Porkbun
⏳ Next: Enable custom domain in GitHub Settings → Pages

---

**Need help?** If you encounter any issues, let me know and I can help troubleshoot!

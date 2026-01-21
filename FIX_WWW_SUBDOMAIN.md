# Fix www.diassl.com Configuration

The error you're seeing is because `www.diassl.com` is not configured. GitHub checks both the apex domain (`diassl.com`) and the `www` subdomain (`www.diassl.com`).

## Solution: Add CNAME Record for www Subdomain

You need to add a CNAME record at Porkbun for the `www` subdomain.

## Step-by-Step Instructions:

### 1. Go to Porkbun DNS Management

1. Log in to Porkbun: https://porkbun.com/
2. Navigate to your domain `diassl.com`
3. Open "MANAGE DNS RECORDS" (Quick DNS Config)

### 2. Add CNAME Record for www

1. Click "Add" or "+" button to add a new record
2. Fill in the form:

   ```
   Type: CNAME
   Host: www
   Answer/Value: SathsaraDias.github.io
   TTL: 600
   ```

3. Click "Add" or "Save"
4. Save all changes

### 3. Wait for DNS Propagation

- Wait **10-30 minutes** for DNS propagation
- GitHub will automatically check the DNS records
- The error should disappear once verified

### 4. Verify in GitHub

1. Go to: https://github.com/SathsaraDias/SathsaraDias.github.io/settings/pages
2. Scroll to "Custom domain" section
3. Click "Check again" button (next to the error message)
4. The error should disappear and show green checkmarks ✓

## Your Current DNS Setup:

**✅ Already configured (working):**
- A Record: `@` → `185.199.108.153` (diassl.com)
- A Record: `@` → `185.199.109.153` (diassl.com)
- A Record: `@` → `185.199.110.153` (diassl.com)
- A Record: `@` → `185.199.111.153` (diassl.com)
- TXT Record: `_github-pages-challenge-SathsaraDias.diassl.com` (verification)

**⏳ Missing (need to add):**
- CNAME Record: `www` → `SathsaraDias.github.io` (for www.diassl.com)

## After Adding the CNAME Record:

Both domains will work:
- ✅ `https://diassl.com` (apex domain - already working)
- ✅ `https://www.diassl.com` (www subdomain - will work after adding CNAME)

The error message in GitHub should disappear after DNS propagates.

---

**Note:** This is a common issue. The apex domain works with A records, but the www subdomain needs a CNAME record pointing to your GitHub Pages domain.

# New Horizons Constructions Co. - Professional Construction Website

🏗️ A premium, professional construction company website built with HTML5, CSS3, and Vanilla JavaScript.

## ✨ Features

✨ **Premium Design**
- Modern architectural design with glassmorphism effects
- Smooth animations and transitions
- Professional gradient overlays
- Real construction industry imagery

🎨 **Fully Responsive**
- Mobile-first approach
- Tablet optimized
- Desktop enhanced
- Touch-friendly navigation

📊 **Complete Sections**
- Hero slider with auto-rotating images
- Professional About section
- 6 comprehensive service offerings
- Portfolio with 9 completed projects
- Contact form with validation
- Social media integration
- Professional footer

⚡ **Performance Optimized**
- Lightweight (no frameworks required)
- Fast loading times
- Lazy image loading
- SEO optimized

## 📁 File Structure

```
new-horizons-construction-website/
├── index.html              # Main homepage
├── css/
│   ├── styles.css         # Main stylesheet
│   └── responsive.css     # Mobile responsive styles
├── js/
│   ├── main.js            # Core functionality
│   └── portfolio.js       # Portfolio management
├── images/                # Image assets folder
├── README.md              # Documentation
└── .htaccess             # Apache server configuration
```

## 🚀 Quick Start (Local Testing)

1. **Download/Clone the Project**
   ```bash
   git clone https://github.com/cortizzy/new-horizons-construction-website.git
   cd new-horizons-construction-website
   ```

2. **Open in Browser**
   - Simply double-click `index.html` or
   - Use a local server (Python):
     ```bash
     python -m http.server 8000
     ```
   - Then visit `http://localhost:8000`

---

# 🌐 NAMECHEAP STELLAR VPS DEPLOYMENT - COMPLETE GUIDE

## ⚙️ STEP 1: Set Up Your Namecheap Stellar VPS

### 1.1 Purchase & Access Your VPS

1. Go to [https://www.namecheap.com/hosting/vps/](https://www.namecheap.com/hosting/vps/)
2. Select **Stellar VPS** plan (Recommended: Linux with cPanel for easier management)
3. Complete checkout and payment
4. Check your email for VPS login credentials including:
   - **VPS IP Address** (e.g., 123.45.67.89)
   - **Root Username** (usually "root")
   - **Root Password**
   - **SSH Port** (usually 22)

### 1.2 Connect via SSH (Terminal Access)

**For Mac/Linux Users:**
```bash
# Open Terminal and connect
ssh root@YOUR_VPS_IP_ADDRESS

# Example:
ssh root@123.45.67.89

# When prompted, enter your root password
```

**For Windows Users:**
1. Download [PuTTY](https://www.putty.org/)
2. Open PuTTY
3. In "Host Name" field, enter: `root@YOUR_VPS_IP_ADDRESS`
4. Port: `22`
5. Click "Open"
6. Enter password when prompted

---

## 🛠️ STEP 2: Prepare Your VPS

### 2.1 Update System (Copy & Paste Each Line)

```bash
sudo apt update
```

```bash
sudo apt upgrade -y
```

### 2.2 Install Apache Web Server

```bash
sudo apt install apache2 -y
```

```bash
sudo systemctl start apache2
```

```bash
sudo systemctl enable apache2
```

### 2.3 Create Website Directory

```bash
sudo mkdir -p /var/www/newhorizonsconstructions.com
```

```bash
sudo chown -R www-data:www-data /var/www/newhorizonsconstructions.com
```

```bash
sudo chmod -R 755 /var/www/newhorizonsconstructions.com
```

---

## 📤 STEP 3: Upload Files to VPS

### ⭐ OPTION A: Using SCP (Command Line - EASIEST)

**On Your Local Computer (Mac/Linux/Windows PowerShell):**

1. Open Terminal/PowerShell
2. Navigate to your project folder:
   ```bash
   cd new-horizons-construction-website
   ```

3. Upload all files:
   ```bash
   scp -r . root@YOUR_VPS_IP_ADDRESS:/var/www/newhorizonsconstructions.com/
   ```
   
   **Example:**
   ```bash
   scp -r . root@123.45.67.89:/var/www/newhorizonsconstructions.com/
   ```

4. Enter your VPS password when prompted
5. Wait for upload to complete (you'll see file transfers)

---

### OPTION B: Using FileZilla (GUI Method - BEGINNER FRIENDLY)

1. **Download FileZilla**: https://filezilla-project.org/download.php
2. **Install and Open FileZilla**
3. **Click "File" → "Site Manager"** or press **Ctrl+S**
4. **Click "New site"** and fill in:
   - **Protocol**: SFTP - SSH File Transfer Protocol
   - **Host**: YOUR_VPS_IP_ADDRESS
   - **Port**: 22
   - **Logon Type**: Normal
   - **User**: root
   - **Password**: Your VPS Password
   - **Name**: New Horizons (for reference)
5. **Click "Connect"**
6. **Left panel** (Local): Navigate to your project folder
7. **Right panel** (Remote): Should show `/` or navigate to `/var/www/newhorizonsconstructions.com/`
8. **Drag all files** from left panel to right panel
9. **Wait for transfer** to complete

---

### OPTION C: Using Git (If You Know Git)

1. **SSH into your VPS:**
   ```bash
   ssh root@YOUR_VPS_IP_ADDRESS
   ```

2. **Navigate to website folder:**
   ```bash
   cd /var/www/newhorizonsconstructions.com
   ```

3. **Clone the repository:**
   ```bash
   git clone https://github.com/cortizzy/new-horizons-construction-website.git .
   ```

4. **Set permissions:**
   ```bash
   sudo chown -R www-data:www-data /var/www/newhorizonsconstructions.com
   sudo chmod -R 755 /var/www/newhorizonsconstructions.com
   ```

---

## ⚙️ STEP 4: Configure Apache (Back in SSH Terminal)

### 4.1 Create Virtual Host Configuration

```bash
sudo nano /etc/apache2/sites-available/newhorizonsconstructions.com.conf
```

This opens a text editor. **Copy and paste the entire block below:**

```apache
<VirtualHost *:80>
    ServerName newhorizonsconstructions.com
    ServerAlias www.newhorizonsconstructions.com
    ServerAdmin admin@newhorizonsconstructions.com
    
    DocumentRoot /var/www/newhorizonsconstructions.com
    
    <Directory /var/www/newhorizonsconstructions.com>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/newhorizonsconstructions.com-error.log
    CustomLog ${APACHE_LOG_DIR}/newhorizonsconstructions.com-access.log combined
</VirtualHost>
```

**Save the file:**
- Press **Ctrl + X**
- Type **Y** (for Yes)
- Press **Enter**

### 4.2 Enable the Site

```bash
sudo a2ensite newhorizonsconstructions.com.conf
```

```bash
sudo a2enmod rewrite
```

```bash
sudo apache2ctl configtest
```

**You should see: `Syntax OK`**

### 4.3 Restart Apache

```bash
sudo systemctl restart apache2
```

---

## 🌐 STEP 5: Connect Your Domain to VPS

### 5.1 Update Namecheap DNS Records

1. **Go to Namecheap Dashboard**: https://www.namecheap.com/dashboard
2. **Find your domain** → Click "Manage"
3. **Click "Advanced DNS" tab**
4. **Look for existing A Records** and modify them:

**For @ (root domain):**
   - Type: `A Record`
   - Host: `@`
   - Value: `YOUR_VPS_IP_ADDRESS` (e.g., 123.45.67.89)
   - TTL: `Automatic` (or 300)
   - Click checkmark ✓

**For www subdomain:**
   - Type: `A Record`
   - Host: `www`
   - Value: `YOUR_VPS_IP_ADDRESS`
   - TTL: `Automatic`
   - Click checkmark ✓

**⏳ IMPORTANT: Wait 15-30 minutes for DNS to propagate!**

**To check if DNS is ready:**
```bash
nslookup newhorizonsconstructions.com
# Should return your VPS IP address
```

---

## 🔒 STEP 6: Enable HTTPS (Free SSL Certificate)

### 6.1 Install Certbot

```bash
sudo apt install certbot python3-certbot-apache -y
```

### 6.2 Generate SSL Certificate

```bash
sudo certbot --apache -d newhorizonsconstructions.com -d www.newhorizonsconstructions.com
```

**Follow the prompts:**
1. Enter email address
2. Agree to terms (type `y`)
3. Share email (type `y` or `n`)
4. Choose option **2** for automatic redirect to HTTPS
5. Confirm certificate creation

### 6.3 Restart Apache

```bash
sudo systemctl restart apache2
```

✅ **Your website is now HTTPS secure!**

---

## ⚡ STEP 7: Performance Optimization

### 7.1 Enable Gzip Compression

```bash
sudo nano /etc/apache2/apache2.conf
```

Go to the end of the file (press **Ctrl + End**) and add:

```apache
# Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

Save: **Ctrl + X**, **Y**, **Enter**

### 7.2 Enable Browser Caching

```bash
sudo a2enmod expires
```

Create/edit .htaccess:
```bash
sudo nano /var/www/newhorizonsconstructions.com/.htaccess
```

Add this code:
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access 1 month"
    ExpiresByType application/javascript "access 1 month"
    ExpiresByType image/jpeg "access 1 month"
    ExpiresByType image/gif "access 1 month"
    ExpiresByType image/png "access 1 month"
</IfModule>
```

Save: **Ctrl + X**, **Y**, **Enter**

### 7.3 Restart Apache

```bash
sudo systemctl restart apache2
```

---

## ✅ STEP 8: Verify Installation

### 8.1 Check Files Are Uploaded

```bash
ls -la /var/www/newhorizonsconstructions.com/
```

You should see:
```
-rw-r--r-- index.html
drwxr-xr-x css
drwxr-xr-x js
drwxr-xr-x images
```

### 8.2 Fix Permissions (If Needed)

```bash
sudo chown -R www-data:www-data /var/www/newhorizonsconstructions.com
sudo chmod -R 755 /var/www/newhorizonsconstructions.com
sudo systemctl restart apache2
```

### 8.3 Test Your Website

1. **Open your browser**
2. **Visit**: `https://newhorizonsconstructions.com`
3. **Check:**
   - ✅ Website loads
   - ✅ All images display
   - ✅ Green lock (HTTPS)
   - ✅ Links work
   - ✅ Responsive on mobile

---

## 🎨 Customization Guide

### Update Company Information

**Edit index.html:**

**Find and replace:**
- Phone: `(510) 630-7880` → Your number
- Address: `1175 N Unruh Ave, La Puente, California 91744` → Your address
- Email: `info@newhorizonsconstructions.com` → Your email

### Change Logo & Colors

**Edit css/styles.css (Top Section):**

```css
:root {
    --primary-color: #1a1a2e;      /* Dark Navy Blue - CHANGE THIS */
    --secondary-color: #0f3460;    /* Medium Blue - CHANGE THIS */
    --accent-color: #e94560;       /* Red/Pink - CHANGE THIS */
    --gold-color: #d4af37;         /* Gold - CHANGE THIS */
}
```

**Use online color picker:** https://www.google.com/search?q=color+picker

### Add More Projects

**Edit js/portfolio.js:**

```javascript
const portfolioData = [
    {
        id: 1,
        title: "Your Project Name",
        category: "commercial",  // or "industrial", "residential", "mixed"
        image: "https://image-url-here.jpg",
        description: "Brief description of your project"
    },
    // Copy the block above and add more projects
];
```

**Upload updated file via SCP:**
```bash
scp js/portfolio.js root@YOUR_VPS_IP:/var/www/newhorizonsconstructions.com/js/
```

---

## 🐛 Troubleshooting

### Problem: "403 Forbidden" Error

**Solution:**
```bash
sudo chown -R www-data:www-data /var/www/newhorizonsconstructions.com
sudo chmod -R 755 /var/www/newhorizonsconstructions.com
sudo systemctl restart apache2
```

### Problem: Images Not Loading

**Solution:**
1. Check images folder exists:
   ```bash
   ls /var/www/newhorizonsconstructions.com/images/
   ```

2. Fix permissions:
   ```bash
   sudo chmod 644 /var/www/newhorizonsconstructions.com/images/*
   ```

### Problem: Domain Not Loading

**Solution:**
1. Wait 30 minutes for DNS propagation
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try different browser or incognito mode
4. Check DNS:
   ```bash
   nslookup newhorizonsconstructions.com
   ```

### Problem: SSL Certificate Error

**Solution:**
```bash
# Renew certificate
sudo certbot renew

# Force renewal
sudo certbot renew --force-renewal
```

### Problem: Website Very Slow

**Solution:**
1. Check Namecheap dashboard for VPS resource usage
2. Enable caching (Step 7.2)
3. Optimize images
4. Check error logs:
   ```bash
   sudo tail -50 /var/log/apache2/error.log
   ```

---

## 📋 Complete Setup Checklist

- [ ] VPS purchased from Namecheap
- [ ] SSH access working
- [ ] System updated (apt update/upgrade)
- [ ] Apache installed & running
- [ ] Website folder created (/var/www/newhorizonsconstructions.com)
- [ ] Files uploaded via SCP/FileZilla/Git
- [ ] Virtual host configuration created
- [ ] Apache restarted successfully
- [ ] Domain DNS records updated
- [ ] DNS propagated (15-30 minutes waited)
- [ ] SSL certificate installed
- [ ] Website accessible via https://yourdomain.com
- [ ] All images loading
- [ ] Mobile design responsive
- [ ] Contact form working
- [ ] Performance optimized

---

## 🔧 Ongoing Maintenance

### Weekly
```bash
# Check if services are running
sudo systemctl status apache2
```

### Monthly
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Renew SSL (automatic, but check)
sudo certbot renew --dry-run
```

### View Error Logs
```bash
sudo tail -f /var/log/apache2/error.log
```

### View Access Logs
```bash
sudo tail -f /var/log/apache2/access.log
```

---

## 📱 Browser Compatibility

✅ Chrome (All versions)
✅ Firefox (All versions)
✅ Safari (All versions)
✅ Edge (All versions)
✅ Mobile browsers (iPhone, Android)

---

## 📞 Support

- **Namecheap Support**: https://support.namecheap.com
- **Apache Docs**: https://httpd.apache.org/docs/
- **Let's Encrypt**: https://letsencrypt.org/support/
- **GitHub Issues**: Contact repository owner

---

## 📄 License

This website is proprietary to New Horizons Constructions Co.

---

**🎉 Congratulations! Your professional construction website is now live!**

For questions or updates, contact your web administrator.
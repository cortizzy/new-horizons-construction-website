# New Horizons Constructions Co. - Professional Construction Website

🏗️ A premium, professional construction company website built with HTML5, CSS3, and Vanilla JavaScript.

## Features

✨ **Premium Design**
- Modern architectural design with glassmorphism effects
- Smooth animations and transitions
- Professional gradient overlays
- Real construction industry imagery

🎯 **Fully Responsive**
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

## File Structure

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

## Quick Start (Local Testing)

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

## Namecheap Stellar VPS Deployment Guide

### Step 1: Set Up Your Namecheap Stellar VPS

1. **Purchase & Access Your VPS**
   - Go to [Namecheap.com](https://www.namecheap.com)
   - Purchase a Stellar VPS plan (recommended: Linux CPanel)
   - Receive VPS credentials via email

2. **Connect via SSH**
   - Open Terminal (Mac/Linux) or PuTTY (Windows)
   - Get your VPS IP from Namecheap dashboard
   ```bash
   ssh root@YOUR_VPS_IP_ADDRESS
   # Enter password when prompted
   ```

### Step 2: Prepare Your VPS

3. **Update System Packages**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

4. **Install Apache Web Server**
   ```bash
   sudo apt install apache2 -y
   sudo systemctl start apache2
   sudo systemctl enable apache2
   ```

5. **Create Website Directory**
   ```bash
   sudo mkdir -p /var/www/newhorizonsconstructions.com
   sudo chown -R www-data:www-data /var/www/newhorizonsconstructions.com
   sudo chmod -R 755 /var/www/newhorizonsconstructions.com
   ```

### Step 3: Upload Files to VPS

**Option A: Using SCP (Recommended)**

1. **On Your Local Computer**
   ```bash
   # Navigate to your project folder
   cd new-horizons-construction-website
   
   # Upload all files
   scp -r . root@YOUR_VPS_IP_ADDRESS:/var/www/newhorizonsconstructions.com/
   ```

**Option B: Using FileZilla (GUI Method)**

1. **Download FileZilla** from [filezilla-project.org](https://filezilla-project.org)
2. **Create New Connection**
   - Host: `sftp://YOUR_VPS_IP_ADDRESS`
   - Username: `root`
   - Password: `Your VPS Password`
   - Port: `22`
3. **Drag and Drop**
   - Left panel: Your local project folder
   - Right panel: `/var/www/newhorizonsconstructions.com/`
   - Drag all files to right panel

**Option C: Using Git**

1. **On Your VPS**
   ```bash
   cd /var/www/newhorizonsconstructions.com
   git clone https://github.com/cortizzy/new-horizons-construction-website.git .
   ```

### Step 4: Configure Apache

6. **Create Virtual Host Configuration**
   ```bash
   sudo nano /etc/apache2/sites-available/newhorizonsconstructions.com.conf
   ```

7. **Paste this configuration:**
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

8. **Enable the Site**
   ```bash
   sudo a2ensite newhorizonsconstructions.com.conf
   sudo a2enmod rewrite
   sudo apache2ctl configtest
   ```
   (Should output: `Syntax OK`)

9. **Restart Apache**
   ```bash
   sudo systemctl restart apache2
   ```

### Step 5: Connect Your Domain

10. **Update Namecheap DNS Records**
    - Go to Namecheap Dashboard → Your Domain → Manage
    - Go to "Advanced DNS" tab
    - Add A Record:
      - Type: `A Record`
      - Host: `@`
      - Value: `YOUR_VPS_IP_ADDRESS`
      - TTL: `Automatic`
    - Add WWW Record:
      - Type: `A Record`
      - Host: `www`
      - Value: `YOUR_VPS_IP_ADDRESS`
      - TTL: `Automatic`
    
    **Wait 15-30 minutes for DNS propagation**

### Step 6: Enable HTTPS (SSL Certificate)

11. **Install Certbot for Let's Encrypt**
    ```bash
    sudo apt install certbot python3-certbot-apache -y
    ```

12. **Generate SSL Certificate**
    ```bash
    sudo certbot --apache -d newhorizonsconstructions.com -d www.newhorizonsconstructions.com
    ```
    - Follow the prompts
    - Choose automatic renewal

13. **Verify SSL**
    ```bash
    sudo systemctl restart apache2
    ```

### Step 7: Performance Optimization

14. **Enable Gzip Compression**
    ```bash
    sudo nano /etc/apache2/apache2.conf
    ```
    Add at the end:
    ```apache
    # Gzip compression
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
    </IfModule>
    ```

15. **Enable Browser Caching**
    ```bash
    sudo a2enmod expires
    sudo nano /var/www/newhorizonsconstructions.com/.htaccess
    ```
    Add:
    ```apache
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType image/jpeg "access 1 month"
        ExpiresByType image/gif "access 1 month"
        ExpiresByType image/png "access 1 month"
        ExpiresByType text/css "access 1 week"
        ExpiresByType application/javascript "access 1 week"
    </IfModule>
    ```

16. **Restart Apache**
    ```bash
    sudo systemctl restart apache2
    ```

### Step 8: Verify Installation

17. **Check File Permissions**
    ```bash
    ls -la /var/www/newhorizonsconstructions.com/
    ```
    Should show files with proper permissions

18. **Test Your Website**
    - Open browser and go to: `https://newhorizonsconstructions.com`
    - Should load without errors
    - Check all pages and links work

## Complete Setup Checklist

- [ ] VPS purchased from Namecheap
- [ ] SSH access verified
- [ ] Apache installed and running
- [ ] Website files uploaded
- [ ] Virtual host configured
- [ ] Domain DNS records updated
- [ ] SSL certificate installed
- [ ] Website accessible via HTTPS
- [ ] All images loading correctly
- [ ] Contact form tested
- [ ] Mobile responsive design verified

## Customization

### Update Company Information

**Edit index.html:**
```html
<!-- Line ~25: Update phone number -->
<a href="tel:5106307880">(510) 630-7880</a>

<!-- Line ~45: Update addresses -->
<p>1175 N Unruh Ave<br>La Puente, California 91744</p>
```

### Change Colors

**Edit css/styles.css (Line 1-9):**
```css
:root {
    --primary-color: #1a1a2e;      /* Dark blue */
    --accent-color: #e94560;        /* Red/Pink */
    --gold-color: #d4af37;          /* Gold */
    /* Modify these hex codes */
}
```

### Add More Projects to Portfolio

**Edit js/portfolio.js:**
```javascript
const portfolioData = [
    {
        id: 1,
        title: "Your Project Title",
        category: "commercial", // or industrial, residential, mixed
        image: "https://your-image-url.jpg",
        description: "Project description"
    },
    // Add more projects here
];
```

## Troubleshooting

### Website shows "403 Forbidden"
```bash
sudo chown -R www-data:www-data /var/www/newhorizonsconstructions.com
sudo chmod -R 755 /var/www/newhorizonsconstructions.com
sudo systemctl restart apache2
```

### Images not loading
- Check image paths in HTML
- Ensure images folder exists: `/var/www/newhorizonsconstructions.com/images/`
- Verify file permissions: `sudo chmod 644 /var/www/newhorizonsconstructions.com/images/*`

### DNS not resolving
- Wait 30 minutes for DNS propagation
- Clear browser cache (Ctrl+Shift+Delete)
- Check DNS records with: `nslookup newhorizonsconstructions.com`

### SSL certificate errors
```bash
# Renew certificate
sudo certbot renew --dry-run

# Force renewal
sudo certbot renew --force-renewal
```

## Maintenance

### Regular Updates
```bash
# Update system monthly
sudo apt update && sudo apt upgrade -y

# Check Apache status
sudo systemctl status apache2

# View error logs
sudo tail -f /var/log/apache2/error.log
```

### Monitor Website Performance
- Use Namecheap dashboard resource usage
- Check with [Google PageSpeed Insights](https://pagespeed.web.dev)
- Monitor uptime with [UptimeRobot](https://uptimerobot.com)

## Support & Resources

- **Namecheap Support**: [support.namecheap.com](https://support.namecheap.com)
- **Apache Documentation**: [httpd.apache.org](https://httpd.apache.org)
- **Let's Encrypt**: [letsencrypt.org](https://letsencrypt.org)
- **Font Awesome Icons**: [fontawesome.com](https://fontawesome.com)

## Browser Compatibility

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## License

This website is the property of New Horizons Constructions Co.

---

**Website Status**: Live ✅
**Last Updated**: 2024
**Version**: 1.0
# Complete Deployment Guide for Beginners

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Git Setup](#git-setup)
3. [Environment Configuration](#environment-configuration)
4. [Deployment Process](#deployment-process)
5. [Post-Deployment Tasks](#post-deployment-tasks)

## Initial Setup

### Prerequisites
- A computer with internet connection
- A web browser
- Basic understanding of using a text editor

### Creating Required Accounts
1. **GitHub Account**
   - Go to [GitHub.com](https://github.com)
   - Click "Sign up"
   - Follow the registration process
   - Verify your email address

2. **WordPress.com Account** (for content management)
   - Visit [WordPress.com](https://wordpress.com)
   - Click "Get Started"
   - Choose the free plan to start
   - Complete the registration

3. **Netlify Account** (for hosting)
   - Go to [Netlify.com](https://netlify.com)
   - Click "Sign up"
   - Choose "Sign up with GitHub"
   - Authorize Netlify

## Git Setup

### Installing Git (One-time Setup)

#### Windows:
1. Download Git from [git-scm.com](https://git-scm.com)
2. Run the installer
3. Accept all default settings
4. Open Command Prompt to verify:
   ```bash
   git --version
   ```

#### Mac:
1. Open Terminal
2. Install Homebrew if not installed:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Install Git:
   ```bash
   brew install git
   ```

### Setting Up Your Project with Git

1. **Configure Git** (one-time setup)
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

2. **Create a New Repository on GitHub**
   - Go to [GitHub.com](https://github.com)
   - Click the "+" icon in the top right
   - Select "New repository"
   - Name it "health-wellness-blog"
   - Keep it "Public"
   - Don't initialize with any files
   - Click "Create repository"

3. **Push Your Project to GitHub**
   Open Terminal/Command Prompt and run:
   ```bash
   # Navigate to your project folder
   cd path/to/your/project

   # Initialize Git
   git init

   # Add all files
   git add .

   # Create first commit
   git commit -m "Initial commit"

   # Add GitHub repository as remote
   git remote add origin https://github.com/YOUR-USERNAME/health-wellness-blog.git

   # Push to GitHub
   git push -u origin main
   ```

## Environment Configuration

1. **Create Environment File**
   - Copy `.env.example` to create `.env`:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` in a text editor and update:
     ```
     PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json
     PUBLIC_SITE_URL=https://your-site.com
     PUBLIC_SITE_TITLE="Health & Wellness Blog"
     PUBLIC_SITE_DESCRIPTION="Expert insights and practical guidance for better living"
     PUBLIC_DEFAULT_IMAGE="/images/default-og-image.jpg"
     ```

2. **Update robots.txt**
   - Open `robots.txt`
   - Replace domain with your actual domain:
     ```
     Sitemap: https://your-site.com/sitemap.xml
     ```

## Deployment Process

### Deploy to Netlify

1. **Login to Netlify**
   - Go to [Netlify.com](https://netlify.com)
   - Click "Log in"
   - Choose "Login with GitHub"

2. **Import Your Project**
   - Click "Add new site"
   - Select "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Show advanced"
   - Add environment variables from your `.env` file

4. **Deploy**
   - Click "Deploy site"
   - Wait for deployment to complete
   - Your site will be assigned a random URL (e.g., random-name.netlify.app)

### Custom Domain Setup (Optional)

1. **Buy a Domain**
   - Choose a domain registrar (e.g., GoDaddy, Namecheap)
   - Purchase your domain

2. **Add Domain to Netlify**
   - Go to your site settings in Netlify
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter your domain name
   - Follow DNS configuration instructions

## Post-Deployment Tasks

1. **Verify Your Site**
   - Check all pages load correctly
   - Test contact forms if any
   - Verify images and links work
   - Test on mobile devices

2. **Set Up Analytics**
   - Create Google Analytics account
   - Add tracking code to your site
   - Set up Google Search Console

3. **Regular Maintenance**
   - Keep WordPress updated
   - Monitor site performance
   - Backup content regularly
   - Update dependencies monthly

## Common Issues and Solutions

1. **Build Fails**
   - Check build logs in Netlify
   - Verify all dependencies are installed
   - Check environment variables

2. **Images Not Loading**
   - Verify image paths are correct
   - Check image formats are supported
   - Ensure images are in public folder

3. **WordPress Connection Issues**
   - Verify WordPress API URL
   - Check WordPress is accessible
   - Verify API endpoints work

## Getting Help

1. **Documentation**
   - [Astro Docs](https://docs.astro.build)
   - [Netlify Docs](https://docs.netlify.com)
   - [WordPress API Docs](https://developer.wordpress.org/rest-api)

2. **Community Support**
   - GitHub Issues
   - Netlify Community Forums
   - WordPress Support Forums

Remember to regularly commit and push your changes to GitHub:
```bash
git add .
git commit -m "Description of changes"
git push
```

This will automatically trigger a new deployment on Netlify.

# 📧 EmailJS Setup Guide for CE CO. LIMITED Website

## Complete Step-by-Step Setup to Send Emails to `rajatamang503@gmail.com`

---

## 🚀 **Step 1: Create EmailJS Account**

1. Go to **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up"** 
3. Create account with your email
4. Verify your email address
5. Login to your EmailJS dashboard

---

## 📧 **Step 2: Add Email Service**

1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended for `rajatamang503@gmail.com`)
4. Click **"Connect Account"**
5. Login with `rajatamang503@gmail.com` when prompted
6. **Copy the Service ID** (looks like: `service_abc123`)

**Important:** Make sure you use the Gmail account `rajatamang503@gmail.com` for this step!

---

## 📝 **Step 3: Create Email Templates**

### Template 1: Contact Form Messages

1. Go to **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. **Template Name:**   `

**Email Subject:**
```
New Contact Form Message from {{from_name}}
```

**Email Body:**
```
Hello,

You have received a new message from your CE CO. LIMITED website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Needed: {{service_needed}}

Message:
{{message}}

---
This message was sent from your CE CO. LIMITED website.
Reply directly to: {{reply_to}}
Time: {{current_time}}
```

4. **Save template** and copy the **Template ID** (looks like: `template_xyz789`)

### Template 2: Quote Requests

1. Create another template
2. **Template Name:** `Quote Request Template`

**Email Subject:**
```
New Quote Request from {{customer_email}}
```

**Email Body:**
```
Hello,

You have received a new quote request from your website:

Customer Email: {{customer_email}}
Service Type: {{service_type}}
Property Size: {{property_size}} sq ft
Cleaning Frequency: {{frequency}}
Number of Bedrooms: {{bedrooms}}
Estimated Price: ${{estimated_price}}

---
Contact the customer at {{reply_to}} to provide a detailed quote.
Generated from CE CO. LIMITED website
```

3. **Save template** and copy the **Template ID** (looks like: `template_quote456`)

---

## 🔑 **Step 4: Get Your Public Key**

1. Go to **"Account"** in EmailJS dashboard
2. Find **"Public Key"** section
3. **Copy the Public Key** (looks like: `abcd1234efgh5678`)

---

## ⚙️ **Step 5: Update Your Website Code**

### Edit `js/main.js` file:

**Replace line 4:**
```javascript
// Change this:
emailjs.init("YOUR_PUBLIC_KEY");

// To this (use your actual key):
emailjs.init("abcd1234efgh5678");
```

**Replace line 41:**
```javascript
// Change this:
return emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams);

// To this (use your actual IDs):
return emailjs.send('service_abc123', 'template_xyz789', templateParams);
```

**Replace line 70:**
```javascript
// Change this:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_QUOTE_TEMPLATE_ID', templateParams)

// To this (use your actual IDs):
emailjs.send('service_abc123', 'template_quote456', templateParams)
```

---

## 🧪 **Step 6: Test Your Setup**

1. **Open your website** in browser
2. **Fill out contact form** with test data:
   - Name: Test Customer
   - Email: test@example.com
   - Phone: (555) 123-4567
   - Service: Residential Cleaning
   - Message: This is a test message
3. **Click "Send Message"**
4. **Check inbox:** `rajatamang503@gmail.com`
5. **Test quote calculator** similarly

---

## 📋 **What You Need to Collect:**

✅ **Public Key:** `_________________`  
✅ **Service ID:** `_________________`  
✅ **Contact Template ID:** `_________________`  
✅ **Quote Template ID:** `_________________`  

---

## 🔧 **Code Changes Summary**

You need to replace **4 placeholder values** in `js/main.js`:

1. Line 4: `YOUR_PUBLIC_KEY` → Your actual public key
2. Line 41: `YOUR_SERVICE_ID` → Your actual service ID  
3. Line 41: `YOUR_TEMPLATE_ID` → Your contact template ID
4. Line 70: `YOUR_QUOTE_TEMPLATE_ID` → Your quote template ID

---

## 🎯 **Expected Results**

After setup, you'll receive emails like this:

**Contact Form Email:**
```
From: noreply@emailjs.com
To: rajatamang503@gmail.com
Subject: New Contact Form Message from John Doe

Hello,

You have received a new message from your CE CO. LIMITED website:

Name: John Doe
Email: john@example.com
Phone: (555) 123-4567
Service Needed: Residential Cleaning

Message: I need weekly cleaning for my house...

---
This message was sent from your CE CO. LIMITED website.
Reply directly to: john@example.com
```

---

## ❌ **Troubleshooting**

### "Failed to send message" error:
- ✅ Check all 4 IDs are correctly replaced
- ✅ Verify Gmail account is connected
- ✅ Check browser console for errors
- ✅ Ensure website is served from web server (not file://)

### Emails not received:
- ✅ Check spam folder in `rajatamang503@gmail.com`
- ✅ Verify template variable names match JavaScript
- ✅ Check EmailJS dashboard logs

### Template variables not working:
- ✅ Use exact variable names: `{{from_name}}`, `{{from_email}}`, etc.
- ✅ Variables are case-sensitive
- ✅ Use double curly braces

---

## 💰 **EmailJS Pricing**

- **Free tier:** 200 emails/month
- **Paid plans:** Start at $15/month for 1000 emails
- **Rate limit:** 1 email per 5 seconds

---

## 🆘 **Need Help?**

1. **EmailJS Documentation:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. **Check browser console** for error messages
3. **Test each step** before moving to the next
4. **EmailJS Support:** Available in their dashboard

---

## ✅ **Quick Checklist**

- [ ] EmailJS account created
- [ ] Gmail service connected with `rajatamang503@gmail.com`
- [ ] Contact form template created
- [ ] Quote request template created
- [ ] Public key copied
- [ ] Service ID copied
- [ ] Template IDs copied
- [ ] All 4 values updated in `js/main.js`
- [ ] Website tested
- [ ] Email received in `rajatamang503@gmail.com`

**Once complete, your website will automatically send all contact form submissions and quote requests directly to `rajatamang503@gmail.com`!** 🎉

# Calendly Setup Guide

Complete step-by-step guide to integrate Calendly with your website and Gmail account for booking discovery calls with potential customers.

---

## Step 1: Create Your Calendly Account

1. Go to https://calendly.com
2. Click **Sign Up** (top right corner)
3. Choose **Sign up with Google** and use your Gmail account
4. This will automatically connect your Google Calendar

---

## Step 2: Create Your Discovery Call Event

1. After signing in, you'll see "Create your first event"
2. Click **Create** or **+ New Event Type**
3. Choose **One-on-One** meeting type
4. Fill in these details:
   - **Event name**: "Discovery Call" or "Free Assessment"
   - **Duration**: 30 minutes
   - **Location**: Choose "Google Meet" (this auto-creates meeting links)

---

## Step 3: Configure Event Details

### Basic Information
1. In your event settings, configure:

   **What event is this?**
   - **Name**: "Free Assessment - Peak Season Preparation"
   - **Description**: "30-minute consultation to discuss your supply chain needs and provide a custom ROI projection"

### Availability Settings
   **When can people book this event?**
   - Set your availability (e.g., Mon-Fri, 9am-5pm)
   - **Date range**: Set how far in advance people can book
   - **Buffer time**: 15 minutes between meetings (recommended)
   - **Minimum scheduling notice**: 24 hours (recommended)

### Custom Questions
   **Invitee Questions** (click "Edit"):
   - Name (required) ✓ (default)
   - Email (required) ✓ (default)

   **Add these custom questions:**
   - **Question 1**: "Company Name"
     - Type: One-line text
     - Required: Yes

   - **Question 2**: "What's your current monthly revenue?"
     - Type: Multiple choice/Dropdown
     - Options:
       - Under $50K
       - $50K - $100K
       - $100K - $500K
       - $500K - $1M
       - Over $1M
     - Required: Yes

   - **Question 3**: "What's your biggest supply chain challenge?"
     - Type: Multi-line text
     - Required: Yes

---

## Step 4: Get Your Calendly Link

1. After saving your event, click on it from your Events page
2. You'll see your event link at the top:
   ```
   https://calendly.com/your-name/discovery-call
   ```
3. **Copy this entire URL** - you'll need it in the next step
4. You can also click "Copy Link" button to copy it

---

## Step 5: Update Your Website Code

You need to replace `YOUR_CALENDLY_URL_HERE` with your actual Calendly link in two files:

### File 1: components/hero.tsx (Line 78)

**Find this line:**
```tsx
url="YOUR_CALENDLY_URL_HERE"
```

**Replace with your link:**
```tsx
url="https://calendly.com/your-name/discovery-call"
```

### File 2: components/cta.tsx (Line 22)

**Find this line:**
```tsx
url="YOUR_CALENDLY_URL_HERE"
```

**Replace with your link:**
```tsx
url="https://calendly.com/your-name/discovery-call"
```

**Example:**
```tsx
<CalendlyButton
  url="https://calendly.com/johndoe/discovery-call"
  size="lg"
  className="group h-14 w-full rounded-full bg-primary px-8 text-base hover:bg-primary/90 sm:w-auto"
>
  Get Your Free Assessment
  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
</CalendlyButton>
```

---

## Step 6: Configure Email Notifications

1. In Calendly, click your **profile picture** → **Account** → **Notifications**

2. **Enable these notifications:**
   - ✓ Event scheduled
   - ✓ Event canceled
   - ✓ Event rescheduled

3. **Add email reminders:**
   - **24 hours before**: Email to you and invitee
   - **1 hour before**: Email to you and invitee

4. **Workflow Automation** (optional):
   - Set up follow-up emails
   - Send pre-meeting preparation materials

---

## Step 7: Customize Confirmation & Reminder Emails

### Confirmation Email
1. Go to your event → **Notifications & Cancellation Policy**
2. **Email Confirmation**: Customize the message invitees receive after booking

**Example message:**
```
Thanks for booking your free assessment!

I'm looking forward to discussing your supply chain optimization strategy
and providing a custom ROI projection for your peak season preparation.

Before our call, please:
- Review your current inventory management process
- Have your BFCM 2024 sales data ready (if available)
- Think about your biggest supply chain pain points

See you soon!
```

### Calendar Invitation
- This automatically syncs to your Gmail calendar
- The invitee also receives it in their calendar
- Google Meet link is auto-generated

---

## Step 8: Gmail Integration (Already Done!)

Since you signed up with Google, this is **automatic**:
- ✓ Bookings appear in your Gmail calendar
- ✓ Google Meet links are auto-created for each meeting
- ✓ You receive email notifications at your Gmail
- ✓ Invitees get calendar invites
- ✓ Automatic conflict detection with your Google Calendar

### What gets synced:
- Meeting date and time
- Invitee information
- Custom question responses
- Google Meet video link
- Meeting description

---

## Step 9: Test Your Integration

1. **Visit your website** (run `npm run dev` if testing locally)
2. Click **"Get Your Free Assessment"** or **"Schedule Free Assessment"** button
3. The Calendly popup should appear
4. **Book a test appointment** with your own email
5. **Check your Gmail calendar** - the event should appear there within seconds
6. **Check your email** - you should receive a confirmation
7. **Cancel the test appointment** from Calendly dashboard

---

## Step 10: Optional Advanced Features

### Add Multiple Calendars for Conflict Check
1. Go to **Account** → **Calendar Connection**
2. Click **Add Calendar Account**
3. Add additional calendars to check for conflicts (work calendar, personal calendar, etc.)

### Set Up Payment (if charging for consultations later)
1. Go to **Integrations** → **Payment**
2. Connect **Stripe** or **PayPal**
3. Set consultation fee in event settings

### Add Team Members
1. Upgrade to **Teams plan** (if needed)
2. Add team members via **Account** → **Team**
3. Set up round-robin scheduling or collective scheduling

### Integrate with CRM
1. Go to **Integrations**
2. Connect with:
   - HubSpot
   - Salesforce
   - Zoho
   - Pipedrive

### Add Timezone Detection
- Calendly automatically detects invitee timezone
- Verify in **Event Settings** → **Timezone display**

---

## Quick Setup Checklist

Use this checklist to ensure everything is configured:

- [ ] Created Calendly account with Gmail
- [ ] Created "Discovery Call" event (30 minutes)
- [ ] Set availability hours (e.g., Mon-Fri 9am-5pm)
- [ ] Added custom questions (Company, Revenue, Challenge)
- [ ] Set buffer time (15 minutes between meetings)
- [ ] Chose Google Meet as location
- [ ] Copied Calendly event link
- [ ] Updated `hero.tsx` with Calendly link
- [ ] Updated `cta.tsx` with Calendly link
- [ ] Configured email notifications (scheduled, canceled, rescheduled)
- [ ] Set up email reminders (24 hours + 1 hour before)
- [ ] Customized confirmation email message
- [ ] Tested booking flow with test appointment
- [ ] Verified event appears in Gmail calendar
- [ ] Canceled test appointment

---

## Troubleshooting

### Calendly popup not appearing
- Check that the Calendly script is loading (check browser console)
- Verify your Calendly URL is correct
- Make sure you're using the full URL including `https://`

### Calendar not syncing
- Reconnect Google Calendar in Calendly settings
- Check calendar permissions in your Google account
- Verify the correct calendar is selected in Calendly

### Emails not sending
- Check spam/junk folder
- Verify email notifications are enabled in Calendly
- Check your Gmail account is verified

### Timezone issues
- Set your timezone in Calendly account settings
- Calendly will automatically show times in invitee's timezone

---

## Support Resources

- **Calendly Help Center**: https://help.calendly.com
- **Calendly Community**: https://community.calendly.com
- **Google Calendar Integration Guide**: https://help.calendly.com/hc/en-us/articles/223147027

---

## Next Steps After Setup

1. **Share your Calendly link** on:
   - Email signature
   - LinkedIn profile
   - Social media bio

2. **Monitor your bookings** via Calendly dashboard

3. **Review analytics** to see:
   - Booking conversion rate
   - Most popular time slots
   - Cancellation rate

4. **Optimize based on data**:
   - Adjust available times
   - Refine custom questions
   - Update confirmation messages

---

**Need help?** If you need assistance updating the code with your Calendly link, just share your Calendly URL and I can update the files for you automatically!

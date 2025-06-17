# 📘 User API Documentation

**Base URL:** `/api/user`

---

## 🔐 Authentication

### POST `/signup`
Registers a new user.

**Body**:
```json
{
  "firstName": "John",
  "email": "john@example.com",
  "password": "secure123"
}
```

**Validation**:
- `firstName` is required
- `email` must be a valid email
- `password` is required

---

### POST `/signin`
Logs in an existing user.

**Body**:
```json
{
  "email": "john@example.com",
  "password": "secure123"
}
```

---

### GET `/getUserDetails`
Fetch logged-in user's details.

**Headers**:
```
Authorization: Bearer <token>
```

---

## 💳 Orders & Subscriptions

### POST `/create-order`
Creates a subscription order.

**Headers**: Auth token required

---

### POST `/verify-order`
Verifies a subscription order.

**Headers**: Auth token required

---

### POST `/sendVerificationEmail`
Sends email verification to the user.

**Headers**: Auth token required

---

## ✅ OTP & Captcha

### POST `/verifyOtp`
Verifies the OTP code.

**Headers**: Auth token required

---

### POST `/verify-captcha`
Verifies CAPTCHA challenge.

---

## 🧠 Misc Data Fetch

### GET `/industry`
Gets list of industries.

**Headers**: Auth token required

---

## 🧾 Forms

### POST `/recruitform`
Submits recruiter form data.

---

### POST `/arenaform`
Submits arena form data.

---

## 🧍‍♂️ Subscribers & Referrals

### POST `/addSubscriber`
Adds a newsletter subscriber.

---

### POST `/add-referral`
Adds a referral for the current user.

**Headers**: Auth token required

---

## 🔐 Social Logins

### POST `/verify-google-token`
Verifies Google token for login.

---

### POST `/unlinkgoogle`
Unlinks Google from account.

---

### POST `/verify-twitter-token`
Verifies Twitter token for login.

---

### POST `/unlinktwitter`
Unlinks Twitter from account.

---

## 🔁 Password & Token

### POST `/sendresetlink`
Sends password reset link to user's email.

---

### POST `/updatedpassword`
Updates password using reset token.

---

### POST `/updated-token`
Fetches a new JWT using refresh token.

---

## 🧑‍💻 User Profile Management

### GET `/basicinfo`
Fetches basic profile info of user.

**Headers**: Auth token required

---

### POST `/update-basicinfo`
Updates user basic info (name, DOB, etc.).

**Headers**: Auth token required

---

### POST `/update-accountinfo`
Updates account-level details (email, phone, etc.).

**Headers**: Auth token required

---

### PATCH `/update`
Generic update endpoint for user data.

**Headers**: Auth token required

---

### POST `/update-dashboard-settings`
Updates user dashboard preferences/settings.

**Headers**: Auth token required

---

## 🔒 Auth Headers

All protected endpoints require:
```
Authorization: Bearer <your_token_here>
```

---

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



---

## 💳 Orders & Subscriptions

### POST `/create-order`
Creates a subscription order.



---

### POST `/verify-order`
Verifies a subscription order.



---

### POST `/sendVerificationEmail`
Sends email verification to the user.



---

## ✅ OTP & Captcha

### POST `/verifyOtp`
Verifies the OTP code.



---

### POST `/verify-captcha`
Verifies CAPTCHA challenge.

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



---

## 🔐 Social Logins

### POST `/verify-google-token`
Verifies Google token for login.

---

### POST `/linkgoogle`
links Google from account.

---

### POST `/verify-twitter-token`
Verifies Twitter token for login.

---

### POST `/unlinktwitter`
links Twitter from account.

---

## 🔁 Password & Token

### POST `/sendresetlink`
Sends password reset link to user's email.

---

### POST `/updatedpassword`
Updates password using reset token.

---


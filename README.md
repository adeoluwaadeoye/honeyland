# 🏡 Honeyland CDA Website

A modern web platform built for the Honeyland Community Development Association to streamline communication, improve transparency, and centralize resident engagement.

---

## 🚀 Overview

This project is a full-stack community management website designed to improve how residents interact with the CDA executives through structured digital communication channels.

It supports authentication, messaging, and official contact workflows.

---

## 🧱 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MongoDB (Authentication & User Management)
- Framer Motion
- Lucide React

---

## ✨ Features

### 🔐 Authentication System
- User registration and login
- Secure password handling
- MongoDB-backed user storage
- Protected routes for authenticated users

### 📬 Contact System
- Email form submission to CDA executives
- WhatsApp quick enquiry integration
- Pre-structured message templates

### 🏘️ Community Platform
- Centralized communication hub
- Official CDA contact details
- Social media integration

### 🗺️ Location Access
- Embedded Google Maps for CDA office location

### 📱 Responsive UI
- Mobile-first design
- Clean and accessible layout

---

## 🧠 Design Philosophy

Built for clarity, speed, and real-world usability.  
Focus is on reducing communication friction between residents and CDA leadership.

---

## 🗄️ Database

- MongoDB used for:
  - User authentication (register/login)
  - Secure credential storage
  - User session management

---

## 📁 Project Structure

```txt
src/
 ├── app/
 │    ├── auth/
 │    ├── contact/
 │    └── page.tsx
 ├── components/
 ├── lib/
 ├── models/
 ├── data/
 └── api/
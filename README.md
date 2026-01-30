# ITPM Assignment 1 – Automated Functional & UI Testing
### BSc (Hons) in Information Technology – Year 3  
### Registration Number: **IT23358270**  
### Course: IT3040 – IT Project Management (Semester 1)

---

## 📌 Project Overview

This project contains the **full Playwright test automation suite** developed for **Assignment 1**, which evaluates:

### ✔ Functional conversion accuracy  
Testing how well the system converts **Singlish → Sinhala** in real time  
Website under test: **https://www.swifttranslator.com/**

### ✔ UI stability & behavior  
Testing how the interface responds to:
- real‑time transliteration updates  
- different input lengths  
- mixed English + Singlish text  
- punctuation, dates, currency, numbers  
- negative / invalid input patterns  

### ✔ Robustness checking  
Evaluating how the system handles:
- slang and informal expressions  
- grammar variations  
- long text (≥300 chars)  
- missing spaces / text formatting issues  
- multi-line inputs  

### ✔ Required Test Coverage (Completed)
- **24 Positive functional test cases**  
- **10 Negative functional test cases**  
- **01 UI test case**  
🔹 **Total: 35 fully automated Playwright tests**

All execution results are recorded in the Excel file as required by the assignment.

---

## 🛠️ Prerequisites

Install the following before running the project:

### ✔ Node.js version 18 or above  
Download: https://nodejs.org/

### ✔ Git (for cloning repo)  
Download: https://git-scm.com/

---

## 🚀 Installation & Setup

Follow the steps below to set up and run the Playwright project.

### 1️⃣ Install project dependencies

```bash
npm install
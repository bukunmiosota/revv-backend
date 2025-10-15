# 🧰 Revv Auto Technology — Backend

**Fastify + Prisma (PostgreSQL) backend** powering [Revv Auto Technology](https://revvauto.care) — a unified ecosystem that helps auto shops manage jobs, billing, payments, and communications in one platform.

---

## 🚀 Features

- ⚡ **Fastify + TypeScript** for speed and type safety  
- 🧩 **Prisma ORM + PostgreSQL** for scalable data persistence  
- 🔐 **JWT Authentication** (multi-tenant setup per shop)  
- 🧾 **Invoices, Estimates, Payments (Paystack / Stripe)**  
- 💬 **Notifications via SMS (Termii/Twilio) + Email (SendGrid)**  
- 🧱 **Feature flags + seat enforcement per pricing plan**  
- 🌍 **Multi-tenant shops with tax automation per country**  
- ☁️ **Ready for Render deployment (with render.yaml)**

---

## 🏗️ Project Structure

revv-backend/
├── src/
│ ├── modules/ # Core features (auth, shops, users, jobs)
│ ├── db/ # Prisma client
│ ├── config/ # Default configs (plans, tax rates)
│ └── index.ts # App entry point
├── prisma/
│ ├── schema.prisma # Database schema
│ └── seed.ts # Default tax & plan seeds
├── package.json
├── tsconfig.json
├── render.yaml
├── .env.example
├── .gitignore
└── README.md

yaml
Copy code

---

## ⚙️ Local Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/bukunmiosota/revv-backend.git
cd revv-backend
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Set up your environment
Copy .env.example → .env and fill in:

bash
Copy code
DATABASE_URL=postgresql://user:password@localhost:5432/revv
JWT_SECRET=revvsecret
4️⃣ Initialize the database
bash
Copy code
npx prisma migrate dev --name init
npx prisma db seed
5️⃣ Run the server
bash
Copy code
npm run dev
Your backend will start on:
👉 http://localhost:8080

To verify health:

bash
Copy code
GET /health
Response:

json
Copy code
{ "status": "ok" }
☁️ Deployment (Render)
Go to Render.com.

Click New → Web Service → Connect GitHub → revv-backend.

Build command:

bash
Copy code
npm install && npx prisma migrate deploy && npm run build
Start command:

bash
Copy code
node dist/server.js
Add environment variables:

ini
Copy code
DATABASE_URL=postgresql://<render-db-url>
JWT_SECRET=revvsecret
Once deployed, test your live API:

nginx
Copy code
GET https://revv-backend.onrender.com/health
🧪 API Documentation
A full OpenAPI 3.1 spec is included at:

Copy code
openapi.yaml
You can:

Import it into Postman, or

View it in Swagger UI (e.g. https://editor.swagger.io)
to explore and test endpoints like /auth/login, /shops, /jobs, /invoices, etc.

🧾 Scripts Reference
Command	Purpose
npm run dev	Start development server
npm run build	Compile TypeScript
npm start	Run production build
npx prisma migrate dev	Run local DB migrations
npx prisma db seed	Seed default data (tax + plans)

🧰 Tech Stack
Layer	Technology
Runtime	Node.js 20
Framework	Fastify
ORM	Prisma
Database	PostgreSQL
Language	TypeScript
Deployment	Render
Messaging	Termii / Twilio / SendGrid

👥 Contributors
Role	Name
Founder & Product Lead	Bukunmi Osota
Engineering	Revv Backend Team

🛡️ License
This project is licensed under the MIT License.
See the LICENSE file for details.

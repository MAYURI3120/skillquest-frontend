**SkillQuest** – Your Aptitude Prep Buddy for Placements
*SkillQuest* is a focused web app that helps students and job seekers master aptitude skills needed to crack placement rounds. Practice quizzes, analyze performance, and boost your confidence—all in one place.

**Features**
- Quant, Logical, Verbal Reasoning practice
- Timed quizzes to simulate real exams
- Performance tracking dashboard
- User login to save progress
- Admin panel to manage questions

**Tech Stack**
- Frontend: Next.js, React, Tailwind CSS  
- Backend: Node.js, Express.js, PostgreSQL, Prisma ORM  
- Auth: JWT-based authentication

**Setup**
1. Clone the repository
```bash
git clone https://github.com/your-username/skillquest.git
cd skillquest
2. Backend setup
bash
cd backend
npm install
cp .env.example .env  # Add your DB URL and JWT secret
npx prisma migrate dev
npm run dev
3. Frontend setup
bash
cd ../frontend
npm install
npm run dev

#Contributing
🚫 Direct commits to the main branch are not allowed.

If you'd like to contribute:
Fork the repository
Create a feature branch
Open a pull request for review

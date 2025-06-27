# Portfolio Vijay – Full-Stack Developer Personal Site

Welcome to **Portfolio Vijay**, a full-stack developer portfolio built using **Django (Backend)** and **React (Frontend)**. This website is designed to showcase my technical skills, project work, and provide an interactive way for recruiters or collaborators to get in touch with me.

---

## Preview

Watch the [Live Demo Video](./Screen%20Recording%202025-06-27%20001901.mp4) *(upload it to GitHub or YouTube and link here)*

---

## Screenshots

### Homepage
![Homepage](./Screenshot%202025-06-27%20000919.png)

### Projects Section
![Projects](./Screenshot%202025-06-27%20001004.png)

### Contact Form
![Contact](./Screenshot%202025-06-27%20001024.png)

---

## Key Features

- Homepage with animated intro and CTA
- Skills section showcasing tech stack visually
- Projects listing with images, descriptions, and GitHub links
- Resume download option
- Contact form with backend API integration
- Admin panel to manage content using Django admin
- Fully responsive and optimized for mobile
- Sleek, minimal, and modern design

---

## Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- Bootstrap / Tailwind CSS (optional)

**Backend:**
- Django
- Django REST Framework
- CKEditor (Admin content editing)
- SQLite (default), PostgreSQL (optional)

---

## Getting Started

### Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

### Frontend (React)

```bash
cd frontend
npm install
npm start
```

---

## Folder Structure

```
portfolio_vijay/
├── backend/                # Django backend
│   ├── manage.py
│   ├── myportfolio/        # Project settings
│   ├── portfolio/          # App with models, views, serializers
│   └── db.sqlite3
│
├── frontend/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
├── static/                 # Static files (if configured)
├── README.md
└── Screen Recording 2025-06-27 001901.mp4
```

---

## Deployment

**Frontend**: Can be deployed to [Vercel](https://vercel.com), Netlify, or GitHub Pages

**Backend**: Deployable on [Render](https://render.com), Railway, or Heroku

Be sure to configure `CORS`, `.env`, and deployment settings as needed.

---

## About Me

I’m **Bijoy Laxmi Biswas**, a full-stack Python developer with a passion for clean code, functional design, and building apps that solve real-world problems.

📫 Reach me at: `blb8.dev@gmail.com`  
[LinkedIn](https://www.linkedin.com/in/bijoy-laxmi-biswas-cse07)  
[Hashnode Blog](https://bijoytrektech.hashnode.dev)

🤝 I’m open to collaboration and contributions. If you’re working on something exciting, feel free to contact me!

---

## License

MIT License. Feel free to use and modify with credit.

---

## Pro Tip

Want to build something similar? Fork this repo and make it your own!
I’m open to collaboration and contributions. If you’re working on something exciting, feel free to contact me!


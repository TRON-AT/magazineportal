# Magazine Portal

A Next.js application for managing and displaying magazine PDFs with admin functionality.

## Features

- **Public PDF Viewer**: Browse and download PDFs with inline preview
- **Admin Dashboard**: Upload, edit, delete PDFs with a beautiful UI
- **Firebase Storage**: Large file uploads (no size limits)
- **MongoDB**: PDF metadata storage
- **JWT Authentication**: Secure admin access
- **Responsive Design**: Works on all devices

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- MongoDB (Mongoose)
- Firebase Storage
- JWT Authentication

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-friend's-repo-url>
   cd magazineportal-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local`
   - Fill in your actual values (see Environment Variables section)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Visit the app**
   - Public PDFs: `http://localhost:3000/pdfs`
   - Admin Login: `http://localhost:3000/admin/login`

## Environment Variables

Create a `.env.local` file with these variables:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Firebase (for PDF uploads)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

# Base URL (for production)
NEXT_PUBLIC_BASE_URL=https://your-vercel-domain.vercel.app
```

## Setup Instructions

### 1. MongoDB Setup
- Create a MongoDB Atlas account or use local MongoDB
- Create a database for the project
- Update `MONGODB_URI` and `DB_NAME` in `.env.local`

### 2. Firebase Setup
- Create a Firebase project
- Enable Firebase Storage
- Set Storage rules to allow uploads (for development: `allow read, write: if true;`)
- Get your Firebase config and update the environment variables

### 3. Create Admin User
You need to create an admin user in MongoDB. You can do this by:

**Option A: Using MongoDB Compass/Atlas UI**
- Go to your `admins` collection
- Add a document:
```json
{
  "username": "admin",
  "passwordHash": "hashed_password_here"
}
```

**Option B: Create a temporary seed script**
- Create `app/api/seed-admin/route.ts` (temporary)
- Call the endpoint once to create admin user
- Delete the route after use

### 4. Generate Password Hash
To create a password hash, use this in Node.js:
```javascript
const bcrypt = require('bcryptjs');
bcrypt.hash('your_password', 10).then(console.log);
```

## API Routes

- `GET /api/pdfs` - List all PDFs (public)
- `POST /api/pdfs` - Create PDF metadata (admin only)
- `PUT /api/pdfs/[id]` - Update PDF (admin only)
- `DELETE /api/pdfs/[id]` - Delete PDF (admin only)
- `POST /api/admin/login` - Admin login

## Usage

### Public Access
- Visit `/pdfs` to see all uploaded PDFs
- Click "पढ़ें" to preview PDFs inline
- Click "Download" to download PDFs

### Admin Access
- Visit `/admin/login` to access admin dashboard
- Login with your admin credentials
- Upload new PDFs with title and description
- Edit existing PDFs
- Delete PDFs
- View PDFs in new tab

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set all environment variables in Vercel dashboard
3. Deploy automatically

### Other Platforms
- Set environment variables in your hosting platform
- Build command: `npm run build`
- Output directory: `.next`

## Project Structure

```
├── app/
│   ├── api/           # API routes
│   ├── admin/         # Admin pages
│   ├── pdfs/          # Public PDF page
│   └── ...
├── components/        # React components
├── lib/              # Utilities and models
└── ...
```

## Features in Detail

### Admin Dashboard
- Beautiful, responsive design
- Upload PDFs with progress bar
- Edit PDF metadata
- Delete PDFs with confirmation
- Real-time notifications
- Secure JWT authentication

### Public PDF Viewer
- Grid layout with PDF cards
- Inline PDF preview modal
- Download functionality
- Responsive design
- Search-ready (can be extended)

### File Upload
- Direct to Firebase Storage
- No server-side file size limits
- Progress tracking
- Automatic cleanup

## Troubleshooting

### Common Issues
1. **MongoDB Connection**: Check your connection string and network access
2. **Firebase Upload**: Verify Firebase Storage rules and config
3. **Admin Login**: Ensure admin user exists in database
4. **Environment Variables**: Make sure all variables are set correctly

### Getting Help
- Check the console for error messages
- Verify all environment variables are set
- Ensure Firebase Storage rules allow uploads
- Check MongoDB connection and admin user

## Contributing

Feel free to extend this project with:
- Search functionality
- Pagination
- User registration
- PDF cover images
- Analytics
- Email notifications

---

**Happy coding! 🚀**
# 📰 پروژه خبری با Next.js

یک وب‌سایت خبری مدرن و کامل که با استفاده از Next.js 15، React 19، TypeScript و SQLite ساخته شده است.

## 🚀 ویژگی‌ها

### ✨ قابلیت‌های اصلی

- **نمایش اخبار**: لیست کامل اخبار با تصاویر و توضیحات
- **صفحه جزئیات خبر**: نمایش کامل هر خبر با تصویر بزرگ
- **آرشیو اخبار**: فیلتر کردن اخبار بر اساس سال و ماه
- **اخبار جدید**: نمایش ۳ خبر آخر در صفحه اصلی
- **Modal تصاویر**: نمایش تصاویر در حالت تمام صفحه
- **Loading States**: نمایش وضعیت بارگذاری برای تجربه کاربری بهتر
- **Error Handling**: مدیریت خطاها و صفحه ۴۰۴

### 🎨 رابط کاربری

- **طراحی مدرن**: استفاده از CSS مدرن و responsive
- **Navigation**: منوی ناوبری با لینک‌های مختلف
- **Modal Backdrop**: پس‌زمینه تیره برای modal ها
- **Responsive Design**: سازگار با تمام دستگاه‌ها

### 🏗️ معماری پروژه

- **App Router**: استفاده از Next.js App Router
- **Parallel Routes**: مسیرهای موازی برای modal ها
- **Intercepting Routes**: مسیرهای قطع کننده برای modal تصاویر
- **Server Components**: کامپوننت‌های سرور برای عملکرد بهتر

## 🛠️ تکنولوژی‌های استفاده شده

### Frontend

- **Next.js 15.4.4**: فریم‌ورک React برای SSR و SSG
- **React 19.1.0**: کتابخانه UI
- **TypeScript 5**: تایپ‌اسکریپت برای type safety
- **CSS Modules**: استایل‌دهی مدولار

### Backend

- **SQLite**: پایگاه داده سبک و سریع
- **better-sqlite3**: درایور SQLite برای Node.js
- **CORS**: مدیریت درخواست‌های cross-origin

### Development Tools

- **ESLint**: لینتر کد
- **TypeScript**: کامپایلر تایپ‌اسکریپت
- **ts-node**: اجرای TypeScript در Node.js

## 📁 ساختار پروژه

```
2-news-project/
├── app/                    # Next.js App Router
│   ├── (content)/         # گروه مسیرهای محتوا
│   │   ├── archive/       # صفحه آرشیو اخبار
│   │   └── news/          # صفحات اخبار
│   ├── (marketing)/       # گروه مسیرهای بازاریابی
│   └── api/               # API routes
├── backend/               # سرور Express.js
├── components/            # کامپوننت‌های React
├── lib/                   # توابع کمکی
├── types/                 # تعاریف TypeScript
├── public/                # فایل‌های استاتیک
└── assets/                # تصاویر و لوگو
```

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها

- Node.js (نسخه 18 یا بالاتر)
- npm یا pnpm

### مراحل نصب

1. **کلون کردن پروژه**

```bash
git clone <repository-url>
cd 2-news-project
```

2. **نصب وابستگی‌های Frontend**

```bash
npm install
# یا
pnpm install
```

3. **نصب وابستگی‌های Backend**

```bash
cd backend
npm install
cd ..
```

4. **راه‌اندازی پایگاه داده**

```bash
cd backend
npm start
```

5. **راه‌اندازی Frontend**

```bash
npm run dev
```

6. **دسترسی به پروژه**

- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

## 📊 API Endpoints

### Backend API

- `GET /news` - دریافت تمام اخبار
- `GET /news/:slug` - دریافت خبر خاص بر اساس slug

### Frontend Routes

- `/` - صفحه اصلی
- `/news` - لیست تمام اخبار
- `/news/[slug]` - صفحه جزئیات خبر
- `/archive` - آرشیو اخبار
- `/archive/[year]` - اخبار سال خاص
- `/archive/[year]/[month]` - اخبار ماه خاص

## 🎯 ویژگی‌های پیشرفته

### Parallel Routes

پروژه از Parallel Routes برای نمایش modal ها استفاده می‌کند:

- `@modal` برای نمایش modal تصاویر
- `@latest` برای نمایش اخبار جدید

### Intercepting Routes

استفاده از Intercepting Routes برای نمایش تصاویر در modal بدون تغییر URL.

### Server Components

تمام کامپوننت‌های اصلی به صورت Server Components پیاده‌سازی شده‌اند برای عملکرد بهتر.

### Database Operations

- استفاده از prepared statements برای امنیت
- مدیریت async operations
- فیلتر کردن بر اساس تاریخ

## 🔧 اسکریپت‌های موجود

```json
{
  "dev": "next dev",        # راه‌اندازی محیط توسعه
  "build": "next build",    # ساخت پروژه برای production
  "start": "next start",    # راه‌اندازی سرور production
  "lint": "next lint"       # بررسی کد با ESLint
}
```

## 📝 نوع داده‌ها

```typescript
interface NewsItem {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}
```

## 🎨 کامپوننت‌های اصلی

- **NewsList**: نمایش لیست اخبار
- **MainHeader**: هدر اصلی با navigation
- **ModalBackdrop**: پس‌زمینه modal ها
- **NavLink**: لینک‌های ناوبری

## 🔒 امنیت

- استفاده از prepared statements برای جلوگیری از SQL injection
- CORS configuration برای API
- Type safety با TypeScript

## 🚀 Deployment

### Vercel (توصیه شده)

```bash
npm run build
vercel --prod
```


برای مشارکت در پروژه:

1. Fork کنید
2. Branch جدید بسازید (`git checkout -b feature/amazing-feature`)
3. تغییرات را commit کنید (`git commit -m 'Add amazing feature'`)
4. Push کنید (`git push origin feature/amazing-feature`)
5. Pull Request باز کنید


---

⭐ اگر این پروژه برایتان مفید بود، لطفاً آن را star کنید!

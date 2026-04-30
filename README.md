# Portfolio — Lê Tùng Lâm (LamGenesis)

Trang Portfolio cá nhân theo phong cách **Minimalist Dark**, one-page scrolling.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router) + React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: lucide-react
- **Animation**: Custom hook `useInView` dựa trên Intersection Observer + CSS transitions
- **Hosting**: GitHub Pages (static export)

## Cấu trúc thư mục

```
.
├── app/
│   ├── layout.tsx          # Root layout, font Inter, metadata
│   ├── page.tsx            # Trang one-page ráp các section
│   └── globals.css         # Design tokens, .reveal, helper classes
├── components/
│   ├── Navbar.tsx          # Sticky + blur + active highlight
│   ├── Hero.tsx            # Staggered text reveal khi load
│   ├── About.tsx
│   ├── Skills.tsx          # Chia 3 nhóm, KHÔNG progress bar
│   ├── Projects.tsx        # Case study: Problem / Solution / Impact
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Reveal.tsx          # Wrapper cho hiệu ứng scroll-fade-up
├── hooks/
│   ├── useInView.ts        # IntersectionObserver custom hook
│   └── useActiveSection.ts # Theo dõi section đang xem cho Navbar
├── data/
│   ├── personal.ts         # Thông tin cá nhân
│   ├── skills.ts           # 3 nhóm kỹ năng
│   ├── projects.ts         # Case studies
│   └── nav.ts              # Menu items
├── public/
│   └── .nojekyll           # Bắt buộc cho Next.js trên GitHub Pages
├── .github/workflows/
│   └── deploy.yml          # CI/CD auto deploy
├── next.config.mjs         # output: 'export', basePath dynamic
└── tailwind.config.ts
```

> Mọi nội dung Skills / Projects / Personal info đều nằm trong `data/` —
> chỉ cần sửa file đó để cập nhật, không cần đụng vào component.

## Chạy local

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build static export -> ./out
```

## Deploy lên GitHub Pages

Repo đã có sẵn workflow `.github/workflows/deploy.yml`. Sau khi push lên
`main`, GitHub Actions sẽ tự build và publish.

Xem hướng dẫn chi tiết bên dưới (mục **Hướng dẫn deploy**).

## Design system

- Background: `slate-900`
- Surface: `slate-800/50` + `backdrop-blur`
- Accent: `sky-500` / `sky-400`
- Border radius: `rounded-xl` & `rounded-2xl`
- Không dùng border cứng — dùng `ring-1 ring-inset ring-slate-700/60`

## Animation triết lý

- Hero: staggered fade-up khi load
- Sections: fade + slide-up 20px khi scroll vào viewport
- Project Card: hover scale 1.02 + glow nhẹ + đổi viền sang accent
- Có `prefers-reduced-motion` để tắt animation cho user nhạy cảm chuyển động

---

© Lê Tùng Lâm — 2026

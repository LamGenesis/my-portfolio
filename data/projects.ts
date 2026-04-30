export type Project = {
  id: string;
  name: string;
  role: string;
  period: string;
  summary: string;
  problem: string;
  solution: string[];
  impact: string[];
  techStack: {
    backend?: string[];
    frontend?: string[];
    devops?: string[];
  };
  links: {
    github?: string;
    demo?: string;
  };
  /**
   * Ảnh demo sản phẩm — đặt file vào `public/projects/` rồi điền đường dẫn ở đây.
   * Khuyến nghị: tỉ lệ 16:9, ~1600x900px, định dạng .webp / .png.
   * Bỏ trống sẽ hiển thị placeholder gradient kèm tên project.
   */
  image?: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    id: "bookstation",
    name: "BookStation",
    role: "Fullstack Developer",
    period: "11/2025 — 12/2025",
    summary:
      "E-commerce hoàn chỉnh cho hiệu sách online — storefront SEO-friendly + admin dashboard, tích hợp thanh toán VNPay.",
    problem:
      "Cần một hệ thống bán sách trực tuyến vừa SEO tốt cho người mua, vừa có khu vực quản trị mạnh để admin xử lý sản phẩm, đơn hàng và thanh toán an toàn.",
    solution: [
      "Thiết kế và xây dựng RESTful API từ đầu với ASP.NET Core 8.0, PostgreSQL và Entity Framework Core.",
      "Xác thực bằng JWT (Access / Refresh tokens) kết hợp validation chặt chẽ với FluentValidation.",
      "Frontend dùng Next.js 16 (App Router) + Tailwind, tối ưu SEO và tách rõ public storefront vs admin dashboard.",
      "Quản lý state phía client gọn nhẹ bằng Zustand, fetch & cache dữ liệu với TanStack Query.",
      "Tích hợp cổng thanh toán VNPay cho luồng thanh toán online tự động và an toàn.",
      "Đóng gói cả frontend lẫn backend bằng Docker Compose để team setup môi trường trong một lệnh.",
    ],
    impact: [
      "Hoàn thiện full-flow từ đăng ký, duyệt sách, thêm giỏ, thanh toán đến quản trị — sẵn sàng demo.",
      "Cấu trúc code tách layer rõ ràng (Controller / Service / Repository) giúp dễ test và mở rộng.",
      "Thời gian setup môi trường cho thành viên mới rút xuống còn 1 lệnh `docker compose up`.",
    ],
    techStack: {
      backend: [
        "ASP.NET Core 8.0",
        "PostgreSQL",
        "Entity Framework Core",
        "FluentValidation",
        "JWT",
        "VNPay API",
      ],
      frontend: [
        "Next.js 16",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "TanStack Query",
      ],
      devops: ["Docker", "Docker Compose", "Swagger/OpenAPI", "Git"],
    },
    links: {
      github: "https://github.com/LamGenesis/BookStation",
    },
    image: {
      src: "/projects/bookstation.png",
      alt: "BookStation storefront screenshot",
    },
  },
  {
    id: "planbookai",
    name: "PlanBookAI",
    role: "Backend Developer",
    period: "07/2025 — 09/2025",
    summary:
      "Nền tảng AI giúp giáo viên soạn giáo án và chấm bài tự động — kiến trúc microservices, nhiều service chạy độc lập.",
    problem:
      "Giáo viên mất quá nhiều thời gian cho công việc lặp lại như soạn giáo án và chấm bài. Hệ thống cần đủ linh hoạt để mở rộng từng module độc lập trong tương lai.",
    solution: [
      "Tham gia viết System Architecture Document (SAD) và vẽ Sequence Diagram để mô tả luồng giao tiếp giữa các service.",
      "Xây dựng AuthService độc lập: xác thực JWT, hash mật khẩu bằng BCrypt và phân quyền theo role.",
      "Phát triển PlanService với ASP.NET Core (.NET 9) + PostgreSQL để lưu trữ giáo án, template và phiên bản.",
      "Phối hợp với team Frontend để tích hợp API, đảm bảo contract rõ ràng qua Swagger/OpenAPI.",
    ],
    impact: [
      "Hệ thống tách thành các service độc lập, có thể scale và deploy riêng từng phần.",
      "Tài liệu thiết kế (SAD + Sequence Diagram) giúp thành viên mới onboard nhanh hơn.",
      "AuthService tái sử dụng được cho các sản phẩm nội bộ khác trong cùng team.",
    ],
    techStack: {
      backend: [
        "ASP.NET Core (.NET 9)",
        "PostgreSQL",
        "JWT",
        "BCrypt",
        "Microservices",
      ],
      frontend: ["React", "TypeScript"],
      devops: ["Docker", "GitHub", "Cursor", "Gemini AI"],
    },
    links: {
      github: "https://github.com/PlanBookAI/PlanBookAI",
    },
    image: {
     src: "/projects/planbookai.png",
     alt: "PlanBookAI dashboard screenshot",
    },
  },
];

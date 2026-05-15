# 🚀 Portfolio Website - Nguyễn Hồ Phương Tây

Một portfolio website hiện đại và đẹp mắt được xây dựng bằng HTML, CSS, và JavaScript thuần. Website có responsive design, dark/light mode, và nhiều hiệu ứng animation độc đáo.

## ✨ Tính năng

- 🎨 **Design hiện đại**: Giao diện đẹp mắt với gradient màu sắc và card effects
- 🌓 **Dark/Light Mode**: Chuyển đổi theme dễ dàng
- 📱 **Responsive**: Hoạt động mượt mà trên mọi thiết bị
- ⚡ **Animations**: Hiệu ứng mượt mà khi scroll và tương tác
- 🎯 **Particle Background**: Hiệu ứng particles động
- 🖱️ **Custom Cursor**: Con trỏ chuột tùy chỉnh
- 🔗 **Smooth Navigation**: Điều hướng mượt mà giữa các sections

## 📁 Cấu trúc Files

```
pofolio/
├── cv.tex                  # CV LaTeX gốc
├── README.md               # File hướng dẫn này
└── src/
    ├── index.html          # File HTML chính
    ├── style/
    │   └── style.css       # Toàn bộ styling
    └── script/
        └── script.js       # Tính năng tương tác (theme, animation, particles, ...)
```

## 🚀 Cách sử dụng

### Chạy local

1. Mở file `src/index.html` trực tiếp trong trình duyệt (double-click)
2. Hoặc dùng Live Server trong VS Code / Cursor:
   - Click phải vào `src/index.html`
   - Chọn **Open with Live Server**

> **Lưu ý:** Trong `index.html`, các đường dẫn CSS/JS cần trỏ đúng thư mục con:
> - `style/style.css` (không phải `styles.css` ở cùng cấp)
> - `script/script.js` (không phải `script.js` ở cùng cấp)

### Deploy lên GitHub Pages

1. Tạo repository mới trên GitHub và push toàn bộ project
2. Vào **Settings → Pages**
3. Chọn branch **main** và folder **`/src`** (vì `index.html` nằm trong `src/`)
4. Website sẽ có tại `https://<username>.github.io/<repository-name>/`

### Deploy lên Netlify / Vercel

**Netlify:**

1. Kéo thả thư mục `src/` vào https://app.netlify.com/drop  
   *(hoặc import repo và đặt **Publish directory** = `src`)*

**Vercel:**

1. Import project từ GitHub
2. Đặt **Root Directory** = `src` (hoặc upload nội dung thư mục `src/`)
3. Deploy

## 🎨 Tùy chỉnh

### Thay đổi màu sắc

Mở `src/style/style.css` và chỉnh các biến CSS ở đầu file:

```css
:root {
    --primary: #6366f1;      /* Màu chủ đạo */
    --secondary: #8b5cf6;    /* Màu phụ */
    --accent: #ec4899;       /* Màu nhấn */
    /* ... */
}
```

### Cập nhật nội dung

Mở `src/index.html` và chỉnh sửa:

- Tên, email, số điện thoại trong **Hero Section**
- Thông tin học vấn trong **About Section**
- Skills trong **Skills Section**
- Projects trong **Projects Section**
- Kinh nghiệm trong **Experience Section**

### Thêm / bớt hiệu ứng

Trong `src/script/script.js`:

- Tắt particle effect: comment phần `PARTICLE BACKGROUND`
- Tắt custom cursor: comment phần `CURSOR EFFECT`
- Thay đổi typing speed: sửa giá trị trong function `typeWriter()`

## 📋 Sections

1. **Home** — Hero section với giới thiệu
2. **About** — Thông tin cá nhân và học vấn
3. **Skills** — Kỹ năng và công nghệ
4. **Projects** — Các dự án đã thực hiện
5. **Experience** — Kinh nghiệm làm việc
6. **Contact** — Thông tin liên hệ

## 🔗 Links quan trọng cần cập nhật

Trong `src/index.html`, tìm và thay các giá trị sau:

| Nội dung | Giá trị mẫu hiện tại |
|----------|---------------------|
| GitHub | `https://github.com/huybang2017` |
| Email | `ndhbang2017@gmail.com` |
| Phone | `0899383561` |
| Project links | Các link `#` trong **Projects Section** |

## 🎯 Tips

- Thêm ảnh cá nhân: thay `.hero-image` bằng thẻ `<img>` trong `src/index.html`
- SEO: thêm meta tags vào `<head>` của `src/index.html`
- Analytics: thêm Google Analytics vào `src/index.html`
- Favicon: đặt `favicon.ico` trong `src/` và link trong `<head>`
- CV PDF: biên dịch `cv.tex` (LaTeX) để có bản CV tải về

## 📱 Browser Support

- Chrome (khuyến nghị)
- Firefox
- Safari
- Edge
- Opera

## 📄 License

MIT License — Bạn có thể tự do sử dụng và tùy chỉnh theo ý muốn.

## 💡 Lưu ý

- Code được tổ chức tách file HTML / CSS / JS trong `src/`
- Animations được tối ưu để mượt, không ảnh hưởng nhiều đến hiệu suất
- `src/script/script.js` có comment theo từng nhóm tính năng để dễ tùy chỉnh
- Responsive trên mobile, tablet và desktop

## 🤝 Hỗ trợ

Nếu có câu hỏi, liên hệ qua email hoặc tạo issue trên GitHub.

---

**Chúc bạn thành công với portfolio mới! 🎉**

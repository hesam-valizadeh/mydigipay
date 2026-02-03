# Home Component - E2E and Accessibility Tests

این پوشه شامل تست‌های E2E و Accessibility برای کامپوننت Home است.

## ساختار فایل‌ها

```
cypress/e2e/home/
├── home.e2e.cy.ts      # تست‌های E2E
├── home.a11y.cy.ts     # تست‌های Accessibility
└── README.md           # این فایل
```

## تست‌های E2E

فایل `home.e2e.cy.ts` شامل تست‌های زیر است:

### 1. Page Load and Initialization
- بررسی بارگذاری صحیح صفحه
- بررسی نمایش کامپوننت‌های اصلی
- بررسی Meta Tags

### 2. Hero Section
- بررسی نمایش Hero Carousel
- بررسی Accessibility Hero Carousel

### 3. Service Cards Section
- بررسی نمایش Service Cards
- بررسی Accessibility Service Cards

### 4. Product Sections
- بررسی نمایش Product Sections
- بررسی ساختار Product Sections
- بررسی Accessibility Product Sections

### 5. Banner Section
- بررسی نمایش Square Banner
- بررسی نمایش Download App Section

### 6. Responsive Design
- بررسی Responsive در Mobile
- بررسی Responsive در Tablet
- بررسی Responsive در Desktop

### 7. Performance
- بررسی زمان بارگذاری
- بررسی بارگذاری تصاویر

### 8. Navigation
- بررسی Navigation بین صفحات

## تست‌های Accessibility

فایل `home.a11y.cy.ts` شامل تست‌های زیر است:

### 1. WCAG 2.1 Compliance
- بررسی عدم وجود Violation های Accessibility
- بررسی Accessibility در بخش‌های مختلف
- بررسی با قوانین خاص WCAG

### 2. Keyboard Navigation
- بررسی Navigation با کیبورد
- بررسی Focus Indicators
- بررسی Keyboard Navigation در Product Sections

### 3. ARIA Attributes
- بررسی ARIA Labels
- بررسی ARIA Roles
- بررسی Heading Hierarchy

### 4. Images and Media
- بررسی Alt Text برای تصاویر
- بررسی Descriptive Alt Text

### 5. Color Contrast
- بررسی Color Contrast برای متن
- بررسی Color Contrast برای عناصر تعاملی

### 6. Screen Reader Compatibility
- بررسی Semantic HTML
- بررسی Skip Links

### 7. Form Accessibility
- بررسی Form Labels

### 8. Dynamic Content Accessibility
- بررسی ARIA Live Regions

## نحوه اجرا

### اجرای تمام تست‌های E2E
```bash
npm run cy:run:e2e
```

### اجرای تست‌های E2E با UI
```bash
npm run cy:open
# سپس E2E Testing را انتخاب کنید
```

### اجرای تست‌های Accessibility
```bash
npm run cy:run:e2e -- --spec "cypress/e2e/home/home.a11y.cy.ts"
```

### اجرای تست‌های Coverage
```bash
npm run cy:run:coverage
```

## Best Practices

1. **Naming Conventions**: استفاده از نام‌های توصیفی و واضح
2. **Page Object Pattern**: استفاده از Selectors به صورت Centralized
3. **Arrange-Act-Assert**: ساختار تست‌ها بر اساس AAA Pattern
4. **Data Attributes**: استفاده از `data-cy` برای Selectors
5. **Accessibility First**: اولویت با Accessibility در تمام تست‌ها

## Coverage

برای مشاهده Coverage Report:
```bash
npm run test:coverage
```

Report در پوشه `coverage/` ایجاد می‌شود.

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { ChangeDetectionStrategy } from '@angular/core';

interface IComponentMetadataDef {
  changeDetection?: ChangeDetectionStrategy;
  onPush?: boolean;
}

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have default title', () => {
    expect(component.title).toBe('About Component');
  });
  it('should use OnPush change detection strategy', () => {
    const cmp = AboutComponent as unknown as { ɵcmp: IComponentMetadataDef };
    const metadata = cmp.ɵcmp;
    expect(metadata.onPush ?? metadata.changeDetection).toBe(
      metadata.onPush !== undefined ? true : ChangeDetectionStrategy.OnPush,
    );
  });
  it('should render title in template', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('دیجی‌پی، پِی روزهای بهتر');
  });
});
/**
 * 
 * 🧩 توضیح خط به خط فایل تست
 * 
 * 
1) ایمپورت‌ها
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { ChangeDetectionStrategy } from '@angular/core';

توضیح:
TestBed: 
ابزار اصلی انگولار  برای ساخت محیط تست. مثل یک "ماژول تستی" است.
===============================================
ComponentFixture:
 یک آبجکت که به ما اجازه می‌دهد کامپوننت را بسازیم، رندر کنیم و به دام دسترسی داشته باشیم.
===============================================
AboutComponent: 
همان کامپوننتی که داریم تستش می‌کنیم.
===============================================
ChangeDetectionStrategy:
 برای بررسی اینکه کامپوننت از چه استراتژی 
 Change Detection 
 استفاده می‌کند.
===============================================


2) تعریف یک Interface برای متادیتای داخلی Angular

interface IComponentMetadataDef {
  changeDetection?: ChangeDetectionStrategy;
  onPush?: boolean;
}

توضیح:
انگولار در زمان کامپایل، اطلاعات کامپوننت را داخل یک آبجکت خصوصی به نام 
ɵcmp
 ذخیره می‌کند.


این اطلاعات تایپ مشخصی ندارند و تایپ اسکریپت آن را 
unknown
 می‌بیند.

برای اینکه بتوانیم بدون خطای TypeScript به این اطلاعات دسترسی داشته باشیم، یک interface تعریف می‌کنیم.

این interface فقط چیزهایی را که لازم داریم مشخص می‌کند:

changeDetection

onPush

3) شروع بلاک تست
describe('AboutComponent', () => {
توضیح:
describe یک گروه تست می‌سازد.

اینجا داریم می‌گوییم: «تست‌های مربوط به AboutComponent».

4) تعریف متغیرهای تست
توضیح:
component: نمونه واقعی کامپوننت.

fixture: ابزاری برای کنترل lifecycle کامپوننت، detectChanges و دسترسی به DOM.

5) beforeEach — آماده‌سازی قبل از هر تست

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });
توضیح مرحله‌به‌مرحله:
TestBed.configureTestingModule
یک ماژول تستی می‌سازد.

چون AboutComponent standalone است، آن را در imports قرار می‌دهیم.

compileComponents()
Angular کامپوننت را کامپایل می‌کند (HTML + TS + CSS).

createComponent
یک نمونه واقعی از کامپوننت می‌سازد.

componentInstance
به خودِ کامپوننت دسترسی پیدا می‌کنیم.

6) تست اول — آیا کامپوننت ساخته می‌شود؟

  it('should create', () => {
    expect(component).toBeTruthy();
  });
توضیح:
ساده‌ترین تست ممکن.

بررسی می‌کند که کامپوننت بدون خطا ساخته شده باشد.

7) تست دوم — بررسی OnPush بودن Change Detection

 it('should use OnPush change detection strategy', () => {
    const cmp = AboutComponent as unknown as { ɵcmp: IComponentMetadataDef };
    const metadata = cmp.ɵcmp;
    expect(metadata.onPush ?? metadata.changeDetection).toBe(
      metadata.onPush !== undefined ? true : ChangeDetectionStrategy.OnPush,
    );
  });

  توضیح کامل:
🔹 مرحله 1 — تبدیل AboutComponent به یک آبجکت با property به نام ɵcmp

const cmp = AboutComponent as unknown as { ɵcmp: IComponentMetadataDef };
Angular اطلاعات داخلی کامپوننت را در ɵcmp ذخیره می‌کند.

TypeScript نمی‌داند این property وجود دارد → خطا می‌دهد.

با این cast به TypeScript می‌گوییم:
«باور کن که این آبجکت یک property به نام ɵcmp دارد.»


🔹 مرحله 2 — گرفتن metadata
const metadata = cmp.ɵcmp;


حالا metadata شامل اطلاعات داخلی کامپوننت است.

مثل: changeDetection: ChangeDetectionStrategy.OnPush



🔹 مرحله 3 — بررسی OnPush بودن
expect(metadata.onPush ?? metadata.changeDetection).toBe(
  metadata.onPush !== undefined ? true : ChangeDetectionStrategy.OnPush,
);
چرا این‌قدر پیچیده؟
چون Angular در نسخه‌های مختلف ممکن است:

یا onPush: true داشته باشد

یا changeDetection: ChangeDetectionStrategy.OnPush

پس تست باید هر دو حالت را پشتیبانی کند.

معنی عبارت:
metadata.onPush ?? metadata.changeDetection

اگر onPush وجود داشت → همان را استفاده کن

اگر نبود → برو سراغ changeDetection

مقدار مورد انتظار:

اگر onPush وجود داشت → باید true باشد

اگر وجود نداشت → باید ChangeDetectionStrategy.OnPush باشد
 */

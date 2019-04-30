import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
  hover;
  constructor() { }


  pageTitle = 'Cards';
  sections = [
    {
      expandCode: false,
      title: 'Course Card',
      demoCode: `
      <div class="masonry-grid">

      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
                Topic : Global positioning system and its application
              </div>
              <div class="sb-card-meta-item">
                Subtopic : Limits of artificial intelligence
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress success">
            <div class="bar" style="width: 100%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>

      <!-- 2nd card -->
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
                Topic : Global positioning
              </div>
              <div class="sb-card-meta-item">
                Subtopic : artificial intelligence
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structures
          </h4>
          <div class="sb-card-org ellipsis">
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress">
            <div class="bar" style="width: 30%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>
      
      <!-- 3rd card -->
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
            </div>
          </div>
          <h4 class="sb-card-title">
            Global positioning system and its application & Limits of artificial ...
          </h4>
          <div class="sb-card-org ellipsis">
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>

      <!-- 4th card -->
      <div class="sb-card" tabindex="0" dir="rtl" lang="ur">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
              موضوع: گلوبل پوزیشننگ سسٹم اور اس کی درخواست
              </div>
              <div class="sb-card-meta-item">
              ذیلی موضوع: مصنوعی انٹیلی جنس کی حد
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
          گلوبل پوزیشننگ سسٹم اور اس کی درخواست اور مصنوعی حدود 
          </h4>
          <div class="sb-card-org ellipsis">
          یورپی قانون اکیڈمی (ایرا اے)
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress">
            <div class="bar" style="width: 30%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>
      </div>
      `,
      copyCode: `

      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
                Topic : Global positioning system and its application
              </div>
              <div class="sb-card-meta-item">
                Subtopic : Limits of artificial intelligence
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress success">
            <div class="bar" style="width: 100%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>

      <!-- 2nd card -->
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
                Topic : Global positioning
              </div>
              <div class="sb-card-meta-item">
                Subtopic : artificial intelligence
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structures
          </h4>
          <div class="sb-card-org ellipsis">
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress">
            <div class="bar" style="width: 30%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>

      <!-- 3rd card -->
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
            </div>
          </div>
          <h4 class="sb-card-title">
            Global positioning system and its application & Limits of artificial ...
          </h4>
          <div class="sb-card-org ellipsis">
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>

      <!-- 4th card -->
      <div class="sb-card" tabindex="0" dir="rtl" lang="ur">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta course">
              <div class="sb-card-meta-item mb-15">
              موضوع: گلوبل پوزیشننگ سسٹم اور اس کی درخواست
              </div>
              <div class="sb-card-meta-item">
              ذیلی موضوع: مصنوعی انٹیلی جنس کی حد
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
          گلوبل پوزیشننگ سسٹم اور اس کی درخواست اور مصنوعی حدود 
          </h4>
          <div class="sb-card-org ellipsis">
          یورپی قانون اکیڈمی (ایرا اے)
          </div>
        </div>
        <div class="sb-card-progressbar">
          <sui-progress class="ui progress">
            <div class="bar" style="width: 30%;">
              <div class="progress">100%</div>
            </div>
            <div class="label"></div>
          </sui-progress>
        </div>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Resource Card',
      demoCode: `
      <div class="masonry-grid">
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Worksheet</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
                Subject : English
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Class : Class 1,Class 2,Class 3,Class 4,Class 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Medium : Other
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Book</div>
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      <div class="sb-card" tabindex="0" dir="rtl" lang="ur">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">ورکشاپ</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
              مضمون: انگریزی
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              درمیانہ: دیگر
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
          ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ
          </h4>
          <div class="sb-card-org ellipsis">
          یورپی قانون اکیڈمی (ایرا اے)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      </div>
      `,
      copyCode: `
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Worksheet</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
                Subject : English
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Class : Class 1,Class 2,Class 3,Class 4,Class 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Medium : Other
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      <div class="sb-card" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Book</div>
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      <div class="sb-card" tabindex="0" dir="rtl" lang="ur">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">ورکشاپ</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
              مضمون: انگریزی
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              کلاس: کلاس 1، کلاس 2، کلاس 3، کلاس 4، کلاس 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
              درمیانہ: دیگر
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
          ڈیٹا ڈھانچہ اور الگورتھم - اہداف 1 کتابچہ
          </h4>
          <div class="sb-card-org ellipsis">
          یورپی قانون اکیڈمی (ایرا اے)
          </div>
        </div>
        <div class="sb-card-progressbar">
        </div>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'QR Card',
      demoCode: `
      <div class="sb-card sb-card-qr" tabindex="0">
      <div class="sb-card-body">
        <div class="sb-card-metas">
          <div class="sb-card-image mr-16">
            <img src="assets/images/book.png">
          </div>
          <div class="sb-card-meta non-course">
            <div class="d-flex mb-auto">
              <div class="sb-card-label">Worksheet</div>
              <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
            </div>
            <div class="sb-card-meta-item ellipsis">
              Subject : English
            </div>
            <div class="sb-card-meta-item ellipsis mt-4">
              Class : Class 1,Class 2,Class 3,Class 4,Class 5
            </div>
            <div class="sb-card-meta-item ellipsis mt-4">
              Medium : Other
            </div>
          </div>
        </div>
        <h4 class="sb-card-title">
          Data Structure and Algorithm - Assignment 1 Paperback
        </h4>
        <div class="sb-card-org ellipsis">
          Academy of European Law (ERA)
        </div>
      </div>
      <div class="btn-div">
      <button class="sb-btn sb-btn-normal sb-btn-secondary">
        <i class="caret right icon"></i> Play Content
      </button>
    </div>
    </div>
      `,
      copyCode: `
      <div class="sb-card sb-card-qr" tabindex="0">
        <div class="sb-card-body">
          <div class="sb-card-metas">
            <div class="sb-card-image mr-16">
              <img src="assets/images/book.png">
            </div>
            <div class="sb-card-meta non-course">
              <div class="d-flex mb-auto">
                <div class="sb-card-label">Worksheet</div>
                <img src="assets/images/badge1.png" class="sb-card-badge ml-auto">
              </div>
              <div class="sb-card-meta-item ellipsis">
                Subject : English
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Class : Class 1,Class 2,Class 3,Class 4,Class 5
              </div>
              <div class="sb-card-meta-item ellipsis mt-4">
                Medium : Other
              </div>
            </div>
          </div>
          <h4 class="sb-card-title">
            Data Structure and Algorithm - Assignment 1 Paperback
          </h4>
          <div class="sb-card-org ellipsis">
            Academy of European Law (ERA)
          </div>
        </div>
        <div class="btn-div">
        <button class="sb-btn sb-btn-normal sb-btn-secondary">
          <i class="caret right icon"></i> Play Content
        </button>
      </div>
      </div>
      `
    },
    {
      expandCode: false,
      title: 'Offline Card with hover',
      demoCode: `
      <div class="sb-card relative" tabindex="0">
<div class="sb-card-body">
  <div class="sb-card-metas">
    <div class="sb-card-image mr-16">
      <img src="assets/images/book.png">
    </div>
    <div class="sb-card-meta course">
      <div class="sb-card-meta-item mb-15">
        Topic : Global positioning system and its application
      </div>
      <div class="sb-card-meta-item">
        Subtopic : Limits of artificial intelligence
      </div>
    </div>
  </div>
  <h4 class="sb-card-title">
    Data Structure and Algorithm - Assignment 1 Paperback
  </h4>
  <div class="sb-card-org ellipsis">
    Academy of European Law (ERA)
  </div>
</div>
<div class="sb-card-progressbar">
  <sui-progress class="ui progress success">
    <div class="bar" style="width: 100%;">
      <div class="progress">100%</div>
    </div>
    <div class="label"></div>
  </sui-progress>
</div>
<div class="sb-card-hover" *ngIf="hover">
   <div class="sb-card-hover-content">
     <div>
     <div class="d-flex flex-jc-center">
     <button class="sb-btn sb-btn-outline-white sb-btn-normal">Open</button>
     </div>
     <button class="sb-btn sb-btn-outline-white sb-btn-normal sb-right-icon-btn mt-16">Export<i class="sign in alternate icon"></i></button>
     </div>
   </div>
</div> 
</div>
      `,
      copyCode: `
      <div class="sb-card relative" tabindex="0">
<div class="sb-card-body">
  <div class="sb-card-metas">
    <div class="sb-card-image mr-16">
      <img src="assets/images/book.png">
    </div>
    <div class="sb-card-meta course">
      <div class="sb-card-meta-item mb-15">
        Topic : Global positioning system and its application
      </div>
      <div class="sb-card-meta-item">
        Subtopic : Limits of artificial intelligence
      </div>
    </div>
  </div>
  <h4 class="sb-card-title">
    Data Structure and Algorithm - Assignment 1 Paperback
  </h4>
  <div class="sb-card-org ellipsis">
    Academy of European Law (ERA)
  </div>
</div>
<div class="sb-card-progressbar">
  <sui-progress class="ui progress success">
    <div class="bar" style="width: 100%;">
      <div class="progress">100%</div>
    </div>
    <div class="label"></div>
  </sui-progress>
</div>
<div class="sb-card-hover" *ngIf="hover">
   <div class="sb-card-hover-content">
     <div>
     <div class="d-flex flex-jc-center">
     <button class="sb-btn sb-btn-outline-white sb-btn-normal">Open</button>
     </div>
     <button class="sb-btn sb-btn-outline-white sb-btn-normal sb-right-icon-btn mt-16">Export<i class="sign in alternate icon"></i></button>
     </div>
   </div>
</div> 
</div>
      `
    }
  ];

  ngOnInit() {
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover = false;
  }

}






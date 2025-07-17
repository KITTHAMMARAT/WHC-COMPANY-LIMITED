// script.js

document.addEventListener('DOMContentLoaded', () => {
  // --- Scroll to Top ---
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- Fade-in effect for sections ---
  const fadeEls = document.querySelectorAll('.fade-in');
  window.addEventListener('scroll', () => {
    fadeEls.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  });

  // --- Lightbox functionality ---
  document.querySelectorAll('.lightbox-img').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      const enlargedImg = document.createElement('img');
      enlargedImg.src = img.src;
      overlay.appendChild(enlargedImg);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
    });
  });

  // --- Slideshow logic ---
  const slides = document.querySelectorAll('.slide');
  let slideIndex = 0;
  let slideInterval = null;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.style.display = 'none';
      slide.classList.remove('active');
    });
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    slides[index].style.display = 'block';
    slides[index].classList.add('active');
    slideIndex = index;
  }

  function startSlideShow() {
    slideInterval = setInterval(() => {
      showSlide(slideIndex + 1);
    }, 3000);
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  // เริ่มสไลด์อัตโนมัติ
  if (slides.length > 0) {
    showSlide(slideIndex);
    startSlideShow();
  }

  // สร้างปุ่มควบคุมสไลด์
  const slideshowContainer = document.querySelector('.slideshow');
  const controlsDiv = document.createElement('div');
  controlsDiv.className = 'slide-controls';

  const prevBtn = document.createElement('button');
  prevBtn.innerText = 'ก่อนหน้า';
  const nextBtn = document.createElement('button');
  nextBtn.innerText = 'ถัดไป';

  controlsDiv.appendChild(prevBtn);
  controlsDiv.appendChild(nextBtn);
  slideshowContainer.appendChild(controlsDiv);

  prevBtn.addEventListener('click', () => {
    showSlide(slideIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    showSlide(slideIndex + 1);
  });
});

// script.js

// ปุ่ม Scroll to Top
const scrollBtn = document.getElementById('scrollTopBtn');

// เมื่อเลื่อนหน้าจอลงมาจะให้แสดงปุ่ม
window.onscroll = () => {
    if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};

// เมื่อคลิกปุ่มจะเลื่อนกลับด้านบน
scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// เมื่อคลิกปุ่ม จะแสดงข้อความแจ้งเตือน
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnClick');
  
  btn.addEventListener('click', () => {
    alert('บริการของเรามีความเป็นมืออาชีพและครบวงจร!');
  });
});

// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // ป้องกันไม่ให้ส่งแบบฟอร์มจริง

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // ตัวอย่างการตรวจสอบข้อมูลเพิ่มเติม
        if (name && email && message) {
            // โค้ดส่งข้อมูลไปยังเซิร์ฟเวอร์ หรือแสดงข้อความ
            messageDiv.textContent = 'ขอบคุณที่ติดต่อเรา! เราจะติดต่อกลับเร็วๆ นี้.';
            messageDiv.style.color = 'green';

            // รีเซ็ตฟอร์ม
            form.reset();
        } else {
            messageDiv.textContent = 'กรุณากรอกข้อมูลให้ครบถ้วน';
            messageDiv.style.color = 'red';
        }
    });
});

const carousel = document.querySelector('#carouselExample');
const items = carousel.querySelectorAll('.carousel-item');

carousel.addEventListener('slide.bs.carousel', function (event) {
  // ลบ class เก่า
  items.forEach(item => {
    item.classList.remove('next', 'prev');
  });

  // เพิ่ม class สำหรับ slide ออกและเข้า
  if (event.direction === 'left') {
    event.relatedTarget.classList.add('next'); // สไลด์ออกด้านซ้าย
  } else {
    event.relatedTarget.classList.add('prev'); // สไลด์ออกด้านขวา
  }
});

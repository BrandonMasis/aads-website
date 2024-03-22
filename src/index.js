import './style.scss';

// DOM elements
const showAnswerBtns = document.querySelectorAll('.show-answer');
const faqItems = document.querySelectorAll('.faq-item');
const nav = document.querySelector('nav');
const heroContainer = document.querySelector('#hero');
const benefitsDisplay = document.querySelector('.benefits-display');
const benefitOption = document.querySelectorAll('.benefit-option');
const searchMemberInput = document.querySelector('#search-members-input');
const searchMemberResults = document.querySelector('.search-member-results');
const totalMembers = document.querySelector('.total-members h2');

// benefits
const academyBenefitsList1 = `

<li><span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>Respaldo
  de las certificaciones (talleres, seminarios
  y cursos) con sello de calidad Ademm,
  presenciales y en línea</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Cartas de certificación académica para
  instituciones públicas o privadas
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Difusión de cursos y productos o servicios
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Carnet y certificado con código de
  verificación
</li>
<li><span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>Verificación
  de estudios a nivel internacional (exclusivo
  para socios)</li>
`;
const academyBenefitsList2 = `

<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Capacitaciones gratuitas (exclusivas para
  socios)
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Consultorías y asesoramiento
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Bolsa de empleo
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Descuento en maestrías internacionales y
  curso de formadores en belleza, para
  planificación y evaluación
</li>
`;

const studentBenefitsList1 = `

<li><span class="benefit-check"><i
      class="fa-solid fa-check"></i></span> Carta para trámite con instituciones de
                ayuda social para becas o ayudas económicas</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Precio preferencial en casas comerciales
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Plataforma de consultas
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Carta de idoneidad gratuita para trámite de
  patente para apertura del salón de belleza
  (según lo dicta la reforma del reglamento N°
  42942-S, del decreto ejecutivo 18329.)
</li>
`;

const salonBenefitsList1 = ` 
<li><span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>Carta
  de idoneidad gratuita para trámite de
  patente para apertura del salón de belleza
  (según lo dicta la reforma del reglamento N°
  42942-S, del decreto ejecutivo 18329.)</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Carnet y certificado con código de
  verificación
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Carta para salas comerciales
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Capacitaciones gratuitas (exclusivas para
  socios)
</li>

`;

const salonBenefitsList2 = `
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Consultorías y asesoramiento
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Bolsa de empleo
</li>
<li>
  <span class="benefit-check"><i
      class="fa-solid fa-check"></i></span>
  Descuento en maestrías internacionales y
  curso de formadores en belleza, para
  planificación y evaluación
</li>

`;

// setTimeout(function () {
//   document.body.className = '';
// }, 500);

// body preload

const benefitOptions = document.querySelectorAll('.benefit-option');

benefitOption.forEach((option) => {
  option.addEventListener('click', () => {
    benefitOption.forEach((option) => {
      option.classList.remove('actual-tab');
    });
    option.classList.add('actual-tab');

    switch (option.getAttribute('data-option')) {
      case 'academy-benefits':
        benefitsDisplay.innerHTML = `<div class="row">

        <img src="./images/academy-benefits1.webp" alt="">

        <div class="benefits">
        <ul>
        ${academyBenefitsList1}
        </ul>
        </div>
      </div>
      <div class="row">
        <div class="benefits">
        <ul>
        ${academyBenefitsList2}
        </ul>
        </div>
        <img src="./images/academy-benefits2.webp" alt="">
      </div>`;
        break;

      case 'student-benefits':
        benefitsDisplay.innerHTML = `<div class="row">

        <img src="./images/student-benefits1.webp" alt="">

        <div class="benefits">
        <ul>
        ${studentBenefitsList1}
        </ul>
        </div>
      </div>`;
        break;
      case 'salon-benefits':
        benefitsDisplay.innerHTML = `<div class="row">

          <img src="./images/salon-benefits1.webp" alt="">

          <div class="benefits">
          <ul>
          ${salonBenefitsList1}
          </ul>
          </div>
        </div>
        <div class="row">
          

          <div class="benefits">
          <ul>
          ${salonBenefitsList2}
          </ul>
          </div>
          <img src="./images/salon-benefits2.webp" alt="">
        </div>`;
        break;
    }
  });
});

// mobile benefits

const _benefitOptions = document.querySelectorAll(`._benefit-option`);

_benefitOptions.forEach((option) => {
  option.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'touchable') {
      let bodyOffsetHeight =
        option.querySelector('.option-benefits').offsetHeight;
      let chevron = option.querySelector(`i`);

      if (option.offsetHeight == 140) {
        option.setAttribute('style', `height:${bodyOffsetHeight + 140}px`);
        chevron.style.transform = 'rotate(180deg)';
      } else {
        option.setAttribute('style', `height: 140px`);
        chevron.style.transform = 'rotate(0deg)';
      }
    }
  });
});

// Function to highlight selected option
function highlightSelectedOption(option) {
  console.log('Highlighting selected option');
  benefitOption.forEach((opt) => opt.classList.remove('actual-tab'));
  option.classList.add('actual-tab');
}

// Event listener for mobile benefit options
const mobileBenefitOptions = document.querySelectorAll(`._benefit-option`);
mobileBenefitOptions.forEach((option) => {
  option.addEventListener('click', (e) => {
    console.log('Mobile benefit option clicked');
    if (e.target.classList.contains('touchable')) {
      toggleMobileOption(option);
    }
  });
});

// Function to toggle mobile option visibility
function toggleMobileOption(option) {
  console.log('Toggling mobile option visibility');
  const bodyOffsetHeight =
    option.querySelector('.option-benefits').offsetHeight;
  const chevron = option.querySelector(`i`);
  const isOpen = option.offsetHeight === 140;
  option.style.height = isOpen ? `${bodyOffsetHeight + 140}px` : '140px';
  chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Function to get master tag
function getMasterTag(member) {
  return member.licence && member.licence.toLowerCase() === 'master'
    ? '<h4 class="master-tag">Master</h4>'
    : '';
}

// Function to get category tag
function getCategoryTag(member) {
  return member.licence && member.category.toLowerCase() === 'salon'
    ? 'Sala de belleza | '
    : '';
}

function updateMembers() {
  console.log('Updating members');
  fetch(`./json/${__HASHED_FILENAME__}`)
    .then((response) => response.json())
    .then((memberData) => {
      console.log('Member data fetched successfully:', memberData);
      searchMemberInput.addEventListener('input', () => {
        const inputValue = searchMemberInput.value.trim();
        if (!inputValue) {
          // If the input is empty, hide the search results
          hideSearchResults();
          return;
        }

        const regex = new RegExp(`${inputValue}`, 'gi');
        let results = memberData.filter((member) => {
          const codeString = member.code.toString();
          return member.name.match(regex) || codeString.match(regex);
        });
        displaySearchResults(results, regex);
      });
    })
    .catch((error) => console.error('Error fetching member data:', error));
}

function hideSearchResults() {
  // Hide the search results by setting the innerHTML of the results container to an empty string
  searchMemberResults.innerHTML = '';
}

// Function to display search results
function displaySearchResults(results, regex) {
  console.log('Displaying search results');
  let resultHtml = '';
  results.forEach((result) => {
    resultHtml += `
            <div class="result">
                <div class="left">
                    <h2>${result.name.replaceAll(
                      regex,
                      `<span class="highlighted-match">$&</span>`
                    )}</h2>
                    <p class="result-tag">${getCategoryTag(result)}${
      result.country
    }</p>
                </div>
                <div class="right">
                    ${getMasterTag(result)}
                    <p class="result-tag">${result.code
                      .toString()
                      .replaceAll(
                        regex,
                        `<span class="highlighted-match">$&</span>`
                      )}</p>
                </div>
            </div>`;
  });
  searchMemberResults.innerHTML =
    resultHtml ||
    `<div class="result"><h2>No hay resultados para "<span class="highlighted-match">${searchMemberInput.value}</span>"</h2></div>`;
  searchMemberInput.parentElement.classList.toggle('open', !!results.length);
}

// Initialize member update function
updateMembers();

// Event listener for FAQ toggles
showAnswerBtns.forEach((btn) => {
  btn.parentElement.addEventListener('click', () => {
    console.log('FAQ toggle clicked');
    const item = btn.parentElement;
    const answerWrapper = item.querySelector('.faq-answer-wrapper');
    const isOpen = answerWrapper.classList.contains('open');
    const answerContent = item.querySelector('.faq-answer');

    if (isOpen) {
      answerWrapper.classList.remove('open');
      answerWrapper.style.height = '0px';
      btn.querySelector('i').style.transform = 'rotate(0deg)';
    } else {
      // Temporarily set display to block to measure full height
      answerWrapper.style.display = 'block';
      const bodyOffsetHeight = answerContent.offsetHeight;
      // Reset display property to its original state
      answerWrapper.style.display = '';
      answerWrapper.classList.add('open');
      answerWrapper.style.height = `${bodyOffsetHeight + 30}px`; // Adjusted height calculation
      btn.querySelector('i').style.transform = 'rotate(-180deg)';
    }
  });
});

// Event listener for burger menu
window.addEventListener('load', function () {
  console.log('Window loaded');
  const menuBtn = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-nav');
  menuBtn.addEventListener('click', () => {
    console.log('Burger menu clicked');
    menuBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
  });
});

// Event listener for scroll
window.addEventListener('scroll', () => {
  console.log('Scrolled');
  heroContainer.classList.toggle('afterSticky', window.scrollY > 0);
  nav.classList.toggle('sticky', window.scrollY > 0);
});

// Event listener for mobile menu links
const allMobileLinks = document.querySelectorAll('.mobile-nav ul li a');
allMobileLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    console.log('Mobile menu link clicked');
    const parentMenu = e.target.parentElement.parentElement.parentElement;
    parentMenu.classList.remove('is-active');
    document
      .querySelector('.hamburger.is-active')
      .classList.remove('is-active');
  });
});

// Function to reveal elements on scroll
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM content loaded');
  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (window.innerWidth >= 768) {
        element.classList.toggle(
          'active',
          elementTop < window.innerHeight - 150
        );
      } else {
        element.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', reveal);

  document.body.style.display = 'flex';
});

console.log('End of JavaScript file');

const images = document.querySelectorAll('.hero-img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Change image every 5 seconds
setInterval(nextImage, 5000);

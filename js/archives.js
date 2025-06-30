// Set the current year for the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Get date from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const dateParam = getQueryParam('date');
const archiveDate = document.getElementById('archive-date');
const archiveContent = document.getElementById('archive-content');

// Example archive data
const archives = {
    '2025-06-07': {
        title: 'June 7, 2025',
        images: ['images/page1.png', 'images/page2.png', 'images/page3.png'],
        pdfs: ['images/page1.pdf', 'images/page2.pdf', 'images/page3.pdf']
    },
    '2025-06-06': {
        title: 'June 6, 2025',
        images: ['images/page1.png'],
        pdfs: ['images/page1.pdf']
    },
    '2025-06-05': {
        title: 'June 5, 2025',
        images: ['images/page2.png'],
        pdfs: ['images/page2.pdf']
    }
};

if (dateParam && archives[dateParam]) {
    archiveDate.textContent = archives[dateParam].title;
    let html = '';
    archives[dateParam].images.forEach((img, idx) => {
        html += `<div class="newspaper-page" style="margin-bottom:32px;">` +
                `<a href="${archives[dateParam].pdfs[idx] || '#'}" target="_blank">` +
                `<img src="${img}" alt="E-Paper Page">` +
                `</a>` +
                `<div class="page-info"><a href="${archives[dateParam].pdfs[idx] || '#'}" target="_blank"><h3>Page ${idx+1}</h3></a></div>` +
                `</div>`;
    });
    archiveContent.innerHTML = html;
} else {
    archiveDate.textContent = 'No Archive Selected or Archive Not Found';
    archiveContent.innerHTML = '<p style="padding:32px;">Please select a valid archive date from the homepage.</p>';
} 
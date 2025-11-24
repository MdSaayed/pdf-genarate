function download_pdf() {
    const pdfElement = document.getElementById("certificate-pdf");

    const w = pdfElement.offsetWidth;
    const h = pdfElement.offsetHeight;

    const opt = {
        margin: 0,
        filename: 'APOSTILLE.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0,
            scrollX: 0,
            x: 0,
            y: 0,
            width: w,
            height: h,
            windowWidth: w,
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    html2pdf().set(opt).from(pdfElement).save();
}

function getBrowserZoomLevel() {
    return window.devicePixelRatio || 1;
}

// Function to scale the A4 certificate based on screen width and zoom level
function scaleCertificate() {
    // const certificate = document.getElementById('certificate-pdf');
    const certificate = document.getElementsByClassName('certificate__pdf-wrap');
    const originalWidth = 794;

    const zoomLevel = getBrowserZoomLevel();
    const actualViewportWidth = window.innerWidth - 100;
    const correctedViewportWidth = actualViewportWidth / zoomLevel;

    // Progressive scaling - gradually decreases scale
    let scale = 1;
    if (correctedViewportWidth > 794) {
        scale = 1;
    }
    if (correctedViewportWidth < 600) {
        scale = 0.8;
    }
    if (correctedViewportWidth < 450) {
        scale = 0.5;
    }
    if (correctedViewportWidth < 350) {
        scale = 0.4;
    }
    if (correctedViewportWidth < 300) {
        scale = 0.25;
    }
    certificate.style.transform = `scale(${scale})`;
}

// Initial scaling
scaleCertificate();

// Resize event listener with debouncing
let resizeTimeout;
window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(scaleCertificate, 100);
});

// Also handle orientation changes
window.addEventListener('orientationchange', function () {
    setTimeout(scaleCertificate, 100);
});
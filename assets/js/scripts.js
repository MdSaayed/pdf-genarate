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


// Function to scale the A4 certificate based on screen width
function scaleCertificate() {
    const certificate = document.getElementById('certificate-pdf');
    const container = document.querySelector('.certificate__container');
    const originalWidth = 794; // Original width in pixels (210mm)
    const screenWidth = window.innerWidth;

    // Calculate scale factor to fit screen with some padding
    const padding = 40; // 20px on each side
    const maxWidth = screenWidth - padding;

    if (maxWidth < originalWidth) {
        // Scale down to fit screen
        const scale = maxWidth / originalWidth;
        certificate.style.transform = `scale(${scale})`;
        container.style.maxWidth = `${maxWidth}px`;
    } else {
        // Keep original size
        certificate.style.transform = 'scale(1)';
        container.style.maxWidth = `${originalWidth}px`;
    }
}

// Initial scaling
scaleCertificate();

// Resize event listener
window.addEventListener('resize', scaleCertificate);
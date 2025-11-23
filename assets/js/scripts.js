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
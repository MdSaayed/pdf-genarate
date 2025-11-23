function download_pdf() {
    const pdfElement = document.getElementById("certificate-pdf");

    const opt = {
        margin: 0, // মার্জিন ০ থাকার পরেও স্পেস আসলে নিচের অপশনগুলো দেখুন
        filename: 'Invoice.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0,  // <--- এই লাইনটি যোগ করুন (এটি স্ক্রল পজিশন রিসেট করে)
            x: 0,        // <--- X-axis পজিশন ফিক্স করে
            y: 0,        // <--- Y-axis পজিশন ফিক্স করে
            letterRendering: true,
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    };

    html2pdf().set(opt).from(pdfElement).save();
}
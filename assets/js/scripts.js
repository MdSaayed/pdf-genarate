// Print functionality
function printDocument() {
    window.print();
}

// Add keyboard shortcut for printing (Ctrl+P or Cmd+P)
document.addEventListener('keydown', function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        printDocument();
    }
});

// Optional: Add download functionality
function downloadDocument() {
    // This would require a server-side solution or a library like html2pdf
    alert('Download functionality would require additional setup.');
}

// Log when document is ready
document.addEventListener('DOMContentLoaded', function () {
    console.log('e-APOSTILLE document loaded successfully');
});

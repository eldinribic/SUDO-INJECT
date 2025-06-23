document.addEventListener('DOMContentLoaded', () => {
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      alert('Your download will begin shortly. Thanks for choosing SudoInject!');
    });
  }
});

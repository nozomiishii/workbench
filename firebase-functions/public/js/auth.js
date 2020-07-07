const authSwichLinks = document.querySelectorAll('.switch');
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelector('.auth');

authSwichLinks.forEach((link) => {
  link.addEventListener('click', () => {
    authModals.forEach((modal) => modal.classList.toggle('active'));
  });
});

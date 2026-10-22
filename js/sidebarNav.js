const sidebar = document.querySelector('.sidebar');
const mount = document.getElementById('navSidebarMount');
const layout = document.querySelector('.layout');
const screenView = window.matchMedia('(max-width: 767.98px)');

function placeSidebar(e) {
  if (!sidebar || !mount || !layout) return;
  if (e.matches) {
    mount.appendChild(sidebar);
  } else {
    layout.prepend(sidebar);
  }
}

placeSidebar(screenView);
screenView.addEventListener('change', placeSidebar);
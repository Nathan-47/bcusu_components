(() => {
  const topNav = document.getElementById('topNav');
  const componentsMenu = document.getElementById('componentsMenu');
  const sidebar = document.querySelector('.sidebar');
  const mobile = window.matchMedia('(max-width: 767.98px)');

  if (!topNav || !sidebar) return;

  // When a nav component link is clicked hide the nav menu (for mobile screens)
  sidebar.addEventListener('click', (e) => {
    if (!e.target.closest('a') || !mobile.matches) return;

    bootstrap.Collapse.getOrCreateInstance(topNav).hide();
    if (componentsMenu) {
      bootstrap.Collapse.getOrCreateInstance(componentsMenu, { toggle: false }).hide();
    }
  });
})();
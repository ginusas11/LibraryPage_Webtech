function showView(viewId) {
    // Az összes 'view' osztályú elem elrejtése
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.style.display = 'none';
    });

    // A kiválasztott nézet megjelenítése
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.style.display = 'block';
    }
}
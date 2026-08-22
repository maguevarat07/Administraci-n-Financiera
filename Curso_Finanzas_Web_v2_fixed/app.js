document.addEventListener('DOMContentLoaded', () => {
    
    // NAVEGACIÓN SPA
    const navButtons = document.querySelectorAll('.nav-btn');
    const modules = document.querySelectorAll('.module-section');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            modules.forEach(mod => mod.classList.remove('active'));

            button.classList.add('active');
            const targetId = button.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            if (window.innerWidth <= 768) {
                sidebar.classList.remove('show');
            }
        });
    });

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    // CALCULADORA ROI
    const roiForm = document.getElementById('roi-form');
    const roiResult = document.getElementById('roi-result');

    if(roiForm) {
        roiForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const investment = parseFloat(document.getElementById('investment').value);
            const returnTotal = parseFloat(document.getElementById('return').value);

            if (isNaN(investment) || isNaN(returnTotal) || investment <= 0) {
                alert("Por favor, ingresa valores numéricos válidos. La inversión debe ser mayor a 0.");
                return;
            }

            const roi = ((returnTotal - investment) / investment) * 100;
            
            roiResult.classList.remove('hidden', 'result-positive', 'result-negative');
            
            if (roi >= 0) {
                roiResult.classList.add('result-positive');
                roiResult.innerHTML = `Tu ROI es del ${roi.toFixed(2)}% <br> <span style="font-size:0.9rem; font-weight:normal;">¡Inversión rentable!</span>`;
            } else {
                roiResult.classList.add('result-negative');
                roiResult.innerHTML = `Tu ROI es del ${roi.toFixed(2)}% <br> <span style="font-size:0.9rem; font-weight:normal;">Alerta: Pérdida.</span>`;
            }
        });
    }
});

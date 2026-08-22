const modules = {
    fundamentos: {
        title: "Fundamentos Financieros",
        description: "Introducción a la administración y el valor temporal.",
        content: `
            <div class="card">
                <h3>Material de Estudio</h3>
                <p>Revisa los conceptos clave antes de practicar.</p>
                <div style="margin-top:1rem">
                    <!-- INSERTA TU LINK DE GOOGLE DRIVE AQUÍ -->
                    <a href="TU_LINK_PDF" class="drive-link" target="_blank">📄 Teoría Base (PDF)</a>
                    <a href="TU_LINK_DOC" class="drive-link" target="_blank">📝 Notas de Clase</a>
                </div>
            </div>
            <div class="card">
                <h3>Conceptos Clave (Haz clic para revelar)</h3>
                <div class="flashcard" onclick="this.innerHTML = 'Es la capacidad de una empresa para generar valor y cumplir metas financieras.';">
                    ¿Qué es la Administración Financiera?
                </div>
            </div>
        `
    },
    simulador: {
        title: "Simulador de Interés Compuesto",
        description: "Calcula el crecimiento de una inversión en el tiempo.",
        content: `
            <div class="card">
                <div class="calculator-grid">
                    <label>Capital Inicial ($)</label>
                    <input type="number" id="capital" placeholder="Ej: 1000">
                    <label>Tasa Anual (%)</label>
                    <input type="number" id="tasa" placeholder="Ej: 5">
                    <label>Años</label>
                    <input type="number" id="tiempo" placeholder="Ej: 10">
                    <button class="btn-calc" onclick="calcularInteres()">Calcular Futuro</button>
                    <h2 id="resultado" style="color: var(--accent)"></h2>
                </div>
            </div>
        `
    },
    estados: {
        title: "Análisis de Estados Financieros",
        description: "Interpretación de balances y estados de resultados.",
        content: `
            <div class="card">
                <h3>Plantillas de Análisis</h3>
                <!-- INSERTA TU LINK DE GOOGLE SHEETS AQUÍ -->
                <a href="TU_LINK_EXCEL" class="drive-link" target="_blank">📊 Plantilla de Ratios (Excel)</a>
            </div>
        `
    },
    presupuestos: {
        title: "Presupuestos",
        description: "Elaboración y análisis de presupuestos financieros.",
        content: `
            <div class="card">
                <h3>Presupuestos</h3>
                <p>Contenido en desarrollo. Por favor, completa los enlaces de recursos.</p>
            </div>
        `
    }
};

// Navegación Dinámica
document.querySelectorAll('.nav-links li').forEach(li => {
    li.addEventListener('click', (e) => {
        const target = e.target.getAttribute('data-target');
        
        // Validar que el módulo existe
        if (!modules[target]) {
            console.error(`Módulo '${target}' no encontrado`);
            return;
        }
        
        // Actualizar UI activa
        document.querySelector('.nav-links li.active').classList.remove('active');
        e.target.classList.add('active');

        // Cargar contenido
        const data = modules[target];
        document.getElementById('module-title').innerText = data.title;
        document.getElementById('module-description').innerText = data.description;
        document.getElementById('dynamic-content').innerHTML = data.content;
    });
});

// Función del Simulador
function calcularInteres() {
    const p = parseFloat(document.getElementById('capital').value);
    const r = parseFloat(document.getElementById('tasa').value) / 100;
    const t = parseFloat(document.getElementById('tiempo').value);
    
    if(p && r && t) {
        const total = p * Math.pow((1 + r), t);
        document.getElementById('resultado').innerText = `Total: $${total.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
    } else {
        alert("Por favor completa todos los campos");
    }
}

// Carga inicial
window.onload = () => {
    document.getElementById('dynamic-content').innerHTML = modules.fundamentos.content;
};

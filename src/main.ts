import './styles.css';
import logoUrl from '../imgs/logo_sin_fondo.png';

/** El script clásico conserva los manejadores de eventos del HTML original. */
function loadPOS(container: HTMLDivElement): void {
  const script = document.createElement('script');
  script.src = `${import.meta.env.BASE_URL}js/pos.js`;
  script.addEventListener('error', () => {
    container.textContent = 'No se pudo cargar el sistema. Recarga la página para intentarlo de nuevo.';
  });
  document.body.appendChild(script);
}

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('Falta el contenedor del sistema de pedidos.');
app.dataset.logoUrl = logoUrl;
loadPOS(app);

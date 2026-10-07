# Comida Express Charly · POS

Recreación del HTML proporcionado, conservando su diseño y funciones en un proyecto de Vite, HTML, CSS, TypeScript y JavaScript.

## Abrir y ejecutar

1. Abre `Comida Express Charly.code-workspace` en Visual Studio Code.
2. En la terminal del proyecto ejecuta `npm install` la primera vez.
3. Ejecuta `npm run dev`.
4. Abre la dirección local que muestre Vite (normalmente http://127.0.0.1:5173).

Detén el servidor con Ctrl+C. Requiere una versión actual de Node.js compatible con Vite.

## Archivos

- `index.html`: documento principal.
- `src/styles.css`: diseño original, colores, tipografías y adaptación a pantallas pequeñas.
- `src/main.ts`: arranque en TypeScript y carga del sistema.
- `public/js/pos.js`: lógica original de mesas, pedidos, cocina, caja y administración. Se sirve como script clásico para conservar los eventos del documento original.

## Uso

Selecciona Mesero, Cocina, Caja o Admin y pulsa **Iniciar sesión**. Puedes abrir mesas, agregar productos y extras, enviar pedidos a cocina, marcar pedidos listos, servirlos y cerrar cuentas. Administración incluye productos, categorías, empleados e historial.

Esta es la misma demostración local del archivo original: no valida credenciales, no procesa pagos reales ni conecta impresoras. Los cambios se mantienen en memoria y se reinician al recargar. Los datos iniciales y estadísticas son de ejemplo. Las tipografías de Google requieren conexión a Internet; sin conexión se usan fuentes alternativas. No incluye servidor de datos ni sincronización entre equipos.

## Compilar

`npm run build` verifica TypeScript y genera `dist/`. `npm run preview` permite revisar esa compilación localmente.

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

## Menú real

El catálogo de `src/menu-catalog.json` contiene 30 productos transcritos de las 22 imágenes del repositorio https://github.com/expresCharly/restaurant-menus/tree/main/imgs. Las fotos originales se incluyen en `public/menus`, por lo que no se necesita GitHub para mostrarlas al ejecutar la página. `menu-sources.json` conserva las direcciones de origen. Es una copia local; los cambios posteriores en GitHub no se sincronizan automáticamente.

El botón **Menú en fotos** abre la galería con ampliación y navegación. En una orden, los productos incluyen sus opciones obligatorias (carne, salsa, preparación o sabores) y los extras con precio publicado. Las opciones elegidas se envían a cocina. Los productos repetidos en las fotos infantiles se registran una sola vez; los combos con precio distinto son productos separados. No hay imágenes de los números 12 y 13 en la carpeta de origen. Los identificadores 30–32 se asignaron a papas fritas y a los combos de Torti Pizza y baguette.

Detalles pendientes de aclaración en las fotos: el menú 1 menciona tanto agua punch como jugo de naranja; el menú 17 no identifica las cuatro carnes y contiene texto ilegible en algunos acompañamientos. Se permite anotarlos en observaciones sin inventar opciones. El precio de papas fritas se transcribió como $119, tal como aparece en la imagen 7–10. Las mesas e historial comienzan vacíos para evitar mezclar pedidos de ejemplo con los productos reales; el dashboard conserva estadísticas de demostración.

## Compilar el proyecto

`npm run build` verifica TypeScript y genera `dist/`. `npm run preview` permite revisar esa compilación localmente.

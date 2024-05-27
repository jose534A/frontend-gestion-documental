# frontend-gestion-documental

Proyecto correspondiente a Gestión Documental

## Recomedación y configuración del IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (deshabilitar Vetur).

## Configuración Personalizada

Puedes visitar [Vite Configuration Reference](https://vitejs.dev/config/).

## Configuración e inicialización del proyecto

```sh
yarn
```

### Para habilitar el modo de desarrollo y cambios en caliente

```sh
yarn dev
```

### Comprobación del tipado (TS), compilación y minificación para Producción

```sh
yarn build
```

### Ejecución de pruebas unitarias con [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Formateo del código with [ESLint](https://eslint.org/)

```sh
yarn lint
```

## Arquitectura del proyecto

### Proyecto Vue 3 con Composition API y TypeScript

El proyecto esta configurado de la siguiente manera:

#### Estructura de Archivos

```plaintext
frontend-gestion-documental/
├── public/
│   └── ...
├── src/
│   ├── assets/
│   │   ├── img/
│   │   ├── styles/
│   │   │   └── main.scss
│   │   └── svg/
│   ├── components/
│   │   ├── __test__/
│   │   ├── icons/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── ...
│   ├── composables/
│   ├── modules/
│   │   ├── autenticacion/
│   │   │   ├── components/
│   │   │   ├── views/
│   │   │   ├── store/
│   │   │   ├── routes.ts
│   │   │   └── index.ts
│   │   └── vinculaciones/
│   ├── router/
│   │   ├── index.ts
│   ├── stores/
│   │       └── use-counter.store.ts
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   └── ...
│   ├── App.vue
│   ├── main.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── ...
```

#### Descripción de cada carpeta

- **public/:** Contiene archivos estáticos que se sirven directamente, como favicon.ico y otros activos públicos.

- **src/:** La carpeta principal para el código fuente de tu aplicación.

- **assets/:** Almacena archivos estáticos como imágenes y hojas de estilo. Los estilos globales también pueden ir aquí.

- **components/:** Contiene componentes Vue reutilizables. Se subdivide en carpetas como ui para componentes de interfaz de usuario genéricos y layout para componentes de diseño como encabezados y pies de página.

- **composables/:** Almacena funciones reutilizables creadas con la Composition API. Por ejemplo, hooks personalizados como useFetch.

- **modules/:** Cada módulo representa una funcionalidad principal del sistema. Cada módulo puede tener sus propios componentes, vistas, estado y rutas. Esto facilita la escalabilidad al mantener cada parte del sistema encapsulada y modular.

- **router/:** Contiene la configuración de enrutamiento. index.ts es la configuración principal, y routes.ts define las rutas.

- **store/:** Configuración del estado global usando Vuex. index.ts es la configuración principal, y modules/ contiene submódulos de estado, como auth.ts para la autenticación.

- **views/:** Contiene componentes de vista que corresponden a páginas completas de la aplicación.

- **App.vue:** El componente raíz de la aplicación.

- **main.ts:** El punto de entrada principal donde se inicializa la aplicación Vue.

##### Configuración adicional

- **.env:** Archivo de configuración de entorno para almacenar variables de entorno.

- **.gitignore:** Lista de archivos y directorios que Git debe ignorar.

- **package.json:** Archivo de configuración del proyecto para gestionar dependencias y scripts de npm.

- **tsconfig.json:** Configuración de TypeScript.

- **vite.config.ts:** Configuración de Vite, el bundler recomendado para Vue 3.

##### Beneficios de esta estructura

- Modularidad: Cada módulo tiene sus propios componentes, vistas y estado, lo que facilita la escalabilidad y el mantenimiento.

- Reusabilidad: Componentes y composables están organizados de manera que puedan ser fácilmente reutilizados en diferentes partes del proyecto.

- Claridad: Separación clara de responsabilidades con una estructura predecible y organizada.

##### Consejos adicionales

- Documenta tu código: A medida que el proyecto crece, mantener una buena documentación ayuda a nuevos desarrolladores a comprender la estructura y los componentes del sistema.

- Pruebas: Considera agregar una carpeta tests para pruebas unitarias y de integración utilizando herramientas como Jest y Vue Test Utils.

- Linting y Formateo: Configura herramientas como ESLint y Prettier para mantener un código consistente y limpio.

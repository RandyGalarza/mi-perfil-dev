# 🤖 Registro de Auditoría de IA (AI-LOG)

**Estudiante:** Randy Galarza
**Semana:** 1
**Proyecto:** App móvil

## 1. Prompts utilizados

Durante el desarrollo de la aplicación móvil se utilizaron diferentes prompts para solicitar asistencia a la IA.

### Prompt 1 – Instalación y configuración del proyecto

> "¿Cómo instalar y configurar todo lo necesario para ejecutar un proyecto de React Native con Expo y TypeScript? Indica paso a paso qué debo instalar y qué comandos debo ejecutar para poder correr la aplicación en Windows."

Este prompt se utilizó para recibir orientación sobre la instalación y configuración del entorno necesario para desarrollar y ejecutar la aplicación móvil.

### Prompt 2 – Interfaz de perfil con avatar

> "¿Cómo mostrar un avatar en App.tsx usando `<Image>`? Además, quiero que muestre mi nombre, carrera y una breve biografía de texto, con estilos bonitos."

Este prompt se utilizó para crear una interfaz de perfil utilizando el componente `Image` de React Native, mostrando información del estudiante y aplicando estilos mediante `StyleSheet`.

### Prompt 3 – Contador de likes o reacciones

> "Un contador de likes o reacciones funcional usando `useState<number>` y el componente `<Pressable>`."

Este prompt se utilizó para agregar una funcionalidad interactiva a la aplicación. Se implementó un contador de likes que aumenta cada vez que el usuario presiona el botón de reacción.

---

## 2. Código generado vs. código modificado

### 2.1 Configuración del proyecto

La IA proporcionó instrucciones para instalar y configurar las herramientas necesarias para ejecutar el proyecto, incluyendo Node.js, npm, Expo y las dependencias necesarias para React Native con TypeScript.

Durante la configuración se presentaron algunos inconvenientes relacionados con PowerShell y la ejecución de `npx`. Fue necesario revisar el error y utilizar una alternativa para ejecutar el comando correctamente.

También se verificó que los comandos fueran ejecutados desde la carpeta correcta del proyecto, ya que `npm run web` requiere que exista un archivo `package.json` en el directorio actual.

### 2.2 Pantalla de perfil

La pantalla predeterminada de Expo fue modificada para crear una presentación personal del estudiante de Ingeniería de Sistemas.

La nueva interfaz incluye:

* Avatar utilizando el componente `<Image>`.
* Nombre del estudiante.
* Carrera de Ingeniería de Sistemas.
* Una breve biografía.
* Sección de formación académica.
* Sección de intereses.
* Diseño mediante `StyleSheet`.
* Una tarjeta de perfil con bordes redondeados y sombras.
* Uso de `ScrollView` para permitir desplazamiento cuando el contenido supera el tamaño de la pantalla.

La imagen del avatar se carga desde la carpeta `assets` mediante:

```tsx
<Image
  source={require('./assets/show.png')}
  style={styles.avatar}
/>
```

### 2.3 Contador de likes o reacciones

Se agregó una funcionalidad interactiva para contar las reacciones de los usuarios.

Para almacenar la cantidad de likes se utilizó:

```tsx
const [likes, setLikes] = useState<number>(0);
```

La función encargada de aumentar el contador es:

```tsx
const darLike = () => {
  setLikes(likes + 1);
};
```

Para detectar la interacción del usuario se utilizó el componente `Pressable`:

```tsx
<Pressable
  onPress={darLike}
  style={({ pressed }) => [
    styles.botonLike,
    pressed && styles.botonPresionado,
  ]}
>
  <Text style={styles.botonTexto}>
    ❤️ Me gusta
  </Text>
</Pressable>
```

El número de reacciones se muestra dinámicamente mediante:

```tsx
<Text style={styles.likesTexto}>
  ❤️ {likes} {likes === 1 ? 'Like' : 'Likes'}
</Text>
```

De esta manera, al presionar el botón, el contador aumenta automáticamente:

**0 Likes → 1 Like → 2 Likes → 3 Likes → ...**

También se agregó un efecto visual al presionar el botón utilizando el estado `pressed` proporcionado por `Pressable`.

---

## 3. Alucinaciones o errores detectados

Durante la configuración del proyecto se presentó un problema al ejecutar `npx` desde PowerShell.

El sistema mostró el siguiente error:

```text
No se puede cargar el archivo C:\Program Files\nodejs\npx.ps1
porque la ejecución de scripts está deshabilitada en este sistema.
```

El problema estaba relacionado con la política de ejecución de scripts de PowerShell y no con el código de la aplicación.

Como alternativa, se pudo utilizar:

```powershell
npx.cmd create-expo-app@latest APP --template blank-typescript
```

También se presentó un error al ejecutar:

```powershell
npm run web
```

porque el comando se estaba ejecutando desde una carpeta que no contenía el archivo `package.json`.

El problema se solucionó entrando a la carpeta donde se encontraba realmente el proyecto:

```powershell
cd APP
```

y posteriormente ejecutando:

```powershell
npm run web
```

Durante el desarrollo también se tuvo en cuenta que en React Native el componente correcto es `<Image />`, con la primera letra en mayúscula, y no `<image>`.

La implementación del contador de likes no presentó un error de funcionamiento, pero se identificó que la versión desarrollada permite presionar varias veces el botón y aumentar continuamente el contador. Esto corresponde al comportamiento implementado actualmente y podría modificarse posteriormente para permitir un solo like por usuario o para alternar entre "Me gusta" y "Ya no me gusta".

Estos errores y ajustes permitieron comprender mejor la configuración del entorno de desarrollo, la estructura de un proyecto Expo, el uso de componentes de React Native y la implementación de estados e interacciones mediante `useState` y `Pressable`.

# Formulario Reactivo con Validaciones - Angular

Este proyecto es un formulario de registro de usuario desarrollado con **Angular 17** utilizando el enfoque de **Reactive Forms**. Implementa validaciones en tiempo real, mensajes de error dinámicos, validadores personalizados y un resumen de los datos registrados al enviar el formulario.

---

## Características

- Formulario reactivo con `FormGroup` y `FormBuilder`
- Validaciones integradas de Angular (`required`, `email`, `minLength`, `pattern`, `min`, `max`)
- Validadores personalizados:
  - Comparación de contraseñas (`passwordMatchValidator`)
  - Sin espacios en el nombre de usuario (`noSpacesValidator`)
- Mensajes de error específicos por campo (solo cuando el campo ha sido tocado o modificado)
- Botón de envío deshabilitado mientras el formulario sea inválido
- Resumen de datos registrados al enviar (sin incluir la contraseña)
- **Opcionales implementados:**
  - Mostrar/ocultar contraseña
  - Indicador visual de fortaleza de contraseña (Débil, Media, Fuerte)
  - Estilos visuales para campos válidos e inválidos
  - Limpiar formulario después del registro

---

## Campos del Formulario

| Campo | Tipo | Validaciones |
|-------|------|--------------|
| Nombre completo | Texto | `required`, `minLength(3)` |
| Correo electrónico | Email | `required`, `email` |
| Nombre de usuario | Texto | `required`, `pattern(/^[a-zA-Z0-9_]+$/`) + sin espacios |
| Contraseña | Password | `required`, `minLength(8)`, `pattern` (mayúscula, minúscula, número, símbolo) |
| Confirmar contraseña | Password | `required` + validador personalizado (coincidencia) |
| Edad | Número | `required`, `min(15)`, `max(90)` |
| Términos y condiciones | Checkbox | `requiredTrue` |

---

## Requisitos Previos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (v18.13.0 o superior)
- **npm** (v8.19.0 o superior)
- **Angular CLI** (v17.x)

# Verificar versiones
node --version
npm --version
ng version

---

## Instalación

### 1. Clonar el repositorio

git clone https://github.com/tu-usuario/reactive-forms.git
cd reactive-forms

### 2. Instalar dependencias

npm install

---

## Ejecutar el proyecto

ng serve

---

## Licencia

Este proyecto es de uso educativo y no tiene restricciones de licencia.

---

### Autor

Juan José Moreno Benavides - Desarrollo Web - Angular
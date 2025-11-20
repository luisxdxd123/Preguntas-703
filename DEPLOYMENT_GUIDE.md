# 🚀 Guía de Deployment - Quiz de Ciberseguridad

## ✅ Estado del Proyecto

El proyecto está **completamente configurado y listo para deployment en Vercel**.

### Cambios Realizados

✅ Proyecto movido a la raíz de `Cyberseguridad/`  
✅ Archivos innecesarios eliminados (.docx y .pdf)  
✅ Estructura optimizada para deployment  
✅ Archivo `vercel.json` creado  
✅ `.gitignore` actualizado  
✅ README.md con documentación completa  
✅ Todas las funcionalidades implementadas

## 📁 Estructura Final

```
Cyberseguridad/
├── .gitignore              ✅ Configurado
├── vercel.json             ✅ Listo para Vercel
├── package.json            ✅ Dependencias correctas
├── README.md               ✅ Documentación completa
├── public/                 ✅ Assets públicos
├── src/
│   ├── components/         ✅ Componentes actualizados
│   │   ├── Quiz.js        ✅ Con todas las funcionalidades
│   │   ├── Question.js    ✅ Feedback visual
│   │   └── Results.js     ✅ Solo muestra puntaje
│   ├── data/
│   │   └── questions.json ✅ Preguntas del quiz
│   └── ...
└── node_modules/           ✅ Dependencias instaladas
```

## 🔧 Limpieza Pendiente

### Carpeta `quiz-ciberseguridad`

Esta carpeta está **vacía** pero bloqueada por un proceso (probablemente Cursor/VSCode).

**Para eliminarla manualmente:**

1. Cierra Cursor/VSCode completamente
2. Abre el Explorador de Windows
3. Navega a: `C:\xampp\htdocs\Simulaciones\Cyberseguridad`
4. Haz clic derecho en la carpeta `quiz-ciberseguridad` → Eliminar

**O usa este comando en una nueva terminal:**
```bash
rmdir /s /q quiz-ciberseguridad
```

## 🌐 Cómo Deployar en Vercel

### Método 1: Desde la Web (Recomendado)

1. **Ve a [vercel.com](https://vercel.com) y crea una cuenta/inicia sesión**

2. **Click en "Add New Project"**

3. **Importa desde Git o sube los archivos:**
   - Si usas Git: Conecta tu repositorio de GitHub/GitLab
   - Si no usas Git: Arrastra la carpeta `Cyberseguridad`

4. **Vercel detectará automáticamente:**
   - Framework: Create React App ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `build` ✅
   - Install Command: `npm install` ✅

5. **Click en "Deploy"**

6. **¡Listo! Tu quiz estará en línea en ~2 minutos** 🎉

### Método 2: Desde CLI

```bash
# Instalar Vercel CLI (solo una vez)
npm i -g vercel

# Login
vercel login

# Deploy (desde la carpeta Cyberseguridad)
cd C:\xampp\htdocs\Simulaciones\Cyberseguridad
vercel

# Para producción
vercel --prod
```

## 🎯 Funcionalidades Implementadas

### 1. Pantalla de Inicio
- ✅ Botón "Comenzar Quiz"
- ✅ Información del quiz (número de preguntas, modo)
- ✅ Selector de modo (Normal / Respuestas Revueltas)

### 2. Durante el Quiz
- ✅ Feedback inmediato (verde = correcto, rojo = incorrecto)
- ✅ Muestra cuál era la respuesta correcta si fallas
- ✅ Avance automático después de 3 segundos
- ✅ Botón "Salir" (vuelve al inicio, pierde progreso)
- ✅ Botón "Terminar Quiz" (calcula puntaje con respuestas dadas)
- ✅ Indicador de modo activo si está en modo revuelto

### 3. Resultados
- ✅ Muestra solo el puntaje final
- ✅ Porcentaje de aciertos
- ✅ Estadísticas (correctas/incorrectas)
- ✅ Mensaje motivacional según puntaje
- ✅ Botón "Reintentar Quiz"

### 4. Modos de Quiz

**📋 Modo Normal:**
- Las respuestas aparecen en el mismo orden siempre

**🔀 Modo Respuestas Revueltas:**
- Las opciones se mezclan aleatoriamente
- Cada vez que inicias, nuevo orden
- Evita memorización de posiciones

## 🧪 Probar Localmente

Antes de deployar, prueba que todo funciona:

```bash
# Iniciar servidor de desarrollo
npm start

# Abrir en navegador
# http://localhost:3000

# Construir versión de producción (opcional)
npm run build
```

## 📝 Personalizar Preguntas

Edita `src/data/questions.json`:

```json
[
  {
    "id": 1,
    "question": "Tu pregunta aquí",
    "options": ["A", "B", "C", "D"],
    "correctAnswer": 0
  }
]
```

**Validar JSON:** https://jsonlint.com

## 🎨 Personalizar Diseño

Edita estos archivos en `src/components/`:
- `Quiz.css` - Colores y estilos del quiz
- `Question.css` - Apariencia de preguntas
- `Results.css` - Pantalla de resultados

## ⚡ Variables de Entorno (Opcional)

Si necesitas agregar configuración:

```bash
# Crea .env.local en la raíz
REACT_APP_API_URL=tu_url
REACT_APP_NOMBRE=valor
```

Y accede con: `process.env.REACT_APP_NOMBRE`

## 🔄 Actualizar en Vercel

Después del primer deploy, cada vez que hagas cambios:

1. **Si usas Git:**
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```
   Vercel auto-deploya automáticamente ✨

2. **Si no usas Git:**
   - Vuelve a ejecutar `vercel --prod`

## 🐛 Solución de Problemas

### Build Falla
- Verifica que `questions.json` sea válido
- Ejecuta `npm install` de nuevo
- Revisa la consola de Vercel para errores específicos

### No se ven las preguntas
- Verifica la ruta: `src/data/questions.json`
- Asegúrate que el JSON tenga el formato correcto
- Debe tener al menos 1 pregunta

### Errores de dependencias
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📊 Configuración Avanzada de Vercel

En `vercel.json` puedes agregar:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "devCommand": "npm start",
  "installCommand": "npm install",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 🎉 ¡Listo!

Tu Quiz de Ciberseguridad está completamente configurado y listo para usar.

### Checklist Final:

- [x] Proyecto en estructura correcta
- [x] Dependencias instaladas
- [x] Funcionalidades implementadas
- [x] Archivos de configuración creados
- [x] Documentación completa
- [ ] Eliminar carpeta `quiz-ciberseguridad` vacía (manual)
- [ ] Deploy en Vercel

---

**¿Necesitas ayuda?** Revisa `README.md` o los demás archivos de documentación.

**¡Éxito con tu quiz!** 🔐🎓


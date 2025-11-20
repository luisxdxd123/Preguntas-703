# 🔐 Quiz de Ciberseguridad

Aplicación interactiva de quiz sobre ciberseguridad desarrollada con React. Incluye feedback inmediato, modos de práctica y una interfaz moderna y responsive.

## ✨ Características

- ✅ **Feedback Inmediato**: Muestra si la respuesta es correcta o incorrecta al instante
- 🔀 **Modo de Respuestas Revueltas**: Practica sin memorizar posiciones
- 📊 **Resultados Detallados**: Visualiza tu puntaje final con estadísticas
- 🎨 **Diseño Moderno**: Interfaz atractiva con animaciones suaves
- 📱 **Responsive**: Funciona perfectamente en móviles y tablets
- 🚪 **Controles Flexibles**: Botones para salir o terminar el quiz en cualquier momento

## 🚀 Inicio Rápido

### Instalación Local

1. **Clona o descarga el proyecto**

2. **Instala las dependencias:**
```bash
npm install
```

3. **Inicia el servidor de desarrollo:**
```bash
npm start
```

4. **Abre tu navegador en:** http://localhost:3000

## 📝 Agregar Tus Preguntas

1. Abre el archivo `src/data/questions.json`
2. Reemplaza las preguntas con las tuyas siguiendo este formato:

```json
[
  {
    "id": 1,
    "question": "¿Tu pregunta aquí?",
    "options": [
      "Opción A",
      "Opción B",
      "Opción C",
      "Opción D"
    ],
    "correctAnswer": 0
  }
]
```

**Nota:** `correctAnswer` es el índice (0, 1, 2 o 3) de la respuesta correcta.

## 🎮 Modos de Quiz

### 📋 Quiz Normal
- Las respuestas aparecen siempre en el mismo orden
- Ideal para evaluación formal

### 🔀 Respuestas Revueltas
- Las opciones se mezclan aleatoriamente en cada intento
- Perfecto para practicar sin memorizar posiciones
- Ayuda a comprender realmente el contenido

## 🌐 Deploy en Vercel

### Opción 1: Deploy desde GitHub

1. **Sube tu proyecto a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [tu-repo]
git push -u origin main
```

2. **Ve a [Vercel](https://vercel.com)**

3. **Importa tu repositorio de GitHub**

4. **Configura el proyecto:**
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`

5. **Click en Deploy**

### Opción 2: Deploy desde CLI

1. **Instala Vercel CLI:**
```bash
npm i -g vercel
```

2. **Inicia sesión:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Para producción:**
```bash
vercel --prod
```

## 📂 Estructura del Proyecto

```
Cyberseguridad/
├── public/              # Archivos públicos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Quiz.js     # Componente principal del quiz
│   │   ├── Question.js # Componente de pregunta individual
│   │   └── Results.js  # Componente de resultados
│   ├── data/
│   │   └── questions.json  # Archivo de preguntas
│   ├── App.js          # Componente raíz
│   └── index.js        # Punto de entrada
├── package.json        # Dependencias y scripts
└── vercel.json         # Configuración de Vercel
```

## 🛠️ Scripts Disponibles

```bash
npm start      # Inicia el servidor de desarrollo
npm run build  # Crea una versión optimizada para producción
npm test       # Ejecuta los tests
```

## 📖 Documentación Adicional

- `INICIO_RAPIDO.txt` - Guía rápida de inicio
- `README_INSTRUCCIONES.md` - Instrucciones detalladas
- `COMO_CONVERTIR_PREGUNTAS.md` - Guía para convertir preguntas
- `RESUMEN_PROYECTO.md` - Visión general del proyecto

## 🔧 Personalización

### Cambiar Colores

Edita los archivos CSS en `src/components/` para personalizar:
- `Quiz.css` - Estilos del quiz principal
- `Question.css` - Estilos de las preguntas
- `Results.css` - Estilos de los resultados

### Agregar Más Preguntas

Simplemente agrega más objetos al array en `src/data/questions.json`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 💡 Tips

- Valida tu JSON en [jsonlint.com](https://jsonlint.com) antes de usarlo
- Guarda backups de tus preguntas
- Prueba primero con pocas preguntas
- Usa el modo de respuestas revueltas para estudiar mejor

## 🆘 Soporte

Si tienes problemas:
1. Verifica que todas las dependencias estén instaladas
2. Asegúrate de que el archivo `questions.json` sea válido
3. Revisa la consola del navegador para errores

---

**¡Creado con ❤️ para aprender ciberseguridad!**

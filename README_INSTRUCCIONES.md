# 🔐 Quiz de Ciberseguridad - Instrucciones

## 📋 Descripción
Este es un proyecto React que simula un formulario de preguntas sobre ciberseguridad. El quiz muestra las preguntas una por una, permite al usuario seleccionar respuestas, y al final muestra el puntaje total con un desglose detallado.

## 🚀 Cómo Iniciar el Proyecto

1. Abre una terminal en la carpeta del proyecto
2. Ejecuta el comando:
   ```bash
   npm start
   ```
3. El proyecto se abrirá automáticamente en tu navegador en `http://localhost:3000`

## 📝 Cómo Agregar Tus Propias Preguntas

### Paso 1: Abre el archivo de preguntas
Navega a: `src/data/questions.json`

### Paso 2: Edita el archivo con tus preguntas
El formato es el siguiente:

```json
[
  {
    "id": 1,
    "question": "¿Aquí va tu pregunta?",
    "options": [
      "Opción A",
      "Opción B",
      "Opción C",
      "Opción D"
    ],
    "correctAnswer": 1
  }
]
```

**Importante:**
- `id`: Número único para cada pregunta (1, 2, 3, etc.)
- `question`: El texto de tu pregunta
- `options`: Array con las 4 opciones de respuesta
- `correctAnswer`: El índice de la respuesta correcta (empieza en 0)
  - 0 = Primera opción
  - 1 = Segunda opción
  - 2 = Tercera opción
  - 3 = Cuarta opción

### Ejemplo Completo:
```json
[
  {
    "id": 1,
    "question": "¿Qué es un firewall?",
    "options": [
      "Un antivirus",
      "Un sistema de protección de red",
      "Un navegador web",
      "Un sistema operativo"
    ],
    "correctAnswer": 1
  },
  {
    "id": 2,
    "question": "¿Qué significa HTTPS?",
    "options": [
      "HyperText Transfer Protocol Secure",
      "HyperText Transfer Protocol Standard",
      "HyperText Transmission Protocol Secure",
      "HyperText Technical Protocol Secure"
    ],
    "correctAnswer": 0
  }
]
```

## ✨ Características del Quiz

- ✅ Navegación pregunta por pregunta
- ✅ Barra de progreso visual
- ✅ Contador de preguntas
- ✅ Selección de respuestas con interfaz intuitiva
- ✅ Botón de anterior para revisar
- ✅ Resultados finales con puntaje
- ✅ Desglose detallado de respuestas correctas e incorrectas
- ✅ Opción de reiniciar el quiz
- ✅ Diseño responsive (funciona en móviles y tablets)
- ✅ Interfaz moderna y atractiva

## 📱 Uso del Quiz

1. **Inicio**: Al cargar, verás la primera pregunta
2. **Seleccionar respuesta**: Haz clic en una de las opciones
3. **Navegar**: Usa los botones "Anterior" y "Siguiente"
4. **Finalizar**: En la última pregunta, haz clic en "Ver Resultados"
5. **Resultados**: Verás tu puntaje y el detalle de cada respuesta
6. **Reintentar**: Haz clic en "Reintentar Quiz" para volver a empezar

## 🎨 Personalización

### Cambiar colores
Edita los archivos CSS en `src/components/` para personalizar:
- `Quiz.css`: Estilos del contenedor principal
- `Question.css`: Estilos de las preguntas
- `Results.css`: Estilos de la pantalla de resultados
- `App.css`: Estilos generales y fondo

### Modificar mensajes de resultados
Edita el archivo `src/components/Results.js` en la función `getScoreMessage()` para cambiar los mensajes según el puntaje.

## 📦 Estructura del Proyecto

```
quiz-ciberseguridad/
├── src/
│   ├── components/
│   │   ├── Quiz.js          # Componente principal del quiz
│   │   ├── Quiz.css         # Estilos del quiz
│   │   ├── Question.js      # Componente de pregunta individual
│   │   ├── Question.css     # Estilos de pregunta
│   │   ├── Results.js       # Componente de resultados
│   │   └── Results.css      # Estilos de resultados
│   ├── data/
│   │   └── questions.json   # ⭐ AQUÍ VAN TUS PREGUNTAS
│   ├── App.js               # Componente raíz
│   └── App.css              # Estilos globales
└── public/
```

## 🛠️ Comandos Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm run build`: Crea una versión optimizada para producción
- `npm test`: Ejecuta las pruebas
- `npm run eject`: Expone la configuración (no recomendado)

## 💡 Tips

- Puedes agregar tantas preguntas como quieras
- Asegúrate de que el JSON esté bien formado (usa un validador online si tienes dudas)
- Guarda el archivo después de hacer cambios
- Si el navegador no se actualiza, recarga la página (F5)

## 🐛 Solución de Problemas

**El quiz no se muestra:**
- Verifica que `questions.json` esté bien formado
- Revisa la consola del navegador (F12) para ver errores

**Las preguntas no aparecen:**
- Asegúrate de que el archivo `questions.json` tenga al menos una pregunta
- Verifica que todos los campos requeridos estén presentes

**Error de sintaxis:**
- Usa un validador JSON online para verificar tu archivo
- Asegúrate de que todas las comas estén en su lugar
- No dejes comas al final del último elemento

## 📧 Soporte

Si tienes problemas, verifica:
1. Que Node.js esté instalado (`node --version`)
2. Que las dependencias estén instaladas (`npm install`)
3. Que el puerto 3000 no esté en uso

¡Disfruta tu quiz de ciberseguridad! 🎉


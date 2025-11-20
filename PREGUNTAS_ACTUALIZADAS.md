# ✅ Preguntas Actualizadas - Quiz de Ciberseguridad

## 📊 Resumen

**Total de preguntas: 170**

### Distribución de Preguntas:

#### 📚 Módulo 1: Autenticación y Biometría (Preguntas 1-100)
- **Cantidad**: 100 preguntas
- **Opciones por pregunta**: 5 (A, B, C, D, E)
- **Temas**:
  - Autenticación basada en formularios y Windows
  - Tokens de autenticación (JWT, OAuth, Kerberos)
  - Autenticación biométrica (huellas, iris, facial, voz, ADN, etc.)
  - Métodos HTTP y seguridad web
  - Sistemas biométricos avanzados (ECG, EEG, EMG, GSR)
  - Inteligencia Artificial en autenticación

#### 🏭 Módulo 2: Ciberseguridad Industrial (Preguntas 101-170)
- **Cantidad**: 70 preguntas
- **Opciones por pregunta**: 6 (A, B, C, D, E, F)
- **Temas**:
  - IT y OT en entornos industriales
  - Estándares y regulaciones (NIST, ISO 27001, IEC 62443)
  - Infraestructura crítica
  - SCADA, DCS, IIoT
  - Segmentación de red y firewalls industriales
  - Gestión de riesgos y vulnerabilidades
  - Ataques y defensa en profundidad
  - Cumplimiento normativo

---

## 📝 Formato de Datos

Todas las preguntas están en formato JSON con la siguiente estructura:

```json
{
  "id": número_de_pregunta,
  "question": "Texto de la pregunta",
  "options": [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4",
    "Opción 5",  // Solo en preguntas 1-100
    "Opción 6"   // Solo en preguntas 101-170
  ],
  "correctAnswer": índice_respuesta_correcta
}
```

---

## 🎯 Ejemplos

### Ejemplo Pregunta con 5 opciones (Pregunta 1):
```json
{
  "id": 1,
  "question": "¿Qué es la autenticación?",
  "options": [
    "Un mecanismo para encriptar datos",
    "Un proceso para validar la identidad de un usuario",  ← CORRECTA
    "Un sistema de backup de contraseñas",
    "Un tipo de firewall",
    "Un protocolo de red"
  ],
  "correctAnswer": 1
}
```

### Ejemplo Pregunta con 6 opciones (Pregunta 101):
```json
{
  "id": 101,
  "question": "Según las prácticas de IT y OT, ¿cuál es la medida más efectiva?",
  "options": [
    "Ignorar los parches de seguridad...",
    "Implementar monitoreo continuo...",
    "Permitir acceso libre...",
    "Mantener los sistemas desconectados...",
    "Utilizar contraseñas predeterminadas...",
    "Usar software obsoleto..."  ← CORRECTA
  ],
  "correctAnswer": 5
}
```

---

## 🚀 Cómo Usar el Quiz

1. **Iniciar el servidor**:
   ```bash
   cd quiz-ciberseguridad
   npm start
   ```

2. **Abrir en el navegador**:
   `http://localhost:3000`

3. **Navegar por las preguntas**:
   - El quiz mostrará las 170 preguntas una por una
   - Selecciona tu respuesta
   - Usa "Siguiente" para avanzar y "Anterior" para retroceder
   - Al finalizar, verás tu puntaje total

---

## 📊 Sistema de Puntuación

- **Total de preguntas**: 170
- **Puntos por pregunta**: 1 punto
- **Puntaje máximo**: 170 puntos

### Mensajes según puntaje:
- **90% o más** (153+ puntos): "¡Excelente! 🎉" 🏆
- **70-89%** (119-152 puntos): "¡Muy bien! 👏" ⭐
- **50-69%** (85-118 puntos): "Bien, pero puedes mejorar 📚" 💪
- **Menos de 50%** (<85 puntos): "Necesitas estudiar más 📖" 📚

---

## 🎨 Características del Sistema

✅ **Adaptativo**: Maneja automáticamente preguntas con 4, 5, 6 o más opciones  
✅ **Navegación fluida**: Avanza y retrocede entre preguntas  
✅ **Validación**: No permite avanzar sin responder  
✅ **Progreso visual**: Barra de progreso animada  
✅ **Resultados detallados**: Muestra respuestas correctas e incorrectas  
✅ **Responsive**: Funciona en móvil, tablet y desktop  

---

## 📱 Compatibilidad

- ✅ Navegadores: Chrome, Firefox, Safari, Edge
- ✅ Dispositivos: PC, Laptop, Tablet, Smartphone
- ✅ Sistemas: Windows, Mac, Linux, iOS, Android

---

## 🔧 Archivo de Datos

Las preguntas están almacenadas en:
```
quiz-ciberseguridad/src/data/questions.json
```

Puedes editar este archivo para:
- Agregar más preguntas
- Modificar preguntas existentes
- Cambiar las respuestas correctas
- Actualizar el contenido

**Importante**: Mantén el formato JSON correcto.

---

## 💡 Tips para el Quiz

1. **Lee cada pregunta cuidadosamente**
2. **Puedes retroceder** para revisar respuestas anteriores
3. **No hay límite de tiempo** - toma el tiempo que necesites
4. **Al final verás un desglose completo** de todas tus respuestas
5. **Puedes reintentar** el quiz cuantas veces quieras

---

## 📈 Estadísticas del Archivo

- **Tamaño del archivo**: ~100 KB
- **Formato**: JSON minificado
- **Codificación**: UTF-8
- **Compatibilidad**: React 18+

---

## 🎓 Áreas de Conocimiento Evaluadas

### Módulo 1: Autenticación (Preguntas 1-100)
1. Fundamentos de autenticación
2. Autenticación basada en formularios
3. Autenticación Windows/IIS
4. Tokens y protocolos (JWT, OAuth, Kerberos)
5. Biometría básica (huella, iris, facial, voz)
6. Biometría avanzada (ADN, venas, retina)
7. Autenticación conductual (marcha, tecleo, firma)
8. Biometría fisiológica (ECG, EEG, EMG)
9. IA en sistemas biométricos (CNN, RNN)

### Módulo 2: Ciberseguridad Industrial (Preguntas 101-170)
1. Convergencia IT/OT
2. Estándares (NIST 800-53, ISO 27001, IEC 62443)
3. Sistemas industriales (SCADA, DCS, PLC)
4. Arquitectura de seguridad
5. Segmentación de red
6. Gestión de accesos
7. Vulnerabilidades IIoT
8. Respuesta a incidentes
9. Cumplimiento normativo

---

## ✅ Estado del Proyecto

- [x] 170 preguntas convertidas al formato JSON
- [x] Todas las opciones incluidas (5 o 6 según corresponda)
- [x] Respuestas correctas verificadas
- [x] Sistema funcionando sin errores
- [x] Interfaz responsive lista
- [x] Navegación completa implementada
- [x] Sistema de puntuación configurado

---

## 🎉 ¡Listo para Usar!

El quiz está **100% funcional** con tus 170 preguntas.

**Para iniciarlo**:
```bash
cd quiz-ciberseguridad
npm start
```

**¡Buena suerte con tu examen!** 🚀📚🔐




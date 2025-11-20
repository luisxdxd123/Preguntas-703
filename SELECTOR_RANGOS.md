# 📊 Selector de Rangos de Preguntas

## ✅ Nueva Funcionalidad Implementada

Se ha agregado un **selector de rango de preguntas** que permite a los usuarios elegir qué conjunto de preguntas quieren practicar.

### 🎯 Opciones Disponibles

#### 1️⃣ **Preguntas 1-100**
- Muestra solo las primeras 100 preguntas
- Ideal para practicar la primera mitad del cuestionario
- Color: Azul claro

#### 2️⃣ **Preguntas 101-170**
- Muestra solo las últimas 70 preguntas
- Perfecto para practicar la segunda parte
- Color: Azul claro

#### 📚 **Todas las Preguntas**
- Muestra las 170 preguntas completas
- Para hacer el cuestionario completo
- Color: Azul claro

### 🎨 Diseño

El selector de rango aparece **ANTES** del selector de modo en la pantalla de inicio:

```
🔐 Quiz de Ciberseguridad

[Cards informativos]

┌─────────────────────────────────────┐
│ Selecciona el rango de preguntas:  │
│                                     │
│ [1️⃣ Preguntas 1-100]               │
│ [2️⃣ Preguntas 101-170]             │
│ [📚 Todas las Preguntas]           │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Selecciona el modo de quiz:        │
│                                     │
│ [📋 Quiz Normal]                   │
│ [🔀 Respuestas Revueltas]          │
└─────────────────────────────────────┘

[🚀 Comenzar Quiz]
```

### 🔄 Combinaciones Posibles

El selector de rango funciona **independientemente** del selector de modo:

| Rango | Modo | Resultado |
|-------|------|-----------|
| 1-100 | Normal | Preguntas 1-100 en orden original |
| 1-100 | Revuelto | Preguntas 1-100 con respuestas mezcladas |
| 101-170 | Normal | Preguntas 101-170 en orden original |
| 101-170 | Revuelto | Preguntas 101-170 con respuestas mezcladas |
| Todas | Normal | 170 preguntas en orden original |
| Todas | Revuelto | 170 preguntas con respuestas mezcladas |

### 💻 Implementación Técnica

#### Archivo: `Quiz.js`

**Estado agregado:**
```javascript
const [selectedRange, setSelectedRange] = useState('all');
```

**Función de filtrado:**
```javascript
const filterQuestionsByRange = (range) => {
  switch (range) {
    case 'range1':
      return questionsData.slice(0, 100); // 1-100
    case 'range2':
      return questionsData.slice(100, 170); // 101-170
    case 'all':
    default:
      return questionsData; // Todas
  }
};
```

**Actualización de handleStart:**
```javascript
const handleStart = (shuffle = false, range = 'all') => {
  // Filtra primero por rango
  const filteredQuestions = filterQuestionsByRange(range);
  
  // Luego aplica shuffle si corresponde
  if (shuffle) {
    const shuffled = filteredQuestions.map(q => shuffleOptions(q));
    setShuffledQuestions(shuffled);
  } else {
    setShuffledQuestions(filteredQuestions);
  }
  
  setShowStart(false);
};
```

#### Archivo: `Quiz.css`

**Nuevos estilos:**
- `.range-selection` - Contenedor del selector
- `.range-title` - Título del selector
- `.range-options` - Grid de opciones
- `.range-option` - Cada opción individual
- `.range-content` - Contenido de la opción
- `.range-icon` - Icono de la opción
- `.range-info` - Información de la opción

**Responsive:**
- Breakpoint 768px: Grid a 1 columna
- Breakpoint 600px: Padding y fuentes reducidas
- Breakpoint 400px: Optimización para móviles pequeños

### 📱 Responsive Design

El selector de rango es completamente responsive:

**Desktop:**
```
[1️⃣ Preguntas 1-100] [2️⃣ Preguntas 101-170] [📚 Todas]
```

**Tablet/Móvil:**
```
[1️⃣ Preguntas 1-100]
[2️⃣ Preguntas 101-170]
[📚 Todas las Preguntas]
```

### 🎯 Casos de Uso

#### Estudiante que quiere dividir el estudio:
1. **Día 1:** Selecciona "Preguntas 1-100" + Modo Normal
2. **Día 2:** Selecciona "Preguntas 101-170" + Modo Normal
3. **Día 3:** Selecciona "Todas" + Modo Revuelto (repaso)

#### Estudiante que quiere practicar una sección específica:
1. Selecciona "Preguntas 101-170"
2. Elige "Respuestas Revueltas"
3. Practica múltiples veces sin memorizar posiciones

#### Examen completo:
1. Selecciona "Todas las Preguntas"
2. Elige "Quiz Normal"
3. Realiza el examen completo

### ✨ Características

✅ **Selección visual intuitiva** con radio buttons estilizados  
✅ **Iconos claros** (1️⃣, 2️⃣, 📚)  
✅ **Colores diferenciados** (azul para rangos vs morado para modos)  
✅ **Responsive** en todos los dispositivos  
✅ **Animaciones suaves** al seleccionar  
✅ **Estado persistente** durante la sesión  
✅ **Feedback visual** al hacer hover o seleccionar  

### 🔄 Flujo de Usuario

1. Usuario abre el quiz
2. Ve 3 cards informativos
3. **NUEVO:** Selecciona rango de preguntas (por defecto: 1-100)
4. Selecciona modo de quiz (por defecto: Normal)
5. Click en "Comenzar Quiz"
6. El quiz muestra solo las preguntas del rango seleccionado
7. Al finalizar, puede reintentar con otro rango/modo

### 🎨 Estilo Visual

**Selector de Rango:**
- Color principal: Azul (#3498db)
- Hover: Borde azul + elevación
- Seleccionado: Fondo azul claro + sombra

**Selector de Modo:**
- Color principal: Morado (#667eea)
- Hover: Borde morado + elevación
- Seleccionado: Fondo morado claro + sombra

**Diferenciación clara** entre rangos (azul) y modos (morado)

### 📊 Estadísticas

- **Rango 1:** 100 preguntas
- **Rango 2:** 70 preguntas
- **Todas:** 170 preguntas

El puntaje final siempre muestra "X/Y" donde Y es el número de preguntas del rango seleccionado.

### 🚀 Para Actualizar en Producción

```bash
# Si usas Git
git add .
git commit -m "Feature: Selector de rangos de preguntas (1-100, 101-170, Todas)"
git push

# Vercel desplegará automáticamente
```

---

**¡Funcionalidad implementada y lista para usar!** 🎉


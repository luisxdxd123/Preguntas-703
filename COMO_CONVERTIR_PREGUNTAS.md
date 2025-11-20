# 📖 Cómo Convertir tus Preguntas del Word/PDF a JSON

## Método 1: Conversión Manual (Recomendado para mejor control)

### Paso 1: Abre tu documento de preguntas
Abre el archivo `100 preguntas.docx` o el PDF que tienes.

### Paso 2: Copia una pregunta y sus opciones
Ejemplo de lo que podrías tener en tu documento:
```
1. ¿Qué es el phishing?
a) Un tipo de malware
b) Una técnica de ingeniería social
c) Un firewall
d) Un protocolo de seguridad
Respuesta correcta: b
```

### Paso 3: Convierte al formato JSON
Toma esa pregunta y conviértela así:

```json
{
  "id": 1,
  "question": "¿Qué es el phishing?",
  "options": [
    "Un tipo de malware",
    "Una técnica de ingeniería social",
    "Un firewall",
    "Un protocolo de seguridad"
  ],
  "correctAnswer": 1
}
```

**NOTA IMPORTANTE:** El `correctAnswer` es el índice (posición) de la respuesta correcta:
- Si la respuesta correcta es la opción "a", usa: `"correctAnswer": 0`
- Si la respuesta correcta es la opción "b", usa: `"correctAnswer": 1`
- Si la respuesta correcta es la opción "c", usa: `"correctAnswer": 2`
- Si la respuesta correcta es la opción "d", usa: `"correctAnswer": 3`

### Paso 4: Repite para todas las preguntas
El archivo completo debe verse así:

```json
[
  {
    "id": 1,
    "question": "¿Qué es el phishing?",
    "options": [
      "Un tipo de malware",
      "Una técnica de ingeniería social",
      "Un firewall",
      "Un protocolo de seguridad"
    ],
    "correctAnswer": 1
  },
  {
    "id": 2,
    "question": "¿Qué es un firewall?",
    "options": [
      "Un antivirus",
      "Un sistema de protección de red",
      "Un navegador",
      "Un sistema operativo"
    ],
    "correctAnswer": 1
  },
  {
    "id": 3,
    "question": "¿Qué significa HTTPS?",
    "options": [
      "HyperText Transfer Protocol Secure",
      "HyperText Transfer Protocol Standard",
      "HyperText Transmission Protocol",
      "HyperText Technical Protocol"
    ],
    "correctAnswer": 0
  }
]
```

## Método 2: Usar un Conversor Online

### Opción A: De Word a Texto
1. Ve a: https://word2cleanhtml.com/ o similar
2. Copia el contenido de tu Word
3. Pega en el conversor
4. Obtén el texto limpio
5. Convierte manualmente al formato JSON

### Opción B: De PDF a Texto
1. Ve a: https://www.ilovepdf.com/pdf_to_text
2. Sube tu PDF
3. Descarga el texto
4. Convierte manualmente al formato JSON

## Método 3: Usar ChatGPT o IA (Más Rápido)

1. Copia todas tus preguntas del documento Word/PDF
2. Ve a ChatGPT (https://chat.openai.com)
3. Usa este prompt:

```
Convierte las siguientes preguntas al formato JSON para un quiz de React. 
El formato debe ser:
[
  {
    "id": número,
    "question": "texto de la pregunta",
    "options": ["opción1", "opción2", "opción3", "opción4"],
    "correctAnswer": índice de la respuesta correcta (0, 1, 2 o 3)
  }
]

Aquí están las preguntas:
[PEGA TUS PREGUNTAS AQUÍ]
```

4. ChatGPT te dará el JSON listo para copiar y pegar

## 📝 Plantilla Vacía para Empezar

Puedes usar esta plantilla y rellenarla:

```json
[
  {
    "id": 1,
    "question": "",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "correctAnswer": 0
  },
  {
    "id": 2,
    "question": "",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "correctAnswer": 0
  }
]
```

## ✅ Checklist de Verificación

Antes de guardar tu archivo `questions.json`, verifica:

- [ ] El archivo empieza con `[` y termina con `]`
- [ ] Cada pregunta está dentro de `{ }`
- [ ] Las preguntas están separadas por comas (`,`)
- [ ] Cada pregunta tiene un `id` único
- [ ] Cada pregunta tiene exactamente 4 opciones
- [ ] El `correctAnswer` está entre 0 y 3
- [ ] No hay comas extras al final
- [ ] Todas las comillas están cerradas

## 🔍 Validar tu JSON

Después de crear tu archivo, valídalo en:
- https://jsonlint.com/
- https://jsonformatter.org/

Copia todo el contenido de tu archivo, pégalo en el validador, y te dirá si hay errores.

## 💡 Consejos

1. **Empieza con pocas preguntas**: Primero convierte 5-10 preguntas para probar que funciona
2. **Guarda backups**: Antes de modificar, guarda una copia del archivo
3. **Usa un editor de código**: VS Code, Notepad++, o Sublime Text muestran mejor el JSON
4. **Revisa los acentos**: Asegúrate de que las tildes y ñ se vean bien

## 🎯 Ejemplo Real con Pregunta de Ciberseguridad

**Original en Word:**
```
Pregunta 15: ¿Cuál es el propósito principal de la autenticación multifactor (MFA)?
A. Aumentar la velocidad de conexión
B. Añadir capas adicionales de seguridad
C. Reducir el costo del servidor
D. Mejorar la interfaz de usuario
Respuesta: B
```

**Convertido a JSON:**
```json
{
  "id": 15,
  "question": "¿Cuál es el propósito principal de la autenticación multifactor (MFA)?",
  "options": [
    "Aumentar la velocidad de conexión",
    "Añadir capas adicionales de seguridad",
    "Reducir el costo del servidor",
    "Mejorar la interfaz de usuario"
  ],
  "correctAnswer": 1
}
```

## 🚨 Errores Comunes

### Error 1: Coma al final
❌ **Incorrecto:**
```json
[
  {
    "id": 1,
    "question": "...",
    "options": ["a", "b", "c", "d"],
    "correctAnswer": 0
  }, ← Esta coma está de más
]
```

✅ **Correcto:**
```json
[
  {
    "id": 1,
    "question": "...",
    "options": ["a", "b", "c", "d"],
    "correctAnswer": 0
  }
]
```

### Error 2: Comillas mal cerradas
❌ **Incorrecto:**
```json
"question": "¿Qué es esto?
```

✅ **Correcto:**
```json
"question": "¿Qué es esto?"
```

### Error 3: Falta coma entre preguntas
❌ **Incorrecto:**
```json
[
  {
    "id": 1,
    "question": "..."
  }
  {
    "id": 2,
    "question": "..."
  }
]
```

✅ **Correcto:**
```json
[
  {
    "id": 1,
    "question": "..."
  },
  {
    "id": 2,
    "question": "..."
  }
]
```

---

¡Con esta guía deberías poder convertir todas tus preguntas fácilmente! 🎉

Si tienes problemas, recuerda que siempre puedes usar ChatGPT para ayudarte con la conversión.


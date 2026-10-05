# SINERGIA 2026 — edición segura de estados

La web usa un Cloudflare Worker como API de mismo origen y un Web App de Google Apps Script como puente de escritura al Sheet.

## Apps Script

En el Sheet **SINERGIA 2026 — CONTENT DATABASE**:

1. Extensiones → Apps Script.
2. Copia el contenido de `apps-script/Code.gs`.
3. En Configuración del proyecto → Propiedades de secuencia de comandos agrega:
   - `SPREADSHEET_ID`: el ID del Sheet.
   - `API_SECRET`: una cadena larga y aleatoria.
4. Implementar → Nueva implementación → Aplicación web.
5. Ejecutar como: **yo**.
6. Acceso: **Cualquiera**.
7. Guarda la URL que termina en `/exec`.

## Cloudflare

En Workers & Pages → SINERGIA 2026 → Settings → Variables and Secrets agrega:

- `ADMIN_PASSWORD` como Secret.
- `SESSION_SECRET` como Secret.
- `APPS_SCRIPT_SECRET` como Secret, con el mismo valor de `API_SECRET`.
- `APPS_SCRIPT_URL` con la URL `/exec`.

El usuario está fijado en el Worker como `sinergia`. La contraseña nunca se guarda en GitHub.

## Funcionamiento

- Sin login: solo lectura.
- Login válido: sesión de 6 horas en `sessionStorage`.
- En edición, cada estado se vuelve selector.
- El cambio escribe `status` por `publishing_id` y registra `updated_at` + `updated_by`.
- PUBLISHING se refresca cada 10 segundos.
- Si la API todavía no está configurada, la web mantiene el JSON local como fallback.

/**
 * Registro de resultados de los retos ProFE.
 * 1. Crea una hoja de cálculo de Google y abre Extensiones > Apps Script.
 * 2. Pega este código y guarda.
 * 3. Ejecuta una vez la función "configurar" (acepta los permisos).
 * 4. Implementar > Nueva implementación > Aplicación web.
 *    Ejecutar como: Yo. Quién tiene acceso: Cualquier persona.
 * 5. Copia la URL que termina en /exec y pégala en retos/assets/config.js.
 */
const HOJA = 'Registros';
const COLS = ['recibido', 'curso', 'sesion', 'titulo', 'nombre', 'documento', 'grupo',
  'aciertos_calentamiento', 'aciertos_practica', 'aciertos_ticket', 'aciertos_total',
  'confianza', 'minutos', 'completado_en', 'autorizacion'];

function configurar() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName(HOJA) || ss.insertSheet(HOJA);
  if (sh.getLastRow() === 0) { sh.appendRow(COLS); sh.setFrozenRows(1); }
  sh.getRange('F:F').setNumberFormat('@');  // documento como texto
  const res = ss.getSheetByName('Resumen') || ss.insertSheet('Resumen');
  res.clear();
  // Separador de argumentos según la configuración regional de la hoja (es-CO usa ";").
  const sep = ss.getSpreadsheetLocale().indexOf('en') === 0 ? ',' : ';';
  res.getRange('A1').setFormula(
    "=QUERY(Registros!A:N" + sep + "\"select B, F, E, G, count(C), avg(K), sum(M) where F is not null " +
    "group by B, F, E, G order by B, G, E label count(C) 'sesiones completadas', " +
    "avg(K) 'promedio aciertos (%)', sum(M) 'minutos totales'\"" + sep + "1)");
}

function limpiar(v) {
  const t = String(v == null ? '' : v).slice(0, 200);
  return /^[=+\-@]/.test(t) ? "'" + t : t;  // evita fórmulas inyectadas
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = (e && e.parameter) || {};
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(HOJA) || ss.insertSheet(HOJA);
    if (sh.getLastRow() === 0) sh.appendRow(COLS);
    const NUM = ['aciertos_calentamiento', 'aciertos_practica', 'aciertos_ticket', 'aciertos_total', 'confianza', 'minutos'];
    const fila = COLS.map(c => c === 'recibido' ? new Date()
      : NUM.includes(c) ? (p[c] === '' || p[c] == null ? '' : Number(p[c]))
      : limpiar(p[c]));
    // Si el mismo documento ya registró esa sesión del mismo curso, se actualiza la fila.
    const datos = sh.getDataRange().getValues();
    const iC = COLS.indexOf('curso'), iS = COLS.indexOf('sesion'), iD = COLS.indexOf('documento');
    for (let r = 1; r < datos.length; r++) {
      if (String(datos[r][iC]) === String(fila[iC]) && String(datos[r][iS]) === String(fila[iS]) && String(datos[r][iD]) === String(fila[iD])) {
        sh.getRange(r + 1, 1, 1, COLS.length).setValues([fila]);
        return ContentService.createTextOutput('actualizado');
      }
    }
    sh.appendRow(fila);
    return ContentService.createTextOutput('ok');
  } finally {
    lock.releaseLock();
  }
}

const R = String.raw;
const DATA = {
 key: "profe-retos-razonamiento-v2",
 course: "Razonamiento matemático",
 headline: R`Dos retos para llegar <span class="mark">firme</span> al parcial final`,
 lead: "Seis sesiones cortas de autoestudio: primero la base algebraica (despejar, factorizar, resolver ecuaciones) y luego exponenciales y logaritmos. Lo que fallas hoy vuelve en la siguiente sesión.",
 bonus: "Completa las sesiones del reto y aprueba el quiz presencial de 15 minutos en la última semana de clase.",
 retos: [
  {L:"A", name:"Despejar y factorizar", idea:"La base algebraica que usa todo lo demás, incluidos los logaritmos.", sessions:["A1","A2","A3"]},
  {L:"B", name:"Exponenciales y logaritmos", idea:"Propiedades, ecuaciones exponenciales y ecuaciones logarítmicas, con aplicaciones.", sessions:["B1","B2","B3"]}
 ],
 order: ["A1","A2","B1","A3","B2","B3"],
 sessions: {}
};

/* ===================== A1 ===================== */
DATA.sessions.A1 = {
 date:"dom 15 nov", title:"Despejar: la operación inversa",
 lead:"Despejar es desenvolver un regalo: lo último que le pusieron es lo primero que quitas.",
 confPrompt:"¿Qué tan seguro te sientes despejando?",
 lesson: R`
  <p>Para despejar, primero mira <strong>qué le hicieron a la incógnita y en qué orden</strong>. Luego deshazlo al revés.</p>
  <div class="timeline"><table class="undo"><thead><tr><th>Ejemplo: $2x + 3 = 11$</th><th>Le hicieron</th><th>Lo deshago con</th></tr></thead>
   <tbody><tr><td>Paso 1</td><td>multiplicar por 2</td><td>dividir entre 2 <span class="label">(va de último)</span></td></tr>
   <tr><td>Paso 2</td><td>sumar 3</td><td>restar 3 <span class="label">(va primero)</span></td></tr></tbody></table></div>
  <ol class="steps"><li><span>Resto 3 a ambos lados: $2x = 8$</span></li><li><span>Divido entre 2: $x = 4$</span></li><li><span>Compruebo: $2(4) + 3 = 11$ ✓</span></li></ol>
  <p>Con fórmulas es igual. En $F = \tfrac{9}{5}C + 32$, a $C$ la multiplicaron por $\tfrac95$ y luego le sumaron 32:</p>
  <ol class="steps"><li><span>Resto 32: $F - 32 = \tfrac{9}{5}C$</span></li><li><span>Multiplico por $\tfrac{5}{9}$: $C = \tfrac{5}{9}(F - 32)$</span></li></ol>
  <div class="tip">Antes de mover algo, pregúntate: <strong>¿qué fue lo último que le hicieron a la letra que busco?</strong></div>`,
 prereq:[
  {id:"a1w1",tag:"resolver",text:R`$3x = 12$. ¿Cuánto vale $x$?`,opts:["$4$","$9$","$36$","$15$"],a:0,why:R`Dividir entre 3 deshace el "multiplicar por 3".`},
  {id:"a1w2",tag:"resolver",text:R`$x - 7 = 5$`,opts:["$-2$","$12$","$2$","$35$"],a:1,why:R`Sumar 7 deshace el "restar 7".`},
  {id:"a1w3",tag:"resolver",text:R`$\dfrac{x}{4} = 2.5$`,opts:["$0.625$","$6.5$","$10$","$1.5$"],a:2,why:R`Multiplicar por 4 deshace el "dividir entre 4".`},
  {id:"a1w4",tag:"resolver",text:R`$-2x = 10$`,opts:["$5$","$-5$","$12$","$-20$"],a:1,why:R`Se divide entre $-2$, con todo y signo.`}
 ],
 practice:[
  {id:"a1p1",tag:"reconocer",text:R`En $5x - 4 = 21$, ¿qué se deshace primero?`,opts:["Dividir entre 5","Sumar 4","Restar 5","Multiplicar por 4"],a:1,why:R`A $x$ primero la multiplicaron por 5 y luego le restaron 4. Lo último (restar 4) es lo primero que se deshace.`},
  {id:"a1p2",tag:"resolver",text:R`Resuelve $5x - 4 = 21$`,opts:["$x = 3.4$","$x = 5$","$x = 125$","$x = 17$"],a:1,why:R`$5x = 25 \Rightarrow x = 5$.`},
  {id:"a1p3",tag:"despejar",text:R`Área del triángulo: $A = \dfrac{b\,h}{2}$. Despeja $h$.`,opts:[R`$h = \dfrac{2A}{b}$`,R`$h = \dfrac{A}{2b}$`,R`$h = 2A - b$`,R`$h = \dfrac{2b}{A}$`],a:0,why:R`Multiplica por 2: $2A = bh$. Divide entre $b$.`},
  {id:"a1p4",tag:"encuentra el error",text:R`Un compañero resolvió $3x + 6 = 12$ así: $x = \dfrac{12}{3} - 6 = -2$. ¿Qué pasó?`,opts:["Todo está bien",R`Deshizo en el orden equivocado; la respuesta es $x = 2$`,"Debió multiplicar por 3","Debió restar 12"],a:1,why:R`Primero se deshace el $+6$ (queda $3x = 6$) y luego el $\times 3$: $x = 2$.`},
  {id:"a1p5",tag:"despejar",text:R`Cinemática: $v = v_0 + a\,t$. Despeja $t$.`,opts:[R`$t = \dfrac{v}{a} - v_0$`,R`$t = \dfrac{v - v_0}{a}$`,R`$t = a(v - v_0)$`,R`$t = \dfrac{v + v_0}{a}$`],a:1,why:R`Resta $v_0$ y luego divide entre $a$.`},
  {id:"a1p6",tag:"despejar",text:R`Volumen de un cilindro: $V = \pi r^2 h$. Despeja $r$.`,opts:[R`$r = \dfrac{V}{\pi h}$`,R`$r = \sqrt{\dfrac{V}{\pi h}}$`,R`$r = \dfrac{\sqrt{V}}{\pi h}$`,R`$r = \left(\dfrac{V}{\pi h}\right)^2$`],a:1,why:R`Divide entre $\pi h$ para dejar $r^2$ solo; la raíz deshace el cuadrado.`},
  {id:"a1p7",tag:"despejar",text:R`Interés simple: $I = C\,i\,t$. Despeja $t$.`,opts:[R`$t = I - C\,i$`,R`$t = \dfrac{C\,i}{I}$`,R`$t = \dfrac{I}{C\,i}$`,R`$t = I\,C\,i$`],a:2,why:R`$t$ está multiplicada por $C$ y por $i$: divide entre los dos.`}
 ],
 ticket:[
  {id:"a1t1",tag:"resolver",text:R`$7 - 2x = 15$`,opts:["$x = 4$","$x = -4$","$x = 11$","$x = -11$"],a:1,why:R`$-2x = 8 \Rightarrow x = -4$.`},
  {id:"a1t2",tag:"despejar",text:R`Energía cinética: $E = \tfrac12 m v^2$. Despeja $m$.`,opts:[R`$m = \dfrac{2E}{v^2}$`,R`$m = \dfrac{E}{2v^2}$`,R`$m = 2E\,v^2$`,R`$m = \sqrt{2E}$`],a:0,why:R`Multiplica por 2 y divide entre $v^2$.`},
  {id:"a1t3",tag:"despejar",text:R`$y = \dfrac{x + 3}{2}$. Despeja $x$.`,opts:[R`$x = \dfrac{y}{2} - 3$`,R`$x = 2y + 3$`,R`$x = 2y - 3$`,R`$x = 2(y - 3)$`],a:2,why:R`Multiplica por 2: $2y = x + 3$. Resta 3.`}
 ]
};

/* ===================== A2 ===================== */
DATA.sessions.A2 = {
 date:"mar 17 nov", title:"¿Qué caso es? Factorización",
 lead:"Factorizar es reconocer el caso antes de mover un solo término. Siempre empieza por el factor común.",
 confPrompt:"¿Qué tan seguro te sientes reconociendo el caso de factorización?",
 lesson: R`
  <div class="timeline"><table class="undo"><thead><tr><th>Si ves…</th><th>Caso</th><th>Se factoriza</th></tr></thead><tbody>
   <tr><td>algo que se repite en todos los términos</td><td><strong>Factor común</strong> (siempre primero)</td><td>$ab + ac = a(b + c)$</td></tr>
   <tr><td>dos cuadrados restándose</td><td>Diferencia de cuadrados</td><td>$a^2 - b^2 = (a - b)(a + b)$</td></tr>
   <tr><td>tres términos: dos cuadrados y el doble producto</td><td>Trinomio cuadrado perfecto</td><td>$a^2 \pm 2ab + b^2 = (a \pm b)^2$</td></tr>
   <tr><td>$x^2 + bx + c$</td><td>Trinomio simple</td><td>$(x + m)(x + n)$ con $m + n = b$, $mn = c$</td></tr>
   <tr><td>$ax^2 + bx + c$ con $a \ne 1$</td><td>Trinomio general</td><td>busca dos números que sumen $b$ y multipliquen $ac$</td></tr>
   <tr><td>dos cubos</td><td>Suma o diferencia de cubos</td><td>$a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2)$</td></tr>
  </tbody></table></div>
  <p><strong>Ejemplo 1.</strong> $2x^2 - 18$</p>
  <ol class="steps"><li><span>Factor común 2: $2(x^2 - 9)$</span></li><li><span>Lo de adentro es diferencia de cuadrados: $2(x - 3)(x + 3)$</span></li></ol>
  <p><strong>Ejemplo 2.</strong> $x^2 + 5x + 6$: dos números que sumen 5 y multipliquen 6 son 2 y 3.</p>
  <ol class="steps"><li><span>$x^2 + 5x + 6 = (x + 2)(x + 3)$</span></li><li><span>Comprueba multiplicando: $x^2 + 3x + 2x + 6$ ✓</span></li></ol>
  <p><strong>Ejemplo 3.</strong> $2x^2 + 7x + 3$: $ac = 6$; dos números que sumen 7 y multipliquen 6 son 6 y 1.</p>
  <ol class="steps"><li><span>Abre el término del medio: $2x^2 + 6x + x + 3$</span></li><li><span>Agrupa: $2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$</span></li></ol>
  <div class="tip"><strong>Orden:</strong> factor común → cuenta términos (2: cuadrados o cubos; 3: trinomios) → revisa si algún factor se puede factorizar otra vez.</div>`,
 practice:[
  {id:"a2p1",tag:"reconocer",text:R`¿Qué caso es $x^2 - 49$?`,opts:["Factor común","Diferencia de cuadrados","Trinomio cuadrado perfecto","Diferencia de cubos"],a:1,why:R`$x^2 - 7^2 = (x - 7)(x + 7)$.`},
  {id:"a2p2",tag:"factorizar",text:R`Factoriza $x^2 - 7x + 12$`,opts:[R`$(x + 3)(x + 4)$`,R`$(x - 3)(x - 4)$`,R`$(x - 2)(x - 6)$`,R`$(x - 12)(x + 1)$`],a:1,why:R`Suman $-7$ y multiplican $12$: $-3$ y $-4$.`},
  {id:"a2p3",tag:"factorizar",text:R`Factoriza $4x^2 + 12x + 9$`,opts:[R`$(2x + 3)^2$`,R`$(4x + 3)(x + 3)$`,R`$(2x - 3)^2$`,R`$(2x + 9)(2x + 1)$`],a:0,why:R`$4x^2 = (2x)^2$, $9 = 3^2$ y $12x = 2(2x)(3)$: trinomio cuadrado perfecto.`},
  {id:"a2p4",tag:"factorizar",text:R`Factoriza completamente $3x^3 - 12x$`,opts:[R`$3x(x^2 - 4)$`,R`$3x(x - 2)(x + 2)$`,R`$3(x^3 - 4x)$`,R`$3x(x - 2)^2$`],a:1,why:R`Factor común $3x$ deja $x^2 - 4$, que todavía es diferencia de cuadrados.`},
  {id:"a2p5",tag:"encuentra el error",text:R`Un compañero escribió $x^2 + 9 = (x + 3)(x - 3)$. ¿Qué pasó?`,opts:["Está bien",R`$(x + 3)(x - 3) = x^2 - 9$; la suma de cuadrados no se factoriza así`,R`Debió ser $(x + 3)^2$`,R`Debió ser $(x + 9)(x + 1)$`],a:1,why:R`Multiplica para comprobar: sale $x^2 - 9$. $x^2 + 9$ no se factoriza con números reales.`},
  {id:"a2p6",tag:"factorizar",text:R`Factoriza $2x^2 + 7x + 3$ sin mirar el ejemplo`,opts:[R`$(2x + 3)(x + 1)$`,R`$(2x + 1)(x + 3)$`,R`$(2x - 1)(x - 3)$`,R`$(x + 7)(2x + 3)$`],a:1,why:R`$(2x + 1)(x + 3) = 2x^2 + 6x + x + 3$ ✓. La opción $(2x + 3)(x + 1)$ da $5x$ en el medio.`}
 ],
 ticket:[
  {id:"a2t1",tag:"factorizar",text:R`Factoriza $x^2 + 2x - 15$`,opts:[R`$(x - 5)(x + 3)$`,R`$(x + 5)(x - 3)$`,R`$(x + 15)(x - 1)$`,R`$(x - 5)(x - 3)$`],a:1,why:R`Suman 2 y multiplican $-15$: $5$ y $-3$.`},
  {id:"a2t2",tag:"factorizar",text:R`Factoriza $25x^2 - 1$`,opts:[R`$(5x - 1)^2$`,R`$(25x - 1)(x + 1)$`,R`$(5x - 1)(5x + 1)$`,R`No se puede`],a:2,why:R`$(5x)^2 - 1^2$.`},
  {id:"a2t3",tag:"factorizar",text:R`Factoriza $x^3 - 8$`,opts:[R`$(x - 2)^3$`,R`$(x - 2)(x^2 + 2x + 4)$`,R`$(x - 2)(x^2 + 4)$`,R`$(x - 2)(x^2 - 2x + 4)$`],a:1,why:R`Diferencia de cubos con $a = x$, $b = 2$: $(a - b)(a^2 + ab + b^2)$.`}
 ]
};

/* ===================== A3 ===================== */
DATA.sessions.A3 = {
 date:"sáb 21 nov", title:"Ecuaciones de primer y segundo grado",
 lead:"Despejar resuelve las de primer grado; factorizar o la fórmula general resuelven las de segundo.",
 confPrompt:"¿Qué tan seguro te sientes resolviendo ecuaciones de segundo grado?",
 lesson: R`
  <p><strong>Primer grado:</strong> quita paréntesis y denominadores, agrupa las $x$ a un lado y despeja.</p>
  <p><strong>Segundo grado:</strong> iguala a cero y elige un camino.</p>
  <p><strong>Ejemplo 1, factorizando.</strong> $x^2 - 5x + 6 = 0$</p>
  <ol class="steps"><li><span>Factoriza: $(x - 2)(x - 3) = 0$</span></li><li><span>Si un producto es cero, algún factor es cero: $x = 2$ o $x = 3$</span></li></ol>
  <p><strong>Ejemplo 2, fórmula general.</strong> $2x^2 + 3x - 2 = 0$, con $a = 2$, $b = 3$, $c = -2$:</p>
  <p style="text-align:center">$x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$</p>
  <ol class="steps"><li><span>Discriminante: $b^2 - 4ac = 9 + 16 = 25$</span></li><li><span>$x = \dfrac{-3 \pm 5}{4}$, así que $x = \tfrac12$ o $x = -2$</span></li></ol>
  <div class="tip"><strong>El discriminante avisa:</strong> si $b^2 - 4ac > 0$ hay dos soluciones, si es $0$ hay una, si es negativo no hay soluciones reales. Y nunca dividas entre $x$: puedes perder la solución $x = 0$.</div>`,
 practice:[
  {id:"a3p1",tag:"resolver",text:R`$3(x - 2) = 2x + 5$`,opts:["$x = 3$","$x = 11$","$x = 7$","$x = -1$"],a:1,why:R`$3x - 6 = 2x + 5 \Rightarrow x = 11$.`},
  {id:"a3p2",tag:"resolver",text:R`$x^2 - 9x + 20 = 0$`,opts:[R`$x = 4$ y $x = 5$`,R`$x = -4$ y $x = -5$`,R`$x = 2$ y $x = 10$`,R`$x = 20$`],a:0,why:R`$(x - 4)(x - 5) = 0$.`},
  {id:"a3p3",tag:"resolver",text:R`$x^2 = 5x$`,opts:[R`$x = 5$`,R`$x = 0$ y $x = 5$`,R`$x = \pm 5$`,R`$x = \sqrt5$`],a:1,why:R`$x^2 - 5x = 0 \Rightarrow x(x - 5) = 0$. Si divides entre $x$ pierdes $x = 0$.`},
  {id:"a3p4",tag:"discriminante",text:R`¿Cuántas soluciones reales tiene $x^2 + 2x + 5 = 0$?`,opts:["Dos","Una","Ninguna","Infinitas"],a:2,why:R`$b^2 - 4ac = 4 - 20 = -16 < 0$.`},
  {id:"a3p5",tag:"fórmula general",text:R`$3x^2 - x - 2 = 0$`,opts:[R`$x = 1$ y $x = -\tfrac23$`,R`$x = -1$ y $x = \tfrac23$`,R`$x = 2$ y $x = -3$`,R`$x = \tfrac16$`],a:0,why:R`$b^2 - 4ac = 1 + 24 = 25$, $x = \frac{1 \pm 5}{6}$.`},
  {id:"a3p6",tag:"plantear",text:R`Un rectángulo tiene el largo 3 m mayor que el ancho y área 40 m². ¿Cuánto mide el ancho?`,opts:["5 m","8 m","4 m","10 m"],a:0,why:R`$x(x + 3) = 40 \Rightarrow x^2 + 3x - 40 = 0 \Rightarrow (x + 8)(x - 5) = 0$. Un ancho no es negativo: $x = 5$.`}
 ],
 ticket:[
  {id:"a3t1",tag:"resolver",text:R`$\dfrac{x + 1}{2} = \dfrac{x - 3}{3} + 2$`,opts:["$x = 3$","$x = 9$","$x = -3$","$x = 15$"],a:0,why:R`Multiplica por 6: $3x + 3 = 2x - 6 + 12 \Rightarrow x = 3$.`},
  {id:"a3t2",tag:"resolver",text:R`$x^2 + x - 12 = 0$`,opts:[R`$x = -3$ y $x = 4$`,R`$x = 3$ y $x = -4$`,R`$x = 2$ y $x = -6$`,R`$x = 12$`],a:1,why:R`$(x + 4)(x - 3) = 0$.`},
  {id:"a3t3",tag:"resolver",text:R`$2x^2 - 8 = 0$`,opts:[R`$x = 2$`,R`$x = \pm 2$`,R`$x = \pm 4$`,R`$x = 4$`],a:1,why:R`$x^2 = 4 \Rightarrow x = \pm 2$. La raíz cuadrada da dos signos.`}
 ]
};

/* ===================== B1 ===================== */
DATA.sessions.B1 = {
 date:"jue 19 nov", title:"Propiedades de exponentes y logaritmos",
 lead:"Un logaritmo es un exponente: $\\log_b x$ responde a qué potencia hay que elevar $b$ para obtener $x$.",
 confPrompt:"¿Qué tan seguro te sientes usando las propiedades de los logaritmos?",
 lesson: R`
  <p style="text-align:center;font-size:1.1rem">$\log_b x = y \iff b^y = x$</p>
  <p>Ejemplo: $\log_2 8 = 3$ porque $2^3 = 8$. Con $\log$ (sin base) la base es 10; con $\ln$ la base es $e \approx 2.718$.</p>
  <div class="timeline"><table class="undo"><thead><tr><th>Exponentes</th><th>Logaritmos (la misma idea)</th></tr></thead><tbody>
   <tr><td>$a^m \cdot a^n = a^{m+n}$</td><td>$\log_b(MN) = \log_b M + \log_b N$</td></tr>
   <tr><td>$\dfrac{a^m}{a^n} = a^{m-n}$</td><td>$\log_b\!\left(\dfrac{M}{N}\right) = \log_b M - \log_b N$</td></tr>
   <tr><td>$(a^m)^n = a^{mn}$</td><td>$\log_b(M^p) = p\,\log_b M$</td></tr>
   <tr><td>$a^0 = 1$</td><td>$\log_b 1 = 0$, $\;\log_b b = 1$</td></tr>
   <tr><td>$a^{-n} = \dfrac{1}{a^n}$, $\;a^{1/n} = \sqrt[n]{a}$</td><td>Cambio de base: $\log_b x = \dfrac{\ln x}{\ln b}$</td></tr>
  </tbody></table></div>
  <p><strong>Ejemplo.</strong> Expande $\log_3\!\left(\dfrac{9x^2}{y}\right)$:</p>
  <ol class="steps"><li><span>Cociente: $\log_3(9x^2) - \log_3 y$</span></li><li><span>Producto: $\log_3 9 + \log_3 x^2 - \log_3 y$</span></li><li><span>Potencia y $\log_3 9 = 2$: $2 + 2\log_3 x - \log_3 y$</span></li></ol>
  <div class="tip"><strong>Error clásico:</strong> $\log(M + N)$ <em>no</em> es $\log M + \log N$. Las propiedades son para productos, cocientes y potencias, nunca para sumas.</div>`,
 practice:[
  {id:"b1p1",tag:"evaluar",text:R`$\log_2 32$`,opts:["$16$","$5$","$4$","$6$"],a:1,why:R`$2^5 = 32$.`},
  {id:"b1p2",tag:"exponentes",text:R`Simplifica $\dfrac{x^3 \cdot x^{-5}}{x^2}$`,opts:[R`$x^{-4}$`,R`$x^{0}$`,R`$x^{-15}$`,R`$x^{4}$`],a:0,why:R`$3 + (-5) - 2 = -4$, es decir $\frac{1}{x^4}$.`},
  {id:"b1p3",tag:"exponentes",text:R`$8^{2/3}$`,opts:["$\\tfrac{16}{3}$","$4$","$2$","$64$"],a:1,why:R`$\sqrt[3]{8} = 2$ y $2^2 = 4$.`},
  {id:"b1p4",tag:"expandir",text:R`Expande $\log\!\left(\dfrac{x^2 y}{z}\right)$`,opts:[R`$2\log x + \log y - \log z$`,R`$\log x^2 \cdot \log y - \log z$`,R`$2\log x \cdot \log y / \log z$`,R`$2\log(x + y - z)$`],a:0,why:R`Producto → suma, cociente → resta, potencia → multiplica.`},
  {id:"b1p5",tag:"encuentra el error",text:R`Un compañero escribió $\log(x + 3) = \log x + \log 3$. ¿Qué pasó?`,opts:["Está bien","La propiedad del producto no aplica a sumas",R`Debió ser $3\log x$`,R`Debió ser $\log x - \log 3$`],a:1,why:R`$\log x + \log 3 = \log(3x)$, no $\log(x + 3)$. $\log(x + 3)$ no se puede separar.`},
  {id:"b1p6",tag:"evaluar",text:R`$\log_3\!\left(\tfrac19\right)$`,opts:["$2$","$-2$","$\\tfrac12$","$-3$"],a:1,why:R`$3^{-2} = \frac19$.`},
  {id:"b1p7",tag:"condensar",text:R`Escribe como un solo logaritmo: $\ln 5 + 2\ln 3$`,opts:[R`$\ln 11$`,R`$\ln 30$`,R`$\ln 45$`,R`$\ln 225$`],a:2,why:R`$2\ln 3 = \ln 9$ y $\ln 5 + \ln 9 = \ln 45$.`}
 ],
 ticket:[
  {id:"b1t1",tag:"evaluar",text:R`$\log_5 125$`,opts:["$25$","$3$","$5$","$\\tfrac13$"],a:1,why:R`$5^3 = 125$.`},
  {id:"b1t2",tag:"exponentes",text:R`$(2x^3)^2$`,opts:[R`$2x^6$`,R`$4x^5$`,R`$4x^6$`,R`$2x^9$`],a:2,why:R`El cuadrado afecta al 2 y a $x^3$: $4x^6$.`},
  {id:"b1t3",tag:"propiedades",text:R`$\log_2 40 - \log_2 5$`,opts:["$35$","$3$","$8$","$\\log_2 35$"],a:1,why:R`$\log_2 \frac{40}{5} = \log_2 8 = 3$.`}
 ]
};

/* ===================== B2 ===================== */
DATA.sessions.B2 = {
 date:"lun 23 nov", title:"Ecuaciones exponenciales",
 lead:"Cuando la incógnita está en el exponente, el logaritmo es la operación inversa que la libera.",
 confPrompt:"¿Qué tan seguro te sientes resolviendo ecuaciones exponenciales?",
 lesson: R`
  <p><strong>Paso 0, siempre:</strong> aísla la potencia, como en el reto A.</p>
  <p><strong>Camino 1: igualar bases.</strong> $2^{x+1} = 8$</p>
  <ol class="steps"><li><span>$8 = 2^3$, así que $2^{x+1} = 2^3$</span></li><li><span>Bases iguales → exponentes iguales: $x + 1 = 3$, $x = 2$</span></li></ol>
  <p><strong>Camino 2: tomar logaritmo.</strong> $5 \cdot 3^x = 100$</p>
  <ol class="steps"><li><span>Aísla: $3^x = 20$</span></li><li><span>Logaritmo a ambos lados: $\ln 3^x = \ln 20$, o sea $x\ln 3 = \ln 20$</span></li><li><span>Despeja: $x = \dfrac{\ln 20}{\ln 3} \approx 2.73$</span></li></ol>
  <p><strong>Aplicación: interés compuesto.</strong> $A = P(1 + r)^t$. ¿En cuánto tiempo se duplican \$1000 al 6 % anual?</p>
  <ol class="steps"><li><span>$2000 = 1000(1.06)^t \Rightarrow 1.06^t = 2$</span></li><li><span>$t = \dfrac{\ln 2}{\ln 1.06} \approx 11.9$ años</span></li></ol>
  <div class="tip">No multipliques el coeficiente por la base: $2 \cdot 3^x$ <em>no</em> es $6^x$. Primero divide entre 2.</div>`,
 practice:[
  {id:"b2p1",tag:"igualar bases",text:R`$3^{2x - 1} = 27$`,opts:["$x = 1$","$x = 2$","$x = 13$","$x = \\tfrac32$"],a:1,why:R`$27 = 3^3$: $2x - 1 = 3 \Rightarrow x = 2$.`},
  {id:"b2p2",tag:"igualar bases",text:R`$4^x = 8$`,opts:["$x = 2$","$x = \\tfrac32$","$x = \\tfrac23$","$x = 3$"],a:1,why:R`$2^{2x} = 2^3 \Rightarrow x = \frac32$.`},
  {id:"b2p3",tag:"logaritmo",text:R`$2^x = 10$`,opts:[R`$x = 5$`,R`$x = \dfrac{\ln 10}{\ln 2} \approx 3.32$`,R`$x = \ln\!\left(\dfrac{10}{2}\right) \approx 1.61$`,R`$x = \sqrt{10}$`],a:1,why:R`$x\ln 2 = \ln 10$. Ojo: $\frac{\ln 10}{\ln 2}$ no es $\ln\frac{10}{2}$.`},
  {id:"b2p4",tag:"aislar",text:R`$3e^x + 2 = 14$`,opts:[R`$x = \ln 4 \approx 1.39$`,R`$x = \ln 12$`,R`$x = 4$`,R`$x = \dfrac{\ln 14}{3}$`],a:0,why:R`$3e^x = 12 \Rightarrow e^x = 4 \Rightarrow x = \ln 4$.`},
  {id:"b2p5",tag:"encuentra el error",text:R`Un compañero resolvió $2 \cdot 3^x = 18$ escribiendo $6^x = 18$. ¿Qué pasó?`,opts:["Está bien","Debió dividir entre 2 primero: $3^x = 9$, $x = 2$","Debió restar 2","Debió escribir $3^{2x} = 18$"],a:1,why:R`El 2 multiplica la potencia, no la base. Aísla primero.`},
  {id:"b2p6",tag:"aplicación",text:R`Un cultivo tiene $P = 500\cdot 2^{t/3}$ bacterias ($t$ en horas). ¿Cuándo llega a 4000?`,opts:["$t = 8$ h","$t = 9$ h","$t = 3$ h","$t = 24$ h"],a:1,why:R`$2^{t/3} = 8 = 2^3 \Rightarrow t/3 = 3 \Rightarrow t = 9$.`}
 ],
 ticket:[
  {id:"b2t1",tag:"igualar bases",text:R`$5^{x + 2} = 125$`,opts:["$x = 3$","$x = 1$","$x = 25$","$x = -1$"],a:1,why:R`$x + 2 = 3$.`},
  {id:"b2t2",tag:"logaritmo",text:R`$e^{2x} = 7$`,opts:[R`$x = \dfrac{\ln 7}{2} \approx 0.97$`,R`$x = \ln\!\left(\dfrac72\right)$`,R`$x = 2\ln 7$`,R`$x = \dfrac{7}{2e}$`],a:0,why:R`$2x = \ln 7$.`},
  {id:"b2t3",tag:"aplicación",text:R`¿En cuánto tiempo se duplica un capital al 5 % anual compuesto?`,opts:["10 años","20 años",R`$\dfrac{\ln 2}{\ln 1.05} \approx 14.2$ años`,R`$\dfrac{2}{1.05} \approx 1.9$ años`],a:2,why:R`$1.05^t = 2 \Rightarrow t = \frac{\ln 2}{\ln 1.05}$.`}
 ]
};

/* ===================== B3 ===================== */
DATA.sessions.B3 = {
 date:"mié 25 nov", title:"Ecuaciones logarítmicas",
 lead:"Junta los logaritmos en uno solo, pásalo a forma exponencial y comprueba el dominio.",
 confPrompt:"¿Qué tan seguro te sientes resolviendo ecuaciones logarítmicas?",
 lesson: R`
  <p><strong>Ejemplo 1, a forma exponencial.</strong> $\log_2(x - 1) = 3$</p>
  <ol class="steps"><li><span>$x - 1 = 2^3 = 8$</span></li><li><span>$x = 9$. Comprueba: $\log_2 8 = 3$ ✓</span></li></ol>
  <p><strong>Ejemplo 2, juntar primero.</strong> $\log x + \log(x - 3) = 1$</p>
  <ol class="steps"><li><span>Producto: $\log[x(x - 3)] = 1$</span></li><li><span>Exponencial (base 10): $x^2 - 3x = 10$</span></li><li><span>Reto A: $x^2 - 3x - 10 = 0 \Rightarrow (x - 5)(x + 2) = 0$</span></li><li><span><strong>Dominio:</strong> $x = -2$ haría $\log(-2)$, que no existe. Solo queda $x = 5$.</span></li></ol>
  <p><strong>Ejemplo 3, mismo logaritmo a ambos lados.</strong> $\ln(2x + 1) = \ln(x + 4) \Rightarrow 2x + 1 = x + 4 \Rightarrow x = 3$.</p>
  <p><strong>Aplicación: pH.</strong> $\text{pH} = -\log[\text{H}^+]$. Si $[\text{H}^+] = 10^{-3}$, el pH es 3.</p>
  <div class="tip">El argumento de un logaritmo siempre debe ser positivo. <strong>Comprueba cada solución en la ecuación original.</strong></div>`,
 practice:[
  {id:"b3p1",tag:"resolver",text:R`$\log_3(x + 2) = 2$`,opts:["$x = 4$","$x = 7$","$x = 9$","$x = 1$"],a:1,why:R`$x + 2 = 3^2 = 9$.`},
  {id:"b3p2",tag:"resolver",text:R`$\ln x = 2$`,opts:[R`$x = 2e$`,R`$x = e^2 \approx 7.39$`,R`$x = \ln 2$`,R`$x = 100$`],a:1,why:R`$\ln$ tiene base $e$: $x = e^2$.`},
  {id:"b3p3",tag:"resolver",text:R`$\log(x + 2) + \log(x - 1) = 1$`,opts:[R`$x = 3$ y $x = -4$`,R`$x = 3$`,R`$x = -4$`,R`$x = 9$`],a:1,why:R`$(x + 2)(x - 1) = 10 \Rightarrow x^2 + x - 12 = 0 \Rightarrow x = 3$ o $x = -4$. Con $-4$ los argumentos son negativos.`},
  {id:"b3p4",tag:"resolver",text:R`$\log_2 x + \log_2(x - 2) = 3$`,opts:["$x = 4$","$x = -2$","$x = 4$ y $x = -2$","$x = 5$"],a:0,why:R`$x(x - 2) = 8 \Rightarrow (x - 4)(x + 2) = 0$. Solo $x = 4$ está en el dominio.`},
  {id:"b3p5",tag:"encuentra el error",text:R`Un compañero resolvió $\log x + \log(x - 3) = 1$ y respondió "$x = 5$ y $x = -2$". ¿Qué pasó?`,opts:["Está bien","No comprobó el dominio: $x = -2$ no sirve","Debió sumar los argumentos","Se equivocó al factorizar"],a:1,why:R`$\log(-2)$ no existe en los reales. La única solución es $x = 5$.`},
  {id:"b3p6",tag:"aplicación",text:R`Una solución tiene pH 4. ¿Cuál es $[\text{H}^+]$?`,opts:[R`$4$`,R`$10^{4}$`,R`$10^{-4}$`,R`$-4$`],a:2,why:R`$-\log[\text{H}^+] = 4 \Rightarrow [\text{H}^+] = 10^{-4}$.`}
 ],
 ticket:[
  {id:"b3t1",tag:"resolver",text:R`$\log_4(2x) = 2$`,opts:["$x = 4$","$x = 8$","$x = 16$","$x = 2$"],a:1,why:R`$2x = 4^2 = 16$.`},
  {id:"b3t2",tag:"resolver",text:R`$\log(3x - 2) = \log(x + 6)$`,opts:["$x = 2$","$x = 4$","$x = 8$","$x = -2$"],a:1,why:R`$3x - 2 = x + 6 \Rightarrow x = 4$. Ambos argumentos quedan en 10 ✓.`},
  {id:"b3t3",tag:"resolver",text:R`$\ln(x + 1) - \ln x = \ln 3$`,opts:[R`$x = 2$`,R`$x = \tfrac12$`,R`$x = 3$`,R`$x = \tfrac13$`],a:1,why:R`$\ln\frac{x + 1}{x} = \ln 3 \Rightarrow x + 1 = 3x \Rightarrow x = \frac12$.`}
 ]
};

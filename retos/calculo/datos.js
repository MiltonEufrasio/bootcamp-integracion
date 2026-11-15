const R = String.raw;
const DATA = {
 key: "profe-retos-calculo-v2",
 course: "Cálculo integral",
 headline: R`La integral <span class="mark">construye</span> cosas: sólidos y trabajo de ingeniería`,
 lead: "Seis sesiones cortas de autoestudio sobre aplicaciones de la integral: volúmenes de sólidos, trabajo, bombeo, presión y centroides. Lo que fallas hoy vuelve en la siguiente sesión.",
 bonus: "Completa las sesiones del reto y aprueba el quiz presencial de 15 minutos en la última semana de clase.",
 retos: [
  {L:"A", name:"Sólidos", idea:"Gira una región y la integral suma rebanadas: discos, arandelas o capas.", sessions:["A1","A2","A3"]},
  {L:"B", name:"La integral en ingeniería", idea:"Cuando la fuerza o la presión cambian, el producto se vuelve integral.", sessions:["B1","B2","B3"]}
 ],
 order: ["A1","A2","B1","A3","B2","B3"],
 sessions: {}
};

/* ===================== A1 ===================== */
DATA.sessions.A1 = {
 date:"dom 15 nov", title:"Discos y arandelas",
 lead:"Corta el sólido en rebanadas perpendiculares al eje: cada una es un disco (o un disco con hueco).",
 confPrompt:"¿Qué tan seguro te sientes planteando volúmenes por discos y arandelas?",
 lesson: R`
  <p><strong>Disco:</strong> si la región toca el eje de giro, cada rebanada es un disco de radio $R(x)$:</p>
  <p style="text-align:center">$V = \displaystyle\int_a^b \pi\,[R(x)]^2\,dx$</p>
  <p><strong>Arandela:</strong> si hay un hueco entre la región y el eje, resta el disco de adentro:</p>
  <p style="text-align:center">$V = \displaystyle\int_a^b \pi\left([R(x)]^2 - [r(x)]^2\right)dx$</p>
  <p>Los radios se miden <strong>desde el eje de giro</strong>.</p>
  <p><strong>Ejemplo 1.</strong> La región bajo $y = \sqrt{x}$, $0 \le x \le 4$, gira alrededor del eje $x$.</p>
  <ol class="steps"><li><span>Radio: $R = \sqrt{x}$, entonces $R^2 = x$</span></li><li><span>$V = \pi\displaystyle\int_0^4 x\,dx = \pi\cdot 8 = 8\pi$</span></li></ol>
  <p><strong>Ejemplo 2.</strong> La región entre $y = x$ y $y = x^2$ gira alrededor del eje $x$.</p>
  <ol class="steps"><li><span>Se cortan en $x = 0$ y $x = 1$. En ese tramo $x \ge x^2$: $R = x$, $r = x^2$</span></li><li><span>$V = \pi\displaystyle\int_0^1 (x^2 - x^4)\,dx = \pi\left(\tfrac13 - \tfrac15\right) = \tfrac{2\pi}{15}$</span></li></ol>
  <div class="tip"><strong>Receta:</strong> dibuja la región → traza una rebanada perpendicular al eje → mide $R$ (y $r$) desde el eje → pon los límites → integra.</div>`,
 prereq:[
  {id:"a1w1",tag:"integrar",text:R`$\displaystyle\int_0^2 x^2\,dx$`,opts:[R`$4$`,R`$\tfrac83$`,R`$\tfrac43$`,R`$8$`],a:1,why:R`$\left[\frac{x^3}{3}\right]_0^2 = \frac83$.`},
  {id:"a1w2",tag:"integrar",text:R`$\displaystyle\int_0^{\pi} \sin x\,dx$`,opts:[R`$0$`,R`$1$`,R`$2$`,R`$-2$`],a:2,why:R`$[-\cos x]_0^{\pi} = 1 - (-1) = 2$.`},
  {id:"a1w3",tag:"intersección",text:R`¿Dónde se cortan $y = x^2$ y $y = 2x$?`,opts:[R`$x = 0$ y $x = 2$`,R`$x = 2$`,R`$x = 0$ y $x = \tfrac12$`,R`$x = \pm\sqrt2$`],a:0,why:R`$x^2 = 2x \Rightarrow x(x - 2) = 0$.`},
  {id:"a1w4",tag:"área",text:R`Área entre $y = x$ y $y = x^2$ para $0 \le x \le 1$`,opts:[R`$\tfrac12$`,R`$\tfrac13$`,R`$\tfrac16$`,R`$\tfrac56$`],a:2,why:R`$\int_0^1 (x - x^2)\,dx = \frac12 - \frac13$. Arriba menos abajo.`}
 ],
 practice:[
  {id:"a1p1",tag:"plantear",text:R`La región bajo $y = x^2$, $0 \le x \le 2$, gira alrededor del eje $x$. ¿Qué integral da el volumen?`,opts:[R`$\pi\displaystyle\int_0^2 x^4\,dx$`,R`$\pi\displaystyle\int_0^2 x^2\,dx$`,R`$2\pi\displaystyle\int_0^2 x^3\,dx$`,R`$\pi\displaystyle\int_0^2 2x\,dx$`],a:0,why:R`Disco con $R = x^2$, así que $R^2 = x^4$.`},
  {id:"a1p2",tag:"calcular",text:R`Calcula ese volumen: $\pi\displaystyle\int_0^2 x^4\,dx$`,opts:[R`$\tfrac{32\pi}{5}$`,R`$\tfrac{8\pi}{3}$`,R`$16\pi$`,R`$\tfrac{32}{5}$`],a:0,why:R`$\pi\left[\frac{x^5}{5}\right]_0^2 = \frac{32\pi}{5}$.`},
  {id:"a1p3",tag:"calcular",text:R`La región bajo $y = x$, $0 \le x \le 3$, gira alrededor del eje $x$ (es un cono). Volumen:`,opts:[R`$27\pi$`,R`$9\pi$`,R`$3\pi$`,R`$\tfrac{9\pi}{2}$`],a:1,why:R`$\pi\int_0^3 x^2\,dx = 9\pi$. Coincide con $\frac13\pi r^2 h = \frac13\pi(9)(3)$.`},
  {id:"a1p4",tag:"arandela",text:R`La región entre $y = 2x$ y $y = x^2$ gira alrededor del eje $x$. Volumen:`,opts:[R`$\tfrac{64\pi}{15}$`,R`$\tfrac{4\pi}{3}$`,R`$\tfrac{32\pi}{5}$`,R`$\tfrac{16\pi}{15}$`],a:0,why:R`$R = 2x$, $r = x^2$ en $[0,2]$: $\pi\int_0^2(4x^2 - x^4)\,dx = \pi\left(\frac{32}{3} - \frac{32}{5}\right) = \frac{64\pi}{15}$.`},
  {id:"a1p5",tag:"encuentra el error",text:R`Un compañero planteó una arandela como $\pi\displaystyle\int_a^b (R - r)^2\,dx$. ¿Qué pasó?`,opts:["Está bien",R`Es $\pi\int (R^2 - r^2)\,dx$: se restan las áreas de los círculos, no los radios`,R`Falta multiplicar por $2\pi$`,R`Debía ser $\pi\int (R + r)^2\,dx$`],a:1,why:R`Área de la arandela $= \pi R^2 - \pi r^2$, que no es $\pi(R - r)^2$.`},
  {id:"a1p6",tag:"eje y",text:R`La región entre $y = x^2$, $y = 4$ y $x = 0$ (primer cuadrante) gira alrededor del eje $y$. Volumen por discos:`,opts:[R`$8\pi$`,R`$16\pi$`,R`$\tfrac{32\pi}{5}$`,R`$4\pi$`],a:0,why:R`Rebanadas horizontales: $R = x = \sqrt{y}$, $\pi\int_0^4 y\,dy = 8\pi$. Si el eje es $y$, todo va en $y$.`}
 ],
 ticket:[
  {id:"a1t1",tag:"calcular",text:R`La región bajo $y = e^x$, $0 \le x \le 1$, gira alrededor del eje $x$.`,opts:[R`$\pi(e - 1)$`,R`$\tfrac{\pi(e^2 - 1)}{2}$`,R`$\pi(e^2 - 1)$`,R`$\tfrac{\pi e^2}{2}$`],a:1,why:R`$\pi\int_0^1 e^{2x}\,dx = \pi\left[\frac{e^{2x}}{2}\right]_0^1$.`},
  {id:"a1t2",tag:"calcular",text:R`La región bajo $y = \sqrt{4 - x^2}$, $-2 \le x \le 2$, gira alrededor del eje $x$.`,opts:[R`$\tfrac{32\pi}{3}$`,R`$16\pi$`,R`$\tfrac{16\pi}{3}$`,R`$8\pi$`],a:0,why:R`$\pi\int_{-2}^{2}(4 - x^2)\,dx = \pi\left(16 - \frac{16}{3}\right)$. Es una esfera de radio 2: $\frac43\pi(8)$ ✓.`},
  {id:"a1t3",tag:"arandela",text:R`La región entre $y = 1$ y $y = x^2$ gira alrededor del eje $x$.`,opts:[R`$\tfrac{8\pi}{5}$`,R`$\tfrac{4\pi}{3}$`,R`$\tfrac{2\pi}{5}$`,R`$2\pi$`],a:0,why:R`$R = 1$, $r = x^2$ en $[-1,1]$: $\pi\int_{-1}^{1}(1 - x^4)\,dx = \pi\left(2 - \frac25\right)$.`}
 ]
};

/* ===================== A2 ===================== */
DATA.sessions.A2 = {
 date:"mar 17 nov", title:"Capas cilíndricas",
 lead:"Si las rebanadas paralelas al eje son más cómodas, enróllalas: cada una es la pared de un cilindro.",
 confPrompt:"¿Qué tan seguro te sientes con el método de capas?",
 lesson: R`
  <p>Una franja vertical de ancho $dx$, a distancia $x$ del eje $y$ y de altura $h(x)$, al girar forma una capa con volumen $\approx 2\pi\cdot(\text{radio})\cdot(\text{altura})\cdot dx$:</p>
  <p style="text-align:center">$V = \displaystyle\int_a^b 2\pi\,(\text{radio})\,(\text{altura})\,dx$</p>
  <p><strong>Ejemplo 1.</strong> La región bajo $y = x^2$, $0 \le x \le 2$, gira alrededor del eje $y$.</p>
  <ol class="steps"><li><span>Radio $= x$, altura $= x^2$</span></li><li><span>$V = 2\pi\displaystyle\int_0^2 x\cdot x^2\,dx = 2\pi\cdot 4 = 8\pi$</span></li><li><span>Con arandelas habría que despejar $x = \sqrt{y}$ y partir la región. Capas es más directo.</span></li></ol>
  <p><strong>Ejemplo 2, otro eje.</strong> La misma región gira alrededor de la recta $x = -1$.</p>
  <ol class="steps"><li><span>Distancia de la franja al eje: $x - (-1) = x + 1$</span></li><li><span>$V = 2\pi\displaystyle\int_0^2 (x + 1)\,x^2\,dx = 2\pi\left(4 + \tfrac83\right) = \tfrac{40\pi}{3}$</span></li></ol>
  <div class="tip"><strong>Clave:</strong> en capas la franja es <em>paralela</em> al eje de giro. El radio es la distancia de la franja al eje, no siempre $x$.</div>`,
 practice:[
  {id:"a2p1",tag:"calcular",text:R`La región bajo $y = x - x^2$, $0 \le x \le 1$, gira alrededor del eje $y$.`,opts:[R`$\tfrac{\pi}{6}$`,R`$\tfrac{\pi}{12}$`,R`$\tfrac{\pi}{30}$`,R`$\tfrac{\pi}{3}$`],a:0,why:R`$2\pi\int_0^1 x(x - x^2)\,dx = 2\pi\left(\frac13 - \frac14\right) = \frac{\pi}{6}$.`},
  {id:"a2p2",tag:"plantear",text:R`La región bajo $y = \sqrt{x}$, $0 \le x \le 4$, gira alrededor del eje $y$. ¿Qué integral usa capas?`,opts:[R`$2\pi\displaystyle\int_0^4 x\sqrt{x}\,dx$`,R`$\pi\displaystyle\int_0^4 x\,dx$`,R`$2\pi\displaystyle\int_0^4 \sqrt{x}\,dx$`,R`$\pi\displaystyle\int_0^2 y^4\,dy$`],a:0,why:R`Radio $x$, altura $\sqrt{x}$.`},
  {id:"a2p3",tag:"calcular",text:R`Calcula $2\pi\displaystyle\int_0^4 x^{3/2}\,dx$`,opts:[R`$\tfrac{128\pi}{5}$`,R`$\tfrac{64\pi}{5}$`,R`$32\pi$`,R`$\tfrac{256\pi}{5}$`],a:0,why:R`$2\pi\cdot\frac25 x^{5/2}\Big|_0^4 = 2\pi\cdot\frac25\cdot 32$.`},
  {id:"a2p4",tag:"otro eje",text:R`La región bajo $y = x^2$, $0 \le x \le 1$, gira alrededor de $x = -1$.`,opts:[R`$\tfrac{7\pi}{6}$`,R`$\tfrac{\pi}{2}$`,R`$\tfrac{5\pi}{6}$`,R`$\tfrac{7\pi}{12}$`],a:0,why:R`$2\pi\int_0^1 (x + 1)x^2\,dx = 2\pi\left(\frac14 + \frac13\right) = \frac{7\pi}{6}$.`},
  {id:"a2p5",tag:"encuentra el error",text:R`Una región con $0 \le x \le 1$ gira alrededor de $x = 2$, y un compañero usó radio $= x$. ¿Qué pasó?`,opts:["Está bien",R`El radio es la distancia al eje: $2 - x$`,R`El radio es $x + 2$`,R`Con ese eje no se pueden usar capas`],a:1,why:R`La franja en $x$ está a $2 - x$ de la recta $x = 2$.`},
  {id:"a2p6",tag:"reconocer",text:R`¿Por qué conviene capas para girar la región bajo $y = \sin x$, $0 \le x \le \pi$, alrededor del eje $y$?`,opts:["Porque con capas no hay que integrar","Porque con discos habría que despejar $x$ de $y = \\sin x$ y partir la región","Porque los discos solo sirven con el eje $x$","No conviene; discos es más fácil"],a:1,why:R`Con capas: $2\pi\int_0^{\pi} x\sin x\,dx$, que se resuelve por partes y da $2\pi^2$.`}
 ],
 ticket:[
  {id:"a2t1",tag:"calcular",text:R`La región bajo $y = \dfrac{1}{x}$, $1 \le x \le 3$, gira alrededor del eje $y$.`,opts:[R`$2\pi\ln 3$`,R`$4\pi$`,R`$2\pi$`,R`$\pi\ln 3$`],a:1,why:R`$2\pi\int_1^3 x\cdot\frac1x\,dx = 2\pi(3 - 1)$.`},
  {id:"a2t2",tag:"calcular",text:R`La región bajo $y = 4 - x^2$, $0 \le x \le 2$, gira alrededor del eje $y$.`,opts:[R`$8\pi$`,R`$16\pi$`,R`$4\pi$`,R`$\tfrac{32\pi}{3}$`],a:0,why:R`$2\pi\int_0^2 (4x - x^3)\,dx = 2\pi(8 - 4)$.`},
  {id:"a2t3",tag:"plantear",text:R`Una región con $0 \le x \le 2$ gira alrededor de $x = 3$. ¿Cuál es el radio de la capa?`,opts:[R`$x$`,R`$3 - x$`,R`$x - 3$`,R`$x + 3$`],a:1,why:R`Distancia de $x$ a la recta $x = 3$ (que está a la derecha).`}
 ]
};

/* ===================== A3 ===================== */
DATA.sessions.A3 = {
 date:"sáb 21 nov", title:"¿Disco o capa? y secciones transversales",
 lead:"Elige el método por la dirección de la rebanada; y si el sólido no gira, suma áreas de secciones.",
 confPrompt:"¿Qué tan seguro te sientes eligiendo el método para un sólido?",
 lesson: R`
  <div class="timeline"><table class="undo"><thead><tr><th>Rebanada respecto al eje</th><th>Método</th><th>Fórmula</th></tr></thead><tbody>
   <tr><td>perpendicular</td><td>Discos o arandelas</td><td>$\pi\int (R^2 - r^2)$</td></tr>
   <tr><td>paralela</td><td>Capas</td><td>$2\pi\int (\text{radio})(\text{altura})$</td></tr>
  </tbody></table></div>
  <p>Elige la rebanada que deje las funciones fáciles de escribir: si te toca despejar algo difícil o partir la región, prueba el otro método.</p>
  <p><strong>Secciones transversales.</strong> Si conoces el área $A(x)$ de cada corte, $V = \displaystyle\int_a^b A(x)\,dx$. Con lado o diámetro $s$:</p>
  <div class="timeline"><table class="undo"><thead><tr><th>Sección</th><th>Área</th></tr></thead><tbody>
   <tr><td>cuadrado de lado $s$</td><td>$s^2$</td></tr><tr><td>semicírculo de diámetro $s$</td><td>$\tfrac{\pi s^2}{8}$</td></tr><tr><td>triángulo equilátero de lado $s$</td><td>$\tfrac{\sqrt3}{4}s^2$</td></tr>
  </tbody></table></div>
  <p><strong>Ejemplo.</strong> La base es el disco $x^2 + y^2 \le 1$ y los cortes perpendiculares al eje $x$ son cuadrados.</p>
  <ol class="steps"><li><span>Lado: de $-\sqrt{1 - x^2}$ a $\sqrt{1 - x^2}$, o sea $s = 2\sqrt{1 - x^2}$</span></li><li><span>$A(x) = 4(1 - x^2)$</span></li><li><span>$V = \displaystyle\int_{-1}^{1} 4(1 - x^2)\,dx = 4\left(2 - \tfrac23\right) = \tfrac{16}{3}$</span></li></ol>`,
 practice:[
  {id:"a3p1",tag:"reconocer",text:R`La región entre $y = \sqrt{x}$ y $y = x$ gira alrededor del eje $y$ y quieres integrar en $x$. ¿Qué método?`,opts:["Discos","Arandelas","Capas","Secciones cuadradas"],a:2,why:R`Franjas verticales ($dx$) son paralelas al eje $y$: capas.`},
  {id:"a3p2",tag:"calcular",text:R`Calcula ese volumen: $2\pi\displaystyle\int_0^1 x(\sqrt{x} - x)\,dx$`,opts:[R`$\tfrac{2\pi}{15}$`,R`$\tfrac{\pi}{15}$`,R`$\tfrac{4\pi}{15}$`,R`$\tfrac{\pi}{6}$`],a:0,why:R`$2\pi\left(\frac25 - \frac13\right) = \frac{2\pi}{15}$.`},
  {id:"a3p3",tag:"secciones",text:R`La base es la región bajo $y = \sqrt{x}$, $0 \le x \le 4$. Los cortes perpendiculares al eje $x$ son cuadrados de lado $\sqrt{x}$. Volumen:`,opts:[R`$8$`,R`$16$`,R`$8\pi$`,R`$\tfrac{16}{3}$`],a:0,why:R`$A(x) = (\sqrt{x})^2 = x$ y $\int_0^4 x\,dx = 8$. Sin $\pi$: no gira.`},
  {id:"a3p4",tag:"secciones",text:R`La base es el triángulo bajo $y = x$, $0 \le x \le 2$. Los cortes perpendiculares al eje $x$ son semicírculos de diámetro $x$. Volumen:`,opts:[R`$\tfrac{\pi}{3}$`,R`$\tfrac{2\pi}{3}$`,R`$\tfrac{8\pi}{3}$`,R`$\tfrac{\pi}{8}$`],a:0,why:R`$A = \frac{\pi x^2}{8}$ y $\int_0^2 \frac{\pi x^2}{8}\,dx = \frac{\pi}{8}\cdot\frac83$.`},
  {id:"a3p5",tag:"encuentra el error",text:R`Para girar una región alrededor del eje $x$, un compañero usó capas con franjas verticales $dx$. ¿Qué pasó?`,opts:["Está bien","Las franjas verticales son perpendiculares al eje $x$: con $dx$ van discos; para capas se integra en $y$","Le faltó el $\\pi$","Debió usar el eje $y$"],a:1,why:R`Capas exige franjas paralelas al eje. Alrededor del eje $x$, eso significa franjas horizontales ($dy$).`}
 ],
 ticket:[
  {id:"a3t1",tag:"reconocer",text:R`Girar la región bajo $y = e^{-x^2}$, $0 \le x \le 1$, alrededor del eje $y$. ¿Qué método conviene?`,opts:["Discos en $y$","Capas en $x$","Arandelas en $x$","No se puede"],a:1,why:R`Capas: $2\pi\int_0^1 x e^{-x^2}dx$, que sale por sustitución. Con discos habría que despejar $x$.`},
  {id:"a3t2",tag:"secciones",text:R`Base: disco de radio 2. Cortes perpendiculares al eje $x$: cuadrados. Volumen:`,opts:[R`$\tfrac{128}{3}$`,R`$\tfrac{64}{3}$`,R`$\tfrac{32}{3}$`,R`$16\pi$`],a:0,why:R`$s = 2\sqrt{4 - x^2}$, $A = 4(4 - x^2)$: $\int_{-2}^{2} 4(4 - x^2)\,dx = 4\cdot\frac{32}{3}$.`},
  {id:"a3t3",tag:"secciones",text:R`Base: región entre $y = 1 - x^2$ y el eje $x$. Cortes perpendiculares al eje $x$: cuadrados. Volumen:`,opts:[R`$\tfrac{16}{15}$`,R`$\tfrac43$`,R`$\tfrac{8}{15}$`,R`$\tfrac{16\pi}{15}$`],a:0,why:R`$\int_{-1}^{1}(1 - x^2)^2dx = 2\left(1 - \frac23 + \frac15\right) = \frac{16}{15}$.`}
 ]
};

/* ===================== B1 ===================== */
DATA.sessions.B1 = {
 date:"jue 19 nov", title:"Trabajo: resortes y cables",
 lead:"Trabajo = fuerza × distancia. Si la fuerza cambia, suma pedacitos: $W = \\int F(x)\\,dx$.",
 confPrompt:"¿Qué tan seguro te sientes planteando problemas de trabajo?",
 lesson: R`
  <p style="text-align:center">$W = \displaystyle\int_a^b F(x)\,dx$ &nbsp; (N·m = J)</p>
  <p><strong>Resortes (ley de Hooke):</strong> $F = kx$, con $x$ medido <strong>desde la longitud natural</strong>.</p>
  <p><strong>Ejemplo 1.</strong> Una fuerza de 10 N estira un resorte 0.2 m. ¿Cuánto trabajo cuesta estirarlo 0.3 m desde su longitud natural?</p>
  <ol class="steps"><li><span>$10 = k(0.2) \Rightarrow k = 50$ N/m</span></li><li><span>$W = \displaystyle\int_0^{0.3} 50x\,dx = 25(0.3)^2 = 2.25$ J</span></li></ol>
  <p><strong>Cables y cadenas:</strong> cada pedacito sube una distancia distinta.</p>
  <p><strong>Ejemplo 2.</strong> Un cable de 20 m que pesa 3 N/m cuelga de un edificio. ¿Cuánto trabajo cuesta subirlo todo?</p>
  <ol class="steps"><li><span>Un pedazo a profundidad $x$ pesa $3\,dx$ y sube $x$ metros</span></li><li><span>$W = \displaystyle\int_0^{20} 3x\,dx = \tfrac32(400) = 600$ J</span></li></ol>
  <div class="tip">Si además hay una carga al final, súmala aparte: su peso × la distancia completa.</div>`,
 practice:[
  {id:"b1p1",tag:"calcular",text:R`Una fuerza $F(x) = 3x^2$ N mueve un objeto de $x = 0$ a $x = 2$ m. Trabajo:`,opts:["$8$ J","$12$ J","$24$ J","$4$ J"],a:0,why:R`$\int_0^2 3x^2\,dx = [x^3]_0^2 = 8$.`},
  {id:"b1p2",tag:"resorte",text:R`6 N estiran un resorte 0.1 m. Trabajo para estirarlo 0.2 m desde su longitud natural:`,opts:["$1.2$ J","$0.6$ J","$2.4$ J","$12$ J"],a:0,why:R`$k = 60$ N/m. $\int_0^{0.2} 60x\,dx = 30(0.04)$.`},
  {id:"b1p3",tag:"resorte",text:R`Mismo resorte ($k = 60$ N/m): trabajo para pasar de 0.1 m a 0.3 m de estiramiento:`,opts:["$2.4$ J","$1.2$ J","$2.7$ J","$12$ J"],a:0,why:R`$30\left[(0.3)^2 - (0.1)^2\right] = 30(0.08)$.`},
  {id:"b1p4",tag:"encuentra el error",text:R`Un resorte mide 0.5 m en reposo y se estira hasta 0.7 m. Un compañero integró $\int_{0.5}^{0.7} kx\,dx$. ¿Qué pasó?`,opts:["Está bien","$x$ se mide desde la longitud natural: los límites son 0 y 0.2","Faltó multiplicar por $\\pi$","Debió integrar de 0 a 0.7"],a:1,why:R`En $F = kx$, $x$ es cuánto se estira, no la longitud total.`},
  {id:"b1p5",tag:"cable",text:R`Un cable de 10 m que pesa 2 N/m cuelga de una grúa. Trabajo para subirlo todo:`,opts:["$100$ J","$200$ J","$20$ J","$50$ J"],a:0,why:R`$\int_0^{10} 2x\,dx = 100$.`},
  {id:"b1p6",tag:"cable + carga",text:R`El mismo cable con una carga de 50 N en el extremo. Trabajo total:`,opts:["$600$ J","$150$ J","$500$ J","$1000$ J"],a:0,why:R`Cable: 100 J. Carga: $50 \times 10 = 500$ J.`}
 ],
 ticket:[
  {id:"b1t1",tag:"calcular",text:R`$F(x) = 5x + 2$ N de $x = 0$ a $x = 4$ m. Trabajo:`,opts:["$48$ J","$40$ J","$22$ J","$88$ J"],a:0,why:R`$\left[\frac52x^2 + 2x\right]_0^4 = 40 + 8$.`},
  {id:"b1t2",tag:"resorte",text:R`Un resorte con $k = 200$ N/m se estira 0.05 m desde su longitud natural. Trabajo:`,opts:["$0.25$ J","$0.5$ J","$10$ J","$5$ J"],a:0,why:R`$\frac12 k x^2 = 100(0.0025)$.`},
  {id:"b1t3",tag:"cable",text:R`Una cuerda de 8 m que pesa 5 N/m cuelga de un balcón. Trabajo para subirla:`,opts:["$160$ J","$320$ J","$40$ J","$80$ J"],a:0,why:R`$\int_0^8 5x\,dx = \frac52(64)$.`}
 ]
};

/* ===================== B2 ===================== */
DATA.sessions.B2 = {
 date:"lun 23 nov", title:"Bombeo de líquidos y fuerza hidrostática",
 lead:"Cada capa de agua sube una distancia distinta; cada franja de una compuerta soporta una presión distinta.",
 confPrompt:"¿Qué tan seguro te sientes con problemas de bombeo y presión?",
 lesson: R`
  <p>Para agua, $\rho g = 9800$ N/m³.</p>
  <p><strong>Bombeo:</strong> una capa delgada a altura $y$ pesa $\rho g\,A(y)\,dy$ y sube una distancia $d(y)$:</p>
  <p style="text-align:center">$W = \displaystyle\int \rho g\,A(y)\,d(y)\,dy$</p>
  <p><strong>Ejemplo 1.</strong> Un tanque cilíndrico de radio 1 m y altura 3 m está lleno. Se bombea el agua por el borde superior.</p>
  <ol class="steps"><li><span>Área de cada capa: $A = \pi(1)^2 = \pi$. Distancia que sube: $3 - y$</span></li><li><span>$W = 9800\pi\displaystyle\int_0^3 (3 - y)\,dy = 9800\pi(4.5) = 44100\pi \approx 138{,}500$ J</span></li></ol>
  <p><strong>Fuerza hidrostática:</strong> la presión a profundidad $h$ es $\rho g h$. Una franja horizontal de ancho $w(h)$:</p>
  <p style="text-align:center">$F = \displaystyle\int \rho g\,h\,w(h)\,dh$</p>
  <p><strong>Ejemplo 2.</strong> Compuerta rectangular de 2 m de ancho y 3 m de alto, con el borde superior en la superficie.</p>
  <ol class="steps"><li><span>$F = 9800\displaystyle\int_0^3 h\cdot 2\,dh = 9800\cdot 9 = 88{,}200$ N</span></li></ol>
  <div class="tip">Mide $y$ desde el fondo para bombear (distancia = altura de salida − $y$), y $h$ desde la superficie para presión.</div>`,
 practice:[
  {id:"b2p1",tag:"bombeo",text:R`Tanque rectangular con base de 2 m × 3 m y 4 m de altura, lleno. Trabajo para bombear por el borde:`,opts:["$470{,}400$ J","$235{,}200$ J","$940{,}800$ J","$78{,}400$ J"],a:0,why:R`$9800\cdot 6\int_0^4 (4 - y)\,dy = 9800\cdot 6\cdot 8$.`},
  {id:"b2p2",tag:"bombeo",text:R`Mismo tanque, pero el agua sale por un tubo 1 m por encima del borde:`,opts:["$705{,}600$ J","$470{,}400$ J","$529{,}200$ J","$588{,}000$ J"],a:0,why:R`Distancia $5 - y$: $\int_0^4 (5 - y)\,dy = 12$, y $9800\cdot 6\cdot 12$.`},
  {id:"b2p3",tag:"reconocer",text:R`En el ejemplo del cilindro, ¿qué representa $(3 - y)$?`,opts:["La altura del agua","La distancia que sube la capa ubicada a altura $y$","El radio del tanque","La presión"],a:1,why:R`La capa está en $y$ y debe llegar a 3 m.`},
  {id:"b2p4",tag:"presión",text:R`Compuerta rectangular de 4 m de ancho y 2 m de alto, borde superior en la superficie. Fuerza:`,opts:["$78{,}400$ N","$156{,}800$ N","$39{,}200$ N","$313{,}600$ N"],a:0,why:R`$9800\int_0^2 4h\,dh = 9800\cdot 8$.`},
  {id:"b2p5",tag:"presión",text:R`La misma compuerta, pero su borde superior está 1 m bajo la superficie. Fuerza:`,opts:["$156{,}800$ N","$78{,}400$ N","$117{,}600$ N","$235{,}200$ N"],a:0,why:R`$h$ va de 1 a 3: $9800\int_1^3 4h\,dh = 9800\cdot 16$.`},
  {id:"b2p6",tag:"encuentra el error",text:R`Un compañero calculó la fuerza sobre una compuerta como $\rho g \times (\text{profundidad máxima}) \times (\text{área})$. ¿Qué pasó?`,opts:["Está bien","La presión cambia con la profundidad; hay que integrar por franjas","Faltó multiplicar por $\\pi$","Debió usar la profundidad mínima"],a:1,why:R`Con la profundidad máxima sobreestima: arriba la presión es menor.`}
 ],
 ticket:[
  {id:"b2t1",tag:"bombeo",text:R`Cilindro de radio 2 m y altura 5 m, lleno. Trabajo para bombear por el borde:`,opts:[R`$490{,}000\pi$ J`,R`$245{,}000\pi$ J`,R`$98{,}000\pi$ J`,R`$980{,}000\pi$ J`],a:0,why:R`$9800\cdot 4\pi\int_0^5 (5 - y)\,dy = 9800\cdot 4\pi\cdot 12.5$.`},
  {id:"b2t2",tag:"presión",text:R`Compuerta cuadrada de 3 m × 3 m, borde superior en la superficie. Fuerza:`,opts:["$132{,}300$ N","$88{,}200$ N","$264{,}600$ N","$44{,}100$ N"],a:0,why:R`$9800\int_0^3 3h\,dh = 9800\cdot 13.5$.`},
  {id:"b2t3",tag:"bombeo",text:R`Cilindro de radio 1 m y altura 4 m con agua hasta 2 m. Trabajo para bombear por el borde:`,opts:[R`$58{,}800\pi$ J`,R`$19{,}600\pi$ J`,R`$78{,}400\pi$ J`,R`$39{,}200\pi$ J`],a:0,why:R`Solo hay agua de 0 a 2: $9800\pi\int_0^2 (4 - y)\,dy = 9800\pi\cdot 6$.`}
 ]
};

/* ===================== B3 ===================== */
DATA.sessions.B3 = {
 date:"mié 25 nov", title:"Centroides de regiones planas",
 lead:"El centroide es el punto de equilibrio de una placa: el promedio de la posición, pesado por el área.",
 confPrompt:"¿Qué tan seguro te sientes calculando centroides?",
 lesson: R`
  <p>Para la región bajo $y = f(x)$ en $[a, b]$, con área $A = \int_a^b f(x)\,dx$:</p>
  <p style="text-align:center">$\bar{x} = \dfrac{1}{A}\displaystyle\int_a^b x\,f(x)\,dx \qquad \bar{y} = \dfrac{1}{A}\displaystyle\int_a^b \tfrac12 [f(x)]^2\,dx$</p>
  <p><strong>Ejemplo.</strong> Región bajo $y = x^2$ en $[0, 1]$.</p>
  <ol class="steps"><li><span>$A = \int_0^1 x^2\,dx = \tfrac13$</span></li><li><span>$\bar{x} = 3\displaystyle\int_0^1 x^3\,dx = \tfrac34$</span></li><li><span>$\bar{y} = 3\displaystyle\int_0^1 \tfrac12 x^4\,dx = \tfrac{3}{10}$</span></li><li><span>Centroide: $\left(\tfrac34, \tfrac{3}{10}\right)$. Tiene sentido: la región es más ancha a la derecha y más pegada al eje $x$.</span></li></ol>
  <div class="tip"><strong>Simetría:</strong> si la región es simétrica respecto a una recta, el centroide está sobre ella. Úsalo para ahorrar cálculos.</div>`,
 practice:[
  {id:"b3p1",tag:"calcular",text:R`Región bajo $y = x$ en $[0, 2]$ (un triángulo). $\bar{x}$ es:`,opts:[R`$\tfrac43$`,R`$1$`,R`$\tfrac23$`,R`$\tfrac83$`],a:0,why:R`$A = 2$; $\frac12\int_0^2 x^2\,dx = \frac12\cdot\frac83$.`},
  {id:"b3p2",tag:"calcular",text:R`Mismo triángulo: $\bar{y}$ es:`,opts:[R`$\tfrac23$`,R`$\tfrac43$`,R`$1$`,R`$\tfrac13$`],a:0,why:R`$\frac12\int_0^2 \frac12 x^2\,dx = \frac12\cdot\frac43$. Coincide con la regla del triángulo: un tercio de la altura.`},
  {id:"b3p3",tag:"simetría",text:R`Región bajo $y = 4 - x^2$ en $[-2, 2]$. $\bar{x}$ es:`,opts:[R`$0$`,R`$1$`,R`$\tfrac85$`,R`$2$`],a:0,why:R`La región es simétrica respecto al eje $y$.`},
  {id:"b3p4",tag:"calcular",text:R`Misma región: $\bar{y}$ es ($A = \tfrac{32}{3}$):`,opts:[R`$\tfrac85$`,R`$2$`,R`$\tfrac43$`,R`$\tfrac{16}{5}$`],a:0,why:R`$\int_{-2}^{2}\frac12(4 - x^2)^2dx = \frac{256}{15}$, y $\frac{256/15}{32/3} = \frac85$.`},
  {id:"b3p5",tag:"calcular",text:R`Región bajo $y = \sqrt{x}$ en $[0, 4]$. $\bar{x}$ es ($A = \tfrac{16}{3}$):`,opts:[R`$\tfrac{12}{5}$`,R`$2$`,R`$\tfrac{64}{5}$`,R`$\tfrac{8}{3}$`],a:0,why:R`$\int_0^4 x^{3/2}dx = \frac{64}{5}$, y $\frac{3}{16}\cdot\frac{64}{5} = \frac{12}{5}$.`}
 ],
 ticket:[
  {id:"b3t1",tag:"simetría",text:R`Región bajo $y = 3$ en $[0, 4]$ (un rectángulo). Centroide:`,opts:[R`$(2, 1.5)$`,R`$(2, 3)$`,R`$(4, 3)$`,R`$(1.5, 2)$`],a:0,why:R`El centro del rectángulo. Comprueba con las fórmulas si quieres.`},
  {id:"b3t2",tag:"calcular",text:R`Región bajo $y = x^3$ en $[0, 1]$. $\bar{x}$ es:`,opts:[R`$\tfrac45$`,R`$\tfrac15$`,R`$\tfrac34$`,R`$\tfrac12$`],a:0,why:R`$A = \frac14$; $4\int_0^1 x^4\,dx = \frac45$.`},
  {id:"b3t3",tag:"calcular",text:R`Región bajo $y = 2x$ en $[0, 3]$. $\bar{x}$ es:`,opts:[R`$2$`,R`$\tfrac32$`,R`$1$`,R`$3$`],a:0,why:R`$A = 9$; $\frac19\int_0^3 2x^2\,dx = \frac{18}{9}$.`}
 ]
};

function calcularCalma() {
  const respiraciones = parseInt(document.getElementById("respiraciones").value);
  const suenio = parseInt(document.getElementById("suenio").value);
  const agua = parseInt(document.getElementById("agua").value);
  const animo = document.getElementById("animo").value;

  const resultado = document.getElementById("resultado");
  const valorIC = document.getElementById("valorIC");
  const mensaje = document.getElementById("mensaje");
  const listaTips = document.getElementById("listaTips");

  if (!respiraciones || respiraciones <= 0) {
    alert("Por favor ingresa tu ritmo de respiración.");
    return;
  }

  // Base: 100 puntos
  let indice = 100;

  // Penalizaciones y bonificaciones
  if (respiraciones > 18) indice -= 25;
  else if (respiraciones > 15) indice -= 10;
  else indice += 5;

  if (suenio < 6) indice -= 15;
  if (agua < 5) indice -= 10;

  if (animo === "estresado") indice -= 20;
  if (animo === "relajado") indice += 10;

  indice = Math.max(0, Math.min(indice, 100));

  // Mostrar resultado
  resultado.classList.remove("oculto");
  valorIC.textContent = indice;

  if (indice < 40) {
    mensaje.innerHTML = "⚠️ Tu nivel de calma es bajo. Necesitas relajarte y descansar.";
  } else if (indice < 70) {
    mensaje.innerHTML = "😌 Nivel medio. Estás bien, pero puedes mejorar tu respiración.";
  } else {
    mensaje.innerHTML = "💚 Excelente calma. Tu cuerpo y mente están equilibrados.";
  }

  // Tips personalizados
  const tips = [];
  if (respiraciones > 18)
    tips.push("Haz respiraciones lentas: inhala 4 seg, exhala 6 seg.");
  if (suenio < 6)
    tips.push("Intenta dormir 7-8 horas para restaurar el sistema nervioso.");
  if (agua < 5)
    tips.push("Bebe al menos 8 vasos de agua para mantenerte hidratado.");
  if (animo === "estresado")
    tips.push("Tómate 5 minutos para meditar o escuchar música tranquila.");
  tips.push("Prueba la técnica 4-7-8: inhala 4 seg, retén 7, exhala 8.");

  listaTips.innerHTML = tips.map(t => `<li>${t}</li>`).join("");

  // Animación visual
  const color = indice >= 70 ? "#2dd4bf" : indice >= 40 ? "#facc15" : "#ef4444";
  document.querySelector(".indicador").style.borderColor = color;
  valorIC.style.color = color;
}

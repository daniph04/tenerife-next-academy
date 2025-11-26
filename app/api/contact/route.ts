import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || "jorge@tenerifenextacademy.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "tna@notifications.tenerifenextacademy.com";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return Response.json({ message: "Invalid payload" }, { status: 400 });
  }

  const { name, email, institution, message, company } = body as Record<string, string>;

  // Honeypot
  if (company) {
    return Response.json({ message: "Blocked" }, { status: 400 });
  }

  if (!name || !email || !institution || !message) {
    return Response.json({ message: "Todos los campos son obligatorios." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return Response.json({ message: "Email no válido." }, { status: 400 });
  }

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY");
    return Response.json({ message: "Servicio no disponible" }, { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: "New contact from Tenerife Next Academy",
      text: `Name: ${name}\nEmail: ${email}\nInstitution: ${institution}\nMessage: ${message}`,
    });

    return Response.json({ message: "Enviado" });
  } catch (error) {
    console.error("Contact send error", error);
    return Response.json({ message: "No se pudo enviar. Intenta de nuevo." }, { status: 500 });
  }
}

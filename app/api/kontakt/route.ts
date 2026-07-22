import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validerKontaktSkjema, skjemaErGyldig } from "@/lib/validering/kontaktSkjema";

export async function POST(req: Request) {
  const data = await req.json();

  const feil = validerKontaktSkjema(data);
  if (!skjemaErGyldig(feil)) {
    return NextResponse.json({ ok: false, feil }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "send.one.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ONE_EPOST,
      pass: process.env.ONE_PASSORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Varige Bad – nettskjema" <${process.env.ONE_EPOST}>`,
      to: "hawraz@varigebad.no",
      replyTo: data.epost,
      subject: `Ny henvendelse: ${data.tjeneste}`,
      text:
        `Navn: ${data.navn}\n` +
        `E-post: ${data.epost}\n` +
        `Telefon: ${data.telefon}\n` +
        `Adresse: ${data.adresse}\n` +
        `Tjeneste: ${data.tjeneste}\n\n` +
        `Melding:\n${data.melding}`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

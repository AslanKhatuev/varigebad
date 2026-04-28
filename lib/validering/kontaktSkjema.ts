export type KontaktFormData = {
  navn: string;
  epost: string;
  telefon: string;
  adresse: string;
  tjeneste: string;
  melding: string;
};

export type KontaktFormFeil = Partial<Record<keyof KontaktFormData, string>>;

export function validerKontaktSkjema(data: KontaktFormData): KontaktFormFeil {
  const feil: KontaktFormFeil = {};

  // Navn — minst 2 bokstaver
  if (!data.navn.trim()) {
    feil.navn = "Navn er påkrevd.";
  } else if (data.navn.trim().length < 2) {
    feil.navn = "Navn må være minst 2 bokstaver.";
  }

  // E-post
  const epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.epost.trim()) {
    feil.epost = "E-post er påkrevd.";
  } else if (!epostRegex.test(data.epost)) {
    feil.epost = "Skriv inn en gyldig e-postadresse.";
  }

  // Telefon
  if (!data.telefon.trim()) {
    feil.telefon = "Telefon er påkrevd.";
  }

  // Adresse
  if (!data.adresse.trim()) {
    feil.adresse = "Adresse er påkrevd.";
  }

  // Tjeneste
  if (!data.tjeneste) {
    feil.tjeneste = "Velg en tjeneste.";
  }

  // Melding — minst 10, maks 256 tegn
  if (!data.melding.trim()) {
    feil.melding = "Melding er påkrevd.";
  } else if (data.melding.trim().length < 10) {
    feil.melding = "Meldingen må være minst 10 tegn.";
  } else if (data.melding.length > 256) {
    feil.melding = "Meldingen kan ikke være mer enn 256 tegn.";
  }

  return feil;
}

export function skjemaErGyldig(feil: KontaktFormFeil): boolean {
  return Object.keys(feil).length === 0;
}
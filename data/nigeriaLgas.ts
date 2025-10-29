// Minimal Nigeria LGA map. Expand this file to include more LGAs per state as needed.
// Structure: { [stateName: string]: string[] }

const nigeriaLgas: Record<string, string[]> = {
  "Lagos": [
    "Agege",
    "Ajeromi-Ifelodun",
    "Alimosho",
    "Amuwo-Odofin",
    "Apapa",
    "Surulere",
    "Eti-Osa",
    "Ikeja",
    "Kosofe",
    "Lagos Island",
    "Lagos Mainland",
    "Mushin",
    "Ojo",
    "Oshodi-Isolo",
    "Somolu",
    "Ifako-Ijaiye",
    "Shomolu",
    "Badagry",
    "Epe",
    "Ibeju-Lekki",
    "Ikorodu",
  ],
  "FCT": [
    "Abaji",
    "Abuja Municipal",
    "Bwari",
    "Gwagwalada",
    "Kuje",
    "Kwali",
  ],
  // Add other states below. Example skeleton:
  "Oyo": ["Ibadan North", "Ibadan South-West", "Egbeda", "Ibarapa East"],
  "Rivers": ["Port Harcourt", "Obio-Akpor", "Eleme", "Okrika"],
};

export default nigeriaLgas;

// Decorative pixel mosaics. Deterministic (seeded) so the server and the
// client render the same grid.

export interface MosaicCell {
  bg: string;
  o: number;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildMosaics() {
  const rnd = seededRandom(23);
  const cols = 28;
  const rows = 16;
  const pal = [
    "var(--blue)",
    "var(--blue)",
    "var(--amber)",
    "var(--amber)",
    "var(--dim)",
    "var(--coral)",
    "var(--green)",
    "var(--green)",
  ];

  // Hero panel: dense colour at the top that fades into the dark panel.
  const hero: MosaicCell[] = [];
  for (let r = 0; r < rows; r++) {
    const t = r / (rows - 1);
    for (let c = 0; c < cols; c++) {
      if (rnd() < Math.max(0, 1 - t * 1.25)) {
        hero.push({
          bg: pal[Math.floor(rnd() * pal.length)],
          o: +(Math.max(0.12, 1 - t * 1.05) * (0.65 + rnd() * 0.35)).toFixed(2),
        });
      } else {
        hero.push({
          bg: "var(--night-line)",
          o: +(rnd() < 0.55 ? Math.max(0, 0.7 - t * 0.6) : 0).toFixed(2),
        });
      }
    }
  }

  // Contact band: a single 48-cell strip along the bottom edge.
  const bandPal = [
    "var(--amber)",
    "var(--paper-raised)",
    "var(--ink)",
    "var(--coral)",
    "var(--green)",
    "var(--blue-deep)",
  ];
  const band: MosaicCell[] = [];
  for (let i = 0; i < 48; i++) {
    band.push({
      bg: bandPal[Math.floor(rnd() * bandPal.length)],
      o: +(rnd() < 0.7 ? 0.35 + rnd() * 0.65 : 0).toFixed(2),
    });
  }

  return { hero, band };
}

export const MOSAICS = buildMosaics();

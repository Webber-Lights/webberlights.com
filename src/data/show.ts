// Single source of truth for this season's show details.
// Update this file each year instead of editing components.

export const show = {
  season: { opens: "Nov 29", closes: "Jan 6" },
  hours: [
    { days: "Monday – Thursday", time: "5 – 9 PM" },
    { days: "Friday – Sunday", time: "5 – 10 PM" },
  ],
  radio: "89.5 FM",
  address: {
    line: "32 Minerva Ave, Cumberland, RI 02864",
    mapsQuery: "Webber+Lights,+32+Minerva+Ave,+Cumberland,+RI+02864",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=32+Minerva+Ave,+Cumberland,+RI+02864",
  },
  featuredVideo: { id: "59po-2htVlE", title: "Light of Christmas" },
  stats: [
    { value: "40,960", label: "pixels in our LED panel" },
    { value: "661", label: "pixels on this year's new prop" },
    { value: "2018", label: "the year it all started" },
  ],
  awards: [
    { year: 2020, title: "Kids Award" },
    { year: 2021, title: "Mayor's Award" },
    { year: 2022, title: "Best Youth Display" },
    { year: 2024, title: "Best in Show" },
    { year: 2025, title: "Best in Show" },
  ],
} as const;

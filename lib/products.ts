export type ProductColor = { name: string; hex: string };

export type Product = {
  id: string;
  name: string;
  category: "Men" | "Women" | "New Arrivals" | "Collections" | "Accessories";
  price: number;
  originalPrice?: number;
  badge?: string;
  images: string[];
  sizes: string[];
  colors: ProductColor[];
  description: string;
  details: string[];
  rating: number;
  reviews: number;
  popularity: number;
  isNew?: boolean;
  isTrending?: boolean;
  isCatalog?: boolean;
  listingImage?: string;
};

const IMG = {
  overcoat:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB8w_c1dWkxQuKSXvfjMxtewAuaaaEFRq5hidp_hUOwyfR5XcN1_v9-xXHqfRVlE_NZBUg-wZ6_yv4CBFk4xaMvIzj2KW_B3B7f27y4NcfuTr4mDlM2Hkk3YhYldut4VTxixVIcxsvFBAl3xSN4vXFSGsawgbmqrTWURJ2-JbnVjHlQignMQBvu4T0FLV9f5s6jDpKhCHAdkSF7sOzzZFKB2iHablICBrzO0ibAcs4",
  knit:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDghk41WgKZoirDTojVnSp54wy8owGsxq7X9buoVvFGgAJEeDkmEtMQH80-rte74coP4GWny-5-3jjn-P27CF5FmsTMUke3PW8mJXfi7j_0L_hMUhDeCkM-ApXdBx2XI9EIE8Oha42nlBrw6iqZRu1B2ZQEfX5UyzP1QeOKR2QjQzQaABBSxhxJdI4h21G3MKWu6soohMyCYOL_jRCs-6qpqJ23TqdewOvlYxEAi6g",
  trousers:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB_hM1-FjpvfywvnWBk3YD4u5QSED67_wreV0ewlnfKqREO_Rv5VjbMCq9-gePJbwOF32s3FVjnfcJgNQOi4AVtb7qvrFxxtl_Gkp5W2k6pKeOYZG8gq7AwN0-DFmoFDLtSGrOla4CeD3o8pQKFan4VtvdRM9ocnZ4DTptRzErtSImpQH6_fPz6f1lwZ_2YrfW0zzJoytZMFuHRqNWX4aIgNi4ztdd6wq85MF-MDvU",
  bag:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJer0aKdg7SCeSo8m8mg7itr8aF74NPFOYG-0OQw1Ls8Y9oPugdrfyJPgFVgH8APeoDXPhpsx18QWQWKGq0vpdyOMDYxMtywohyxkcvDqYQQEkdgQPSIBTyB-5ck35E1y72zPDpqd9Q8PWI3293EnJPbvnoLZxrQnXRFX93hR2elJhTT0H_4WkuMO31oWwPW_EELMYLdN0jl8C1IuALz_AlE1HpiRiOm-80DZbAAk",
  polo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdFptXlgoFYeqMWGPhJX9MIciKcXVFuGm-wXMiF-5Jtp1ONyVrnl7DbWQHFXdJS6qJQJsHIaCHqJmZ94xWT-cSqDZCNdQBMJH7Y65G-mG5BCUFPw5uu6HsfCZEenMl_SzRNU9Qdod2d2YUmWMTC5hf3htlA4z-GIWRqmXCASvjZxy4xSZ4nkGH1rvvSoJW6RX0muxxOKQgq3CVHsyZtN_qsk7eK3SezmOEXyjMdnQ",
  dress:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD2FoszOtPBXtBx9bqfK28XvIc2W0W4gEatMFMcSR-elx1WsBFwIPrKC7l5qw_gQMdyJxGiZmTrIZ-DiGHRLhT6vEALOZdDlBS4SQpyf2sUDkMvtJ2gC3grZPxLZGnPfBXwhNNRAmig8JwUY5GaYhbr2E0F_fdHlFa-oc_vY-x0obE_EGfw7NvqJTFRvFPnr8Dy5NLqwHFcakP7zOLkJAYxbb_X_f18xtloaYg89LQ",
  boot:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9C66sDqiVkmOlByxA7wRw4cvnForYtQS8uUerlSzwZfFCO8yJSTJSosZ6T178yblUQbyxU-8-L2ZCEoThpxI3lV9HUXnq7FVAil45BAS2FHVTX5kFhVRMMa8sCqOJAlM4HIdpHd_NtVpZ7lzOHZYcNhce3kXNBzc_n7ejOdpKQi17ZS8ZUDO8061RM9ziG5Vu_Ft6iXGL_9idyPzRbLmTzPQEjGtMRlqRcYGSmA4",
  trench:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBpOlHyKx_tXwKkjBs5USXu84w1ROYKj3moy8B-PTOVCboXsSy03aHrKsg4qEGwLtqpw0j6xmRAR6wzHJ2cqpGX6CZndBHSP2PdfoSFs1f_nefav1Y0gtP15GZaAGoS9p63B9wgkHeT6yfrH1tU8VTyxkjMbEkJWYaIaa9Al_-PmO0U5bbsnhu-gjrtvPNa69yHeiodyswkdq4mvGPK54pzxNHF2pIa88MsvL7V2Po",
  blazer:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCvZm44vaNr_1iTSa7El6HTICN94Hh-iBZgr3IUlO3DlhKQ52uZ1dvTpc9P37eM9Di6UWBLi3qWGJ9v12p45TbOwtkIwxfTQPePd8vYElcgXXFMVHYw3AKi_o85d2kr09GHxz6ioACCaHL0a877lJ0SzB1RhWg5jO3zawKYjktR0SWXr02tY3cUk6XyrllpYcq3xTuUJzmduEryk_nRxAiO2kc4tz2IWtiDKJwcw6U",
  silkShirt:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA9blN8HZuWKSTtv8UB2S-9DHJl-rwm6V4xldG0i1bD_VwxPo45c0mXrsWRiKmXZnp2awJll5S8Czh_bIb-T3OsuQdcsqrHP63CZr4VtrTDKcl4gkvF0dynWqs3Lmsdu2IHGKYZxhf8u0WnJXq83d_3LQwE7GQoV9W1J-ZYZOO3OLCxq9DELxxUTWHq8W6nD3gXvXSR_NFbKOXa9-TVH4Rqf6wvqUOcT3nIo7lazIY",
  casual:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAleJJTAwG5Apr2OrQ-NDzliLGELGiSvYcGAoGpD4cxKLt2BivyIGyzfBL2wZ3Arxx8WXOp9NK59KxBM9qdtvlCx8uwXlgt4z3y7TAV7CJKmqfqOmLueTNz-YluetcfKysUG3T9AY3d9c1hGsbmLfRRvhqhXGrfj8b1eUGDiyEgwovnPxGVeEEuybT9nmnHArbabHfnGg1d5VFG_w7c1yrWgnpbxa9lQSceKEJio4g",
  tote:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCqtZD1zXVz-lg-EDONrmpFFR7VnzmbjnY9iWbK6gZTGXLinc9JkbKOvsDGVHPRtqXMY1u-e3bsoeYsh-JZH3hCJZymDQMmwnxsgBQU18SHDEf9nnQChtwfN8roxOqNErWRz6hN-trNnKxJ2-_1HHybMITzxSEu82dQPGT5IUXqf-NpIj3tVaWIwG99xGe4lHc6d81fev07RhQoh3UzGmlNnWh8tpZHrXfm_kJjRF8",
};

export const products: Product[] = [
  {
    id: "p1",
    name: "Double-Breasted Cashmere Trench",
    category: "Men",
    price: 420,
    originalPrice: 580,
    badge: "-28%",
    images: [IMG.overcoat, IMG.blazer],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal", hex: "#1e2022" },
      { name: "Camel", hex: "#7a6d59" },
      { name: "Slate", hex: "#414240" },
    ],
    description:
      "A sculpted double-breasted trench cut from pure cashmere with horn buttons and a belted waist. Engineered for enduring poise across seasons.",
    details: ["100% cashmere", "Horn buttons", "Belted waist", "Dry clean only"],
    rating: 4.9,
    reviews: 84,
    popularity: 95,
    isTrending: true,
  },
  {
    id: "p2",
    name: "Ribbed Column Silk Sweater",
    category: "Women",
    price: 195,
    originalPrice: 260,
    badge: "-25%",
    images: [IMG.knit, IMG.dress],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Ivory", hex: "#f3efe8" },
      { name: "Espresso", hex: "#38332d" },
    ],
    description:
      "A seamless ribbed column sweater in a silk-merino blend with an architectural mock neck. Effortless drape, refined warmth.",
    details: ["70% silk, 30% merino", "Ribbed knit", "Mock neck", "Hand wash cold"],
    rating: 4.8,
    reviews: 62,
    popularity: 88,
    isNew: true,
  },
  {
    id: "p3",
    name: "Palazzo Worsted Wool Trouser",
    category: "Women",
    price: 240,
    badge: "LIMITED",
    images: [IMG.trousers],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Camel", hex: "#ab875e" },
      { name: "Obsidian", hex: "#1b1c1a" },
      { name: "Ivory", hex: "#ded9cf" },
    ],
    description:
      "High-waisted palazzo trousers in rich worsted wool with a clean front crease and buckle detail. Tailored for movement.",
    details: ["100% worsted wool", "High waist", "Buckle detail", "Dry clean only"],
    rating: 4.7,
    reviews: 41,
    popularity: 76,
  },
  {
    id: "p4",
    name: "The Sculpted Florentine Pochette",
    category: "Accessories",
    price: 360,
    badge: "COUTURE",
    images: [IMG.bag],
    sizes: ["One Size"],
    colors: [
      { name: "Obsidian", hex: "#1b1c1a" },
      { name: "Chestnut", hex: "#523c28" },
    ],
    description:
      "A structured shoulder pochette in full-grain Tuscan calfskin with brushed gold hardware. Architectural poise for evening.",
    details: ["Full-grain calfskin", "Brushed gold clasp", "Suede lining", "Dust bag included"],
    rating: 4.9,
    reviews: 29,
    popularity: 70,
  },
  {
    id: "p5",
    name: "Merino Knit Polo",
    category: "Men",
    price: 160,
    images: [IMG.polo],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Olive", hex: "#5a5a40" },
      { name: "Beige", hex: "#c9b99a" },
    ],
    description:
      "An extrafine 19.5 micron Australian merino knit polo with a refined collar. Lightweight, breathable, and impeccably finished.",
    details: ["100% merino wool", "19.5 micron", "Ribbed collar", "Machine wash gentle"],
    rating: 4.9,
    reviews: 84,
    popularity: 92,
    isTrending: true,
  },
  {
    id: "p6",
    name: "Ribbed Column Dress",
    category: "Women",
    price: 220,
    images: [IMG.dress],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Espresso", hex: "#38332d" },
      { name: "Ivory", hex: "#f3efe8" },
    ],
    description:
      "A floor-length ribbed column dress with an architectural neckline. Seamless knit that sculpts and moves with you.",
    details: ["Seamless knit", "Architectural neckline", "Floor length", "Hand wash cold"],
    rating: 4.9,
    reviews: 112,
    popularity: 90,
    isTrending: true,
  },
  {
    id: "p7",
    name: "Italian Leather Chelsea Boot",
    category: "Men",
    price: 340,
    images: [IMG.boot],
    sizes: ["40", "41", "42", "43", "44"],
    colors: [
      { name: "Chestnut", hex: "#523c28" },
      { name: "Obsidian", hex: "#1b1c1a" },
    ],
    description:
      "Goodyear-welted Chelsea boots in burnished Tuscan calfskin with a Vibram sole. Built to last a lifetime.",
    details: ["Goodyear welted", "Tuscan calfskin", "Vibram sole", "Leather care kit"],
    rating: 4.9,
    reviews: 67,
    popularity: 85,
    isTrending: true,
  },
  {
    id: "p8",
    name: "Sateen Trench Coat",
    category: "Women",
    price: 410,
    images: [IMG.trench],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Sage", hex: "#8a9a8a" },
      { name: "Stone", hex: "#c9c2b5" },
    ],
    description:
      "An oversized water-repellent trench in dense Japanese cotton sateen with horn buckle and structured epaulets.",
    details: ["Japanese cotton sateen", "Water-repellent", "Horn buckle", "Dry clean only"],
    rating: 4.8,
    reviews: 95,
    popularity: 80,
    isTrending: true,
  },
  {
    id: "p9",
    name: "Structured Wool Blazer",
    category: "Men",
    price: 480,
    originalPrice: 620,
    badge: "-22%",
    images: [IMG.blazer],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Obsidian", hex: "#1b1c1a" },
      { name: "Charcoal", hex: "#3a3a3a" },
    ],
    description:
      "A double-breasted structured blazer in obsidian wool with peak lapels. Razor-sharp tailoring for the modern wardrobe.",
    details: ["100% wool", "Peak lapels", "Double-breasted", "Dry clean only"],
    rating: 4.9,
    reviews: 53,
    popularity: 87,
    isNew: true,
  },
  {
    id: "p10",
    name: "Silk Twill Shirt",
    category: "Women",
    price: 210,
    images: [IMG.silkShirt],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Ecru", hex: "#f3efe8" },
      { name: "Ivory", hex: "#faf7f2" },
    ],
    description:
      "An architectural silk twill shirt with a relaxed drape and mother-of-pearl buttons. Effortless elevation.",
    details: ["100% silk twill", "Mother-of-pearl buttons", "Relaxed fit", "Dry clean only"],
    rating: 4.7,
    reviews: 38,
    popularity: 72,
  },
  {
    id: "p11",
    name: "Heavyweight Merino Knit Polo",
    category: "Men",
    price: 185,
    images: [IMG.casual],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Oat", hex: "#d9cfb8" },
      { name: "Brown", hex: "#5a4a3a" },
    ],
    description:
      "A relaxed oat-colored heavyweight merino knit polo with tailored drawcord trousers energy. Quiet luxury for everyday.",
    details: ["Heavyweight merino", "Ribbed cuffs", "Relaxed fit", "Hand wash cold"],
    rating: 4.8,
    reviews: 47,
    popularity: 78,
  },
  {
    id: "p12",
    name: "Tuscan Leather Tote",
    category: "Accessories",
    price: 450,
    images: [IMG.tote],
    sizes: ["One Size"],
    colors: [
      { name: "Obsidian", hex: "#1b1c1a" },
      { name: "Tan", hex: "#8a6a4a" },
    ],
    description:
      "A handcrafted Tuscan black calfskin tote with brass hardware. Spacious, structured, and endlessly refined.",
    details: ["Tuscan calfskin", "Brass hardware", "Suede lining", "Dust bag included"],
    rating: 4.9,
    reviews: 22,
    popularity: 68,
  },
  {
    id: "p13",
    name: "Archival Cashmere Scarf",
    category: "Collections",
    price: 140,
    badge: "ARCHIVE",
    images: [IMG.knit],
    sizes: ["One Size"],
    colors: [
      { name: "Ivory", hex: "#f3efe8" },
      { name: "Charcoal", hex: "#3a3a3a" },
    ],
    description:
      "A limited archival re-release of our signature cashmere scarf in severely limited yardage. Soft, generous, timeless.",
    details: ["100% cashmere", "Fringed ends", "Limited edition", "Dry clean only"],
    rating: 4.8,
    reviews: 19,
    popularity: 60,
    isNew: true,
  },
  {
    id: "p14",
    name: "Tailored Wide-Leg Pant",
    category: "Collections",
    price: 260,
    images: [IMG.trousers],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Camel", hex: "#ab875e" },
      { name: "Ivory", hex: "#ded9cf" },
    ],
    description:
      "A tailored wide-leg pant with a high waist and clean crease. Part of the new season collection.",
    details: ["Wool blend", "High waist", "Wide leg", "Dry clean only"],
    rating: 4.7,
    reviews: 33,
    popularity: 74,
  },
  {
    id: "atelier-wool-coat",
    name: "Atelier Double-Breasted Wool Coat",
    category: "Women",
    price: 490,
    originalPrice: 650,
    badge: "NEW",
    listingImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcPBUpcUAI6nrxlF94OH_gQ1Qvp0Nz5WtwbmzD_z2YkSZ1vatfrUiZ1QCziWj0EXQ23fieOFA3UBN77F0mBhn0DRQSzZHhInjzhoo-x2HnMVGV6pGoLx9G81SaL7GwQBbviFPSUGQp92oH-hJTzDDr1WSHKxGOElvWRXWUAsMt8gBepi0aUtWKe1yKx9NSYT1iqVJa9uHIHdhTh8UmeLFR4a4Nd0JO21rQSIlyKh0",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBR5lsT_PT-5yfoX2bpTREL4t3YC-c0EK379K17WGMUedgHjkSzIJq5KWlap42-vJxw7EpRyZ6tLmMvlaaYzzJH98oGzF_sNBKUYKI-FNQAcrlbvdQihRxea2BYKKjraoqqtoGi6rZJsIrD8RngyFvD8L3nKHO1z09jbVR_nmyila7MJVsa4dpL6VXQEoOVf5Ry_FMTs9L1UH6z7tLM3TGR1tpev5AjPqgO7QzYTX0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCDQ-PVa66BTGTpLNl17xmsXEOQNadym7k7uqAovuTcP6REH52XFhQ8OTKAw4OQoJYzTdS3Wh826yRsywKIKmwCSs2tYj2V4Td_1-a8SqS1zFFYVfLtHB7ebH1t-bMCsDIw9I7nrbNdauBXie7v5JRGOzIjeHvchxJZpRkuZARxnqXis90GpxRExyRu71LSbr5cGmbVMwzu4sWODfdbHoYPv31FGFu6Ep6Z5JUz7g",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEDYJ5f2JDVc8qDMAafOjo78doPqiUdo51p9gmcIjuIJFGgbFp4_EvDDCfKn3wLmr7U1O4XHsxvczSKdRkGgR6gqmZnpPgmjtjXV1Oc2N4IcOOnhOytrEeoybgMka9ESXQxPcOJ5bO1rAHdj-a3bNy1vohr23-CZXu1xH8dC0d4L-0hEEi0W_tACLTu5EXI542Btwn7kMkT2wadvacdp0uOxxf9XZ7EaeaU40Tzt0",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCsFOJQhwGE-aZqjHkNX66ORvgzesak1ElQfSLa3Y7m91NCtpP0OaegmopZupw177LH_AHutQxWzxuoyJ9ufp9HAVoGCbhQGADe9jALQHDFiwXqU9lcLE8edWNfYb8Zjov9ZP0BYOAbWUlPpdvO77AUw0DOlq33PmVLTnH2PKhLDup-Utd0nmXSgH0Trkusew8SV4FKlMDRZy5VncylsEFI8QM0umEmzkNa_mpPWrE",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtujrGeNRxjuZhK90TnBUjqfilwPvtUmm3_4XIkyiJ8qrjiatLIZ_ZdQ1-FHrmNMth8N7c9180QhqaIUP6klRmtHHKpriYyipI7YrwLibYQwaUyPZs-diCMrIv7hSGvA1D4l_ISWBe0kZ1CjExUrmemYXmhx1LXgkjT120N96GqOBpgN_NimcI34O97Jq8MauTxEVpyY2JJ47b1SRKL2Dt8crNHZJ0IZkQy-iuMmU",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Royal Camel", hex: "#9c6644" },
      { name: "Obsidian Charcoal", hex: "#2b2b2b" },
      { name: "Ivory Ecru", hex: "#e8e4dc" },
    ],
    description:
      "A double-breasted Italian virgin wool coat with architectural peaked lapels, horn buttons, and a relaxed tailored silhouette.",
    details: [
      "100% Virgin Italian Melange Wool",
      "Hand-finished pick stitching and buffalo horn buttons",
      "Cupro Bemberg lining",
      "Specialist dry clean only",
    ],
    rating: 4.9,
    reviews: 128,
    popularity: 100,
    isNew: true,
    isCatalog: true,
  },
  {
    id: "silk-charmeuse-slip",
    name: "Silk Charmeuse Evening Slip",
    category: "Women",
    price: 285,
    originalPrice: 380,
    badge: "BESTSELLER",
    listingImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDT4Z5YTO2BUnbiQIXlmD3Ji2YptdJCRPDDm1NEDaaI8hMQubBmapmQHoVpxOxTqCGgfGmtYwLINd-VTC8tknmdtDT1q-tIxz6w7s-nouH4iZ9k7q2lq4nW7BR7s9ozSQ53NhAmHJwa8mayaxd-eX_Jiwo2VCXZo9TP2M5ha1dHrPRZjuiUj_aG2k2iQhn6IIWfTR-3dmFDYwY15Ul5vs6NPNL9q7PtlYlTMs8YUA4",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDT4Z5YTO2BUnbiQIXlmD3Ji2YptdJCRPDDm1NEDaaI8hMQubBmapmQHoVpxOxTqCGgfGmtYwLINd-VTC8tknmdtDT1q-tIxz6w7s-nouH4iZ9k7q2lq4nW7BR7s9ozSQ53NhAmHJwa8mayaxd-eX_Jiwo2VCXZo9TP2M5ha1dHrPRZjuiUj_aG2k2iQhn6IIWfTR-3dmFDYwY15Ul5vs6NPNL9q7PtlYlTMs8YUA4",
    ],
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Champagne", hex: "#E8DEC8" },
      { name: "Obsidian", hex: "#0D0D0D" },
    ],
    description:
      "A bias-cut evening slip in fluid silk charmeuse, designed to drape softly with a refined, effortless line.",
    details: ["100% silk charmeuse", "Bias-cut silhouette", "Made in Italy", "Dry clean only"],
    rating: 4.9,
    reviews: 92,
    popularity: 96,
    isCatalog: true,
  },
  {
    id: "merino-cable-turtleneck",
    name: "Merino Wool Cable Turtleneck",
    category: "Women",
    price: 210,
    originalPrice: 280,
    badge: "-25%",
    listingImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkMidgXdEdM5dfaedMjI_a_Y28QLghljhCVXEpanuL3hiGPoHOgWqxYm8Sz7t3rD_ShckUi3pevUuW8ayTD9FKqZIRmKS0RtyAZRanxvqV4zC8EmJUa0UgahgOzhBKRFDVDTTpSeRJru0ytpv917pLuCEWEvEu1gGfWFX9q86fZq8CNJQ86LvFeTm_uzd0_5YzYEBRVdJtn07gZoSseQ_f8hCNSQOA_Bbo6gTwz4A",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkMidgXdEdM5dfaedMjI_a_Y28QLghljhCVXEpanuL3hiGPoHOgWqxYm8Sz7t3rD_ShckUi3pevUuW8ayTD9FKqZIRmKS0RtyAZRanxvqV4zC8EmJUa0UgahgOzhBKRFDVDTTpSeRJru0ytpv917pLuCEWEvEu1gGfWFX9q86fZq8CNJQ86LvFeTm_uzd0_5YzYEBRVdJtn07gZoSseQ_f8hCNSQOA_Bbo6gTwz4A",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Ecru", hex: "#E5DFD3" },
      { name: "Forest", hex: "#3F4839" },
      { name: "Obsidian", hex: "#272625" },
    ],
    description:
      "A substantial cable-knit turtleneck in soft extrafine merino, finished with a sculptural collar and tactile stitchwork.",
    details: ["Extrafine merino wool", "Cable-knit construction", "Ribbed trims", "Hand wash cold"],
    rating: 4.9,
    reviews: 76,
    popularity: 90,
    isCatalog: true,
  },
  {
    id: "wide-leg-wool-trousers",
    name: "Wide-Leg Tailored Wool Trousers",
    category: "Women",
    price: 245,
    originalPrice: 310,
    badge: "-21%",
    listingImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7TFPgC49dULarVBRN0qTpLJKXSTi7fdP3TaXyuXyndY14CtawX3f5gDGgbsaATbG2o1Rmt5YifjL0pl1d9FAWP8fee6cdjmgvXAkLdzVjqxH6Dur0BkzdwPQdr0F1WUl82AJqYex4pH5_DElWHZjBEfSwunHBpwjLyGg4wx_HzGatY4FYzfVGCz0lL-x_JvqupPN8tc0TMHNQn6qk3cK1LyD1S9rCo-99nF6Qknw",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7TFPgC49dULarVBRN0qTpLJKXSTi7fdP3TaXyuXyndY14CtawX3f5gDGgbsaATbG2o1Rmt5YifjL0pl1d9FAWP8fee6cdjmgvXAkLdzVjqxH6Dur0BkzdwPQdr0F1WUl82AJqYex4pH5_DElWHZjBEfSwunHBpwjLyGg4wx_HzGatY4FYzfVGCz0lL-x_JvqupPN8tc0TMHNQn6qk3cK1LyD1S9rCo-99nF6Qknw",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Charcoal", hex: "#424446" },
      { name: "Obsidian", hex: "#181919" },
      { name: "Stone", hex: "#A2978A" },
    ],
    description:
      "High-waisted, wide-leg trousers in Biella wool with a clean crease and an elegant, fluid drape.",
    details: ["Biella worsted wool", "High rise", "Wide-leg silhouette", "Dry clean only"],
    rating: 4.8,
    reviews: 63,
    popularity: 86,
    isCatalog: true,
  },
  {
    id: "atelier-leather-trench",
    name: "Structured Atelier Leather Trench",
    category: "Women",
    price: 780,
    badge: "LIMITED EDITION",
    listingImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHOuZYDyt2FnKNjlMyo2go84JK3pnWwXfWFscKMCy3r_RXiABgOk1KVwVI-ry-MNqnSDHMHYZ-ujHl0d-PYKx0KBQBrBZq98-agfwuJmp8eVjPLydab1LsaeQjWv-hRijrsGBhBl4mZuGKMTt8SK7xEan5WrsOHYtnFn6_H_QXweZ04O8-58mUwSVS7zdCuYGw4FWk6Fi9AoG-tH4Wbk44cuqqXAE5KH5Y6G_a07E",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHOuZYDyt2FnKNjlMyo2go84JK3pnWwXfWFscKMCy3r_RXiABgOk1KVwVI-ry-MNqnSDHMHYZ-ujHl0d-PYKx0KBQBrBZq98-agfwuJmp8eVjPLydab1LsaeQjWv-hRijrsGBhBl4mZuGKMTt8SK7xEan5WrsOHYtnFn6_H_QXweZ04O8-58mUwSVS7zdCuYGw4FWk6Fi9AoG-tH4Wbk44cuqqXAE5KH5Y6G_a07E",
    ],
    sizes: ["S", "M"],
    colors: [
      { name: "Obsidian", hex: "#111111" },
      { name: "Chestnut", hex: "#5C4033" },
    ],
    description:
      "A structured trench in supple lamb nappa leather, shaped with a belted waist and clean architectural lines.",
    details: ["Lamb nappa leather", "Belted silhouette", "Fully lined", "Professional leather clean"],
    rating: 5,
    reviews: 38,
    popularity: 82,
    isCatalog: true,
  },
  {
    id: "cashmere-lounge-set",
    name: "Ribbed Cashmere Lounge Set",
    category: "Women",
    price: 320,
    originalPrice: 400,
    badge: "-20%",
    listingImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGkyusju-NrS6lYnZl0NMDaBb8vC7VXiQZ0hFrLWJTbQatL-LTONvOr375rIr4pO2UrbHAQV7U_WQw04232hCWnwtq1Y5LJFC6Pj78-shOIR78hj5wpx7amfVs00Gfqo9NJNFCUucwzlR31YhGYyVJhT-YH1rxob-1x-ET8vfsqNdpEB6pW5SyNtZ5XlNaaBhEoJJpZc7iozpofjTANSpZfYgQq6YDQDNQaHTYJ-M",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGkyusju-NrS6lYnZl0NMDaBb8vC7VXiQZ0hFrLWJTbQatL-LTONvOr375rIr4pO2UrbHAQV7U_WQw04232hCWnwtq1Y5LJFC6Pj78-shOIR78hj5wpx7amfVs00Gfqo9NJNFCUucwzlR31YhGYyVJhT-YH1rxob-1x-ET8vfsqNdpEB6pW5SyNtZ5XlNaaBhEoJJpZc7iozpofjTANSpZfYgQq6YDQDNQaHTYJ-M",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Camel", hex: "#D6C5B3" },
      { name: "Ecru", hex: "#E5DFD3" },
      { name: "Charcoal", hex: "#3B3936" },
    ],
    description:
      "A coordinated ribbed cashmere set in exceptionally soft Grade-A yarn, made for a relaxed yet considered silhouette.",
    details: ["Grade-A cashmere", "Two-piece set", "Ribbed finish", "Dry clean only"],
    rating: 4.9,
    reviews: 51,
    popularity: 79,
    isCatalog: true,
  },
];

export const catalogProducts = products.filter((product) => product.isCatalog);

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getRelated(id: string, limit = 4) {
  const p = getProduct(id);
  if (!p) return [];
  return products
    .filter((x) => x.id !== id && x.category === p.category)
    .slice(0, limit);
}

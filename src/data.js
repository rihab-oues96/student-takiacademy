import home from "./assets/icons/home.png";
import offre from "./assets/icons/offres.png";
import subject from "./assets/icons/subjects.png";
import liveSession from "./assets/icons/liveSession.png";
import forum from "./assets/icons/forum.png";
import exam from "./assets/icons/exam.png";
import myWallet from "./assets/icons/myWallet.png";
import myProfile from "./assets/icons/myProfile.png";
import assistance from "./assets/icons/myWallet.png";

import im1 from "./assets/images/img1.png";
import im2 from "./assets/images/img2.png";
import im3 from "./assets/images/img3.png";

import flagAr from "./assets/images/flagAr.png";
import flagEn from "./assets/images/flagEn.png";
import flagFr from "./assets/images/flagFr.png";

import silver from "./assets/images/silver.png";
import silverPlus from "./assets/images/silverPlus.png";
import gold from "./assets/images/gold.png";
import optimum from "./assets/images/optimum.png";
import hessaty from "./assets/images/hessaty.png";

import zitouna from "./assets/images/zitouna.png";
import biat from "./assets/images/biat.png";
import poste from "./assets/images/poste.png";

import user from "./assets/icons/user.png";
import bookmark from "./assets/icons/bookmark.png";
import history from "./assets/icons/history.png";
import share from "./assets/icons/share.png";

import takiUser from "./assets/images/takiUser.png";

import prof from "./assets/images/prof.png";
import prof1 from "./assets/images/prof1.png";
import prof2 from "./assets/images/prof2.png";
import prof3 from "./assets/images/prof3.png";

export const navigations = [
  { link: "/", icon: home, pageName: "Home" },
  { link: "/offres", icon: offre, pageName: "Offres" },
  { link: "/subjects", icon: subject, pageName: "Subjects" },
  { link: "/live-session", icon: liveSession, pageName: "Live Session" },
  { link: "/forum", icon: forum, pageName: "Forum" },
  { link: "/exams", icon: exam, pageName: "Exams" },
  { link: "/my-wallet", icon: myWallet, pageName: "My Wallet" },
  { link: "/my-profile", icon: myProfile, pageName: "My profile" },
  { link: "/assistance", icon: assistance, pageName: "Assistance" },
];

export const recorded = [
  {
    image: im1,
    title: "9 ème De base فيزياء",
    professor: "Amina B.",
    date: "23-05-2022",
    time: "01:33:40",
  },
  {
    image: im2,
    title: "9 ème De base فيزياء",
    professor: "Amina B.",
    date: "23-05-2022",
    time: "01:33:40",
  },
  {
    image: im3,
    title: "9 ème De base فيزياء",
    professor: "Amina B.",
    date: "23-05-2022",
    time: "01:33:40",
  },
];

export const free = [
  {
    image: im2,
    title: "9 ème De base فيزياء",
    professor: "Amina B.",
    date: "23-05-2022",
    time: "01:33:40",
  },
  {
    image: im1,
    title: "9 ème De base فيزياء",
    professor: "Amina B.",
    date: "23-05-2022",
    time: "01:33:40",
  },
  {
    image: im3,
    title: "9 ème De base فيزياء",
    professor: "Amina B.",
    date: "23-05-2022",
    time: "01:33:40",
  },
];

export const languagess = [
  { image: flagEn, name: "EN", isSelected: true },
  { image: flagAr, name: "AR", isSelected: false },
  { image: flagFr, name: "FR", isSelected: false },
];

export const offres = [
  {
    name: "silver",
    image: silver,
    title: "عرض سيلفر",
    price: "ابتداءً من 20دت/شهر",
    priceExact: "49",
    duration: "شهر",
    content: [
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "تمارين مرفقة بالاصلاح مطابق للبرنامج الرسمي",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
    ],
  },
  {
    name: "silverPlus",
    image: silverPlus,
    title: "+ عرض سيلفر",
    price: "ابتداءً من 20دت/شهر",
    priceExact: "79",
    duration: "شهر",
    content: [
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "تمارين مرفقة بالاصلاح مطابق للبرنامج الرسمي",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
    ],
  },
  {
    name: "gold",
    image: gold,
    title: "عرض غولد +",
    price: "ابتداءً من 20دت/شهر",
    priceExact: "850",
    duration: "سنة",
    content: [
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "تمارين مرفقة بالاصلاح مطابق للبرنامج الرسمي",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
    ],
  },
  {
    name: "optimum",
    image: optimum,
    title: "عرض أبتموم",
    price: "ابتداءً من 20دت/شهر",
    priceExact: "119",
    duration: "شهر",
    content: [
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "تمارين مرفقة بالاصلاح مطابق للبرنامج الرسمي",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
    ],
  },
  {
    name: "hessaty",
    image: hessaty,
    title: "عرض حصتي",
    price: "ابتداءً من 20دت/شهر",
    priceExact: "6",
    duration: "حصة",
    content: [
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "تمارين مرفقة بالاصلاح مطابق للبرنامج الرسمي",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
      "مجلات تلاخيص الدروس (Magazines + PDF)",
      "فيديوهات تفسير كامل الدروس في كل المواد",
    ],
  },
];

export const subjects = [
  {
    name: "تربية تكنولوجية",
    progress: 90,
  },
  {
    name: "رياضيات ",
    progress: 20,
  },
  {
    name: "فيزياء",
    progress: 60,
  },
  {
    name: "Français",
    progress: 40,
  },
  {
    name: "تربية إسلامية",
    progress: 22,
  },
  {
    name: "Anglais",
    progress: 35,
  },
  {
    name: "عربيّة",
    progress: 56,
  },
  {
    name: "علوم الحياة والأرض ",
    progress: 3,
  },
  {
    name: "جغرافيا ",
    progress: 14,
  },
  {
    name: "تاريخ ",
    progress: 70,
  },
];

export const exams = [
  {
    name: "تربية تكنولوجية",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: true,
    correction: true,
  },
  {
    name: " علوم الحياة والأرض",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: true,
    correction: false,
  },
  {
    name: " Français",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: true,
    correction: true,
  },
  {
    name: " Français",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: true,
    correction: true,
  },
  {
    name: " Français",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: false,
    correction: false,
  },
  {
    name: " Français",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: true,
    correction: true,
  },
  {
    name: " Français",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: true,
    correction: true,
  },
  {
    name: " Français",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: true,
    correction: true,
  },
  {
    name: " Français",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: true,
    correction: true,
  },
  {
    name: " Français",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: true,
    correction: true,
  },
  {
    name: " Français",
    description: "رياضيات اصلاح امتحان عدد9",
    teacher: "Karim B.",
    deadline: "End date: 13/06/2022 || 10:15",
    exam: true,
    correction: true,
  },
];

export const accounts = [
  {
    image: zitouna,
    name: "Zitouna bank",
    account: "TakiAcademy",
    rib: "25 006 0000000317041 86",
  },
  {
    image: biat,
    name: "Biat bank",
    account: "TakiAcademy",
    rib: "08 139 0310110000790 88",
  },
  {
    image: poste,
    name: "Tunisian Post",
    account: "TakiAcademy",
    rib: "1750 3000 0003 1179 2828",
  },
];

export const points = [
  {
    code: "#35786100",
    paimentMethod: "Bank Transfer",
    amount: "648 TND",
    description: "Offer Silver",
    date: "13/06/2022",
    status: "Pending",
  },
  {
    code: "#35786100",
    paimentMethod: "Bank Transfer",
    amount: "648 TND",
    description: "Offer Silver",
    date: "13/06/2022",
    status: "Pending",
  },
  {
    code: "#35786100",
    paimentMethod: "Bank Transfer",
    amount: "648 TND",
    description: "Offer Silver",
    date: "13/06/2022",
    status: "Pending",
  },
  {
    code: "#35786100",
    paimentMethod: "Bank Transfer",
    amount: "648 TND",
    description: "Offer Silver",
    date: "13/06/2022",
    status: "Pending",
  },
  {
    code: "#35786100",
    paimentMethod: "Bank Transfer",
    amount: "648 TND",
    description: "Offer Silver",
    date: "13/06/2022",
    status: "Pending",
  },
  {
    code: "#35786100",
    paimentMethod: "Bank Transfer",
    amount: "648 TND",
    description: "Offer Silver",
    date: "13/06/2022",
    status: "Pending",
  },
  {
    code: "#35786100",
    paimentMethod: "Bank Transfer",
    amount: "648 TND",
    description: "Offer Silver",
    date: "13/06/2022",
    status: "Pending",
  },
];

export const hours = [
  { hour: "07:00" },
  { hour: "09:00" },
  { hour: "11:00" },
  { hour: "13:00" },
  { hour: "15:00" },
  { hour: "17:00" },
  { hour: "19:00" },
  { hour: "21:00" },
  { hour: "23:00" },
];

export const days = [
  {
    day: "Monday",
  },
  {
    day: "Tuesday",
  },
  {
    day: "Wednesday",
  },
  {
    day: "Thursday",
  },
  {
    day: "Friday",
  },
  {
    day: "Saturday",
  },
  {
    day: "Sunday",
  },
];

export const LearningProgressInfos = [
  {
    subject: "تربية تكنولوجية",
    value: "25",
  },
  {
    subject: " علوم الحياة والأرض",
    value: "75",
  },
  {
    subject: "Français",
    value: "50",
  },
];

export const submenuItems = [
  {
    image: user,
    item: "My Profile",
  },
  {
    image: bookmark,
    item: "Favorite",
  },
  {
    image: history,
    item: "History",
  },
  {
    image: share,
    item: "Log out",
  },
];

export const subjectLinks = [
  {
    name: "Cours",
    link: "",
  },
  {
    name: "Examens",
    link: "examens",
  },
  {
    name: "Enregistrement",
    link: "registration",
  },
  {
    name: "Divers",
    link: "divers",
  },
];

export const profs = [
  {
    name: "T.Abir",
    image: prof1,
  },
  {
    name: "N.Ilyes",
    image: prof2,
  },
  {
    name: " B.Safa",
    image: prof3,
  },
];

export const chapterContentLinks = [
  {
    name: "Lessons",
    link: "",
  },
  {
    name: "Exercices",
    link: "exercices",
  },
  {
    name: "Magazines",
    link: "magazines",
  },
  {
    name: "QCMs",
    link: "qcms",
  },
];

export const chapterDetailsLinks = [
  {
    name: "A propos du cours",
    link: "apropos",
  },
  {
    name: "Commentaires",
    link: "commentaires",
  },
  {
    name: "Q&A",
    link: "Qa",
  },
  {
    name: "Annonces",
    link: "annonces",
  },
];

export const annonceUser = [
  {
    name: "Ayachi Mohamed",
    datePub: "2 Days Ago",
    role: "Teacher",
    image: prof,
    annonce: ` Salut Max. J'adore vos conférences. Cependant celui-ci est très
    déroutant. Lorsque vous avez commencé à utiliser extra et identifier,
    vous avez rendu la conférence trop difficile à comprendre pour quelque
    chose de très inutile dans le monde réel.Veuillez écrire un bon code
    propre et proposer de meilleurs exemples à l'avenir.`,
  },
  {
    name: "Taki Academy Team",
    datePub: "2 Days Ago",
    role: "Admin",
    image: takiUser,
    annonce: ` Salut Max. J'adore vos conférences. Cependant celui-ci est très
    déroutant. Lorsque vous avez commencé à utiliser extra et identifier,
    vous avez rendu la conférence trop difficile à comprendre pour quelque
    chose de très inutile dans le monde réel.Veuillez écrire un bon code
    propre et proposer de meilleurs exemples à l'avenir.`,
  },
];

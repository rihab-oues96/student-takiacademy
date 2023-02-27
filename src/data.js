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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 1,
    title: "تربية تكنولوجية",
    progression: 90,
  },
  {
    id: 2,
    title: "رياضيات ",
    progression: 20,
  },
  {
    id: 3,
    title: "فيزياء",
    progression: 60,
  },
  {
    id: 4,
    title: "Français",
    progression: 40,
  },
  {
    id: 5,
    title: "تربية إسلامية",
    progression: 22,
  },

  {
    id: 5,
    title: "Anglais",
    progression: 35,
  },
  {
    id: 5,
    title: "عربيّة",
    progression: 56,
  },
  {
    id: 5,
    title: "علوم الحياة والأرض ",
    progression: 3,
  },
  {
    id: 5,
    title: "جغرافيا ",
    progression: 14,
  },
  {
    id: 5,
    title: "تاريخ ",
    progression: 70,
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

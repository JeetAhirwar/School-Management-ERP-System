export const examSchedule = [
  { id: 1, exam: "Term 2 — Mid Term", class: "Class 8", subject: "Mathematics", date: "2026-09-15", time: "9:00 AM – 11:00 AM", room: "Room 204", maxMarks: 80 },
  { id: 2, exam: "Term 2 — Mid Term", class: "Class 8", subject: "Science", date: "2026-09-17", time: "9:00 AM – 11:00 AM", room: "Room 204", maxMarks: 80 },
  { id: 3, exam: "Term 2 — Mid Term", class: "Class 8", subject: "English", date: "2026-09-19", time: "9:00 AM – 11:00 AM", room: "Room 204", maxMarks: 80 },
  { id: 4, exam: "Term 2 — Mid Term", class: "Class 8", subject: "Social Science", date: "2026-09-21", time: "9:00 AM – 11:00 AM", room: "Room 204", maxMarks: 80 },
  { id: 5, exam: "Term 2 — Mid Term", class: "Class 8", subject: "Hindi", date: "2026-09-23", time: "9:00 AM – 11:00 AM", room: "Room 204", maxMarks: 80 },
  { id: 6, exam: "Term 2 — Mid Term", class: "Class 10", subject: "Mathematics", date: "2026-09-15", time: "9:00 AM – 12:00 PM", room: "Room 301", maxMarks: 80 },
  { id: 7, exam: "Term 2 — Mid Term", class: "Class 10", subject: "Science", date: "2026-09-17", time: "9:00 AM – 12:00 PM", room: "Room 301", maxMarks: 80 },
];

export const subjectResults = [
  { subject: "English", marks: 84, max: 100 },
  { subject: "Hindi", marks: 78, max: 100 },
  { subject: "Mathematics", marks: 91, max: 100 },
  { subject: "Science", marks: 88, max: 100 },
  { subject: "Social Science", marks: 76, max: 100 },
  { subject: "Computer Science", marks: 95, max: 100 },
];

export const timetable = {
  "Class 8-A": {
    Monday: ["Mathematics","English","Science","Break","Social Science","Hindi","Computer Science","Physical Education"],
    Tuesday: ["Science","Mathematics","Hindi","Break","English","Computer Science","Social Science","Art"],
    Wednesday: ["English","Social Science","Mathematics","Break","Science","Hindi","Physical Education","Library"],
    Thursday: ["Hindi","Science","English","Break","Mathematics","Social Science","Computer Science","Music"],
    Friday: ["Social Science","English","Hindi","Break","Computer Science","Mathematics","Science","Art"],
    Saturday: ["Mathematics","Science","English","Break","Sports","Sports","—","—"],
  },
};
export const periods = ["9:00–9:45","9:45–10:30","10:30–11:15","11:15–11:35","11:35–12:20","12:20–1:05","1:05–1:50","1:50–2:35"];

export const feeStructure = [
  { head: "Tuition Fee", termAmount: 18500 },
  { head: "Transport Fee", termAmount: 4500 },
  { head: "Library & Lab Fee", termAmount: 1200 },
  { head: "Activity & Sports Fee", termAmount: 1500 },
  { head: "Development Fee", termAmount: 2000 },
];

export const feeTransactions = [
  { id: "TXN9001", student: "Aarav Sharma", class: "Class 6-A", term: "Term 1", amount: 26500, mode: "Online — UPI", date: "2026-06-12", status: "Success", receipt: "RCPT-2026-0341" },
  { id: "TXN9002", student: "Saanvi Verma", class: "Class 4-B", term: "Term 1", amount: 26500, mode: "Online — Net Banking", date: "2026-06-14", status: "Success", receipt: "RCPT-2026-0356" },
  { id: "TXN9003", student: "Ishaan Patel", class: "Class 9-A", term: "Term 2", amount: 27700, mode: "Cheque", date: "2026-08-29", status: "Pending Clearance", receipt: "RCPT-2026-0902" },
  { id: "TXN9004", student: "Ananya Gupta", class: "Class 2-C", term: "Term 2", amount: 13850, mode: "Online — Card", date: "2026-08-30", status: "Success", receipt: "RCPT-2026-0918" },
  { id: "TXN9005", student: "Vihaan Reddy", class: "Class 7-B", term: "Term 2", amount: 27700, mode: "Cash", date: "2026-08-27", status: "Success", receipt: "RCPT-2026-0889" },
  { id: "TXN9006", student: "Diya Iyer", class: "Class 5-A", term: "Term 2", amount: 0, mode: "—", date: "—", status: "Overdue", receipt: "—" },
];

export const inventory = [
  { id: "INV001", item: "NCERT Textbook Set — Class 6", category: "Books", stock: 42, reorderLevel: 20, unit: "Sets", lastRestocked: "2026-07-15" },
  { id: "INV002", item: "Science Lab — Beakers 250ml", category: "Lab Equipment", stock: 18, reorderLevel: 25, unit: "Pieces", lastRestocked: "2026-05-10" },
  { id: "INV003", item: "Basketballs", category: "Sports", stock: 12, reorderLevel: 10, unit: "Pieces", lastRestocked: "2026-08-01" },
  { id: "INV004", item: "Whiteboard Markers (Box)", category: "Stationery", stock: 65, reorderLevel: 30, unit: "Boxes", lastRestocked: "2026-08-20" },
  { id: "INV005", item: "Desktop Computers — Lab 2", category: "IT Equipment", stock: 8, reorderLevel: 15, unit: "Units", lastRestocked: "2026-03-05" },
  { id: "INV006", item: "First Aid Kits", category: "Medical", stock: 6, reorderLevel: 8, unit: "Kits", lastRestocked: "2026-06-18" },
  { id: "INV007", item: "A4 Paper Ream", category: "Stationery", stock: 120, reorderLevel: 50, unit: "Reams", lastRestocked: "2026-08-25" },
  { id: "INV008", item: "Chemistry Lab — Test Tubes", category: "Lab Equipment", stock: 90, reorderLevel: 40, unit: "Pieces", lastRestocked: "2026-07-01" },
];

export const busRoutes = [
  { id: "BUS-01", route: "Vijay Nagar — Palasia — School", driver: "Mahesh Chouhan", conductor: "Ramesh Bhai", capacity: 45, occupied: 38, status: "On Route", lastStop: "Palasia Square", eta: "8 mins", lat: 22.7346, lng: 75.8930 },
  { id: "BUS-02", route: "Bhawarkuan — Rajwada — School", driver: "Suraj Yadav", conductor: "Vinod Kumar", capacity: 45, occupied: 41, status: "On Route", lastStop: "Rajwada Circle", eta: "14 mins", lat: 22.7196, lng: 75.8577 },
  { id: "BUS-03", route: "Sudama Nagar — Rau — School", driver: "Dilip Rathore", conductor: "Sanjay Bhai", capacity: 40, occupied: 30, status: "Delayed", lastStop: "Rau Circle", eta: "22 mins", lat: 22.6608, lng: 75.7936 },
  { id: "BUS-04", route: "MR-10 — Scheme 78 — School", driver: "Naresh Solanki", conductor: "Anil Kumar", capacity: 45, occupied: 44, status: "On Route", lastStop: "Scheme 78 Gate", eta: "6 mins", lat: 22.7530, lng: 75.9070 },
  { id: "BUS-05", route: "AB Road — LIG — School", driver: "Prakash Tiwari", conductor: "Mukesh Bhai", capacity: 40, occupied: 25, status: "Not Started", lastStop: "Depot", eta: "—", lat: 22.7042, lng: 75.8825 },
];

export const attendanceTrend = [
  { month: "Apr", attendance: 94 },
  { month: "May", attendance: 92 },
  { month: "Jun", attendance: 89 },
  { month: "Jul", attendance: 95 },
  { month: "Aug", attendance: 93 },
  { month: "Sep", attendance: 96 },
];

export const feeCollectionTrend = [
  { month: "Apr", collected: 1120000, pending: 240000 },
  { month: "May", collected: 980000, pending: 190000 },
  { month: "Jun", collected: 1540000, pending: 310000 },
  { month: "Jul", collected: 1280000, pending: 220000 },
  { month: "Aug", collected: 1690000, pending: 380000 },
];

export const classStrength = [
  { name: "Pre-Primary", value: 145 },
  { name: "Primary (1–5)", value: 320 },
  { name: "Middle (6–8)", value: 268 },
  { name: "Secondary (9–10)", value: 190 },
  { name: "Senior Sec. (11–12)", value: 142 },
];

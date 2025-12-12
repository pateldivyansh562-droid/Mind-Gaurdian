// document.addEventListener("DOMContentLoaded", () => {

//   // -------- FILTERING --------
//   const filterButtons = document.querySelectorAll(".filter-bar .btn");
//   const mentorCards = document.querySelectorAll("#mentor-grid .mentor");

//   if (filterButtons.length > 0) {
//     filterButtons.forEach(btn => {
//       btn.addEventListener("click", () => {
//         const type = btn.dataset.filter;
//         mentorCards.forEach(card => {
//           card.style.display = (type === "all" || card.dataset.type === type)
//             ? "block"
//             : "none";
//         });
//       });
//     });
//   }

//   // -------- BOOKING POPUP --------
//   const bookBtns = document.querySelectorAll(".book-btn");
//   const bookingModal = document.getElementById("booking-modal");

//   if (bookingModal && bookBtns.length > 0) {
//     const nameLabel = document.getElementById("mentorName");

//     bookBtns.forEach(btn => {
//       btn.addEventListener("click", () => {
//         nameLabel.innerText = "Book session with " + btn.dataset.name;
//         bookingModal.classList.remove("hidden");
//       });
//     });
//   }

//   // -------- PROFILE POPUP --------
//   const profileBtns = document.querySelectorAll(".profile-btn");
//   const profileModal = document.getElementById("profile-modal");

//   if (profileModal && profileBtns.length > 0) {

//     const pName = document.getElementById("p-name");
//     const pSpec = document.getElementById("p-spec");
//     const pExp = document.getElementById("p-exp");
//     const pExpert = document.getElementById("p-expert");
//     const pHigh = document.getElementById("p-high");

//     profileBtns.forEach(btn => {
//       btn.addEventListener("click", () => {
//         pName.innerText = btn.dataset.name;
//         pSpec.innerText = btn.dataset.spec;
//         pExp.innerText = btn.dataset.exp;
//         pExpert.innerText = btn.dataset.expert;
//         pHigh.innerText = btn.dataset.high;
//         profileModal.classList.remove("hidden");
//       });
//     });
//   }

//   // -------- CLOSE POPUPS --------
//   const closeBtns = document.querySelectorAll(".close-popup");
//   closeBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//       document.querySelectorAll(".popup").forEach(p => p.classList.add("hidden"));
//     });
//   });

//   // -------- CONFIRM BOOKING --------
//   const confirm = document.getElementById("confirm-booking");
//   if (confirm) {
//     confirm.addEventListener("click", () => {
//       alert("Your session has been booked!");
//       document.querySelectorAll(".popup").forEach(p => p.classList.add("hidden"));
//     });
//   }

//   // -------- AI MATCH --------
//   const aiBtn = document.getElementById("open-match");
//   const aiModal = document.getElementById("ai-modal");

//   if (aiBtn && aiModal) {
//     aiBtn.addEventListener("click", () => {
//       aiModal.classList.remove("hidden");
//     });
//   }

// });

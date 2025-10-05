// import React, { useState, useEffect } from "react";

// const LanguageSelector = () => {
//   const [language, setLanguage] = useState("en"); // default English

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Google Translate dropdown
//       const select = document.querySelector("#google_translate_element");

//       if (select) {
//         select.value = language; // set selected language
//         select.dispatchEvent(new Event("change")); // trigger change
//         clearInterval(interval); // stop polling once found
//       }
//     }, 300); // faster polling

//     return () => clearInterval(interval);
//   }, [language]);

//   return (
//     <select
//       value={language}
//       onChange={(e) => setLanguage(e.target.value)}
//       style={{
//         padding: "0.25rem 0.5rem",
//         borderRadius: "6px",
//         border: "1px solid #ccc",
//         background: "#fff",
//         cursor: "pointer",
//       }}
//     >
//       <option value="en">English 🌐</option>
//       <option value="hi">Hindi 🇮🇳</option>
//       <option value="fr">French 🇫🇷</option>
//       <option value="de">German 🇩🇪</option>
//       <option value="es">Spanish 🇪🇸</option>
//       <option value="zh">Chinese 🇨🇳</option>
//       <option value="ja">Japanese 🇯🇵</option>
//       <option value="ru">Russian 🇷🇺</option>
//       <option value="it">Italian 🇮🇹</option>
//       <option value="ar">Arabic 🇦🇪</option>
//     </select>
//   );
// };

// export default LanguageSelector;

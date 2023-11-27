
// Swicher01




import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>En</button>
      <button onClick={() => changeLanguage('uk')}>Uk</button>
    </div>
  );
}

export default LanguageSwitcher;







// Swicher02





// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();
//   const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

//   const toggleLanguage = () => {
//     const newLanguage = currentLanguage === 'en' ? 'uk' : 'en';
//     i18n.changeLanguage(newLanguage);
//     setCurrentLanguage(newLanguage);
//   };

//   return (
//     <div>
//       <button onClick={toggleLanguage}>
//         {currentLanguage === 'en' ? 'Uk' : 'En'}
//       </button>
//     </div>
//   );
// }

// export default LanguageSwitcher;



// Swicher03

// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

// function LanguageSwitcher() {
//   const { i18n } = useTranslation();
//   const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

//   const toggleLanguage = () => {
//     const newLanguage = currentLanguage === 'en' ? 'uk' : 'en';
//     i18n.changeLanguage(newLanguage);
//     setCurrentLanguage(newLanguage);
//   };

//   return (
//     <div>
//       <button onClick={toggleLanguage}>
//         {currentLanguage === 'en' ? 'En' : 'Uk'}
//       </button>
//     </div>
//   );
// }

// export default LanguageSwitcher;


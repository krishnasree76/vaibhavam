// 'use client';

// import { motion } from 'framer-motion';

// export function WhatsAppButton() {
//   const handleClick = () => {
//     // Replace with your WhatsApp number (include country code)
//     const phoneNumber = '+11234567890';
//     const message = encodeURIComponent('Hi, I am interested in booking Vaibhavam Caterers for my event.');
//     const url = `https://wa.me/${phoneNumber}?text=${message}`;
//     window.open(url, '_blank');
//   };

//   return (
//     <motion.button
//       onClick={handleClick}
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.95 }}
//       className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
//       aria-label="Chat on WhatsApp"
//     >
//       <svg
//         width="28"
//         height="28"
//         viewBox="0 0 24 24"
//         fill="currentColor"
//       >
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.998 1.515c-2.763 1.754-4.571 5.064-4.571 8.425 0 3.361 1.808 6.671 4.571 8.425 1.508.958 3.247 1.515 4.998 1.515 3.358 0 6.5-1.755 8.237-4.525 1.737-2.77 1.737-6.198 0-8.968-1.737-2.77-4.879-4.525-8.236-4.525zm0-2.400c4.006 0 7.762 2.093 9.823 5.41 2.062 3.316 2.062 7.384 0 10.7-2.061 3.317-5.817 5.41-9.823 5.41-1.528 0-3.034-.286-4.459-.84-1.425.554-2.931.84-4.459.84C5.857 20.495.5 15.138.5 8.574S5.857-3.347 12.421-3.347c6.564 0 11.921 5.357 11.921 11.921 0 .554-.05 1.101-.146 1.639-1.505.456-2.931 1.091-4.231 1.883.096-.538.146-1.085.146-1.639 0-5.109-4.148-9.257-9.257-9.257-5.109 0-9.257 4.148-9.257 9.257s4.148 9.257 9.257 9.257c1.628 0 3.167-.423 4.509-1.162 1.342.739 2.881 1.162 4.509 1.162 5.109 0 9.257-4.148 9.257-9.257 0-.554-.05-1.101-.146-1.639 1.3-.792 2.726-1.427 4.231-1.883.096-.538.146-1.085.146-1.639 0-6.564-5.357-11.921-11.921-11.921zm0 17.571c-3.109 0-5.643-2.534-5.643-5.643 0-3.109 2.534-5.643 5.643-5.643 3.109 0 5.643 2.534 5.643 5.643 0 3.109-2.534 5.643-5.643 5.643z"/>
//       </svg>
//     </motion.button>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
  const handleClick = () => {
    const phoneNumber = '911234567890'; // Replace with your WhatsApp number (without +)
    const message = encodeURIComponent(
      'Hi, I am interested in booking Vaibhavam Caterers for my event.'
    );

    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </motion.button>
  );
}

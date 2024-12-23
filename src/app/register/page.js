// "use client";
// import { useState } from 'react';

// export default function Register() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstname, setFirstname] = useState(''); // New state for firstname
//   const [lastname, setLastname] = useState('');   // New state for lastname

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('/api/register', { 
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email,
//           password,
//           firstname, // Include firstname in the request
//           lastname,  // Include lastname in the request
//         }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert('Registration successful. Verify your account on the Login page');
//         window.location.href = '/login';
//       } else {
//         alert(`Registration Failed: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//       alert('An error occurred during registration');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Register</h1>
//       <form onSubmit={handleRegister} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>First Name:</label>
//           <input
//             style={styles.input}
//             type="text"
//             value={firstname}
//             onChange={(e) => setFirstname(e.target.value)} // Update firstname
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Last Name:</label>
//           <input
//             style={styles.input}
//             type="text"
//             value={lastname}
//             onChange={(e) => setLastname(e.target.value)} // Update lastname
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Email:</label>
//           <input
//             style={styles.input}
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Password:</label>
//           <input
//             style={styles.input}
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" style={styles.button}>Register Here</button>
//       </form>
//     </div>
//   );
// }

// // Styles object remains the same as before
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '100vh',
//     backgroundColor: '#f4f4f4',
//     padding: '20px',
//   },
//   title: {
//     fontSize: '32px',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '300px',
//     padding: '20px',
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   formGroup: {
//     marginBottom: '15px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontSize: '14px',
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '14px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//   },
//   button: {
//     width: '100%',
//     padding: '10px',
//     fontSize: '16px',
//     backgroundColor: '#28a745',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     marginTop: '10px',
//   },
// };











// src/app/register/page.js
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
  return <RegisterForm />;
}

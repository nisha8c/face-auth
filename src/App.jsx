import { useEffect } from 'react';

import './App.css'


function App() {
  let faceio;
  useEffect(() => {
    // faceio = new faceIO(import.meta.env.FACE_IO_PUBLIC_ID);
      faceio = new faceIO(import.meta.env.FACE_IO_PUBLIC_ID);
  }, []);

  const handleSignIn = async () => {
    console.log('handleSignIn function...');
    try {
      let response = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "example@gmail.com",
          pin: "12345",
        },
      });

      console.log(` Unique Facial ID: ${response.facialId}
      Enrollment Date: ${response.timestamp}
      Gender: ${response.details.gender}
      Age Approximation: ${response.details.age}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async () => {
    console.log('handleLogIn function...');
    try {
      let response = await faceio.authenticate({
        locale: "auto",
      });

      console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `);
    } catch (error) {
      console.log('error:: ', error);
    }
  };

  return (
    <div className="App">
      <section>
        <h1>Face Authentication by FaceIO</h1>
        <button onClick={handleSignIn}>Sign-in</button>
        <button onClick={handleLogIn}>Log-in</button>
      </section>
    </div>
  )
}

export default App

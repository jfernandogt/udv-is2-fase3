import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { addItemToLocalStorage } from "@/utils/storage";

export default function Home() {
  const router = useRouter();
    const [student, setStudent] = useState('');

  const addStudent = async () => {
    addItemToLocalStorage('estudiantes', student)
    await router.push("/estudiantes");
  }

  return (
    <>
      <Head>
        <title>Proyecto de IS2 - Fase 3</title>
        <meta name="description" content="Generated by Proyecto de IS2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className="form-group">
          <label htmlFor="title">Estudiante:</label>
          <input
            type="text"
            className="form-control my-3"
            id="title"
            placeholder="Estudiante"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={addStudent}>
          Agregar
        </button>
      </main>
    </>
  );
}

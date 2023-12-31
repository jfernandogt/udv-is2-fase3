import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  getItemFromLocalStorageById,
  updateItemFromLocalStorageById,
  getItemsFromLocalStorage,
} from "@/utils/storage";

export default function Home() {
  const router = useRouter();
  const [curso, setCurso] = useState({});
  const [students, setStudents] = useState([]);
  const [status, setStatus] = useState("disabled");
  useEffect(() => {
    if (router.isReady) {
      fetchCursos();
      fetchStudents();
    }
  }, [router.isReady]);

  const fetchCursos = () => {
    const id = router.query.cursoid;
    if (id) {
      const curso = getItemFromLocalStorageById("cursos", id);
      if (curso) {
        setCurso(curso);
      }
    }
  };

  const fetchStudents = () => {
    const students = getItemsFromLocalStorage("estudiantes");
    setStudents(students);
  };

  const handleSaveStudents = async () => {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const selectedStudents = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => Number(checkbox.value));

    const curso = getItemFromLocalStorageById(
      "cursos",
      router.query.cursoid
    );

    curso.students = selectedStudents;

    updateItemFromLocalStorageById("cursos", curso);

    await router.push("/cursos");
  }

  return (
    <>
      <Head>
        <title>Proyecto de IS2 - Fase 3</title>
        <meta name="description" content="Generated by Proyecto de IS2" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container my-3">
        <h1>Curso: {curso.title}</h1>
        <h3>Selecciona los estudiantes que deseas asignar o remover</h3>
        <div className="my-3">
          {
            students.map(student => (
              <div className="form-check" key={student.id}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={student.id}
                  id={student.id}
                  defaultChecked={curso.students?.includes(student.id)}
                />
                <label className="form-check-label" htmlFor={student.id}>
                  {student.title}
                </label>
              </div>
            ))
          }
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSaveStudents}>
          {status === "disabled" ? "Editar" : "Guardar"}
        </button>
      </main>
    </>
  );
}

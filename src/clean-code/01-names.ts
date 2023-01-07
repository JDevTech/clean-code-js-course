(() => {
  // Ejemplo
  // Archivos a evaluar - files to evaluate
  const filesToEvaluate = [
    { id: 1, fileToDelete: false },
    { id: 2, fileToDelete: false },
    { id: 3, fileToDelete: true },
    { id: 4, fileToDelete: false },
    { id: 5, fileToDelete: false },
    { id: 7, fileToDelete: true },
  ];

  // Archivos marcados para borrar - files to delete
  const filesToDelete = filesToEvaluate.map((file) => file.fileToDelete);

  // Nombramiento erroneo - Bad Naming
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // Nombramiento correcto - Good Naming
  class User {}
  interface User {}

  // Todo: Tarea

  // día de hoy - today
  const today = new Date();

  // días transcurridos - elapsed time in days
  const elapsedTimeInDays: number = 23;

  // número de archivos en un directorio - number of files in directory
  const numberOfFilesInDirectory = 33;

  // primer nombre - first name
  const firstName = "Fernando";

  // primer apellido - last name
  const lastName = "Herrera";

  // días desde la última modificación - days since modification
  const daysSinceUpdated = 12;

  // cantidad máxima de clases por estudiante - max classes per student
  const maxStudentClasses = 6;
})();

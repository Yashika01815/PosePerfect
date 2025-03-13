import Image from "next/image";
import Navbar from "./_components/Navbar";
import Homebar from "./_components/Homebar";
// import ExerciseLibrary from "./_components/ExerciseLibrary";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Homebar/>
      {/* <ExerciseLibrary onSelectExercise={() => {}} selectedExerciseId={null} /> */}
    </div>
  );
}

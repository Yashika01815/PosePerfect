"use client"
import { useState } from 'react';
import { Exercise, exerciseLibrary, ExerciseType } from '../../lib/posture-utils';

interface ExerciseLibraryProps {
  onSelectExercise: (exercise: Exercise) => void;
  selectedExerciseId: string | null;
}

const ExerciseLibrary = ({ onSelectExercise, selectedExerciseId }: ExerciseLibraryProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredExercises = exerciseLibrary.filter(exercise => 
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exercise.targetMuscles.some(muscle => 
      muscle.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16" id="exercises">
      <div className="text-center mb-10">
        <p className="text-sm font-medium uppercase tracking-wider text-primary mb-2">Exercise Library</p>
        <h2 className="text-3xl font-semibold mb-3">Perfect Your Form</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Select an exercise to receive real-time posture feedback and form correction
          while you workout.
        </p>
      </div>
      
      <div className="w-full max-w-md mx-auto mb-8">
        <div className="relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search by exercise or muscle..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredExercises.map(exercise => (
          <div 
            key={exercise.id}
            className={`group rounded-xl overflow-hidden shadow-sm transition-all duration-300 card-hover ${
              selectedExerciseId === exercise.id ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => onSelectExercise(exercise)}
          >
            <div className="relative h-48 overflow-hidden bg-gray-100">
              <img 
                src={exercise.imageUrl} 
                alt={exercise.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-lg font-medium">{exercise.name}</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {exercise.targetMuscles.slice(0, 2).map((muscle, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {muscle}
                    </span>
                  ))}
                  {exercise.targetMuscles.length > 2 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      +{exercise.targetMuscles.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white">
              <p className="text-sm text-muted-foreground line-clamp-2">{exercise.description}</p>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs font-medium text-primary">
                  {exercise.commonErrors.length} common mistakes
                </div>
                <button className="text-xs flex items-center font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  Select
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseLibrary;

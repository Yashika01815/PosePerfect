export interface JointPoint {
    x: number;
    y: number;
    confidence: number;
  }
  
  export interface Pose {
    keypoints: Array<JointPoint & { name: string }>;
    score: number;
  }
  
  export enum ExerciseType {
    SQUAT = 'squat',
    DEADLIFT = 'deadlift',
    PUSHUP = 'pushup',
    PLANK = 'plank',
    LUNGE = 'lunge',
    BENCH_PRESS = 'benchPress',
    SHOULDER_PRESS = 'shoulderPress',
    BICEP_CURL = 'bicepCurl'
  }
  
  export interface PostureAnalysisResult {
    isCorrect: boolean;
    score: number;
    feedback: string[];
    mainIssue: string | null;
  }
  
  export interface Exercise {
    id: string;
    name: string;
    type: ExerciseType;
    description: string;
    targetMuscles: string[];
    commonErrors: string[];
    tips: string[];
    imageUrl: string;
  }
  
  // Mock function for pose estimation
  // In a real implementation, this would use TensorFlow.js or a similar library
  export const estimatePose = async (video: HTMLVideoElement | null): Promise<Pose | null> => {
    // This is a mock function, in a real app you would use a pose estimation library
    if (!video) return null;
    
    // Mock pose data
    const mockPose: Pose = {
      keypoints: [
        { x: 200, y: 50, confidence: 0.9, name: 'nose' },
        { x: 210, y: 80, confidence: 0.85, name: 'leftEye' },
        { x: 190, y: 80, confidence: 0.85, name: 'rightEye' },
        { x: 220, y: 100, confidence: 0.7, name: 'leftEar' },
        { x: 180, y: 100, confidence: 0.7, name: 'rightEar' },
        { x: 250, y: 150, confidence: 0.8, name: 'leftShoulder' },
        { x: 150, y: 150, confidence: 0.8, name: 'rightShoulder' },
        { x: 270, y: 220, confidence: 0.75, name: 'leftElbow' },
        { x: 130, y: 220, confidence: 0.75, name: 'rightElbow' },
        { x: 290, y: 280, confidence: 0.7, name: 'leftWrist' },
        { x: 110, y: 280, confidence: 0.7, name: 'rightWrist' },
        { x: 240, y: 300, confidence: 0.8, name: 'leftHip' },
        { x: 160, y: 300, confidence: 0.8, name: 'rightHip' },
        { x: 250, y: 400, confidence: 0.75, name: 'leftKnee' },
        { x: 150, y: 400, confidence: 0.75, name: 'rightKnee' },
        { x: 260, y: 480, confidence: 0.7, name: 'leftAnkle' },
        { x: 140, y: 480, confidence: 0.7, name: 'rightAnkle' },
      ],
      score: 0.8
    };
    
    return mockPose;
  };
  
  // Function to analyze posture based on detected pose and exercise type
  export const analyzePosture = (pose: Pose | null, exerciseType: ExerciseType): PostureAnalysisResult => {
    if (!pose) {
      return {
        isCorrect: false,
        score: 0,
        feedback: ['No pose detected. Please ensure you are visible in the frame.'],
        mainIssue: 'No pose detected'
      };
    }
    
    // Default result
    const result: PostureAnalysisResult = {
      isCorrect: true,
      score: 85,
      feedback: ['Your form looks good!'],
      mainIssue: null
    };
    
    // Mock analysis for different exercise types
    switch (exerciseType) {
      case ExerciseType.SQUAT:
        // Check for common squat mistakes
        if (Math.random() > 0.7) {
          result.isCorrect = false;
          result.score = 65;
          result.feedback = ['Knees caving inward', 'Maintain knee alignment with toes'];
          result.mainIssue = 'Knee valgus detected';
        }
        break;
        
      case ExerciseType.DEADLIFT:
        // Check for common deadlift mistakes
        if (Math.random() > 0.6) {
          result.isCorrect = false;
          result.score = 70;
          result.feedback = ['Back is rounding', 'Keep your spine neutral throughout the movement'];
          result.mainIssue = 'Spinal flexion detected';
        }
        break;
        
      case ExerciseType.PUSHUP:
        // Check for common pushup mistakes
        if (Math.random() > 0.5) {
          result.isCorrect = false;
          result.score = 75;
          result.feedback = ['Hips sagging', 'Engage your core to maintain a straight line'];
          result.mainIssue = 'Core not engaged';
        }
        break;
        
      // Add more exercise types as needed
      
      default:
        // Generic posture checks
        if (Math.random() > 0.8) {
          result.isCorrect = false;
          result.score = 60;
          result.feedback = ['Uneven weight distribution', 'Try to balance your posture better'];
          result.mainIssue = 'Balance issue detected';
        }
    }
    
    return result;
  };
  
  // Sample exercise library
  export const exerciseLibrary: Exercise[] = [
    {
      id: '1',
      name: 'Barbell Squat',
      type: ExerciseType.SQUAT,
      description: 'A compound exercise that targets primarily the quadriceps, hamstrings, and glutes.',
      targetMuscles: ['Quadriceps', 'Hamstrings', 'Glutes', 'Core'],
      commonErrors: [
        'Knees caving inward',
        'Heels lifting off the ground',
        'Insufficient depth',
        'Forward lean'
      ],
      tips: [
        'Keep your chest up',
        'Push your knees outward',
        'Descend until thighs are parallel to the ground',
        'Keep your weight in your heels'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: '2',
      name: 'Deadlift',
      type: ExerciseType.DEADLIFT,
      description: 'A compound exercise that works most major muscle groups, with emphasis on the posterior chain.',
      targetMuscles: ['Hamstrings', 'Glutes', 'Lower Back', 'Trapezius', 'Forearms'],
      commonErrors: [
        'Rounding the back',
        'Starting with the bar too far from shins',
        'Jerking the weight off the floor',
        'Insufficient hip extension'
      ],
      tips: [
        'Keep the bar close to your body',
        'Engage your lats before lifting',
        'Push through your heels',
        'Think of the movement as pushing the floor away rather than pulling the bar'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1598575478423-3f910c4366e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: '3',
      name: 'Push-Up',
      type: ExerciseType.PUSHUP,
      description: 'A bodyweight exercise that targets the chest, shoulders, and triceps.',
      targetMuscles: ['Chest', 'Shoulders', 'Triceps', 'Core'],
      commonErrors: [
        'Sagging hips',
        'Flared elbows',
        'Incomplete range of motion',
        'Head dropping forward'
      ],
      tips: [
        'Keep your body in a straight line from head to heels',
        'Position elbows at about 45 degrees to your body',
        'Lower until chest nearly touches the ground',
        'Engage your core throughout the movement'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1598971639058-a2570ad603a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: '4',
      name: 'Plank',
      type: ExerciseType.PLANK,
      description: 'An isometric core exercise that also engages the shoulders, arms, and glutes.',
      targetMuscles: ['Core', 'Shoulders', 'Arms', 'Glutes'],
      commonErrors: [
        'Sagging hips',
        'Raised buttocks',
        'Shoulders hunched around ears',
        'Looking up or down'
      ],
      tips: [
        'Keep your body in a straight line',
        'Engage your core by drawing your navel toward your spine',
        'Keep shoulders down and back',
        'Look at a spot on the floor to keep your neck neutral'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1566241144246-c427d838eb9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80'
    }
  ];
  
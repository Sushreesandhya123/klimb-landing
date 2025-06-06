import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight, FaChild, FaCheck, FaTrophy, FaRunning, FaSwimmer, FaFutbol } from 'react-icons/fa';

const QuizLauncher = () => {
  // Quiz questions data
  const quizQuestions = [
    {
      id: 1,
      question: "When given free time, your child prefers to:",
      options: [
        "Play with friends",
        "Read or draw quietly",
        "Run around and be active",
        "Build things or solve puzzles"
      ],
      traits: ["social", "creative", "active", "analytical"]
    },
    {
      id: 2,
      question: "Your child's favorite type of game is:",
      options: [
        "Team games with others",
        "Imaginative or artistic activities",
        "Physical challenges or races",
        "Strategy games or puzzles"
      ],
      traits: ["team", "creative", "competitive", "strategic"]
    },
    // Add 8 more questions following the same structure
    {
      id: 3,
      question: "How does your child handle competition?",
      options: [
        "Loves team competitions",
        "Prefers non-competitive activities",
        "Enjoys individual challenges",
        "Likes strategic competitions"
      ],
      traits: ["team", "non-competitive", "individual", "strategic"]
    },
    {
      id: 4,
      question: "Your child's energy level is typically:",
      options: [
        "Moderate - likes bursts of activity",
        "Low - prefers calm activities",
        "High - always on the move",
        "Variable - depends on interest"
      ],
      traits: ["moderate", "low", "high", "variable"]
    },
    {
      id: 5,
      question: "In group settings, your child:",
      options: [
        "Takes leadership roles",
        "Observes before participating",
        "Jumps right into physical play",
        "Organizes or suggests rules"
      ],
      traits: ["leader", "observer", "active", "organizer"]
    },
    {
      id: 6,
      question: "Your child's favorite school subject is:",
      options: [
        "Recess/P.E.",
        "Art or Music",
        "Science experiments",
        "Math or Logic puzzles"
      ],
      traits: ["physical", "creative", "experimental", "logical"]
    },
    {
      id: 7,
      question: "When learning something new, your child:",
      options: [
        "Learns best with others",
        "Learns by visualizing",
        "Learns by doing",
        "Learns through reasoning"
      ],
      traits: ["social", "visual", "kinesthetic", "logical"]
    },
    {
      id: 8,
      question: "Your child's reaction to new physical challenges:",
      options: [
        "Excited to try with friends",
        "Cautious or hesitant",
        "Eager to jump right in",
        "Analyzes before trying"
      ],
      traits: ["social", "cautious", "adventurous", "analytical"]
    },
    {
      id: 9,
      question: "In bad weather, your child would rather:",
      options: [
        "Play board games with family",
        "Draw or build with crafts",
        "Find active indoor games",
        "Solve puzzles or read"
      ],
      traits: ["social", "creative", "active", "cognitive"]
    },
    {
      id: 10,
      question: "Your child's favorite outdoor activity is:",
      options: [
        "Team sports with friends",
        "Exploring nature quietly",
        "Running or climbing",
        "Organized games with rules"
      ],
      traits: ["team", "explorer", "athletic", "structured"]
    }
  ];

  // Sports recommendations based on traits
  const sportsRecommendations = {
    team: ["Soccer", "Basketball", "Volleyball", "Hockey"],
    creative: ["Gymnastics", "Figure Skating", "Diving", "Synchronized Swimming"],
    active: ["Track & Field", "Swimming", "Cycling", "Cross Country"],
    analytical: ["Fencing", "Archery", "Tennis", "Badminton"],
    individual: ["Martial Arts", "Golf", "Snowboarding", "Skiing"],
    strategic: ["Baseball", "Cricket", "Chess Boxing", "Ultimate Frisbee"]
  };

  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  // Calculate results based on answers
  const calculateResults = () => {
    const traitCounts = {};
    
    answers.forEach(answer => {
      const trait = quizQuestions[answer.questionId].traits[answer.optionIndex];
      traitCounts[trait] = (traitCounts[trait] || 0) + 1;
    });

    // Sort traits by frequency
    const sortedTraits = Object.entries(traitCounts)
      .sort((a, b) => b[1] - a[1])
      .map(item => item[0]);

    // Get top 3 recommended sports
    const recommendedSports = [];
    sortedTraits.forEach(trait => {
      if (sportsRecommendations[trait]) {
        sportsRecommendations[trait].forEach(sport => {
          if (!recommendedSports.includes(sport)) {
            recommendedSports.push(sport);
          }
        });
      }
    });

    return recommendedSports.slice(0, 3);
  };

  const results = calculateResults();

  // Handle option selection
  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  // Handle next question
  const handleNext = () => {
    if (selectedOption !== null) {
      const newAnswers = [...answers, {
        questionId: currentQuestion,
        optionIndex: selectedOption
      }];
      
      setAnswers(newAnswers);
      setSelectedOption(null);
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  // Handle previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers.find(a => a.questionId === currentQuestion - 1)?.optionIndex || null);
      setAnswers(answers.filter(a => a.questionId !== currentQuestion - 1));
    }
  };

  // Start the quiz
  const startQuiz = () => {
    setQuizStarted(true);
  };

  // Restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedOption(null);
  };

  // Calculate progress percentage
  const progressPercentage = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <section id="quiz" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {!quizStarted ? (
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Ready to Start Your <span className="text-klimb-primary">Sports Adventure</span>?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our quick, fun quiz will help match your child with sports that fit their personality and abilities perfectly.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-klimb-accent text-white flex items-center justify-center mr-4">
                    <FaChild />
                  </div>
                  <span className="text-gray-700">Takes only 10 minutes</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-klimb-accent text-white flex items-center justify-center mr-4">
                    <FaChild />
                  </div>
                  <span className="text-gray-700">Child-friendly questions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-klimb-accent text-white flex items-center justify-center mr-4">
                    <FaChild />
                  </div>
                  <span className="text-gray-700">Personalized results</span>
                </div>
              </div>
              
              <motion.button
                onClick={startQuiz}
                className="inline-flex items-center px-8 py-4 bg-klimb-primary text-white rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Adventure <FaArrowRight className="ml-2" />
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-klimb-primary to-klimb-secondary rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Quiz Preview</h3>
                  
                  <div className="bg-white rounded-xl p-6 mb-6">
                    <div className="h-4 w-full bg-gray-200 rounded-full mb-4 overflow-hidden">
                      <div 
                        className="h-full bg-klimb-accent rounded-full" 
                        style={{ width: '30%' }}
                      />
                    </div>
                    <p className="text-gray-700 mb-4">Question 1/10</p>
                    <p className="text-lg font-medium text-gray-800 mb-4">
                      When given free time, your child prefers to:
                    </p>
                    <div className="space-y-3">
                      {['Play with friends', 'Read or draw', 'Run around', 'Build things'].map((option, i) => (
                        <div key={i} className="flex items-center">
                          <input 
                            type="radio" 
                            id={`preview-option-${i}`} 
                            name="preview-quiz" 
                            className="mr-3" 
                            disabled
                          />
                          <label htmlFor={`preview-option-${i}`} className="text-gray-700">{option}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button className="text-white opacity-80 hover:opacity-100" disabled>Previous</button>
                    <button className="bg-klimb-accent text-white px-4 py-2 rounded-full hover:bg-orange-600">
                      Next
                    </button>
                  </div>
                </div>
                
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-3xl">😊</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : showResults ? (
          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-klimb-primary to-klimb-secondary p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Quiz Results</h2>
              <p className="text-blue-100">Based on your answers, we recommend:</p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {results.map((sport, index) => (
                  <motion.div
                    key={sport}
                    className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-klimb-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {index === 0 ? <FaTrophy size={24} /> : 
                       index === 1 ? <FaRunning size={24} /> : 
                       <FaSwimmer size={24} />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{sport}</h3>
                    <p className="text-gray-600">
                      {index === 0 ? "Best match for your child's personality and abilities" :
                       index === 1 ? "Great alternative that aligns well with their traits" :
                       "Another excellent option to consider"}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaCheck className="text-klimb-accent mr-2" /> Next Steps
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-klimb-primary text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</span>
                    <span className="text-gray-700">Find local clubs or teams for these sports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-klimb-primary text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</span>
                    <span className="text-gray-700">Schedule trial sessions to see which your child enjoys most</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-klimb-primary text-white rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</span>
                    <span className="text-gray-700">Check back in 6 months as interests may evolve</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <motion.button
                  onClick={restartQuiz}
                  className="px-8 py-3 bg-klimb-primary text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Take Quiz Again <FaArrowRight className="ml-2" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-klimb-primary to-klimb-secondary rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Sports Match Quiz</h3>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white">
                  Question {currentQuestion + 1}/{quizQuestions.length}
                </span>
              </div>
              
              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="h-4 w-full bg-gray-200 rounded-full mb-4 overflow-hidden">
                  <motion.div 
                    className="h-full bg-klimb-accent rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                <p className="text-lg font-medium text-gray-800 mb-6">
                  {quizQuestions[currentQuestion].question}
                </p>
                
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, i) => (
                    <motion.div 
                      key={i}
                      className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors ${selectedOption === i ? 'bg-klimb-accent bg-opacity-10 border-2 border-klimb-accent' : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'}`}
                      onClick={() => handleOptionSelect(i)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${selectedOption === i ? 'border-klimb-accent bg-klimb-accent text-white' : 'border-gray-300'}`}>
                        {selectedOption === i && <FaCheck size={12} />}
                      </div>
                      <label className="text-gray-700 cursor-pointer">{option}</label>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between">
                <motion.button
                  onClick={handlePrevious}
                  className={`px-6 py-2 rounded-full ${currentQuestion > 0 ? 'text-white hover:text-blue-100' : 'text-white opacity-50 cursor-not-allowed'}`}
                  disabled={currentQuestion === 0}
                  whileHover={currentQuestion > 0 ? { x: -3 } : {}}
                >
                  Previous
                </motion.button>
                
                <motion.button
                  onClick={handleNext}
                  className={`px-6 py-2 rounded-full flex items-center ${selectedOption !== null ? 'bg-klimb-accent text-white hover:bg-orange-600' : 'bg-gray-300 cursor-not-allowed'}`}
                  disabled={selectedOption === null}
                  whileHover={selectedOption !== null ? { x: 3 } : {}}
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'Next' : 'See Results'} 
                  <FaArrowRight className="ml-2" />
                </motion.button>
              </div>
            </div>
            
            <motion.div
              className="flex justify-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button 
                onClick={restartQuiz}
                className="text-klimb-primary hover:text-indigo-700 font-medium"
              >
                Restart Quiz
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizLauncher;
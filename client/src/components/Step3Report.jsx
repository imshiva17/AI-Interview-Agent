import React from 'react'

const Step3Report = ({report}) => {
  return (
    <div>
      step
       <button
                onClick={handleNext}
                className="w-full bg-linear-to-br from-emerald-600 to-teal-500 text-white py-3 rounded-xl shadow-md hover:opacity-90 transition flex justify-center items-center gap-1"
              >
                {currentIndex + 1 >= questions.length
                  ? "Finish Interview"
                  : "Next Question"}{" "}
                <BsArrowRight size={18} />
              </button>
    </div>
  )
}

export default Step3Report
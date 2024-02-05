import React ,{ useState} from 'react'
import Card from './Card'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Testimonial = (props) => {
    let reviews = props.reviews;
    const [Index, setIndex] = useState(0)

    function leftShiftHandler(){
        if(Index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(Index-1);
        }
    }

    function rightShiftHandler () {
        if(Index + 1 === reviews.length){
            setIndex(0);
        }
        else{
            setIndex(Index+1);
        }
    }

    function surpriseHandler () {
        let randomIdx = Math.floor(Math.random() * reviews.length);
        setIndex(randomIdx);
    }

  return (
    <div className='bg-white flex flex-col md:relative w-[85vw] md:w-[700px] p-4 hover:shadow-md rounded-md'>
      <Card reviews = {reviews[Index]}/>

      <div className='flex text-4xl gap-9 text-violet-400 font-bold mx-auto mt-9'>
        <button className='cursor-pointer hover:text-violet-500' onClick={leftShiftHandler}>
            <FiChevronLeft/>
        </button>

        <button className='cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}>
            <FiChevronRight/>
        </button>
      </div>

      <div className='bg-violet-400 hover:bg-violet-500 font-bold transition-all duration-200 cursor-pointer px-10 py-2 rounded-sm text-white text-lg  mx-auto my-10'>
        <button onClick={surpriseHandler}>
            Surprise Me
        </button>
      </div>

    </div>
  )
}

export default Testimonial

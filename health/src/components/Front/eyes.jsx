import React, {useEffect , useRef , useState} from 'react'

function eyes() {

    const [rotate , setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e)=>{
          let mouseX =   e.clientX ;
          let mouseY =   e.clientY;

          let deltaX = mouseX - window.innerWidth/2;
          let deltaY = mouseY - window.innerHeight/2;

          var angle  = Math.atan2(deltaY , deltaX) * (180/Math.PI);
          setRotate(angle-180)
        } )
    })

    return (
        <div className='w-full h-[80vh] flex justify-center overflow-hidden '>
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-[80%] h-full rounded-3xl  bg-center bg-[#023047]'>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] flex gap-10 -translate-y-[50%]'>
                    <div className='w-[15vw] h-[15vw] rounded-full items-center flex justify-center bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full items-center bg-zinc-900  '>
                           
                            <div style={{transform: `translate(-50% , 50%) rotate(${rotate}deg) `}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                              
                                <div className='w-10 h-10 rounded-full bg-zinc-100'></div></div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] flex items-center justify-center  rounded-full bg-zinc-100 '>
                    <div className='relative w-2/3 h-2/3 rounded-full items-center bg-zinc-900  '>
                           
                    <div style={{transform: `translate(-50% , 50%) rotate(${rotate}deg) `}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                             
                               <div className='w-10 h-10 rounded-full bg-zinc-100'></div></div>
                       </div>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default eyes
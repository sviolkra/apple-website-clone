import React, {useRef} from 'react'
import { chipImg, frameVideo,frameImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animations'

const HowItWorks = () => {
    const videoRef = useRef();
    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: '#chip',
                start:'20% bottom'
            },
            opacity:0,
            scale:2,
            duration:2,
            ease:'power2.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y:0,
            duration:1,
            ease:'power2.inout'
        })

},[]);


return (
    <section className='common-padding'>
            <div className="screen-max-width">
                    <div id="chip" className="flex-center w-full my-20">
                            <img src={chipImg} alt="chip" width={180} height={180} />
                    </div>

                    <div className="flex flex-col items-center">
                            <h2 className="hiw-title">
                                    A17 Pro chip. <br />
                                    Built for next-level gaming
                            </h2>

                            <p className="hiw-subtitle">
                                    The A17 Pro chip brings console-quality gaming to your pocket. With its new 6-core GPU and hardware-accelerated ray tracing, you get smoother graphics, more realistic lighting, and immersive gameplay experiences. The chip’s advanced architecture ensures high frame rates and responsive controls, making even the most demanding games run effortlessly.
                            </p>
                    </div>
                    
                    <div className="mt-10 md:mt-20 mb-14">
                        <div className="relative h-full flex-center">
                            <div className="overflow-hidden">
                                <img src={frameImg} 
                                alt="frame" 
                                className="bg-transparent relative z-10"/>
                            </div>
                            <div className="hiw-video">
                                    <video className="pointer-events-none"
                                    playsInline preload="none" muted
                                    autoPlay ref={videoRef}>
                                        <source src={frameVideo} type="video/mp4" />
                                    </video>

                                </div>
                             

                        </div>

                        <p className="text-gray font-semibold text-center mt-3">Honkai: Star Rail</p>
                    </div>

                        <div className="hiw-text-container">
                <div className="flex flex-1 justify:center flex-col">
                  <p className="hiw-text g_fadeIn">
                    A17 Pro is an entirely new class of IPhone chip that delivers our {' '}
                    <span className="text-white">
                      Best Graphic performance by far
                    </span>
                    with a 6-core GPU that supports hardware-accelerated ray tracing, mesh shading, and variable rate shading.
                  </p>
                

                 
                  <p className="hiw-text g_fadeIn">
                    Mobile {' '}
                    <span className="text-white">
                        gaming has never been this immersive.
                    </span>
                    with the A17 Pro chip, you can enjoy console-quality graphics and performance on your iPhone. The new GPU architecture allows for more complex scenes, realistic lighting, and faster frame rates, making every game feel more lifelike.
                  </p>
                </div>
                <div className="flex-1  flex justify-center flex-col g_fadeIn">
                    <p className="hiw-text">New</p>
                    <p className="hiw-bigtext">Pro-class GPU</p>
                    <p className="hiw-text">With 6 cores</p>

                </div>
                </div>

                    </div>

            
    </section>
)
}

export default HowItWorks
import Image from "next/image";
import samir from '../../../public/presidentImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faShareAlt, faAward } from '@fortawesome/free-solid-svg-icons';

function PresidentPage() {
  return (
    <div className="mx-auto md:px-6 px-1 p-5">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-500/10 p-2 rounded-full">
          <FontAwesomeIcon icon={faAward} className="h-6 w-6 text-[#0369a1]" />
        </div>
        <h1 className="text-3xl font-bold text-black text-center md:text-left">
          President's Message
        </h1>
      </div>

      {/* Card Container */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        {/* Image with Gradient Border */}
        <div className="relative flex-shrink-0">
          <div className="w-38 h-38 overflow-hidden relative border-2 border-l-emerald-700/30 border-r-blue-500/30 border-t-emerald-700/30 border-b-blue-700/30 rounded-2xl">
            <Image
              src={samir}
              alt="Samir Jani"
              width={160}
              height={160}
              className="w-full h-full object-contain"
            />

            {/* <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-blue-600 to-transparent h-px  mx-auto"></span> */}


          </div>
        </div>


        <div className="flex-1 mt-4">
          {/* Name & Year */}
          <p className="text-sm text-[#868686] font-medium mb-2">
            <span className="font-medium text-xl">Samir Jani</span> |  2024-2025
          </p>


          <h2 className="text-xl font-semibold text-forest-green mb-4">
            Respected Members & Friends,
          </h2>

          {/* President’s Message with Quotes */}
          <div className="relative text-[#868686] text-base text-justify">

            <p className="text-[#868686] ">
              Welcome back friends after a successful first National Tax Conference and National Executive Meeting on 01st and 02nd February at Nathdwara (Rajasthan) organized by Central Zone, under the able leadership of National Vice President Mr. Sandeep Agarwal and Zone Chairman Mr. Vijay Navlakha, with 181 participants. The budget was viewed live by all delegates and thereafter a marathon of session’s budgetary provisions on Direct and Indirect Taxes were conducted in two days. The event was graced by Past Presidents Mr. M. L. Patodiji, Madam Nikita Badheka.....
            </p>

          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="flex border-1 bg-gray-100 border-l-emerald-700/30 border-r-blue-500/30 border-t-emerald-700/30 border-b-blue-700/30 justify-center items-center gap-2 px-4 py-2  text-black rounded-4xl hover:bg-warm-coral transition-colors duration-200 text-sm font-medium hover:bg-[#0369a1] hover:text-white">
              <a href="#" className="">
                Read Full Message
              </a>
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PresidentPage;

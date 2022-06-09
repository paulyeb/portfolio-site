import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SuccessModal = ({dismiss}) => {
    return <div onClick={dismiss} className="flex items-center fixed inset-0 bg-gray-400 bg-opacity-30 z-10 w-auto h-auto">
        <div className="flex justify-between items-center container p-2 lg:mx-auto mx-10 w-auto text-center text-xl font-medium shadow-lg h-20 bg-white border">
            <FontAwesomeIcon icon={faCircleCheck} style={{height: '20px', width: '20px', color: 'green' }} className="mx-2" /> 
            Fantastic! Your message was successfuly sent.
        </div>
    </div>
}

export default SuccessModal;
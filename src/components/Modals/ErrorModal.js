import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorModal = ({dismiss}) => {
    return <div onClick={dismiss} className="flex items-center fixed inset-0 bg-gray-200 bg-opacity-30 z-10 w-auto h-auto">
        <div className="flex justify-between items-center container w-auto text-center text-xl font-medium shadow-lg h-20 bg-white border">
            <FontAwesomeIcon icon={faCircleXmark} style={{height: '20px', width: '20px', color: 'red' }} className="mx-2" /> 
            Oops! Sorry, something went wrong, please try again.
        </div>
    </div>
}

export default ErrorModal;
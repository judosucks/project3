import classNames from 'classnames';
import propTypes, { checkPropTypes } from 'prop-types';
import { twMerge } from 'tailwind-merge';
import {GoSync} from 'react-icons/go'
function Button({children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    loading,
    ...rest}){
        const classes = twMerge(classNames(rest.className,'flex items-center px-3 py-1.5 border h-8',{
            'opacity-80':loading,
            'border-blue-400 bg-blue-400 text-white transition-colors duration-200 ease-in-':primary,
            'border-gray-900 bg-gray-900 text-white transition-colors duration-200 ease-in-':secondary,
            'border-green-400 bg-green-400 text-white transition-colors duration-200 ease-in-':success,
            'border-yellow-400 bg-yellow-400 text-white transition-colors duration-200 ease-in-':warning,
            'border-red-400 bg-red-400 text-white transition-colors duration-200 ease-in-':danger,
            'rounded-full':rounded,
            'bg-white border-white text-gray-800 transition-colors duration-200 ease-in-':outline,
            'text-blue-500':outline && primary,
            'text-gray-900':outline && secondary,
            'text-green-500':outline && success,
            'text-yellow-500':outline && warning,
            'text-red-500':outline && danger,
        }
       

        ))
        return <button {...rest} disabled={loading} className={classes}>
            {loading?<GoSync className='animate-spin'/>:children}
            </button>
    }
    Button.propTypes = {
        checkPropTypes:({primary, secondary, success, warning, danger})=>{
            const count = Number(!!primary)+Number(!!secondary)+Number(!!success)+Number(!!warning)+Number(!!danger);
            if(count>1){return new Error('Only one button type should be provided')};
        }}

        export default Button;
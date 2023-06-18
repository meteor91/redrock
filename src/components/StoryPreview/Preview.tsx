// import React, {useState} from "react";
// import {Input} from "../Input";
//
// export interface Props {
//     value: string;
//     placeholder?: string;
//     disabled?: boolean;
//     error?: boolean;
//     onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }
//
// const Preview = (props: Props) => {
//     const {value: initialValue, ...rest} = props;
//
//     const [value, setValue] = useState(initialValue ?? '');
//
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValue(event.target.value);
//     }
//
//     return (
//         <input
//             onChange={handleChange}
//             value={value}
//             placeholder='placeholder'
//             {...rest}
//         />
//     )
// }
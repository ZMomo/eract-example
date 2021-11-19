import './index.css'

import { useAPIContext } from '../../contexts/APIContext'

export const Button = (props) => {
    const { entries, setEntries } = useAPIContext();

    setEntries(['test'])
    console.log(entries);

    return <input type="button" {...props} />
}
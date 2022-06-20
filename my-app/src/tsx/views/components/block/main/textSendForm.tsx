import { default as module } from '../../modules'

const TextSendForm = (props: any) => {
    return(
        <>
            <module.inputText />
            <module.sendButton name={props.name}/>
        </>
    )
}

export default TextSendForm;

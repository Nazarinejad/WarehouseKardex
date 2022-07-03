import { Notification } from 'sanhab-components-library'

function JsonResultHook(){
    const copyTextToClipboard = (jsonResult:any) => {
        // navigator clipboard api needs a secure context (https)
        if (navigator.clipboard && window.isSecureContext) {
            // navigator clipboard api method'
            Notification.info({ message: "کپی شد." })
            return navigator.clipboard.writeText(jsonResult);
        } 
        else {
            // text area method
            let textArea = document.createElement("textarea");
            textArea.value = jsonResult;
            // make the textarea out of viewport
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            textArea.style.top = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            // here the magic happens
            document.execCommand('copy')
            textArea.remove();
            Notification.info({ message: "کپی شد." })

        }

        

    }
    return{
        copyTextToClipboard
    }
}
export default JsonResultHook
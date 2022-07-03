
import { IDataResult } from "../../../../controler/model/home/model";
import JsonResultHook from './hook'
import { Icon } from 'sanhab-components-library'

interface IProps {
    result: IDataResult
}
const JsonResult = (props: IProps) => {
    const jsonResultHook = JsonResultHook();
    return (
        <div style={{ backgroundColor: 'white' }}>
            <Icon
                className="m-r-8 m-t-4 cursor-pointer"
                iconType="copy"
                onClick={() => jsonResultHook.copyTextToClipboard(`${JSON.stringify(props.result, null, 4)}`)}
            />
            <pre style={{ direction: "ltr", backgroundColor: 'white' }}>
                <code>

                    {`${JSON.stringify(props.result, null, 4)}`}
                </code>
            </pre>
        </div>
    );
}

export default JsonResult;